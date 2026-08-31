import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, o as renderScript, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
//#region src/components/ProjectSize.astro
createAstro("https://example.com");
var $$ProjectSize = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ProjectSize;
	const { label = "Photograph size", value = "large", class: className } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div data-project-size role="radiogroup"${addAttribute(label, "aria-label")}${addAttribute(["flex items-center gap-4", className], "class:list")} data-astro-cid-deeecapv> ${[
		{
			id: "small",
			label: "Small"
		},
		{
			id: "medium",
			label: "Medium"
		},
		{
			id: "large",
			label: "Large"
		}
	].map((size) => renderTemplate`<button type="button" role="radio"${addAttribute(size.id, "data-project-size-option")}${addAttribute(size.id === value ? "true" : "false", "aria-checked")}${addAttribute(size.id === value ? 0 : -1, "tabindex")} class="min-h-11 text-body-md leading-none text-fg-muted transition-colors duration-default-quarter hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus" data-astro-cid-deeecapv> ${size.label} </button>`)} </div> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/ProjectSize.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/ProjectSize.astro", void 0);
//#endregion
export { $$ProjectSize as t };
