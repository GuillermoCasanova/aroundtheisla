import { defineField, defineType } from "sanity";

export const sctnContact = defineType({
  name: "sctnContact",
  title: "Contact",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      title: "Heading",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lede",
      type: "text",
      rows: 3,
      title: "Lede",
    }),
  ],
  preview: {
    select: { heading: "heading" },
    prepare({ heading }) {
      return { title: "Contact", subtitle: heading };
    },
  },
});
