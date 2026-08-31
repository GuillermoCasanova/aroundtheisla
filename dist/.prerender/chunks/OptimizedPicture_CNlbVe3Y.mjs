import { F as createComponent, P as createAstro, _ as renderTemplate, l as renderComponent } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Picture } from "./_astro_assets_CWgiBl4N.mjs";
//#region src/components/OptimizedPicture.astro
createAstro("https://example.com");
var $$OptimizedPicture = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$OptimizedPicture;
	const { src, alt, width, height, widths, sizes, loading = "lazy", fetchpriority, decoding = "async", quality = 70, class: className, "data-image-loader-img": dataImageLoaderImg } = Astro.props;
	return renderTemplate`${typeof src !== "string" ? renderTemplate`${renderComponent($$result, "Picture", $$Picture, {
		"src": src,
		"alt": alt,
		"class": className,
		"widths": widths,
		"sizes": sizes,
		"formats": ["avif", "webp"],
		"fallbackFormat": "webp",
		"quality": quality,
		"loading": loading,
		"fetchpriority": fetchpriority,
		"decoding": decoding,
		"data-image-loader-img": dataImageLoaderImg
	})}` : renderTemplate`${renderComponent($$result, "Picture", $$Picture, {
		"src": src,
		"alt": alt,
		"width": width ?? 1600,
		"height": height ?? 1200,
		"class": className,
		"widths": widths,
		"sizes": sizes,
		"formats": ["avif", "webp"],
		"fallbackFormat": "webp",
		"quality": quality,
		"loading": loading,
		"fetchpriority": fetchpriority,
		"decoding": decoding,
		"data-image-loader-img": dataImageLoaderImg
	})}`}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/OptimizedPicture.astro", void 0);
//#endregion
export { $$OptimizedPicture as t };
