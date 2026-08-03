import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "contact",
  description:
    "get in touch with aroundtheisla for prints, bookings, and collaborations.",
};

export default function ContactPage() {
  return (
    <section className="bg-black px-5 py-24 md:px-8">
      <div className="mx-auto max-w-[700px] text-white">
        <p className="font-display text-xs text-white/50">contact</p>
        <h1 className="mt-3 font-display text-3xl md:text-4xl">get in touch</h1>
        <p className="mt-6 text-base leading-relaxed text-white/70">
          for print inquiries, editorial assignments, hospitality projects, or
          collaborations — send a note. lara reads every message personally.
        </p>

        <form
          className="mt-10 space-y-5"
          action={`mailto:${siteConfig.email}`}
          method="post"
          encType="text/plain"
        >
          <label className="block">
            <span className="font-display text-xs text-white/50">name</span>
            <input
              type="text"
              name="name"
              required
              className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-white/40"
            />
          </label>
          <label className="block">
            <span className="font-display text-xs text-white/50">email</span>
            <input
              type="email"
              name="email"
              required
              className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-white/40"
            />
          </label>
          <label className="block">
            <span className="font-display text-xs text-white/50">message</span>
            <textarea
              name="message"
              rows={6}
              required
              className="mt-2 w-full resize-y border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-white/40"
            />
          </label>
          <button
            type="submit"
            className="font-display text-sm transition hover:text-white/70"
          >
            send message
          </button>
        </form>

        <div className="mt-12 border-t border-white/10 pt-8 text-sm text-white/60">
          <p>
            or email directly:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-white underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
          <p className="mt-3">
            follow along on{" "}
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline-offset-4 hover:underline"
            >
              instagram
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
