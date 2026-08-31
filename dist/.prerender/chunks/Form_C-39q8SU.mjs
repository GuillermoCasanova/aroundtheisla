import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, m as renderSlot, o as renderScript, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
//#region src/components/Form.astro
createAstro("https://example.com");
var $$Form = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Form;
	const { action, method = "POST", enctype, endpoint, noEnhance = false, honeypot = true, honeypotName = "website", id, class: className } = Astro.props;
	const formId = id ?? `form-${Math.random().toString(36).slice(2, 10)}`;
	return renderTemplate`${maybeRenderHead($$result)}<form${addAttribute(formId, "id")}${addAttribute(action, "action")}${addAttribute(method, "method")}${addAttribute(enctype, "enctype")} data-form="component" data-form-status="idle"${addAttribute(endpoint ?? action, "data-form-endpoint")}${addAttribute(noEnhance ? "true" : void 0, "data-form-no-enhance")} novalidate${addAttribute(["form", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} ${honeypot && renderTemplate`<div data-form-honeypot aria-hidden="true"> <label${addAttribute(`${formId}-${honeypotName}`, "for")}>Website (leave blank)</label> <input${addAttribute(`${formId}-${honeypotName}`, "id")}${addAttribute(honeypotName, "name")} type="text" tabindex="-1" autocomplete="off"> </div>`} <div data-form-feedback="success" role="status" aria-live="polite" hidden> ${renderSlot($$result, $$slots["success"], renderTemplate` <p>Thanks — we received your submission.</p> `)} </div> <div data-form-feedback="error" role="alert" aria-live="assertive" hidden> ${renderSlot($$result, $$slots["error"], renderTemplate` <p>Something went wrong. Please try again.</p> `)} </div> </form> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Form.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Form.astro", void 0);
//#endregion
export { $$Form as t };
