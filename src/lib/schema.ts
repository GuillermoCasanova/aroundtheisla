// Centralized JSON-LD structured data.
//
// schema.org @id identifiers must be stable and resolvable on the production
// domain, so they're built from `site.url` — keep that in sync with astro.config
// `site`. The Organization/WebSite nodes are fully defined once (emit them on the
// homepage); every other page references them by @id instead of duplicating.
//
// Usage:
//   import { homepageSchema, articleSchema } from "@/lib/schema";
//   <Layout title="..." jsonLd={homepageSchema}>
//   <Layout title={post.title} ogType="article" jsonLd={articleSchema({ ... })}>

import { site } from "../data/site";
import { absoluteImageUrl } from "./cms-image";

const SITE = site.url;
const LOGO = new URL(site.logo, SITE).href;

const organization = {
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: site.name,
  url: `${SITE}/`,
  description: site.description,
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE}/#logo`,
    url: LOGO,
    contentUrl: LOGO,
    caption: site.name,
  },
  ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: `${SITE}/`,
  name: site.name,
  description: site.description,
  publisher: { "@id": `${SITE}/#organization` },
  inLanguage: "en",
};

/** Homepage graph: Organization + WebSite + WebPage. Emit this on `/`. */
export const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    website,
    {
      "@type": "WebPage",
      "@id": `${SITE}/#webpage`,
      url: `${SITE}/`,
      name: site.name,
      description: site.description,
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#organization` },
      inLanguage: "en",
    },
  ],
};

/**
 * Build WebPage + BreadcrumbList JSON-LD for a static marketing page.
 * `path` is the route under the site root, e.g. "about".
 */
export function webPageSchema(opts: {
  path: string;
  title: string;
  description: string;
  image?: string;
  inLanguage?: string;
}) {
  const path = opts.path.replace(/^\/|\/$/g, "");
  const url = `${SITE}/${path}/`;
  const inLanguage = opts.inLanguage ?? "en";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: opts.title,
        description: opts.description,
        image: opts.image ? absoluteImageUrl(opts.image, SITE) : LOGO,
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${SITE}/#organization` },
        inLanguage,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: opts.title, item: url },
        ],
      },
    ],
  };
}

/**
 * Build Article + BreadcrumbList JSON-LD for a dynamic post/resource page.
 * `path` is the route under the site root, e.g. "resources/my-post".
 * `section` is the breadcrumb parent label + its path, e.g. ["Resources", "resources"].
 */
export function articleSchema(opts: {
  path: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  keywords?: string;
  articleSection?: string[];
  breadcrumbParent?: { name: string; path: string };
}) {
  const url = `${SITE}/${opts.path.replace(/^\/|\/$/g, "")}/`;
  const breadcrumb = [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    ...(opts.breadcrumbParent
      ? [{
          "@type": "ListItem",
          position: 2,
          name: opts.breadcrumbParent.name,
          item: `${SITE}/${opts.breadcrumbParent.path.replace(/^\/|\/$/g, "")}/`,
        }]
      : []),
    {
      "@type": "ListItem",
      position: opts.breadcrumbParent ? 3 : 2,
      name: opts.title,
      item: url,
    },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: opts.title,
        description: opts.description,
        image: opts.image ? absoluteImageUrl(opts.image, SITE) : LOGO,
        datePublished: opts.datePublished,
        dateModified: opts.dateModified ?? opts.datePublished,
        author: { "@id": `${SITE}/#organization` },
        publisher: { "@id": `${SITE}/#organization` },
        mainEntityOfPage: url,
        url,
        ...(opts.articleSection?.length ? { articleSection: opts.articleSection } : {}),
        ...(opts.keywords ? { keywords: opts.keywords } : {}),
        isPartOf: { "@id": `${SITE}/#website` },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: breadcrumb,
      },
    ],
  };
}
