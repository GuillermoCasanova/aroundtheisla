"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const DESKTOP_NAV_MIN_WIDTH = "(min-width: 768px)";

const navLinks = [
  { href: "/gallery", label: "gallery" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_NAV_MIN_WIDTH);

    const closeMenuOnDesktop = () => {
      if (mediaQuery.matches) setMenuOpen(false);
    };

    closeMenuOnDesktop();
    mediaQuery.addEventListener("change", closeMenuOnDesktop);
    return () => mediaQuery.removeEventListener("change", closeMenuOnDesktop);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_NAV_MIN_WIDTH);
    const updateOverflow = () => {
      document.body.style.overflow =
        menuOpen && !mediaQuery.matches ? "hidden" : "";
    };

    updateOverflow();
    mediaQuery.addEventListener("change", updateOverflow);
    return () => {
      document.body.style.overflow = "";
      mediaQuery.removeEventListener("change", updateOverflow);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid || menuOpen
          ? "border-b border-white/10 bg-black/90 backdrop-blur-md"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 w-full max-w-[1600px] items-center justify-between px-5 md:h-16 md:px-8">
        {!menuOpen ? (
          <Link
            href="/"
            className="shrink-0 font-display text-sm text-white tracking-normal transition-opacity hover:opacity-70"
          >
            aroundtheisla
          </Link>
        ) : (
          <Link
            href="/"
            className="hidden shrink-0 font-display text-sm text-white tracking-normal transition-opacity hover:opacity-70 md:inline"
            onClick={() => setMenuOpen(false)}
          >
            aroundtheisla
          </Link>
        )}

        {menuOpen ? (
          <nav
            className="flex flex-1 items-center justify-center gap-5 sm:gap-6 md:hidden"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-xs text-white/85 transition-colors hover:text-white sm:text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sm text-white/85 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "close" : "menu"}</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-px bg-white transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px bg-white transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {menuOpen ? (
        <button
          type="button"
          className="fixed inset-0 top-14 z-40 bg-black/95 md:top-16 md:hidden"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
    </header>
  );
}
