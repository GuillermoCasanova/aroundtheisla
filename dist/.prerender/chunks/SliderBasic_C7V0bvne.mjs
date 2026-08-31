import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, l as renderComponent, m as renderSlot, o as renderScript, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Icon } from "./components_BhnmEz9L.mjs";
//#region src/components/SliderBasic.astro
createAstro("https://example.com");
var $$SliderBasic = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SliderBasic;
	const { id, ariaLabel = "Slider", mobile = 1, mobileLandscape, tablet, desktop, gap = "md", showArrows = true, showDots = true, draggable = true, class: className = "" } = Astro.props;
	const gapClass = {
		none: "gap-0",
		sm: "gap-2",
		md: "gap-4",
		lg: "gap-6"
	}[gap];
	const styleVars = [
		`--per-view: ${mobile}`,
		mobileLandscape ? `--per-view-sm: ${mobileLandscape}` : null,
		tablet ? `--per-view-md: ${tablet}` : null,
		desktop ? `--per-view-lg: ${desktop}` : null
	].filter(Boolean).join("; ");
	return renderTemplate`${maybeRenderHead($$result)}<div data-slider${addAttribute(draggable ? "true" : "false", "data-draggable")}${addAttribute(id, "id")} role="region" aria-roledescription="carousel"${addAttribute(ariaLabel, "aria-label")}${addAttribute(["relative", className], "class:list")}${addAttribute(styleVars, "style")}>  <div data-slider-live class="sr-only" aria-live="polite" aria-atomic="true"></div>  <div data-slider-track tabindex="0"${addAttribute(`${ariaLabel} slides`, "aria-label")}${addAttribute([
		"slider-track relative flex items-stretch overflow-x-auto scroll-smooth snap-x snap-mandatory",
		"outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
		gapClass
	], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> ${showArrows && renderTemplate`<div class="mt-4 flex items-center justify-end gap-2"> <button type="button" data-slider-prev aria-label="Previous slide" class="grid h-9 w-9 place-items-center border bg-fg border-stroke text-canvas transition hover:border-stroke-strong hover:bg-canvas hover:text-fg disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas cursor-pointer"> ${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:chevron-left",
		"class": "h-4 w-4",
		"aria-hidden": "true"
	})} </button> <button type="button" data-slider-next aria-label="Next slide" class="grid h-9 w-9 place-items-center border bg-fg border-stroke text-canvas transition hover:border-stroke-strong hover:bg-canvas hover:text-fg disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas cursor-pointer"> ${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:chevron-right",
		"class": "h-4 w-4",
		"aria-hidden": "true"
	})} </button> </div>`} ${showDots && renderTemplate`<div data-slider-dots role="tablist"${addAttribute(`${ariaLabel} pagination`, "aria-label")} class="mt-3 flex items-center justify-center gap-2"></div>`} </div> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/SliderBasic.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/SliderBasic.astro", void 0);
//#endregion
export { $$SliderBasic as t };
