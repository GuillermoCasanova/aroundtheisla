import { defineField, defineType } from "sanity";

export const navLink = defineType({
  name: "navLink",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      name: "linkType",
      title: "Link type",
      type: "string",
      initialValue: "internal",
      options: {
        list: [
          { title: "Internal", value: "internal" },
          { title: "External", value: "external" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "internalLink",
      title: "Internal link",
      type: "reference",
      hidden: ({ parent }) => parent?.linkType !== "internal",
      to: [{ type: "page" }, { type: "project" }],
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as { linkType?: string } | undefined;
          if (parent?.linkType !== "internal") return true;
          return value ? true : "Pick a page or project";
        }),
    }),
    defineField({
      name: "href",
      title: "URL",
      type: "url",
      hidden: ({ parent }) => parent?.linkType !== "external",
      validation: (Rule) =>
        Rule.uri({ allowRelative: true, scheme: ["https", "http"] }).custom(
          (value, context) => {
            const parent = context.parent as { linkType?: string } | undefined;
            if (parent?.linkType !== "external") return true;
            return value ? true : "Add a URL";
          },
        ),
    }),
    defineField({
      name: "blank",
      title: "Open in a new tab",
      type: "boolean",
      initialValue: false,
      hidden: ({ parent }) => parent?.linkType !== "external",
    }),
  ],
});
