import { a as pageSections, c as $$Footer, d as $$Button, g as __exportAll, i as getPublishedPages, l as $$Seo, n as getFooterCopyright, o as $$SmoothScroll, s as $$PageTransition, t as $$Layout } from "./Layout_HkwJUfDp.mjs";
import { A as unescapeHTML, M as createAstro, N as createComponent, b as renderHead, f as renderSlot, h as renderTemplate, i as renderScript, s as renderComponent, t as spreadAttributes, x as addAttribute, y as maybeRenderHead } from "./server_Dyhk0ghK.mjs";
import { i as $$OptimizedPicture, r as webPageSchema } from "./schema_B4-80NZX.mjs";
import { n as isCmsImage, t as $$ImageLoader } from "./ImageLoader_CnoJpe-K.mjs";
import { toHTML } from "@portabletext/to-html";
//#region src/layouts/PlainLayout.astro
createAstro("https://example.com");
var $$PlainLayout = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$PlainLayout;
	const { title = "aroundtheisla", description, image, ogType, noindex, jsonLd, theme = "light", lang = "en", hideFooter = false } = Astro2.props;
	const gtagId = void 0;
	const copyright = await getFooterCopyright();
	return renderTemplate`<html${addAttribute(lang, "lang")}${addAttribute(theme, "data-theme")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "Seo", $$Seo, {
		"title": title,
		"description": description,
		"ogType": ogType,
		"image": image,
		"noindex": noindex,
		"jsonLd": jsonLd
	})}${gtagId}${renderHead($$result)}</head> <body class="bg-panel text-fg"> ${renderComponent($$result, "SmoothScroll", $$SmoothScroll, {})} <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-intent focus:text-fg-on-intent focus:rounded-sm">
Skip to main content
</a> ${renderSlot($$result, $$slots["default"])} ${!hideFooter && renderTemplate`${renderComponent($$result, "Footer", $$Footer, { "copyright": copyright })}`} ${renderComponent($$result, "PageTransition", $$PageTransition, {})} </body> </html>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/layouts/PlainLayout.astro", void 0);
//#endregion
//#region src/components/HeroBanner.astro
createAstro("https://example.com");
var $$HeroBanner = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$HeroBanner;
	const { image, alt, projectName = "", ariaLabel = "Featured project", priority = true, class: className } = Astro.props;
	const resolvedAlt = alt ?? (isCmsImage(image) ? image.alt : "Around the Isla project photograph");
	const showProjectName = projectName.trim().length > 0;
	const cms = isCmsImage(image);
	return renderTemplate` ${maybeRenderHead($$result)}<section data-hero-banner${addAttribute(ariaLabel, "aria-label")}${addAttribute(["relative isolate min-h-svh w-full overflow-hidden bg-canvas", className], "class:list")}> ${renderComponent($$result, "OptimizedPicture", $$OptimizedPicture, {
		"src": cms ? image.src : image,
		"alt": resolvedAlt,
		"width": image.width,
		"height": image.height,
		"class": "absolute inset-0 size-full object-cover object-center",
		"widths": [
			640,
			960,
			1280,
			1600,
			1920
		],
		"sizes": "100vw",
		"loading": priority ? "eager" : "lazy",
		"fetchpriority": priority ? "high" : void 0,
		"decoding": priority ? "sync" : "async"
	})} ${showProjectName && renderTemplate`<p class="pointer-events-none absolute bottom-[clamp(1.5rem,4vh,2.5rem)] right-[clamp(1.25rem,3vw,2.125rem)] max-w-[min(22rem,70vw)] text-right text-body-xsm uppercase tracking-wide text-fg/60"> ${projectName} </p>`} </section>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/HeroBanner.astro", void 0);
