import { defineField, defineType } from "sanity";

export const sctnAbout = defineType({
  name: "sctnAbout",
  title: "About",
  type: "object",
  fields: [
    defineField({
      name: "paragraphs",
      type: "array",
      title: "Paragraphs",
      of: [{ type: "text", rows: 4 }],
      description: "Use {handle} where the Instagram handle should link.",
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: "instagramHref",
      type: "url",
      title: "Instagram URL",
      validation: (Rule) => Rule.required().uri({ scheme: ["https"] }),
    }),
    defineField({
      name: "instagramHandle",
      type: "string",
      title: "Instagram handle",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "brand",
      type: "string",
      title: "Brand wordmark",
      initialValue: "aroundtheisla",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "portrait",
      type: "altImage",
      title: "Portrait",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "caption",
      type: "text",
      rows: 3,
      title: "Footnote caption",
      description: "Use {handle} where the Instagram handle should link.",
    }),
  ],
  preview: {
    select: { brand: "brand", media: "portrait" },
    prepare({ brand, media }) {
      return { title: "About", subtitle: brand, media };
    },
  },
});
