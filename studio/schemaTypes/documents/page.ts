import { defineArrayMember, defineField, defineType } from "sanity";
import { FiFileText } from "react-icons/fi";

const FULL_BLEED = new Set(["sctnHero", "sctnHomeSlideshow", "sctnWork"]);

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: FiFileText,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
      description: 'Use "home" for the homepage (served at /).',
      validation: (Rule) =>
        Rule.required().custom((slug) => {
          const current = slug?.current?.trim() ?? "";
          if (!current) return "Required";
          if (current === "project" || current.startsWith("project/")) {
            return "The /project prefix is reserved for project documents";
          }
          return true;
        }),
    }),
    defineField({
      name: "seo",
      type: "seo",
      title: "SEO",
    }),
    defineField({
      name: "theme",
      type: "string",
      title: "Theme",
      initialValue: "light",
      options: {
        list: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "layout",
      type: "string",
      title: "Chrome",
      initialValue: "site",
      options: {
        list: [
          { title: "Site (nav)", value: "site" },
          { title: "Plain (no nav)", value: "plain" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lang",
      type: "string",
      title: "Language",
      initialValue: "en",
      description: "HTML lang, e.g. en or es.",
    }),
    defineField({
      name: "showInNav",
      type: "boolean",
      title: "Show in navigation",
      description:
        "Fallback if Settings has no Main navigation. Prefer the Navigation document.",
      initialValue: false,
    }),
    defineField({
      name: "navOrder",
      type: "number",
      title: "Nav order",
      initialValue: 100,
      hidden: ({ document }) => !document?.showInNav,
    }),
    defineField({
      name: "hideFooter",
      type: "boolean",
      title: "Hide footer",
      description: "Turn off the site copyright footer on this page.",
      initialValue: false,
    }),
    defineField({
      name: "heroImages",
      type: "array",
      title: "Hero photographs",
      description:
        "Homepage only. Up to 5 photographs; the hero picks one at random on each visit.",
      hidden: ({ document }) => {
        const slug = (document?.slug as { current?: string } | undefined)
          ?.current;
        return slug !== "home";
      },
      of: [defineArrayMember({ type: "altImage" })],
      options: { layout: "grid" },
      validation: (Rule) =>
        Rule.max(5).custom((images, context) => {
          const slug = (
            context.document as { slug?: { current?: string } } | undefined
          )?.slug?.current;
          if (slug !== "home") return true;
          if (!Array.isArray(images) || images.length === 0) {
            return "Add at least one hero photograph";
          }
          return true;
        }),
    }),
    defineField({
      name: "sections",
      type: "array",
      title: "Sections",
      of: [
        { type: "sctnHero" },
        { type: "sctnHomeSlideshow" },
        { type: "sctnWork" },
        { type: "sctnAbout" },
        { type: "sctnContact" },
        { type: "sctnRichText" },
      ],
      validation: (Rule) =>
        Rule.custom((sections) => {
          if (!Array.isArray(sections) || sections.length === 0) {
            return "Add at least one section";
          }
          const indexes = sections
            .map((section, index) => {
              const type = (section as { _type?: string })._type;
              return type && FULL_BLEED.has(type) ? index : -1;
            })
            .filter((index) => index >= 0);
          if (indexes.length > 1) {
            return "At most one full-bleed section (hero, slideshow, or work) per page";
          }
          if (indexes.length === 1 && indexes[0] !== 0) {
            return "A full-bleed section must be first on the page";
          }
          return true;
        }),
    }),
  ],
  preview: {
    select: { title: "title", slug: "slug.current" },
    prepare({ title, slug }) {
      return { title, subtitle: slug === "home" ? "/" : `/${slug}` };
    },
  },
});
