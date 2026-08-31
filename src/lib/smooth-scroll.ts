// Site-wide Locomotive Scroll (v5 / Lenis) bootstrap.
// Native document scroll — no extra wrapper. Reduced-motion leaves native
// scroll alone. The intro loader keeps the instance stopped until it leaves
// the tree so the overflow lock and the lerp don't fight.

import type LocomotiveScroll from "locomotive-scroll";

let instance: LocomotiveScroll | null = null;
let motionQuery: MediaQueryList | null = null;
let motionController: AbortController | null = null;
let loaderObserver: MutationObserver | null = null;
let creating = false;

export function getLocomotiveScroll(): LocomotiveScroll | null {
  return instance;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function clearLoaderObserver(): void {
  loaderObserver?.disconnect();
  loaderObserver = null;
}

function watchLoader(scroll: LocomotiveScroll, loader: Element): void {
  clearLoaderObserver();
  loaderObserver = new MutationObserver(() => {
    if (document.contains(loader)) return;
    clearLoaderObserver();
    if (!prefersReducedMotion()) scroll.start();
  });
  loaderObserver.observe(document.body, { childList: true, subtree: true });
}

async function create(): Promise<void> {
  if (instance || creating || prefersReducedMotion()) return;
  creating = true;

  const { default: LocomotiveScroll } = await import("locomotive-scroll");

  creating = false;
  if (instance || prefersReducedMotion()) return;

  const loader = document.querySelector("[data-loader]");
  instance = new LocomotiveScroll({
    autoStart: !loader,
    lenisOptions: {
      anchors: true,
    },
  });

  if (loader) watchLoader(instance, loader);

  document.dispatchEvent(
    new CustomEvent("scroll:ready", {
      bubbles: true,
      cancelable: true,
      detail: instance,
    }),
  );
}

function destroy(): void {
  clearLoaderObserver();
  instance?.destroy();
  instance = null;
}

function onMotionChange(): void {
  if (prefersReducedMotion()) destroy();
  else void create();
}

export function initSmoothScroll(): void {
  if (motionQuery) return;

  motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  motionController = new AbortController();
  motionQuery.addEventListener("change", onMotionChange, {
    signal: motionController.signal,
  });

  if (!motionQuery.matches) void create();
}

export function refreshSmoothScroll(): void {
  if (prefersReducedMotion()) {
    destroy();
    return;
  }
  if (instance) {
    instance.resize();
    return;
  }
  void create();
}
