import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Meta title",
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
      title: "Meta description",
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: "ogImage",
      type: "altImage",
      title: "Share image",
    }),
  ],
});
