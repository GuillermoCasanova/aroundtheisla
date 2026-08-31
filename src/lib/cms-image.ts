import type { ImageMetadata } from "astro";

/** Photograph from Sanity after GROQ mapping. */
export type CmsImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  /** Sanity low-quality placeholder (data URL) for instant paint. */
  lqip?: string;
};

export function isCmsImage(
  photo: ImageMetadata | CmsImage,
): photo is CmsImage {
  return !("format" in photo);
}
