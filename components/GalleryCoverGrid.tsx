import Link from "next/link";
import type { Gallery } from "@/types/gallery";
import { GalleryImage } from "@/components/GalleryImage";

type GalleryCoverGridProps = {
  galleries: Gallery[];
};

export function GalleryCoverGrid({ galleries }: GalleryCoverGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {galleries.map((gallery, index) => (
        <Link
          key={gallery.slug}
          href={`/galeries/${gallery.slug}`}
          className="group overflow-hidden border border-white/10 bg-neutral-900 transition-transform duration-500 hover:scale-[1.02]"
        >
          <div className="relative aspect-[4/5]">
            <GalleryImage
              src={gallery.cover}
              alt={`${gallery.title} cover`}
              label={gallery.title}
              slug={gallery.slug}
              priority={index < 2}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="px-4 py-4 text-white">
            <h2 className="font-display text-sm">{gallery.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
