import { defineField, defineType } from "sanity";

export const sctnHero = defineType({
  name: "sctnHero",
  title: "Hero",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "altImage",
      title: "Photograph",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "projectName",
      type: "string",
      title: "Project label",
      description: "Lower-right caption. Leave empty to hide.",
    }),
  ],
  preview: {
    select: { alt: "image.alt", media: "image", projectName: "projectName" },
    prepare({ alt, media, projectName }) {
      return {
        title: "Hero",
        subtitle: projectName || alt,
        media,
      };
    },
  },
});
