import { createClient, type SanityClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { CmsHeroShot, CmsImage } from "./cms-image";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";
const readToken = import.meta.env.SANITY_API_READ_TOKEN;

if (!projectId) {
  throw new Error(
    "PUBLIC_SANITY_PROJECT_ID is missing. Copy .env.example to .env and fill it in.",
  );
}

const previewDrafts = import.meta.env.DEV && Boolean(readToken);

export const sanityClient: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  useCdn: !previewDrafts,
  perspective: previewDrafts ? "previewDrafts" : "published",
  token: previewDrafts ? readToken : undefined,
  stega: { enabled: false },
});

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

/** Build a Sanity CDN URL. Display photos use this CDN at request time, not Sharp. */
export function urlFor(source: Parameters<typeof imageBuilder.image>[0]) {
  return imageBuilder.image(source);
}

type SanityAssetImage = {
  alt?: string;
  caption?: string;
  asset?: {
    url?: string;
    metadata?: {
      dimensions?: { width?: number; height?: number };
      lqip?: string;
    };
  };
} | null | undefined;

export function toCmsImage(image: SanityAssetImage): CmsImage | null {
  if (!image?.asset) return null;
  const width = image.asset.metadata?.dimensions?.width;
  const height = image.asset.metadata?.dimensions?.height;
  if (!width || !height) return null;
  const src = image.asset.url || urlFor(image).url() || "";
  if (!src) return null;
  return {
    src,
    alt: image.alt ?? "",
    width,
    height,
    caption: optionalString(image.caption),
    lqip: optionalString(image.asset.metadata?.lqip),
  };
}

function requireImage(image: SanityAssetImage, label: string): CmsImage {
  const mapped = toCmsImage(image);
  if (!mapped) {
    throw new Error(`Sanity image missing or incomplete: ${label}`);
  }
  return mapped;
}

type RawHeroShot = {
  desktop?: SanityAssetImage;
  mobile?: SanityAssetImage;
} & Exclude<SanityAssetImage, null | undefined>;

function mapHeroShot(shot: RawHeroShot | null | undefined): CmsHeroShot | null {
  if (!shot) return null;
  const desktop = toCmsImage(shot.desktop) ?? toCmsImage(shot);
  if (!desktop) return null;
  const mobile = toCmsImage(shot.mobile) ?? desktop;
  return { desktop, mobile };
}

/** GROQ returns null for empty fields; Zod optional() only accepts undefined. */
function optionalString(value: string | null | undefined): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

const imageProjection = `{
  alt,
  caption,
  ...,
  asset->{
    url,
    metadata { dimensions { width, height }, lqip }
  }
}`;

const seoProjection = `{
  title,
  description,
  ogImage ${imageProjection}
}`;

const projectProjection = `{
  "id": slug.current,
  title,
  seo ${seoProjection},
  description,
  credits,
  date,
  location,
  order,
  cover ${imageProjection},
  gallery[] ${imageProjection}
}`;

type SanitySeo = {
  title?: string;
  description?: string;
  ogImage?: SanityAssetImage;
};

export type SanityProjectRow = {
  id: string;
  title: string;
  seo?: SanitySeo;
  description: string;
  credits?: string;
  date: string;
  location?: string;
  order: number;
  cover: SanityAssetImage;
  gallery?: SanityAssetImage[];
};

export type ProjectEntry = {
  id: string;
  title: string;
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: CmsImage;
  description: string;
  credits?: string;
  date: string;
  location?: string;
  order: number;
  cover: CmsImage;
  gallery: CmsImage[];
};

function mapProject(row: SanityProjectRow): ProjectEntry | null {
  if (!row.id) return null;
  const cover = toCmsImage(row.cover);
  if (!cover) {
    console.warn(
      `Skipping Sanity project "${row.id}": cover image is missing or incomplete.`,
    );
    return null;
  }
  return {
    id: row.id,
    title: row.title,
    seoTitle: optionalString(row.seo?.title),
    seoDescription: optionalString(row.seo?.description),
    seoImage: toCmsImage(row.seo?.ogImage) ?? undefined,
    description: row.description,
    credits: optionalString(row.credits),
    date: row.date,
    location: row.location,
    order: row.order,
    cover,
    gallery: (row.gallery ?? [])
      .map((image) => toCmsImage(image))
      .filter((image): image is CmsImage => image !== null),
  };
}