//#endregion
//#region src/components/SectionHomeSlideshow.astro
createAstro("https://example.com");
var $$SectionHomeSlideshow = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectionHomeSlideshow;
	const { slides, ariaLabel = "Project photographs", class: className } = Astro.props;
	return renderTemplate` ${maybeRenderHead($$result)}<section id="home-slideshow" data-home-slideshow${addAttribute(ariaLabel, "aria-label")}${addAttribute(["relative bg-canvas text-fg", className], "class:list")} data-astro-cid-wbj4dlv6> <div data-home-slideshow-viewport class="relative h-svh w-full overflow-hidden" data-astro-cid-wbj4dlv6> <div data-home-slideshow-track class="flex h-full w-max items-end gap-[clamp(1.25rem,3vw,2.875rem)] px-[clamp(1.25rem,2.5vw,2.125rem)] pb-[clamp(2rem,6vh,4.5rem)] pt-[clamp(4.5rem,12vh,7rem)]" data-astro-cid-wbj4dlv6> ${slides.map((slide, i) => {
		const alt = slide.alt ?? (isCmsImage(slide.image) ? slide.image.alt : `Around the Isla project photograph ${i + 1}`);
		const img = renderTemplate`${renderComponent($$result, "ImageLoader", $$ImageLoader, {
			"src": isCmsImage(slide.image) ? slide.image.src : slide.image,
			"alt": alt,
			"width": slide.image.width,
			"height": slide.image.height,
			"class": "absolute inset-0 size-full",
			"imgClass": "absolute inset-0 size-full object-cover transition-[transform,opacity] duration-default group-hover/slide:scale-[1.02] group-focus-visible/slide:scale-[1.02]",
			"preserveAspect": false,
			"widths": [
				480,
				720,
				960,
				1200
			],
			"sizes": "(max-width: 768px) 70vw, 42vw",
			"loading": i === 0 ? "eager" : "lazy",
			"fetchpriority": i === 0 ? "high" : void 0,
			"decoding": i === 0 ? "sync" : "async",
			"stage": i !== 0,
			"placeholder": isCmsImage(slide.image) ? slide.image.lqip : void 0,
			"data-astro-cid-wbj4dlv6": true
		})}`;
		return renderTemplate`<figure data-home-slideshow-slide class="relative m-0 h-[min(72svh,47rem)] w-[min(42vw,37.5rem)] shrink-0 overflow-hidden" data-astro-cid-wbj4dlv6> ${slide.href ? renderTemplate`<a${addAttribute(slide.href, "href")} class="group/slide absolute inset-0 block outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"${addAttribute(`Open project for photograph ${i + 1}`, "aria-label")} data-astro-cid-wbj4dlv6> ${img} </a>` : img} </figure>`;
	})} </div> </div> </section> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/SectionHomeSlideshow.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/SectionHomeSlideshow.astro", void 0);
//#endregion
//#region src/components/SectionWork.astro
createAstro("https://example.com");
var $$SectionWork = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectionWork;
	const { projects: items, class: className } = Astro.props;
	const tabClass = "cursor-pointer text-body-md text-fg outline-none hover:underline underline-offset-2 focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";
	function padIndex(index) {
		return String(index + 1).padStart(2, "0");
	}
	function coverAlt(item) {
		return isCmsImage(item.cover) ? item.cover.alt || item.title : item.title;
	}
	return renderTemplate`${maybeRenderHead($$result)}<section id="work-gallery" data-work-gallery data-view="grid" aria-label="Work projects"${addAttribute(["relative bg-canvas text-fg pt-20", className], "class:list")} data-astro-cid-spshn2s5> <header data-work-chrome data-astro-cid-spshn2s5> <h1 data-work-title class="h1 font-bold lowercase text-fg" data-astro-cid-spshn2s5>work</h1> <div class="flex items-center gap-4 md:flex-col md:items-start md:gap-2" role="tablist" aria-label="Gallery view" data-astro-cid-spshn2s5> <button type="button" role="tab" id="work-view-grid" data-work-view="grid" aria-controls="work-panel-grid" aria-selected="true" tabindex="0"${addAttribute([tabClass, "font-bold"], "class:list")} data-astro-cid-spshn2s5>
