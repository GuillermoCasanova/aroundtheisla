import gsap from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/+esm";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/ScrollTrigger/+esm";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

let mediaCleanup = null;

function initMobileNav() {
  const toggle = document.querySelector(".menu-toggle");
  const panel = document.getElementById("mobile-nav");
  if (!toggle || !panel) return;

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    panel.hidden = open;
  });
}

function refreshAfterImages() {
  const imgs = document.querySelectorAll("img");
  let pending = 0;
  const done = () => {
    pending = Math.max(0, pending - 1);
    if (pending === 0) ScrollTrigger.refresh();
  };
  imgs.forEach((img) => {
    if (img.complete) return;
    pending += 1;
    img.addEventListener("load", done, { once: true });
    img.addEventListener("error", done, { once: true });
  });
  if (pending === 0) ScrollTrigger.refresh();
}

function teardownAnimations() {
  if (typeof mediaCleanup === "function") {
    mediaCleanup();
    mediaCleanup = null;
  }
  ScrollTrigger.getAll().forEach((t) => t.kill());
}

function setupAnimations() {
  teardownAnimations();

  const mm = gsap.matchMedia();

  mm.add(
    {
      reduceMotion: "(prefers-reduced-motion: reduce)",
    },
    (context) => {
      const { reduceMotion } = context.conditions;
      const scrub = reduceMotion ? false : 1;
      const heroEase = reduceMotion ? "none" : "power2.out";

      gsap.from(".hero-inner > *", {
        y: reduceMotion ? 0 : 28,
        autoAlpha: reduceMotion ? 1 : 0,
        duration: reduceMotion ? 0 : 0.85,
        stagger: reduceMotion ? 0 : 0.08,
        ease: heroEase,
        delay: reduceMotion ? 0 : 0.05,
      });

      const heroImgs = gsap.utils.toArray(".hero-img");
      heroImgs.forEach((el, i) => {
        gsap.from(el, {
          y: reduceMotion ? 0 : 40 + i * 12,
          rotation: reduceMotion ? 0 : i % 2 === 0 ? -4 : 4,
          autoAlpha: reduceMotion ? 1 : 0,
          duration: reduceMotion ? 0 : 1,
          ease: heroEase,
          delay: reduceMotion ? 0 : 0.15 + i * 0.1,
        });
      });

      if (!reduceMotion) {
        gsap.to(".hero-img--1", {
          y: -18,
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.to(".hero-img--2", {
          y: 24,
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
        gsap.to(".hero-img--3", {
          y: -12,
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }

      const gallerySection = document.querySelector(".gallery-pin");
      const galleryTrack = document.querySelector(".gallery-track--forward");

      if (gallerySection && galleryTrack) {
        const getMaxScroll = () =>
          Math.max(0, galleryTrack.scrollWidth - window.innerWidth + 48);

        if (reduceMotion) {
          gsap.set(galleryTrack, { x: 0 });
        } else {
          gsap.to(galleryTrack, {
            x: () => -getMaxScroll(),
            ease: "none",
            scrollTrigger: {
              trigger: gallerySection,
              start: "top top",
              end: () => `+=${getMaxScroll() + window.innerHeight * 0.35}`,
              pin: true,
              scrub,
              invalidateOnRefresh: true,
            },
          });
        }
      }

      const stripSection = document.querySelector(".strip-section");
      const stripTrack = document.querySelector(".strip-track--photos");

      if (stripSection && stripTrack) {
        const stripDistance = () =>
          Math.max(120, stripTrack.scrollWidth - window.innerWidth * 0.5);

        if (reduceMotion) {
          gsap.set(stripTrack, { x: 0 });
        } else {
          gsap.fromTo(
            stripTrack,
            { x: 40 },
            {
              x: () => -stripDistance(),
              ease: "none",
              scrollTrigger: {
                trigger: stripSection,
                start: "top 85%",
                end: "bottom 15%",
                scrub: 1.2,
                invalidateOnRefresh: true,
              },
            }
          );
        }
      }

      gsap.utils.toArray(".story-card").forEach((card) => {
        gsap.from(card, {
          y: reduceMotion ? 0 : 36,
          autoAlpha: reduceMotion ? 1 : 0,
          duration: reduceMotion ? 0 : 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: reduceMotion
              ? "play none none none"
              : "play none none reverse",
          },
        });
      });
    }
  );

  mediaCleanup = () => mm.revert();
}

initMobileNav();
setupAnimations();
refreshAfterImages();

window.addEventListener("load", () => ScrollTrigger.refresh());

function onMotionPreferenceChange() {
  setupAnimations();
  ScrollTrigger.refresh();
}

if (typeof prefersReducedMotion.addEventListener === "function") {
  prefersReducedMotion.addEventListener("change", onMotionPreferenceChange);
} else {
  prefersReducedMotion.addListener(onMotionPreferenceChange);
}
