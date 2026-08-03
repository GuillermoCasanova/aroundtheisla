import Link from "next/link";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-8 text-white/55 md:px-8">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
        <p>{siteConfig.credit}</p>
        <p>{siteConfig.copyright}</p>
        <div className="flex gap-5">
          <Link href="/contact" className="transition-colors hover:text-white">
            contact
          </Link>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
