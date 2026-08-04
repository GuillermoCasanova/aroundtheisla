import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GalleryScroller } from "@/components/GalleryScroller";
import {
  getAllGallerySlugs,
  getGalleryBySlug,
} from "@/content/galleries";

type GalleryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllGallerySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: GalleryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const gallery = getGalleryBySlug(slug);

  if (!gallery) {
    return { title: "Gallery not found" };
  }

  return {
    title: gallery.title,
    description: gallery.description,
  };
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { slug } = await params;
  const gallery = getGalleryBySlug(slug);

  if (!gallery || !gallery.hasImages) notFound();

  return <GalleryScroller gallery={gallery} />;
}
