import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { fetchPageEntries, fetchProjectEntries } from "./lib/sanity";

const cmsImage = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number(),
  height: z.number(),
  caption: z.string().optional(),
  lqip: z.string().optional(),
});

const faq = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/faq" }),
  schema: z.object({
    question: z.string(),
    page: z.string(),
    order: z.number(),
  }),
});

const announcements = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/announcements" }),
  schema: z.object({
    href: z.string().optional(),
    dismissible: z.boolean().default(true),
    startsAt: z.coerce.date().optional(),
    endsAt: z.coerce.date().optional(),
    enabled: z.boolean().default(true),
    priority: z.number().default(0),
  }),
});

const projects = defineCollection({
  loader: async () => fetchProjectEntries(),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    seoImage: cmsImage.optional(),
    description: z.string(),
    credits: z.string().optional(),
    date: z.coerce.date(),
    location: z.string().optional(),
    order: z.number().default(100),
    cover: cmsImage,
    gallery: z.array(cmsImage),
  }),
});

const pages = defineCollection({
  loader: async () => fetchPageEntries(),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    seoImage: cmsImage.optional(),
    theme: z.enum(["light", "dark"]),
    layout: z.enum(["site", "plain"]),
    lang: z.string(),
    showInNav: z.boolean(),
    navOrder: z.number(),
    hideFooter: z.boolean(),
    heroImages: z
      .array(
        z.object({
          desktop: cmsImage,
          mobile: cmsImage,
        }),
      )
      .max(5)
      .default([]),
    sections: z.array(z.unknown()),
  }),
});

// Same gate as demoRoutes() in astro.config.mjs: the showcase MDX is for
// `astro dev` (or SHOW_DEMOS=true). A production build must not compile it —
// those docs import starter assets this client repo does not ship, and the
// /components routes are not injected anyway.
function loadComponentDocs() {
  if (process.env.SHOW_DEMOS === "true") return true;
  return process.argv.includes("dev") && !process.argv.includes("build");
}

const components = defineCollection({
  loader: loadComponentDocs()
    ? glob({ pattern: "**/*.mdx", base: "./src/content/components" })
    : {
        name: "component-docs-disabled",
        load: async ({ store }) => {
          store.clear();
        },
      },
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["primitive", "block", "pattern", "layout", "form"]),
    order: z.number().default(100),
    sourceFile: z.string(),
    status: z.enum(["stable", "adaptable", "per-project"]).default("stable"),
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { faq, announcements, projects, pages, components };
