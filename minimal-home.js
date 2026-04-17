(function () {
  const preloader = document.getElementById("preloader");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setBgIndex(layers, index) {
    layers.forEach((layer, i) => {
      layer.style.opacity = i === index ? "1" : "0";
    });
  }

  function bindBackgroundHoverReduced() {
    const layers = document.querySelectorAll(".bg-layer");
    const list = document.getElementById("project-list");
    if (!layers.length || !list) return;

    const tiles = list.querySelectorAll(".project-tile");
    tiles.forEach((tile) => {
      const idx = parseInt(tile.dataset.bgIndex, 10);
      if (Number.isNaN(idx)) return;

      tile.addEventListener("pointerenter", () => {
        setBgIndex(layers, idx);
      });

      tile.addEventListener("pointerleave", (e) => {
        if (e.relatedTarget && list.contains(e.relatedTarget)) return;
        setBgIndex(layers, 0);
      });
    });

    list.addEventListener("focusin", (e) => {
      const tile = e.target.closest(".project-tile");
      if (!tile) return;
      const idx = parseInt(tile.dataset.bgIndex, 10);
      if (Number.isNaN(idx)) return;
      setBgIndex(layers, idx);
    });

    list.addEventListener("focusout", (e) => {
      if (list.contains(e.relatedTarget)) return;
      setBgIndex(layers, 0);
    });
  }

  function bindBackgroundHoverGsap(layers, list) {
    const tweenTo = (index) => {
      gsap.to(layers, {
        opacity: (i) => (i === index ? 1 : 0),
        duration: 0.5,
        ease: "power2.inOut",
        overwrite: "auto",
      });
    };

    const tiles = list.querySelectorAll(".project-tile");
    tiles.forEach((tile) => {
      const idx = parseInt(tile.dataset.bgIndex, 10);
      if (Number.isNaN(idx)) return;

      tile.addEventListener("pointerenter", () => {
        tweenTo(idx);
      });

      tile.addEventListener("pointerleave", (e) => {
        if (e.relatedTarget && list.contains(e.relatedTarget)) return;
        tweenTo(0);
      });
    });

    list.addEventListener("focusin", (e) => {
      const tile = e.target.closest(".project-tile");
      if (!tile) return;
      const idx = parseInt(tile.dataset.bgIndex, 10);
      if (Number.isNaN(idx)) return;
      tweenTo(idx);
    });

    list.addEventListener("focusout", (e) => {
      if (list.contains(e.relatedTarget)) return;
      tweenTo(0);
    });
  }

  function initGsap() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      bindBackgroundHoverReduced();
      return;
    }

    const layers = gsap.utils.toArray(".bg-layer");
    const list = document.getElementById("project-list");

    gsap.registerPlugin(ScrollTrigger);

    if (layers.length) {
      gsap.set(layers, { opacity: (i) => (i === 0 ? 1 : 0) });
    }

    if (list && layers.length) {
      bindBackgroundHoverGsap(layers, list);
    }

    gsap.utils.toArray(".project-tile").forEach((tile) => {
      gsap.from(tile, {
        opacity: 0,
        y: 32,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: tile,
          start: "top 92%",
          toggleActions: "play none none none",
        },
      });
    });

    ScrollTrigger.refresh();
  }

  if (reduceMotion) {
    if (preloader) preloader.remove();
    document.body.classList.remove("preloader-active");
    bindBackgroundHoverReduced();
    return;
  }

  if (!preloader) {
    document.body.classList.remove("preloader-active");
    initGsap();
    return;
  }

  const hide = () => {
    preloader.classList.add("is-hidden");
    document.body.classList.remove("preloader-active");
    preloader.setAttribute("aria-hidden", "true");
    const remove = () => {
      preloader.remove();
      requestAnimationFrame(() => {
        initGsap();
        if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
      });
    };
    preloader.addEventListener("transitionend", remove, { once: true });
    window.setTimeout(remove, 600);
  };

  window.setTimeout(hide, 1000);
})();
