import { _ as __exportAll, r as getPageBySlug, t as $$Layout, u as site } from "./Layout_Dlmeugkd.mjs";
import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, l as renderComponent, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$OptimizedPicture } from "./OptimizedPicture_CNlbVe3Y.mjs";
import { n as homepageSchema } from "./schema_DPp_KL_g.mjs";
//#region src/components/SectionHomeHero.astro
createAstro("https://example.com");
var $$SectionHomeHero = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectionHomeHero;
	const { images, class: className } = Astro.props;
	return renderTemplate` ${maybeRenderHead($$result)}<section data-home-hero aria-label="Featured photograph"${addAttribute(["relative isolate min-h-svh w-full overflow-hidden bg-canvas", className], "class:list")}> ${images.map((image) => renderTemplate`<div data-home-hero-shot hidden class="absolute inset-0"> ${renderComponent($$result, "OptimizedPicture", $$OptimizedPicture, {
		"src": image.src,
		"alt": image.alt,
		"width": image.width,
		"height": image.height,
		"class": "absolute inset-0 size-full object-cover object-center",
		"widths": [
			640,
			960,
			1280,
			1600,
			1920
		],
		"sizes": "100vw",
		"loading": "lazy",
		"decoding": "async"
	})} </div>`)}  <a href="/work" class="absolute inset-0 z-[1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" aria-label="View work"> <span class="sr-only">View work</span> </a>  <noscript> <style>
      [data-home-hero-shot]:first-of-type {
        display: block !important;
      }
    </style> </noscript>  <script>
    (function () {
      var root = document.currentScript && document.currentScript.closest
        ? document.currentScript.closest("[data-home-hero]")
        : document.querySelector("[data-home-hero]");
      if (!root) return;
      var shots = root.querySelectorAll("[data-home-hero-shot]");
      if (!shots.length) return;
      var pick = Math.floor(Math.random() * shots.length);
      var chosen = shots[pick];
      chosen.removeAttribute("hidden");
      var img = chosen.querySelector("img");
      if (img) {
        img.loading = "eager";
        img.setAttribute("fetchpriority", "high");
      }
    })();
  <\/script></section>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/SectionHomeHero.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const page = await getPageBySlug("home");
	if (!page) throw new Error("Sanity is missing a page with slug \"home\". Run npm run migrate:sanity or create it in the Studio.");
	const title = page.data.seoTitle || page.data.title || site.name;
	const description = page.data.seoDescription || site.description;
	const image = page.data.seoImage?.src;
	const heroImages = page.data.heroImages ?? [];
	if (heroImages.length === 0) throw new Error("Sanity home page is missing hero photographs. Add 1–5 images in Studio under Home → Hero photographs.");
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": title,
		"description": description,
		"image": image,
		"jsonLd": homepageSchema,
		"theme": "dark",
		"hideFooter": page.data.hideFooter
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main id="main"> <h1 class="sr-only">${page.data.title}</h1> ${renderComponent($$result, "SectionHomeHero", $$SectionHomeHero, { "images": heroImages })} </main> ` })}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/pages/index.astro", void 0);
var $$file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
