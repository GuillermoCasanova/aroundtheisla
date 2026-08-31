import { defineField, defineType } from "sanity";
import { FiLayout } from "react-icons/fi";

export const footerSettings = defineType({
  name: "footerSettings",
  title: "Site Footer",
  type: "document",
  icon: FiLayout,
  fields: [
    defineField({
      name: "copyright",
      type: "string",
      title: "Copyright",
      description:
        "Copyright line in the site footer. Use {current_year} for the year — the site replaces it with the current year.",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "copyright" },
    prepare({ title }) {
      return { title: title || "Site Footer" };
    },
  },
});
