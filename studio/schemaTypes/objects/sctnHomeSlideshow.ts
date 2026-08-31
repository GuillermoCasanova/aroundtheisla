import { defineField, defineType } from "sanity";

export const sctnHomeSlideshow = defineType({
  name: "sctnHomeSlideshow",
  title: "Home slideshow",
  type: "object",
  fields: [
    defineField({
      name: "slides",
      type: "array",
      title: "Slides",
      of: [{ type: "homeSlide" }],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: { slides: "slides" },
    prepare({ slides }) {
      const count = Array.isArray(slides) ? slides.length : 0;
      return {
        title: "Home slideshow",
        subtitle: `${count} slide${count === 1 ? "" : "s"}`,
      };
    },
  },
});
