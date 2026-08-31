import { defineField, defineType } from "sanity";

export const navigationItem = defineType({
  name: "navigationItem",
  title: "Navigation item",
  type: "object",
  fields: [
    defineField({
      name: "text",
      type: "string",
      title: "Link text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      type: "navLink",
      title: "Link",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "text",
      linkType: "link.linkType",
    },
    prepare({ title, linkType }) {
      return {
        title,
        subtitle: linkType === "external" ? "External" : "Internal",
      };
    },
  },
});
