"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Gallery } from "@/types/gallery";
import { GalleryImage } from "@/components/GalleryImage";
import { Lightbox } from "@/components/Lightbox";
import { NavArrowButton } from "@/components/NavArrowButton";
import { ThumbnailStrip } from "@/components/ThumbnailStrip";

type GalleryScrollerProps = {
  gallery: Gallery;
};

export function GalleryScroller({ gallery }: GalleryScrollerProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [captionOpen, setCaptionOpen] = useState(true);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const slides = Array.from(track.children) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.85) return;
          const index = slides.indexOf(entry.target as HTMLElement);
          if (index >= 0) setActiveIndex(index);
        });
      },
      { root: track, threshold: [0.85, 0.95] },
    );

    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [gallery.photos.length]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (lightboxOpen) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollToIndex(Math.min(activeIndex + 1, gallery.photos.length - 1));
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollToIndex(Math.max(activeIndex - 1, 0));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, gallery.photos.length, lightboxOpen, scrollToIndex]);

  return (
    <section className="flex h-[100dvh] flex-col bg-grain pt-14 md:pt-16">
      <div className="shrink-0 border-b border-white/10 px-5 py-3 md:px-8 md:py-5">
        <div className="mx-auto flex max-w-[1600px] items-start justify-between gap-4">
          <div>
            <Link
              href="/gallery"
              className="font-display text-xs text-white/50 transition hover:text-white"
            >
              ← gallery
            </Link>
            <h1 className="mt-2 font-display text-lg text-white md:mt-3 md:text-3xl">
              {gallery.title}
            </h1>
            {gallery.description && gallery.description !== gallery.title && captionOpen ? (
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65 md:mt-3">
                {gallery.description}
              </p>
            ) : null}
          </div>
          {gallery.description && gallery.description !== gallery.title ? (
            <button
              type="button"
              className="shrink-0 font-display text-xs text-white/50 transition hover:text-white"
              onClick={() => setCaptionOpen((open) => !open)}
            >
              {captionOpen ? "hide" : "caption"}
            </button>
          ) : null}
        </div>
      </div>

      <div className="relative min-h-0 flex-1">
        <NavArrowButton
          direction="prev"
          ariaLabel="Previous photo"
          onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
        />
        <NavArrowButton
          direction="next"
          ariaLabel="Next photo"
          onClick={() =>
            scrollToIndex(Math.min(activeIndex + 1, gallery.photos.length - 1))
          }
        />

        <div
          ref={trackRef}
          className="flex h-full w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {gallery.photos.map((photo, index) => (
            <div
              key={photo}
              className="relative h-full flex-[0_0_100%] snap-start"
            >
              <button
                type="button"
                className="relative block h-full w-full"
                aria-label={`Open photo ${index + 1} fullscreen`}
                onClick={() => {
                  setActiveIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <GalleryImage
                  src={photo}
                  alt={`${gallery.title} — photo ${index + 1}`}
                  label={`${gallery.title} ${index + 1}`}
                  slug={gallery.slug}
                  priority={index === 0}
                  sizes="100vw"
                  className="object-contain object-center"
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <ThumbnailStrip
        photos={gallery.photos}
        gallery={gallery}
        activeIndex={activeIndex}
        onSelect={scrollToIndex}
      />

      {lightboxOpen ? (
        <Lightbox
          gallery={gallery}
          activeIndex={activeIndex}
          onClose={() => setLightboxOpen(false)}
          onChange={scrollToIndex}
        />
      ) : null}
    </section>
  );
}
