import { defineField, defineType } from "sanity";

export const sctnWork = defineType({
  name: "sctnWork",
  title: "Work index",
  type: "object",
  fields: [
    defineField({
      name: "source",
      type: "string",
      title: "Projects",
      initialValue: "all",
      options: {
        list: [
          { title: "All published projects", value: "all" },
          { title: "Picked projects", value: "picked" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "projects",
      type: "array",
      title: "Picked projects",
      of: [{ type: "reference", to: [{ type: "project" }] }],
      hidden: ({ parent }) => parent?.source !== "picked",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const source = (context.parent as { source?: string } | undefined)
            ?.source;
          if (source === "picked" && (!value || value.length === 0)) {
            return "Pick at least one project";
          }
          return true;
        }),
    }),
  ],
  preview: {
    select: { source: "source" },
    prepare({ source }) {
      return {
        title: "Work index",
        subtitle: source === "picked" ? "Picked projects" : "All projects",
      };
    },
  },
});
