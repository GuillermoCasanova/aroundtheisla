import { defineField, defineType } from "sanity";

export const sctnRichText = defineType({
  name: "sctnRichText",
  title: "Rich text",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  defineField({
                    name: "href",
                    type: "url",
                    title: "URL",
                    validation: (Rule) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ["http", "https", "mailto"],
                      }),
                  }),
                ],
              },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { heading: "heading" },
    prepare({ heading }) {
      return { title: "Rich text", subtitle: heading };
    },
  },
});
