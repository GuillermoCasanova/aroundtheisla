import { defineField, defineType } from "sanity";

export const homeSlide = defineType({
  name: "homeSlide",
  title: "Homepage slide",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "altImage",
      title: "Photograph",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "project",
      type: "reference",
      title: "Linked project",
      to: [{ type: "project" }],
    }),
  ],
  preview: {
    select: { alt: "image.alt", media: "image" },
    prepare({ alt, media }) {
      return { title: alt || "Slide", media };
    },
  },
});
