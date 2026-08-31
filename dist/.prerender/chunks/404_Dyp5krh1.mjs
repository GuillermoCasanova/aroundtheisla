import { _ as __exportAll, f as $$Button, t as $$Layout } from "./Layout_Dlmeugkd.mjs";
import { F as createComponent, _ as renderTemplate, l as renderComponent, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Page not found — 404",
		"noindex": true,
		"skipLoader": true
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main id="main"> <section class="section-gutter section-padding-lg"> <div class="container-large flex flex-col items-start gap-6"> <p class="text-body-sm text-fg-muted uppercase tracking-wide">Error 404</p> <h1 class="h1">This page wandered off.</h1> <p class="text-body-lg text-fg-muted max-w-prose">
The page you're looking for doesn't exist or may have moved. Check the URL,
          or head back to safe ground.
</p> ${renderComponent($$result, "Button", $$Button, {
		"href": "/",
		"withArrow": true
	}, { "default": ($$result) => renderTemplate`Back to home` })} </div> </section> </main> ` })}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/pages/404.astro", void 0);
var $$file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