Grid
</button> <button type="button" role="tab" id="work-view-list" data-work-view="list" aria-controls="work-panel-list" aria-selected="false" tabindex="-1"${addAttribute([tabClass, "font-normal"], "class:list")} data-astro-cid-spshn2s5>
List
</button> </div> </header> <div id="work-panel-grid" data-work-panel="grid" role="tabpanel" aria-labelledby="work-view-grid" data-astro-cid-spshn2s5> <ul data-work-grid data-astro-cid-spshn2s5> ${items.map((item, i) => renderTemplate`<li class="min-w-0" data-astro-cid-spshn2s5> <a${addAttribute(item.href, "href")} class="flex h-full flex-col gap-3 outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"${addAttribute(`${item.title}, ${item.year}`, "aria-label")} data-astro-cid-spshn2s5> <div class="relative aspect-[4/5] w-full overflow-hidden" data-astro-cid-spshn2s5> ${renderComponent($$result, "OptimizedPicture", $$OptimizedPicture, {
		"src": isCmsImage(item.cover) ? item.cover.src : item.cover,
		"alt": isCmsImage(item.cover) ? item.cover.alt || item.title : item.title,
		"width": item.cover.width,
		"height": item.cover.height,
		"class": "absolute inset-0 size-full object-cover",
		"widths": [
			360,
			540,
			720,
			960,
			1280
		],
		"sizes": "(max-width: 767px) 46vw, min(48rem, 44vw)",
		"loading": i < 4 ? "eager" : "lazy",
		"fetchpriority": i === 0 ? "high" : void 0,
		"decoding": i === 0 ? "sync" : "async",
		"data-astro-cid-spshn2s5": true
	})} </div> <div class="flex items-baseline justify-between gap-3" data-astro-cid-spshn2s5> <span class="min-w-0 truncate text-body-md font-bold text-fg" data-astro-cid-spshn2s5> ${item.title} </span> </div> </a> </li>`)} </ul> </div> <div id="work-panel-list" data-work-panel="list" role="tabpanel" aria-labelledby="work-view-list" hidden data-astro-cid-spshn2s5> <ol data-work-names data-astro-cid-spshn2s5> ${items.map((item, i) => renderTemplate`<li class="mb-2 last:mb-0 lg:mb-4" data-astro-cid-spshn2s5> <a${addAttribute(item.href, "href")} data-work-name${addAttribute(i, "data-work-index")} data-active="false"${addAttribute(item.title, "aria-label")} class="inline-flex min-h-11 min-w-0 items-baseline gap-2 text-body-md font-normal text-fg outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas lg:flex lg:min-h-0 lg:h2 lg:font-normal" data-astro-cid-spshn2s5> <span aria-hidden="true" class="lg:hidden" data-astro-cid-spshn2s5> ${padIndex(i)}.
</span> <span aria-hidden="true" data-astro-cid-spshn2s5>${item.title}</span> </a> </li>`)} </ol> <div data-work-preview data-astro-cid-spshn2s5> ${items.map((item) => renderTemplate`<div data-work-preview-item${addAttribute(coverAlt(item), "data-alt")} data-active="false" aria-hidden="true" data-astro-cid-spshn2s5> ${renderComponent($$result, "OptimizedPicture", $$OptimizedPicture, {
		"src": isCmsImage(item.cover) ? item.cover.src : item.cover,
		"alt": "",
		"width": item.cover.width,
		"height": item.cover.height,
		"class": "size-full object-cover",
		"widths": [
			540,
			720,
			960,
			1280
		],
		"sizes": "(min-width: 1024px) min(28rem, 28vw), 100vw",
		"loading": "lazy",
		"decoding": "async",
		"data-astro-cid-spshn2s5": true
	})} </div>`)} </div> </div> </section> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/SectionWork.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/SectionWork.astro", void 0);
