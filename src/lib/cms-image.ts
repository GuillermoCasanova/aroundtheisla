import type { ImageMetadata } from "astro";

/** Photograph from Sanity after GROQ mapping. */
export type CmsImage = {
  /** Original Sanity CDN URL (no resize params). Variants are built at render. */
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  /** Sanity low-quality placeholder (data URL) for instant paint. */
  lqip?: string;
};

const SANITY_CDN_HOST = "cdn.sanity.io";
const DEFAULT_QUALITY = 70;
const DEFAULT_WIDTHS = [640, 960, 1280, 1600, 2000];

export function isCmsImage(
  photo: ImageMetadata | CmsImage,
): photo is CmsImage {
  return !("format" in photo);
}

export function isSanityCdnUrl(src: string): boolean {
  try {
    return new URL(src).hostname === SANITY_CDN_HOST;
  } catch {
    return false;
  }
}

/** Request a resized, auto-formatted derivative from the Sanity image CDN. */
export function cmsImageUrl(
  src: string,
  width: number,
  quality = DEFAULT_QUALITY,
): string {
  if (!isSanityCdnUrl(src)) return src;
  const url = new URL(src);
  url.searchParams.set("w", String(Math.round(width)));
  url.searchParams.set("fit", "max");
  url.searchParams.set("auto", "format");
  url.searchParams.set("q", String(quality));
  return url.href;
}

/** Share-card URL — JPEG so crawlers don't receive AVIF. */
export function cmsOgImageUrl(src: string, width = 1200): string {
  if (!isSanityCdnUrl(src)) return src;
  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("fit", "max");
  url.searchParams.set("fm", "jpg");
  url.searchParams.set("q", "80");
  url.searchParams.delete("auto");
  return url.href;
}

/** Absolute URL for og/JSON-LD. Sanity photos stay on the CDN; local paths resolve against the site origin. */
export function absoluteImageUrl(src: string, origin: string | URL): string {
  if (isSanityCdnUrl(src)) return cmsOgImageUrl(src);
  return new URL(src, origin).href;
}

export function cmsSrcset(
  src: string,
  widths: number[] | undefined,
  intrinsicWidth: number,
  quality = DEFAULT_QUALITY,
): string {
  return srcsetWidths(widths, intrinsicWidth)
    .map((w) => `${cmsImageUrl(src, w, quality)} ${w}w`)
    .join(", ");
}

/** Largest srcset candidate — used as the `<img src>` fallback. */
export function cmsFallbackSrc(
  src: string,
  widths: number[] | undefined,
  intrinsicWidth: number,
  quality = DEFAULT_QUALITY,
): string {
  const set = srcsetWidths(widths, intrinsicWidth);
  return cmsImageUrl(src, set[set.length - 1] ?? intrinsicWidth, quality);
}

function srcsetWidths(
  widths: number[] | undefined,
  intrinsicWidth: number,
): number[] {
  return capWidths(widths ?? DEFAULT_WIDTHS, intrinsicWidth);
}

function capWidths(widths: number[], intrinsicWidth: number): number[] {
  const sorted = [...new Set(widths.filter((w) => w > 0))].sort((a, b) => a - b);
  if (sorted.length === 0) {
    return intrinsicWidth > 0 ? [intrinsicWidth] : DEFAULT_WIDTHS;
  }
  if (!intrinsicWidth) return sorted;
  const capped = sorted.filter((w) => w <= intrinsicWidth);
  if (capped.length === 0) return [intrinsicWidth];
  return capped;
}
