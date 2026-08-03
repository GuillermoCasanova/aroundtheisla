"use client";

import type { Gallery } from "@/types/gallery";
import { GalleryImage } from "@/components/GalleryImage";

type ThumbnailStripProps = {
  photos: string[];
  gallery: Gallery;
  activeIndex: number;
  onSelect: (index: number) => void;
};

export function ThumbnailStrip({
  photos,
  gallery,
  activeIndex,
  onSelect,
}: ThumbnailStripProps) {
  return (
    <div className="shrink-0 border-t border-white/10 bg-black px-5 py-3 md:px-8 md:py-4">
        <div className="mx-auto flex max-w-[1600px] items-center gap-4">
          <p className="shrink-0 font-display text-xs text-white/70">
            {activeIndex + 1} / {photos.length}
          </p>
          <div className="flex flex-1 gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {photos.map((photo, index) => (
            <button
              key={photo}
              type="button"
              aria-label={`Go to photo ${index + 1}`}
              aria-current={index === activeIndex}
              className={`relative h-10 w-8 shrink-0 overflow-hidden border transition md:h-12 md:w-9 ${
                index === activeIndex
                  ? "border-white"
                  : "border-white/15 opacity-60 hover:opacity-100"
              }`}
              onClick={() => onSelect(index)}
            >
              <GalleryImage
                src={photo}
                alt=""
                label={`${index + 1}`}
                slug={gallery.slug}
                sizes="72px"
                loading="lazy"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
