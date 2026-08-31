import { defineField, defineType } from "sanity";
import { FiNavigation } from "react-icons/fi";

export const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  icon: FiNavigation,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Navigation name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "navId",
      type: "slug",
      title: "Navigation id",
      options: { source: "title", maxLength: 100 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "items",
      type: "array",
      title: "Navigation items",
      of: [{ type: "navigationItem" }],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: { title: "title", navId: "navId.current" },
    prepare({ title, navId }) {
      return { title, subtitle: navId };
    },
  },
});
