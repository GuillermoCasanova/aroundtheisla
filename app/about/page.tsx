import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "about",
  description:
    "the story behind aroundtheisla — island photography by lara torruella.",
};

export default function AboutPage() {
  return (
    <section className="bg-black px-5 py-24 md:px-8">
      <article className="mx-auto max-w-[700px] text-white">
        <p className="font-display text-xs text-white/50">about</p>
        <h1 className="mt-3 font-display text-3xl md:text-4xl">aroundtheisla</h1>
        <p className="mt-6 text-lg leading-relaxed text-white/80">
          a photography archive devoted to puerto rico&apos;s coastlines, cities,
          and the slow rhythm of island life — frames that let the land lead the
          story.
        </p>

        <figure className="my-10 overflow-hidden border border-white/10">
          <div className="relative aspect-[4/5] bg-neutral-900">
            <Image
              src="/palm-cion.svg"
              alt=""
              fill
              className="object-contain p-16 opacity-80"
              unoptimized
            />
          </div>
        </figure>

        <div className="space-y-5 text-base leading-8 text-white/72">
          <p>
            born in san juan and based between the north shore and the city,
            lara torruella works with brands, magazines, and small crews who care
            about place as much as product.
          </p>
          <p>
            her practice sits at the intersection of documentary travel and quiet
            fashion — long shadows, salt air, and compositions shaped by light
            rather than spectacle.
          </p>
          <p>
            aroundtheisla is both studio and archive: a way to collect ongoing
            work from vieques to rincón, old san juan to the atlantic cliffs —
            and share it the way you might flip through a stack of printed
            volumes.
          </p>
        </div>

        <blockquote className="my-10 border-l border-white/25 pl-5 text-lg italic text-white/85">
          &ldquo;move with the tide — not against it.&rdquo;
        </blockquote>

        <dl className="grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
          <div>
            <dt className="font-display text-xs text-white/45">studio</dt>
            <dd className="mt-2 text-sm text-white/75">san juan, puerto rico</dd>
          </div>
          <div>
            <dt className="font-display text-xs text-white/45">focus</dt>
            <dd className="mt-2 text-sm text-white/75">
              editorial, travel, hospitality
            </dd>
          </div>
        </dl>

        <p className="mt-10 text-sm text-white/55">
          inquiries welcome for prints, bookings, and collaborations via{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-white underline-offset-4 hover:underline"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </article>
    </section>
  );
}