//#endregion
//#region src/components/SectionAbout.astro
createAstro("https://example.com");
var $$SectionAbout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectionAbout;
	const { paragraphs, instagramHref, instagramHandle, brand, portrait, portraitAlt, caption, class: className } = Astro.props;
	const [intro, ...rest] = paragraphs;
	const introParts = (intro ?? "").split("{handle}");
	const captionParts = caption.split("{handle}");
	const cms = isCmsImage(portrait);
	const resolvedAlt = portraitAlt ?? (cms ? portrait.alt : "Portrait");
	const linkClass = "underline decoration-from-font underline-offset-2 transition-colors duration-default-quarter hover:text-fg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus";
	return renderTemplate`${maybeRenderHead($$result)}<section id="about"${addAttribute(["relative min-h-dvh overflow-hidden bg-panel text-fg", className], "class:list")} aria-labelledby="about-heading">  <div class="relative flex min-h-dvh flex-col lg:block">  <div class="relative z-10 px-9 pt-16 sm:px-12 md:pt-20 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[53%] lg:px-0 lg:pt-[4.5rem] lg:pl-9"> <div class="max-w-[22.6rem] md:my-12 lg:ml-20 md:mt-20"> <div class="space-y-[1em] text-[0.858rem] lowercase leading-[normal] text-fg"> <h1 id="about-heading" class="sr-only">About aroundtheisla</h1> <p> ${introParts[0]}<a${addAttribute(instagramHref, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(linkClass, "class")}>${instagramHandle}</a>${introParts[1]} </p> ${rest.map((paragraph) => renderTemplate`<p>${paragraph}</p>`)} </div> <p class="mt-10 font-heading text-[1.4rem] font-medium leading-none tracking-[-0.11em] text-fg" aria-hidden="true"> ${brand} </p> </div> </div>  <figure class="relative order-2 mx-6 mt-10 aspect-[634/852] overflow-hidden sm:mx-9 lg:absolute lg:top-3 lg:right-[1.5625rem] lg:bottom-[1.375rem] lg:left-[53.2%] lg:order-none lg:mx-0 lg:mt-0 lg:aspect-auto"> ${renderComponent($$result, "OptimizedPicture", $$OptimizedPicture, {
		"src": cms ? portrait.src : portrait,
		"alt": resolvedAlt,
		"width": portrait.width,
		"height": portrait.height,
		"class": "absolute inset-0 h-full w-full object-cover object-[center_18%]",
		"widths": [
			640,
			960,
			1280,
			1600
		],
		"sizes": "(min-width: 1024px) 45vw, 100vw",
		"loading": "eager",
		"fetchpriority": "high",
		"decoding": "async"
	})} </figure>  <p class="relative z-10 order-3 mx-6 mt-4 max-w-[9.5rem] text-[0.625rem] lowercase leading-[normal] text-fg sm:mx-9 lg:absolute lg:bottom-[17px] lg:left-[41.6%] lg:order-none lg:mx-0 lg:mt-0 lg:w-[9.5rem]"> ${captionParts[0]}<a${addAttribute(instagramHref, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(linkClass, "class")}>${instagramHandle}</a>${captionParts[1]} </p>  <p class="relative z-10 order-4 mx-6 mt-8 mb-10 sm:mx-9 lg:absolute lg:bottom-8 lg:left-9 lg:order-none lg:mx-0 lg:mt-0 lg:mb-0"> <a href="/" class="inline-flex min-h-11 items-center text-[1.19rem] lowercase leading-none text-fg transition-colors duration-default-quarter hover:text-fg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus">
← back home
</a> </p> </div> </section>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/SectionAbout.astro", void 0);
//#endregion
//#region src/components/SectionMain.astro
createAstro("https://example.com");
var $$SectionMain = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectionMain;
	const { padding = "md", paddingTop, paddingBottom, contentPadding = "default", contentClass = "", borderTop = false, class: className, ...rest } = Astro.props;
	const top = paddingTop ?? padding;
	const bot = paddingBottom ?? padding;
	const ptClass = {
		none: "",
		xs: "section-pt-xs",
		sm: "section-pt-sm",
		md: "section-pt-md",
		lg: "section-pt-lg",
		xl: "section-pt-xl"
	}[top];
	const pbClass = {
		none: "",
		xs: "section-pb-xs",
		sm: "section-pb-sm",
		md: "section-pb-md",
		lg: "section-pb-lg",
		xl: "section-pb-xl"
	}[bot];
	const contentPaddingClass = {
		none: "px-0",
		default: "px-2 md:px-6"
	}[contentPadding];
	return renderTemplate` ${maybeRenderHead($$result)}<section${spreadAttributes(rest)}${addAttribute([className], "class:list")}> <div class="container-page"> <div${addAttribute([
		ptClass,
		pbClass,
		"flex flex-col relative border-l border-r border-stroke",
		borderTop && "border-t border-stroke",
		contentPaddingClass,
		contentClass
	], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> </div> </section>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/SectionMain.astro", void 0);
//#endregion
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
//#region src/components/Field.astro
createAstro("https://example.com");
var $$Field = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Field;
	const { label, name, type = "text", id, value, placeholder, helper, error, required = false, disabled = false, readonly: readOnly = false, autocomplete, pattern, minlength, maxlength, min, max, step, rows = 4, options, labelHidden = false, class: className } = Astro.props;
	const fieldId = id ?? `field-${name}-${Math.random().toString(36).slice(2, 8)}`;
	const helperId = helper ? `${fieldId}-helper` : void 0;
	const errorId = `${fieldId}-error`;
	const describedBy = [helperId, errorId].filter(Boolean).join(" ") || void 0;
	const isCheckable = type === "checkbox" || type === "radio";
	return renderTemplate`${maybeRenderHead($$result)}<div data-field="component"${addAttribute(type, "data-field-type")}${addAttribute(error ? "true" : void 0, "data-field-invalid")}${addAttribute(["field", className], "class:list")}> ${!isCheckable && renderTemplate`<label${addAttribute(fieldId, "for")}${addAttribute(["field__label", labelHidden && "sr-only"], "class:list")}> ${label} ${required && renderTemplate`<span class="field__required" aria-hidden="true">*</span>`} </label>`} ${type === "textarea" && renderTemplate`<textarea${addAttribute(fieldId, "id")}${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}${addAttribute(disabled, "disabled")}${addAttribute(readOnly, "readonly")}${addAttribute(minlength, "minlength")}${addAttribute(maxlength, "maxlength")}${addAttribute(rows, "rows")}${addAttribute(autocomplete, "autocomplete")}${addAttribute(describedBy, "aria-describedby")}${addAttribute(error ? "true" : void 0, "aria-invalid")} class="field__input">${value}</textarea>`} ${type === "select" && renderTemplate`<select${addAttribute(fieldId, "id")}${addAttribute(name, "name")}${addAttribute(required, "required")}${addAttribute(disabled, "disabled")}${addAttribute(autocomplete, "autocomplete")}${addAttribute(describedBy, "aria-describedby")}${addAttribute(error ? "true" : void 0, "aria-invalid")} class="field__input"> ${renderSlot($$result, $$slots["default"], renderTemplate` ${options?.map((opt) => renderTemplate`<option${addAttribute(opt.value, "value")}${addAttribute(String(value) === String(opt.value), "selected")}> ${opt.label} </option>`)} `)} </select>`} ${isCheckable && renderTemplate`<label class="field__check"> <input${addAttribute(fieldId, "id")}${addAttribute(name, "name")}${addAttribute(type, "type")}${addAttribute(value, "value")}${addAttribute(required, "required")}${addAttribute(disabled, "disabled")}${addAttribute(readOnly, "readonly")}${addAttribute(describedBy, "aria-describedby")}${addAttribute(error ? "true" : void 0, "aria-invalid")}> <span${addAttribute(["field__check-label", labelHidden && "sr-only"], "class:list")}> ${label} ${required && renderTemplate`<span class="field__required" aria-hidden="true">*</span>`} </span> </label>`} ${type !== "textarea" && type !== "select" && !isCheckable && renderTemplate`<input${addAttribute(fieldId, "id")}${addAttribute(name, "name")}${addAttribute(type, "type")}${addAttribute(value, "value")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}${addAttribute(disabled, "disabled")}${addAttribute(readOnly, "readonly")}${addAttribute(autocomplete, "autocomplete")}${addAttribute(pattern, "pattern")}${addAttribute(minlength, "minlength")}${addAttribute(maxlength, "maxlength")}${addAttribute(min, "min")}${addAttribute(max, "max")}${addAttribute(step, "step")}${addAttribute(describedBy, "aria-describedby")}${addAttribute(error ? "true" : void 0, "aria-invalid")} class="field__input">`} ${helper && renderTemplate`<p${addAttribute(helperId, "id")} class="field__helper">${helper}</p>`} <p${addAttribute(errorId, "id")} data-field-error class="field__error" aria-live="polite">${error}</p> </div>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Field.astro", void 0);
//#endregion
//#region src/components/SectionContact.astro
createAstro("https://example.com");
var $$SectionContact = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectionContact;
	const { heading, lede = "", class: className } = Astro.props;
	const contactUrl = "/api/contact";
	return renderTemplate`${renderComponent($$result, "SectionMain", $$SectionMain, {
		"id": "contact",
		"contentClass": "max-w-md mx-auto",
		"class": className
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<header class="mb-6"> <h1 class="h2">${heading}</h1> ${lede && renderTemplate`<p class="mt-2 text-fg-muted">${lede}</p>`} </header> ${renderComponent($$result, "Form", $$Form, {
		"action": contactUrl,
		"method": "POST"
	}, {
		"default": ($$result) => renderTemplate` ${renderComponent($$result, "Field", $$Field, {
			"name": "firstName",
			"label": "First name",
			"type": "text",
			"required": true,
			"autocomplete": "given-name",
			"maxlength": 100
		})} ${renderComponent($$result, "Field", $$Field, {
			"name": "lastName",
			"label": "Last name",
			"type": "text",
			"required": true,
			"autocomplete": "family-name",
			"maxlength": 100
		})} ${renderComponent($$result, "Field", $$Field, {
			"name": "email",
			"label": "Email",
			"type": "email",
			"required": true,
			"autocomplete": "email",
			"maxlength": 254
		})} ${renderComponent($$result, "Button", $$Button, {
			"type": "submit",
			"variant": "primary",
			"withArrow": false
		}, { "default": ($$result) => renderTemplate`
Send
` })}   `,
		"success": ($$result) => renderTemplate`<p>Thanks — we'll be in touch shortly.</p>`,
		"error": ($$result) => renderTemplate`<p>Something went wrong. Please try again.</p>`
	})} ` })}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/SectionContact.astro", void 0);
//#endregion
//#region src/lib/portable-text.ts
function escapeAttr(value) {
	return value.replaceAll("&", "&amp;").replaceAll("\"", "&quot;").replaceAll("<", "&lt;");
}
var link = ({ children, value }) => {
	const href = value?.href ?? "#";
	const external = /^https?:\/\//.test(href);
	const rel = external ? " rel=\"noopener noreferrer\"" : "";
	const target = external ? " target=\"_blank\"" : "";
	return `<a href="${escapeAttr(href)}"${rel}${target}>${children}</a>`;
};
function portableTextToHtml(blocks) {
	if (!Array.isArray(blocks) || blocks.length === 0) return "";
	return toHTML(blocks, { components: { marks: { link } } });
}
//#endregion
//#region src/components/SectionRichText.astro
createAstro("https://example.com");
var $$SectionRichText = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectionRichText;
	const { heading, body, class: className } = Astro.props;
	const html = portableTextToHtml(body);
	return renderTemplate`${renderComponent($$result, "SectionMain", $$SectionMain, {
		"id": "rich-text",
		"contentClass": "max-w-prose",
		"class": className
	}, { "default": ($$result) => renderTemplate`${heading && renderTemplate`${maybeRenderHead($$result)}<h1 class="h2 mb-6">${heading}</h1>`}<div class="prose-doc">${unescapeHTML(html)}</div> ` })}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/SectionRichText.astro", void 0);
//#endregion
//#region src/components/PageSections.astro
createAstro("https://example.com");
var $$PageSections = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PageSections;
	const { sections } = Astro.props;
	return renderTemplate`${sections.map((section) => {
		switch (section._type) {
			case "sctnHero": return renderTemplate`${renderComponent($$result, "HeroBanner", $$HeroBanner, {
				"image": section.image,
				"alt": section.image.alt,
				"projectName": section.projectName
			})}`;
			case "sctnHomeSlideshow": return renderTemplate`${renderComponent($$result, "SectionHomeSlideshow", $$SectionHomeSlideshow, { "slides": section.slides.map((slide) => ({
				image: slide.image,
				alt: slide.image.alt,
				href: slide.href
			})) })}`;
			case "sctnWork": return renderTemplate`${renderComponent($$result, "SectionWork", $$SectionWork, { "projects": section.projects.map((project) => ({
				slug: project.id,
				title: project.title,
				year: new Date(project.date).getFullYear(),
				cover: project.cover,
				href: `/project/${project.id}/`
			})) })}`;
			case "sctnAbout": return renderTemplate`${renderComponent($$result, "SectionAbout", $$SectionAbout, {
				"paragraphs": section.paragraphs,
				"instagramHref": section.instagramHref,
				"instagramHandle": section.instagramHandle,
				"brand": section.brand,
				"portrait": section.portrait,
				"portraitAlt": section.portrait.alt,
				"caption": section.caption
			})}`;
			case "sctnContact": return renderTemplate`${renderComponent($$result, "SectionContact", $$SectionContact, {
				"heading": section.heading,
				"lede": section.lede
			})}`;
			case "sctnRichText": return renderTemplate`${renderComponent($$result, "SectionRichText", $$SectionRichText, {
				"heading": section.heading,
				"body": section.body
			})}`;
			default: return null;
		}
	})}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/PageSections.astro", void 0);
//#endregion
//#region src/pages/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://example.com");
async function getStaticPaths() {
	return (await getPublishedPages()).filter((page) => page.id !== "home").map((page) => ({
		params: { slug: page.id },
		props: { page }
	}));
}
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { page } = Astro.props;
	const title = page.data.seoTitle || page.data.title;
	const description = page.data.seoDescription || "";
	const image = page.data.seoImage?.src;
	const jsonLd = webPageSchema({
		path: page.id,
		title: `${title} — aroundtheisla`,
		description,
		image,
		inLanguage: page.data.lang
	});
	const sections = pageSections(page);
	return renderTemplate`${page.data.layout === "plain" ? renderTemplate`${renderComponent($$result, "PlainLayout", $$PlainLayout, {
		"title": title,
		"description": description,
		"image": image,
		"jsonLd": jsonLd,
		"theme": page.data.theme,
		"lang": page.data.lang,
		"hideFooter": page.data.hideFooter
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main id="main"> ${renderComponent($$result, "PageSections", $$PageSections, { "sections": sections })} </main> ` })}` : renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": title,
		"description": description,
		"image": image,
		"jsonLd": jsonLd,
		"theme": page.data.theme,
		"lang": page.data.lang,
		"hideFooter": page.data.hideFooter
	}, { "default": ($$result) => renderTemplate` <main id="main"> ${renderComponent($$result, "PageSections", $$PageSections, { "sections": sections })} </main> ` })}`}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/pages/[...slug].astro", void 0);
var $$file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/pages/[...slug].astro";
var $$url = "/[...slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };
