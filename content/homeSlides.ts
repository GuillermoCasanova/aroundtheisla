import { getGalleriesWithImages, listGalleryImages } from "@/content/galleries";
import type { HomeSlide } from "@/types/gallery";

const IMAGES_PER_SLIDE = 2;
const MAX_IMAGES = 12;

function buildPairedHomeSlides(): HomeSlide[] {
  const slides: HomeSlide[] = [];
  let imageCount = 0;

  for (const gallery of getGalleriesWithImages()) {
    const images = listGalleryImages(gallery.slug);

    for (
      let index = 0;
      index < images.length && imageCount < MAX_IMAGES;
      index += IMAGES_PER_SLIDE
    ) {
      const pair = images
        .slice(index, index + IMAGES_PER_SLIDE)
        .slice(0, MAX_IMAGES - imageCount);

      if (pair.length === 0) break;

      slides.push({
        images: pair,
        slug: gallery.slug,
        label: String(slides.length + 1).padStart(2, "0"),
      });

      imageCount += pair.length;
    }
  }

  return slides;
}

export const homeSlides: HomeSlide[] = buildPairedHomeSlides();
