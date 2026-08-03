"use client";

import { useCallback, useEffect, useRef } from "react";
import type { HomeSlide } from "@/types/gallery";
import { CoverCard } from "@/components/CoverCard";
import { NavArrowButton } from "@/components/NavArrowButton";

type CoverSliderProps = {
  slides: HomeSlide[];
};

export function CoverSlider({ slides }: CoverSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = useCallback((direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollByCard(1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollByCard(-1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [scrollByCard, slides.length]);

  if (slides.length === 0) {
    return (
      <section className="flex min-h-[calc(100dvh-3.5rem)] items-center justify-center bg-black px-5 pt-14 md:min-h-[calc(100dvh-4rem)] md:pt-16">
        <p className="text-center text-sm text-white/50">
          add photos to{" "}
          <span className="text-white/70">public/galleries/around-1</span> to get
          started.
        </p>
      </section>
    );
  }

  return (
    <section className="relative bg-black pt-14 md:pt-16">
      <div className="relative w-full">
        <NavArrowButton
          direction="prev"
          ariaLabel="Previous slide"
          onClick={() => scrollByCard(-1)}
        />
        <NavArrowButton
          direction="next"
          ariaLabel="Next slide"
          onClick={() => scrollByCard(1)}
        />

        <div
          ref={trackRef}
          className="flex h-[calc(100dvh-3.5rem)] snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] md:h-[calc(100dvh-4rem)] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, index) => (
            <CoverCard
              key={`${slide.slug}-${slide.images.join("-")}`}
              slide={slide}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
