import { C as addAttribute, F as createComponent, M as unescapeHTML, P as createAstro, _ as renderTemplate, d as Fragment, l as renderComponent, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
//#region src/components/CardFeatured.astro
createAstro("https://example.com");
var $$CardFeatured = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CardFeatured;
	const { title, description, border = "all", class: className = "", titleClass = "h3", titleTag: TitleTag = "h3" } = Astro.props;
	const borderClass = {
		all: "border border-stroke",
		y: "border-y border-stroke",
		x: "border-x border-stroke",
		none: ""
	}[border];
	const eyebrowContent = Astro.slots.has("eyebrow") ? await Astro.slots.render("eyebrow") : "";
	const mediaContent = Astro.slots.has("media") ? await Astro.slots.render("media") : "";
	const buttonContent = Astro.slots.has("button") ? await Astro.slots.render("button") : "";
	const hasEyebrow = eyebrowContent.trim().length > 0;
	const hasMedia = mediaContent.trim().length > 0;
	const hasButton = buttonContent.trim().length > 0;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute([
		"relative px-4 pt-4 md:px-8 md:pt-8",
		hasMedia ? "pb-0" : "pb-8",
		borderClass,
		className
	], "class:list")}> <div class="flex flex-col gap-4"> ${hasEyebrow && renderTemplate`<div class="text-body-sm text-fg-muted">${unescapeHTML(eyebrowContent)}</div>`} ${title && renderTemplate`${renderComponent($$result, "TitleTag", TitleTag, { "class": titleClass }, { "default": ($$result) => renderTemplate`${title}` })}`} ${description && renderTemplate`<p class="text-fg-muted">${description}</p>`} ${hasMedia && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(mediaContent)}` })}`} ${hasButton && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(buttonContent)}` })}`} </div> </div>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/CardFeatured.astro", void 0);
//#endregion
export { $$CardFeatured as t };
