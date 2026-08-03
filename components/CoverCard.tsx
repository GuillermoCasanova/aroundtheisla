"use client";

import Link from "next/link";
import type { HomeSlide } from "@/types/gallery";
import { GalleryImage } from "@/components/GalleryImage";

type CoverCardProps = {
  slide: HomeSlide;
  priority?: boolean;
};

export function CoverCard({ slide, priority = false }: CoverCardProps) {
  const isPair = slide.images.length > 1;
  const imageSizes = isPair
    ? "(max-width: 768px) 92vw, (max-width: 1024px) 42vw, 440px"
    : "(max-width: 768px) 92vw, (max-width: 1024px) 85vw, 900px";

  return (
    <Link
      href={`/galeries/${slide.slug}`}
      className="group relative block h-full w-full shrink-0 grow-0 basis-full snap-start overflow-hidden bg-neutral-900"
    >
      <div
        className={`flex h-full gap-2 md:gap-3 ${
          isPair ? "flex-col md:flex-row" : "flex-col"
        }`}
      >
        {slide.images.map((image, index) => (
          <div key={image} className="relative min-h-0 flex-1 overflow-hidden">
            <GalleryImage
              src={image}
              alt=""
              label={`${slide.label}-${index + 1}`}
              slug={slide.slug}
              priority={priority && index === 0}
              sizes={imageSizes}
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
    </Link>
  );
}
