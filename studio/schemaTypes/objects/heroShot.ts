import { defineField, defineType } from "sanity";

export const heroShot = defineType({
  name: "heroShot",
  title: "Hero photograph",
  type: "object",
  fieldsets: [
    {
      name: "crops",
      title: "Crops",
      options: { columns: 2 },
    },
  ],
  fields: [
    defineField({
      name: "desktop",
      type: "altImage",
      title: "Desktop",
      fieldset: "crops",
      description: "Wide crop for screens 768px and up.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mobile",
      type: "altImage",
      title: "Mobile",
      fieldset: "crops",
      description: "Taller crop for phones and small screens (below 768px).",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      desktopAlt: "desktop.alt",
      mobileAlt: "mobile.alt",
      media: "desktop",
    },
    prepare({ desktopAlt, mobileAlt, media }) {
      return {
        title: desktopAlt || mobileAlt || "Hero photograph",
        subtitle: "Desktop + mobile",
        media,
      };
    },
  },
});
