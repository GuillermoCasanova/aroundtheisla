import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, o as renderScript, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
//#region src/components/ProjectView.astro
createAstro("https://example.com");
var $$ProjectView = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ProjectView;
	const { label = "Photograph layout", value = "column", class: className } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div data-project-view role="radiogroup"${addAttribute(label, "aria-label")}${addAttribute(["flex flex-col items-start gap-2", className], "class:list")} data-astro-cid-wfdnwfc7> ${[{
		id: "column",
		label: "Single Column"
	}, {
		id: "grid",
		label: "Grid"
	}].map((view) => renderTemplate`<button type="button" role="radio"${addAttribute(view.id, "data-project-view-option")}${addAttribute(view.id === value ? "true" : "false", "aria-checked")}${addAttribute(view.id === value ? 0 : -1, "tabindex")} class="min-h-11 text-body-md leading-none text-fg-muted transition-colors duration-default-quarter hover:text-fg hover:underline hover:underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus" data-astro-cid-wfdnwfc7> ${view.label} </button>`)} </div> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/ProjectView.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/ProjectView.astro", void 0);
//#endregion
export { $$ProjectView as t };
