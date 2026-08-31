import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, m as renderSlot, o as renderScript, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
//#region src/components/Accordion.astro
createAstro("https://example.com");
var $$Accordion = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Accordion;
	const { closePrevious = true, closeOnSecondClick = true, openByDefault, class: className } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div data-accordion="component"${addAttribute(closePrevious, "data-close-previous")}${addAttribute(closeOnSecondClick, "data-close-on-second-click")}${addAttribute(openByDefault, "data-open-by-default")}${addAttribute([className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Accordion.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Accordion.astro", void 0);
//#endregion
export { $$Accordion as t };