export async function fetchProjectEntries(): Promise<ProjectEntry[]> {
  const rows = await sanityClient.fetch<SanityProjectRow[]>(
    `*[_type == "project" && defined(slug.current)] | order(order asc) ${projectProjection}`,
  );
  return rows
    .map(mapProject)
    .filter((row): row is ProjectEntry => row !== null);
}

export type HeroSection = {
  _type: "sctnHero";
  image: CmsImage;
  projectName?: string;
};

export type SlideshowSection = {
  _type: "sctnHomeSlideshow";
  slides: { image: CmsImage; href?: string }[];
};

export type WorkSection = {
  _type: "sctnWork";
  projects: ProjectEntry[];
};

export type AboutSection = {
  _type: "sctnAbout";
  paragraphs: string[];
  instagramHref: string;
  instagramHandle: string;
  brand: string;
  portrait: CmsImage;
  caption: string;
};

export type ContactSection = {
  _type: "sctnContact";
  heading: string;
  lede?: string;
};

export type RichTextSection = {
  _type: "sctnRichText";
  heading?: string;
  body: unknown[];
};

export type PageSection =
  | HeroSection
  | SlideshowSection
  | WorkSection
  | AboutSection
  | ContactSection
  | RichTextSection;

export type PageEntry = {
  id: string;
  title: string;
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: CmsImage;
  theme: "light" | "dark";
  layout: "site" | "plain";
  lang: string;
  showInNav: boolean;
  navOrder: number;
  hideFooter: boolean;
  heroImages: CmsHeroShot[];
  sections: PageSection[];
};

type RawPage = {
  id: string;
  title: string;
  seo?: SanitySeo;
  theme?: "light" | "dark";
  layout?: "site" | "plain";
  lang?: string;
  showInNav?: boolean;
  navOrder?: number;
  hideFooter?: boolean;
  heroImages?: RawHeroShot[];
  sections?: Record<string, unknown>[];
};

function mapSection(
  section: Record<string, unknown>,
  allProjects: ProjectEntry[],
): PageSection | null {
  const type = section._type;
  if (type === "sctnHero") {
    return {
      _type: "sctnHero",
      image: requireImage(section.image as SanityAssetImage, "hero image"),
      projectName: (section.projectName as string | undefined) ?? "",
    };
  }
  if (type === "sctnHomeSlideshow") {
    const slides: { image: CmsImage; href?: string }[] = [];
    for (const slide of (section.slides as {
      image?: SanityAssetImage;
      projectSlug?: string;
    }[]) ?? []) {
      const image = toCmsImage(slide.image);
      if (!image) continue;
      slides.push({
        image,
        href: slide.projectSlug
          ? `/project/${slide.projectSlug}/`
          : undefined,
      });
    }
    return { _type: "sctnHomeSlideshow", slides };
  }
  if (type === "sctnWork") {
    const source = section.source === "picked" ? "picked" : "all";
    const picked = (section.picked as SanityProjectRow[] | undefined) ?? [];
    const projects =
      source === "picked"
        ? picked
            .map(mapProject)
            .filter((row): row is ProjectEntry => row !== null)
        : allProjects;
    return { _type: "sctnWork", projects };
  }
  if (type === "sctnAbout") {
    return {
      _type: "sctnAbout",
      paragraphs: (section.paragraphs as string[]) ?? [],
      instagramHref: section.instagramHref as string,
      instagramHandle: section.instagramHandle as string,
      brand: (section.brand as string) ?? "aroundtheisla",
      portrait: requireImage(
        section.portrait as SanityAssetImage,
        "about portrait",
      ),
      caption: (section.caption as string) ?? "",
    };
  }
  if (type === "sctnContact") {
    return {
      _type: "sctnContact",
      heading: section.heading as string,
      lede: section.lede as string | undefined,
    };
  }
  if (type === "sctnRichText") {
    return {
      _type: "sctnRichText",
      heading: section.heading as string | undefined,
      body: (section.body as unknown[]) ?? [],
    };
  }
  return null;
}

