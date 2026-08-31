import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, m as renderSlot, o as renderScript, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
//#region src/components/CopyButton.astro
createAstro("https://example.com");
var $$CopyButton = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CopyButton;
	const { value, target, label = "Copy", copiedLabel = "Copied", feedbackDuration = 1500, class: className } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<button type="button" data-copy-button${addAttribute(value, "data-copy-value")}${addAttribute(target, "data-copy-target")}${addAttribute(feedbackDuration, "data-copy-feedback-duration")} data-copy-state="idle"${addAttribute(label, "aria-label")}${addAttribute(["copy-button", className], "class:list")}> <span data-copy="icon-idle" aria-hidden="true"> ${renderSlot($$result, $$slots["icon-idle"], renderTemplate` <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect> <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path> </svg> `)} </span> <span data-copy="icon-copied" aria-hidden="true"> ${renderSlot($$result, $$slots["icon-copied"], renderTemplate` <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="20 6 9 17 4 12"></polyline> </svg> `)} </span> <span data-copy="label-idle">${renderSlot($$result, $$slots["default"], renderTemplate`${label}`)}</span> <span data-copy="label-copied">${copiedLabel}</span> <span data-copy="live" class="sr-only" aria-live="polite"></span> </button> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/CopyButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/CopyButton.astro", void 0);
//#endregion
export { $$CopyButton as t };
