import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-black px-5 text-center text-white">
      <p className="font-display text-xs text-white/50">404</p>
      <h1 className="mt-3 font-display text-3xl">gallery not found</h1>
      <Link
        href="/gallery"
        className="mt-8 font-display text-sm transition hover:text-white/70"
      >
        back to gallery
      </Link>
    </section>
  );
}