export async function fetchPageEntries(): Promise<PageEntry[]> {
  const [projects, rows] = await Promise.all([
    fetchProjectEntries(),
    sanityClient.fetch<RawPage[]>(`*[_type == "page" && defined(slug.current)] {
      "id": slug.current,
      title,
      seo ${seoProjection},
      theme,
      layout,
      lang,
      showInNav,
      navOrder,
      hideFooter,
      heroImages[] {
        _key,
        _type,
        alt,
        caption,
        asset->{
          url,
          metadata { dimensions { width, height }, lqip }
        },
        desktop ${imageProjection},
        mobile ${imageProjection}
      },
      sections[] {
        _type,
        _type == "sctnHero" => {
          image ${imageProjection},
          projectName
        },
        _type == "sctnHomeSlideshow" => {
          slides[] {
            image ${imageProjection},
            "projectSlug": project->slug.current
          }
        },
        _type == "sctnWork" => {
          source,
          "picked": projects[]-> ${projectProjection}
        },
        _type == "sctnAbout" => {
          paragraphs,
          instagramHref,
          instagramHandle,
          brand,
          portrait ${imageProjection},
          caption
        },
        _type == "sctnContact" => {
          heading,
          lede
        },
        _type == "sctnRichText" => {
          heading,
          body
        }
      }
    }`),
  ]);

  return rows.map((row) => ({
    id: row.id,
    title: row.title,
    seoTitle: optionalString(row.seo?.title),
    seoDescription: optionalString(row.seo?.description),
    seoImage: toCmsImage(row.seo?.ogImage) ?? undefined,
    theme: row.theme === "dark" ? "dark" : "light",
    layout: row.layout === "plain" ? "plain" : "site",
    lang: row.lang || "en",
    showInNav: Boolean(row.showInNav),
    navOrder: row.navOrder ?? 100,
    hideFooter: row.hideFooter ?? row.id === "home",
    heroImages: (row.heroImages ?? [])
      .map((shot) => mapHeroShot(shot))
      .filter((shot): shot is CmsHeroShot => shot !== null),
    sections: (row.sections ?? [])
      .map((section) => mapSection(section, projects))
      .filter((section): section is PageSection => section !== null),
  }));
}

type NavLinkRow = {
  text?: string;
  href?: string;
};

export type SiteNavLink = {
  label: string;
  href: string;
};

export async function fetchMainNavLinks(): Promise<SiteNavLink[]> {
  const rows = await sanityClient.fetch<NavLinkRow[] | null>(
    `*[_type == "siteSettings"][0].mainNav->items[]{
      text,
      "href": select(
        link.linkType == "external" => link.href,
        link.internalLink->_type == "page" && link.internalLink->slug.current == "home" => "/",
        link.internalLink->_type == "page" => "/" + link.internalLink->slug.current + "/",
        link.internalLink->_type == "project" => "/project/" + link.internalLink->slug.current + "/",
        null
      )
    }`,
  );

  return (rows ?? [])
    .map((row) => ({
      label: row.text?.trim() ?? "",
      href: row.href?.trim() ?? "",
    }))
    .filter((row) => row.label.length > 0 && row.href.length > 0);
}

export async function fetchFooterCopyright(): Promise<string | undefined> {
  const copyright = await sanityClient.fetch<string | null>(
    `*[_type == "footerSettings"][0].copyright`,
  );
  return optionalString(copyright);
}

export type SiteFavicon = {
  src: string;
  mimeType?: string;
};

export async function fetchSiteFavicon(): Promise<SiteFavicon | null> {
  const row = await sanityClient.fetch<{
    asset?: { url?: string; mimeType?: string };
  } | null>(
    `*[_type == "siteSettings"][0].favicon{
      asset->{ url, mimeType }
    }`,
  );
  const src = optionalString(row?.asset?.url);
  if (!src) return null;
  return {
    src,
    mimeType: optionalString(row?.asset?.mimeType),
  };
}
