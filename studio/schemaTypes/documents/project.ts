import { defineField, defineType } from "sanity";
import { FiBriefcase } from "react-icons/fi";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: FiBriefcase,
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "seo",
      type: "seo",
      title: "SEO",
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
      title: "Description",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "credits",
      type: "text",
      rows: 8,
      title: "Project credits",
      description:
        "Shown at the bottom of the project page. One credit per line. Falls back to the description if empty.",
    }),
    defineField({
      name: "date",
      type: "date",
      title: "Date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      type: "string",
      title: "Location",
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Order",
      initialValue: 100,
      validation: (Rule) => Rule.required().integer(),
    }),
    defineField({
      name: "cover",
      type: "altImage",
      title: "Cover",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      type: "array",
      title: "Gallery",
      of: [{ type: "altImage" }],
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "cover", order: "order" },
    prepare({ title, media, order }) {
      return {
        title,
        subtitle: typeof order === "number" ? `Order ${order}` : undefined,
        media,
      };
    },
  },
});
