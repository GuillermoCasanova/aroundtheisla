import { defineField, defineType } from "sanity";

export const altImage = defineType({
  name: "altImage",
  title: "Image",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      type: "string",
      title: "Alt text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "caption",
      type: "string",
      title: "Caption",
      description:
        "Optional quote or credit shown beside the photograph on the project page.",
    }),
  ],
});
