import "./Layout_HkwJUfDp.mjs";
import { M as createAstro, N as createComponent, h as renderTemplate, i as renderScript, s as renderComponent, x as addAttribute, y as maybeRenderHead } from "./server_Dyhk0ghK.mjs";
import { i as $$OptimizedPicture } from "./schema_B4-80NZX.mjs";
//#region src/lib/cms-image.ts
function isCmsImage(photo) {
	return !("format" in photo);
}
//#endregion
//#region src/components/ImageLoader.astro
createAstro("https://example.com");
var $$ImageLoader = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ImageLoader;
	const { src, alt, width, height, widths, sizes, loading = "lazy", fetchpriority, decoding = "async", preserveAspect = true, stage = true, placeholder, class: className, imgClass = "absolute inset-0 size-full object-cover" } = Astro.props;
	const isAsset = typeof src !== "string";
	const remoteWidth = isAsset ? src.width : width;
	const remoteHeight = isAsset ? src.height : height;
	const frameStyle = [preserveAspect && remoteWidth && remoteHeight ? `aspect-ratio: ${remoteWidth} / ${remoteHeight}` : void 0, placeholder ? `--image-loader-lqip: url(${JSON.stringify(placeholder)})` : void 0].filter(Boolean).join("; ");
	return renderTemplate`${maybeRenderHead($$result)}<div data-image-loader${addAttribute(placeholder ? "" : void 0, "data-image-loader-lqip")}${addAttribute([
		"image-loader relative overflow-hidden",
		!stage && "bg-secondary/80",
		className
	], "class:list")}${addAttribute(frameStyle || void 0, "style")} data-astro-cid-gcp6mx3e> ${renderComponent($$result, "OptimizedPicture", $$OptimizedPicture, {
		"src": src,
		"alt": alt,
		"width": width,
		"height": height,
		"class": imgClass,
		"widths": widths,
		"sizes": sizes,
		"loading": loading,
		"fetchpriority": fetchpriority,
		"decoding": decoding,
		"data-image-loader-img": true,
		"data-astro-cid-gcp6mx3e": true
	})} ${stage && renderTemplate`<div class="image-loader__stage absolute inset-0 z-10 bg-secondary/80" data-image-loader-stage aria-hidden="true" data-astro-cid-gcp6mx3e></div>`} </div>  <noscript> <style>
    [data-image-loader-stage] {
      display: none !important;
    }
  </style> </noscript> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/ImageLoader.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/ImageLoader.astro", void 0);
//#endregion
export { isCmsImage as n, $$ImageLoader as t };
