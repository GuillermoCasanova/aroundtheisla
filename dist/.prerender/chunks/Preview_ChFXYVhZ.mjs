import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, m as renderSlot, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
//#region src/components/_docs/Preview.astro
createAstro("https://example.com");
var $$Preview = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Preview;
	const { label, align = "center", class: className = "" } = Astro.props;
	const alignClass = {
		start: "items-start justify-start",
		center: "items-center justify-center",
		stretch: "items-stretch justify-stretch"
	}[align];
	return renderTemplate`${maybeRenderHead($$result)}<figure data-doc-preview${addAttribute(["not-prose my-6 border border-stroke bg-canvas", className], "class:list")}> ${label && renderTemplate`<figcaption class="border-b border-stroke px-4 py-2 text-xs font-semibold uppercase tracking-wider text-fg-subtle"> ${label} </figcaption>`} <div${addAttribute(["flex w-full p-8 min-h-32", alignClass], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> </figure>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/_docs/Preview.astro", void 0);
//#endregion
export { $$Preview as t };
