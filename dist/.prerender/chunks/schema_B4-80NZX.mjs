import { u as site } from "./Layout_HkwJUfDp.mjs";
import { b as ImageMissingAlt, p as FontFamilyNotFound, t as AstroError } from "./errors_BbSXLTaS.mjs";
import { A as unescapeHTML, M as createAstro, N as createComponent, h as renderTemplate, s as renderComponent, t as spreadAttributes, x as addAttribute, y as maybeRenderHead } from "./server_Dyhk0ghK.mjs";
import { a as inferRemoteSize$1, c as isESMImportedImage, l as isRemoteImage, n as getImage$1, t as getConfiguredImageService, u as resolveSrc } from "./assets_DX_8OSEm.mjs";
import * as mime from "mrmime";
//#region node_modules/astro/components/Image.astro
createAstro("https://example.com");
var $$Image = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Image;
	const props = Astro2.props;
	if (props.alt === void 0 || props.alt === null) throw new AstroError(ImageMissingAlt);
	if (typeof props.width === "string") props.width = Number.parseInt(props.width);
	if (typeof props.height === "string") props.height = Number.parseInt(props.height);
	if ((props.layout ?? imageConfig.layout ?? "none") !== "none") {
		props.layout ??= imageConfig.layout;
		props.fit ??= imageConfig.objectFit ?? "cover";
		props.position ??= imageConfig.objectPosition ?? "center";
	} else if (imageConfig.objectFit || imageConfig.objectPosition) {
		props.fit ??= imageConfig.objectFit;
		props.position ??= imageConfig.objectPosition;
	}
	const image = await getImage(props);
	const additionalAttributes = {};
	if (image.srcSet.values.length > 0) additionalAttributes.srcset = image.srcSet.attribute;
	const { class: className, ...attributes } = {
		...additionalAttributes,
		...image.attributes
	};
	return renderTemplate` ${maybeRenderHead($$result)}<img${addAttribute(image.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/node_modules/astro/components/Image.astro", void 0);
//#endregion
//#region node_modules/astro/components/Picture.astro
createAstro("https://example.com");
var $$Picture = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Picture;
	const defaultFormats = ["webp"];
	const defaultFallbackFormat = "png";
	const specialFormatsFallback = [
		"gif",
		"svg",
		"jpg",
		"jpeg"
	];
	const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
	if (props.alt === void 0 || props.alt === null) throw new AstroError(ImageMissingAlt);
	const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
	if (scopedStyleClass) if (pictureAttributes.class) pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
	else pictureAttributes.class = scopedStyleClass;
	const useResponsive = (props.layout ?? imageConfig.layout ?? "none") !== "none";
	if (useResponsive) {
		props.layout ??= imageConfig.layout;
		props.fit ??= imageConfig.objectFit ?? "cover";
		props.position ??= imageConfig.objectPosition ?? "center";
	} else if (imageConfig.objectFit || imageConfig.objectPosition) {
		props.fit ??= imageConfig.objectFit;
		props.position ??= imageConfig.objectPosition;
	}
	for (const key in props) if (key.startsWith("data-astro-cid")) pictureAttributes[key] = props[key];
	const originalSrc = await resolveSrc(props.src);
	if (props.inferSize && isRemoteImage(originalSrc)) {
		const remoteSize = await inferRemoteSize(originalSrc);
		delete props.inferSize;
		props.width ??= remoteSize.width;
		props.height ??= remoteSize.height;
	}
	const optimizedImages = await Promise.all(formats.map(async (format) => await getImage({
		...props,
		src: originalSrc,
		format,
		widths: props.widths,
		densities: props.densities
	})));
	const clonedSrc = isESMImportedImage(originalSrc) ? originalSrc.clone ?? originalSrc : originalSrc;
	let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
	if (!fallbackFormat && isESMImportedImage(clonedSrc) && specialFormatsFallback.includes(clonedSrc.format)) resultFallbackFormat = clonedSrc.format;
	const fallbackImage = await getImage({
		...props,
		format: resultFallbackFormat,
		widths: props.widths,
		densities: props.densities
	});
	const imgAdditionalAttributes = {};
	const sourceAdditionalAttributes = {};
	if (props.sizes) sourceAdditionalAttributes.sizes = props.sizes;
	if (fallbackImage.srcSet.values.length > 0) imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
	const { class: className, ...attributes } = {
		...imgAdditionalAttributes,
		...fallbackImage.attributes
	};
	return renderTemplate`${maybeRenderHead($$result)}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
		return renderTemplate`<source${addAttribute(props.densities || !props.densities && !props.widths && !useResponsive ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute, "srcset")}${addAttribute(mime.lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
	})}  <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}> </picture>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/node_modules/astro/components/Picture.astro", void 0);
//#endregion
//#region \0virtual:astro:assets/fonts/internal
var componentDataByCssVariable = /* @__PURE__ */ new Map([]);
//#endregion
//#region node_modules/astro/dist/assets/fonts/core/filter-preloads.js
function filterPreloads(data, preload) {
	if (!preload) return null;
	if (preload === true) return data;
	return data.filter(({ weight, style, subset }) => preload.some((p) => {
		if (p.weight !== void 0 && weight !== void 0 && !checkWeight(p.weight.toString(), weight)) return false;
		if (p.style !== void 0 && p.style !== style) return false;
		if (p.subset !== void 0 && p.subset !== subset) return false;
		return true;
	}));
}
function checkWeight(input, target) {
	const trimmedInput = input.trim();
	if (trimmedInput.includes(" ")) return trimmedInput === target;
	if (target.includes(" ")) {
		const [a, b] = target.split(" ");
		const parsedInput = Number.parseInt(input);
		return parsedInput >= Number.parseInt(a) && parsedInput <= Number.parseInt(b);
	}
	return input === target;
}
//#endregion
//#region node_modules/astro/components/Font.astro
createAstro("https://example.com");
var $$Font = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Font;
	const { cssVariable, preload = false } = Astro.props;
	const data = componentDataByCssVariable.get(cssVariable);
	if (!data) throw new AstroError({
		...FontFamilyNotFound,
		message: FontFamilyNotFound.message(cssVariable)
	});
	const filteredPreloadData = filterPreloads(data.preloads, preload);
	return renderTemplate`<style>${unescapeHTML(data.css)}</style> ${filteredPreloadData?.map(({ url, type }) => renderTemplate`<link rel="preload"${addAttribute(url, "href")} as="font"${addAttribute(`font/${type}`, "type")} crossorigin>`)}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/node_modules/astro/components/Font.astro", void 0);
