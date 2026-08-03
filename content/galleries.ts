import fs from "fs";
import path from "path";
import type { Gallery } from "@/types/gallery";

const IMAGE_EXT = /\.(jpg|jpeg|png|webp)$/i;

export function listGalleryImages(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "galleries", slug);

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXT.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/galleries/${slug}/${file}`);
}

function buildGallery(
  slug: string,
  title: string,
  description: string,
): Gallery {
  const images = listGalleryImages(slug);

  if (images.length === 0) {
    return {
      slug,
      title,
      date: "",
      location: "",
      description,
      cover: "",
      photos: [],
      hasImages: false,
    };
  }

  const cover =
    images.find((image) => /cover\.(jpg|jpeg|png|webp)$/i.test(image)) ??
    images[0];

  return {
    slug,
    title,
    date: "",
    location: "",
    description,
    cover,
    photos: images,
    hasImages: true,
  };
}

export const galleries: Gallery[] = [
  buildGallery("around-1", "around 1", "around 1"),
  buildGallery("around-2", "around 2", "around 2"),
  buildGallery("around-3", "around 3", "around 3"),
];

export function getGalleriesWithImages(): Gallery[] {
  return galleries.filter((gallery) => gallery.hasImages);
}

export function getGalleryBySlug(slug: string): Gallery | undefined {
  return galleries.find((gallery) => gallery.slug === slug);
}

export function getAllGallerySlugs(): string[] {
  return getGalleriesWithImages().map((gallery) => gallery.slug);
}
