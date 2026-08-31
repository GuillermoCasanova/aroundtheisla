import { defineField, defineType } from "sanity";
import { FiSettings } from "react-icons/fi";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: FiSettings,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      initialValue: "Site Settings",
    }),
    defineField({
      name: "url",
      type: "url",
      title: "URL",
      description: "The production origin, no trailing slash. Used for canonical URLs.",
      validation: (Rule) =>
        Rule.required().uri({ scheme: ["https", "http"] }),
    }),
    defineField({
      name: "seo",
      type: "seo",
      title: "Site SEO",
    }),
    defineField({
      name: "mainNav",
      type: "reference",
      title: "Main navigation",
      description: "Menu used by the site header.",
      to: [{ type: "navigation" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Settings" };
    },
  },
});
