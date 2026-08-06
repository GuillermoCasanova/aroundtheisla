// Content-source seam for photography projects.
// Markdown (or a future CMS) → plain shapes consumed by sections / routes.
import type { ImageMetadata } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";

const galleryModules = import.meta.glob<{ default: ImageMetadata }>(
  "../images/galleries/*/*.{png,jpg,jpeg,webp}",
  { eager: true },
);

/** Published projects only in production; drafts stay available in `astro dev`. */
export async function getPublishedProjects(): Promise<
  CollectionEntry<"projects">[]
> {
  const all = await getCollection("projects", ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** Stills for a project — convention: `src/images/galleries/{slug}/`. */
export function getProjectGallery(slug: string): ImageMetadata[] {
  const needle = `/galleries/${slug}/`;
  return Object.entries(galleryModules)
    .filter(([path]) => path.includes(needle))
    .map(([path, mod]) => ({
      src: mod.default,
      file: path.split("/").pop() ?? path,
    }))
    .sort((a, b) => a.file.localeCompare(b.file, undefined, { numeric: true }))
    .map((entry) => entry.src);
}

/** Map homepage slide filenames → project slug for click-through links. */
export function homepageSlideProjectMap(
  projects: CollectionEntry<"projects">[],
): Map<string, string> {
  const map = new Map<string, string>();
  for (const project of projects) {
    for (const file of project.data.homepageSlides) {
      map.set(file, project.id);
    }
  }
  return map;
}
