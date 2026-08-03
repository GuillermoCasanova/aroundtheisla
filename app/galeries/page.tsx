import type { Metadata } from "next";
import { GalleryCoverGrid } from "@/components/GalleryCoverGrid";
import { getGalleriesWithImages } from "@/content/galleries";

export const metadata: Metadata = {
  title: "galeries",
  description: "browse all photography collections from aroundtheisla.",
};

export default function GaleriesPage() {
  return (
    <section className="bg-black px-5 py-24 md:px-8">
      <div className="mx-auto max-w-[1600px]">
        <p className="font-display text-xs text-white/50">index</p>
        <h1 className="mt-3 font-display text-3xl md:text-5xl">all galeries</h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60">
          a complete index of island collections — each cover opens a horizontal
          gallery of full-bleed photographs.
        </p>
        <div className="mt-12">
          <GalleryCoverGrid galleries={getGalleriesWithImages()} />
        </div>
      </div>
    </section>
  );
}
