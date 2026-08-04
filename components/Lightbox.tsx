"use client";

import Link from "next/link";
import { useEffect } from "react";
import type { Gallery } from "@/types/gallery";
import { GalleryImage } from "@/components/GalleryImage";
import { NavArrowButton } from "@/components/NavArrowButton";

type LightboxProps = {
  gallery: Gallery;
  activeIndex: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function Lightbox({
  gallery,
  activeIndex,
  onClose,
  onChange,
}: LightboxProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") {
        onChange(Math.min(activeIndex + 1, gallery.photos.length - 1));
      }
      if (event.key === "ArrowLeft") {
        onChange(Math.max(activeIndex - 1, 0));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, gallery.photos.length, onChange, onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${gallery.title} fullscreen viewer`}
    >
      <div className="absolute top-5 left-5 flex items-center gap-4">
        <Link
          href="/gallery"
          className="font-display text-xs text-white/70 transition hover:text-white"
        >
          ← gallery
        </Link>
        <button
          type="button"
          className="font-display text-xs text-white/70 transition hover:text-white"
          onClick={onClose}
        >
          close
        </button>
      </div>

      <NavArrowButton
        direction="prev"
        ariaLabel="Previous photo"
        onClick={() => onChange(Math.max(activeIndex - 1, 0))}
      />
      <NavArrowButton
        direction="next"
        ariaLabel="Next photo"
        onClick={() =>
          onChange(Math.min(activeIndex + 1, gallery.photos.length - 1))
        }
      />

      <div className="relative h-[85vh] w-full max-w-6xl">
        <GalleryImage
          src={gallery.photos[activeIndex]}
          alt={`${gallery.title} — photo ${activeIndex + 1}`}
          label={`${gallery.title} ${activeIndex + 1}`}
          slug={gallery.slug}
          priority
          sizes="100vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}