//#endregion
//#region node_modules/astro/dist/assets/fonts/infra/remote-runtime-font-file-url-resolver.js
var RemoteRuntimeFontFileUrlResolver = class {
	#urls;
	#address;
	constructor({ urls, address }) {
		this.#urls = urls;
		this.#address = address;
	}
	resolve(url) {
		if (!this.#urls.has(url)) return null;
		if (!this.#address) throw new Error("Server address unavailable, this should not happen. Open an issue.");
		if (!url.startsWith("/")) url = new URL(url).pathname;
		return `http://${this.#address.family === "IPv6" ? `[${this.#address.address}]` : this.#address.address}:${this.#address.port}${url}`;
	}
};
new RemoteRuntimeFontFileUrlResolver({
	urls: /* @__PURE__ */ new Set([]),
	address: null
});
(function() {
	const regexes = [
		/^(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.{1,2}(?:\/|$)).)*?)\/)\.env)$/i,
		/^(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.{1,2}(?:\/|$)).)*?)\/)\.env\.[^/]*?\/?)$/i,
		/^(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.{1,2}(?:\/|$)).)*?)\/)(?!\.{1,2}(?:\/|$))(?=.)[^/]*?\.(crt|pem))$/i,
		/^(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.{1,2}(?:\/|$)).)*?)\/)\.git(?:\/(?!\.{1,2}(?:\/|$))(?:(?:(?!(?:^|\/)\.{1,2}(?:\/|$)).)*?)|$))$/i
	];
	return function fsDenyGlob(testPath) {
		return regexes.some((re) => re.test(testPath));
	};
})();
var assetQueryParams = void 0;
var imageConfig = {
	"endpoint": { "route": "/_image" },
	"service": {
		"entrypoint": "astro/assets/services/sharp",
		"config": {}
	},
	"dangerouslyProcessSVG": false,
	"domains": [],
	"remotePatterns": [{
		"protocol": "https",
		"hostname": "cdn.sanity.io"
	}],
	"responsiveStyles": false
};
Object.defineProperty(imageConfig, "assetQueryParams", {
	value: assetQueryParams,
	enumerable: false,
	configurable: true
});
var inferRemoteSize = async (url) => {
	return (await getConfiguredImageService()).getRemoteSize?.(url, imageConfig) ?? inferRemoteSize$1(url, imageConfig);
};
var getImage = async (options) => await getImage$1(options, imageConfig);
//#endregion
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
//#region src/lib/schema.ts
var SITE = site.url;
var LOGO = new URL(site.logo, SITE).href;
/** Homepage graph: Organization + WebSite + WebPage. Emit this on `/`. */
var homepageSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Organization",
			"@id": `${SITE}/#organization`,
			name: site.name,
			url: `${SITE}/`,
			description: site.description,
			logo: {
				"@type": "ImageObject",
				"@id": `${SITE}/#logo`,
				url: LOGO,
				contentUrl: LOGO,
				caption: site.name
			},
			...site.sameAs.length ? { sameAs: site.sameAs } : {}
		},
		{
			"@type": "WebSite",
			"@id": `${SITE}/#website`,
			url: `${SITE}/`,
			name: site.name,
			description: site.description,
			publisher: { "@id": `${SITE}/#organization` },
			inLanguage: "en"
		},
		{
			"@type": "WebPage",
			"@id": `${SITE}/#webpage`,
			url: `${SITE}/`,
			name: site.name,
			description: site.description,
			isPartOf: { "@id": `${SITE}/#website` },
			about: { "@id": `${SITE}/#organization` },
			inLanguage: "en"
		}
	]
};
/**
* Build WebPage + BreadcrumbList JSON-LD for a static marketing page.
* `path` is the route under the site root, e.g. "about".
*/
function webPageSchema(opts) {
	const url = `${SITE}/${opts.path.replace(/^\/|\/$/g, "")}/`;
	const inLanguage = opts.inLanguage ?? "en";
	return {
		"@context": "https://schema.org",
		"@graph": [{
			"@type": "WebPage",
			"@id": `${url}#webpage`,
			url,
			name: opts.title,
			description: opts.description,
			image: opts.image ? new URL(opts.image, SITE).href : LOGO,
			isPartOf: { "@id": `${SITE}/#website` },
			about: { "@id": `${SITE}/#organization` },
			inLanguage
		}, {
			"@type": "BreadcrumbList",
			"@id": `${url}#breadcrumb`,
			itemListElement: [{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: `${SITE}/`
			}, {
				"@type": "ListItem",
				position: 2,
				name: opts.title,
				item: url
			}]
		}]
	};
}
/**
* Build Article + BreadcrumbList JSON-LD for a dynamic post/resource page.
* `path` is the route under the site root, e.g. "resources/my-post".
* `section` is the breadcrumb parent label + its path, e.g. ["Resources", "resources"].
*/
function articleSchema(opts) {
	const url = `${SITE}/${opts.path.replace(/^\/|\/$/g, "")}/`;
	const breadcrumb = [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: `${SITE}/`
		},
		...opts.breadcrumbParent ? [{
			"@type": "ListItem",
			position: 2,
			name: opts.breadcrumbParent.name,
			item: `${SITE}/${opts.breadcrumbParent.path.replace(/^\/|\/$/g, "")}/`
		}] : [],
		{
			"@type": "ListItem",
			position: opts.breadcrumbParent ? 3 : 2,
			name: opts.title,
			item: url
		}
	];
	return {
		"@context": "https://schema.org",
		"@graph": [{
			"@type": "Article",
			"@id": `${url}#article`,
			headline: opts.title,
			description: opts.description,
			image: opts.image ? new URL(opts.image, SITE).href : LOGO,
			datePublished: opts.datePublished,
			dateModified: opts.dateModified ?? opts.datePublished,
			author: { "@id": `${SITE}/#organization` },
			publisher: { "@id": `${SITE}/#organization` },
			mainEntityOfPage: url,
			url,
			...opts.articleSection?.length ? { articleSection: opts.articleSection } : {},
			...opts.keywords ? { keywords: opts.keywords } : {},
			isPartOf: { "@id": `${SITE}/#website` },
			inLanguage: "en"
		}, {
			"@type": "BreadcrumbList",
			"@id": `${url}#breadcrumb`,
			itemListElement: breadcrumb
		}]
	};
}
//#endregion
export { $$OptimizedPicture as i, homepageSchema as n, webPageSchema as r, articleSchema as t };
