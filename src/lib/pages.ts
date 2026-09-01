// Content-source seam for CMS pages.
// Sanity (build-time) → shapes consumed by the catch-all route and Layout nav.
import { getCollection, type CollectionEntry } from "astro:content";
import { site } from "../data/site";
import {
  fetchFooterCopyright,
  fetchMainNavLinks,
  fetchSiteFavicon,
  type PageSection,
  type SiteFavicon,
} from "./sanity";

export type CmsPage = CollectionEntry<"pages">;

export async function getPublishedPages(): Promise<CmsPage[]> {
  return getCollection("pages");
}

export async function getPageBySlug(
  slug: string,
): Promise<CmsPage | undefined> {
  const pages = await getPublishedPages();
  return pages.find((page) => page.id === slug);
}

export async function getNavLinks(): Promise<
  { label: string; href: string }[]
> {
  const fromMenu = await fetchMainNavLinks();
  if (fromMenu.length > 0) return fromMenu;

  const pages = await getPublishedPages();
  return pages
    .filter((page) => page.data.showInNav && page.id !== "home")
    .sort((a, b) => a.data.navOrder - b.data.navOrder)
    .map((page) => ({
      label: page.data.title.toLowerCase(),
      href: `/${page.id}/`,
    }));
}

export async function getFooterCopyright(): Promise<string> {
  return (await fetchFooterCopyright()) ?? site.copyright;
}

export async function getSiteFavicon(): Promise<SiteFavicon | null> {
  return fetchSiteFavicon();
}

export function pageSections(page: CmsPage): PageSection[] {
  return page.data.sections as PageSection[];
}
