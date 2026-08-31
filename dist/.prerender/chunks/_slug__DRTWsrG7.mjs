import { f as getCollection, g as __exportAll, t as $$Layout, u as site } from "./Layout_HkwJUfDp.mjs";
import { M as createAstro, N as createComponent, h as renderTemplate, i as renderScript, s as renderComponent, x as addAttribute, y as maybeRenderHead } from "./server_Dyhk0ghK.mjs";
import { t as articleSchema } from "./schema_B4-80NZX.mjs";
import { n as isCmsImage, t as $$ImageLoader } from "./ImageLoader_CnoJpe-K.mjs";
//#region src/components/ProjectSize.astro
createAstro("https://example.com");
var $$ProjectSize = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ProjectSize;
	const { label = "Photograph size", value = "large", class: className } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div data-project-size role="radiogroup"${addAttribute(label, "aria-label")}${addAttribute(["flex items-center gap-4", className], "class:list")} data-astro-cid-deeecapv> ${[
		{
			id: "small",
			label: "Small"
		},
		{
			id: "medium",
			label: "Medium"
		},
		{
			id: "large",
			label: "Large"
		}
	].map((size) => renderTemplate`<button type="button" role="radio"${addAttribute(size.id, "data-project-size-option")}${addAttribute(size.id === value ? "true" : "false", "aria-checked")}${addAttribute(size.id === value ? 0 : -1, "tabindex")} class="min-h-11 text-body-md leading-none text-fg-muted transition-colors duration-default-quarter hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus" data-astro-cid-deeecapv> ${size.label} </button>`)} </div> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/ProjectSize.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/ProjectSize.astro", void 0);
//#endregion
//#region src/components/SectionProject.astro
createAstro("https://example.com");
var $$SectionProject = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectionProject;
	const { title, description, credits, cover, coverAlt, gallery = [], related = [], class: className } = Astro.props;
	const images = gallery.length > 0 ? gallery : [cover];
	const resolvedCoverAlt = coverAlt ?? (isCmsImage(cover) ? cover.alt : `${title} cover photograph`);
	const railCopy = description.trim();
	const footerCredits = (credits ?? "").trim();
	function photoCaption(image) {
		return isCmsImage(image) ? image.caption : void 0;
	}
	return renderTemplate` ${maybeRenderHead($$result)}<section id="project-gallery" data-project data-size="large"${addAttribute(`${title} photographs`, "aria-label")}${addAttribute(["relative bg-canvas text-fg pt-20", className], "class:list")} data-astro-cid-pxh4zewh> <div data-project-frame data-astro-cid-pxh4zewh> <header data-project-rail class="md:section-pt-sm md:pb-6" data-astro-cid-pxh4zewh> <div data-project-rail-top data-astro-cid-pxh4zewh> <p class="inline-flex min-h-11 items-center" data-astro-cid-pxh4zewh> <a href="/work" class="group inline-flex min-h-11 items-center gap-2 text-body-lg font-bold text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus" data-astro-cid-pxh4zewh> <svg class="h-3 w-2 shrink-0" viewBox="0 0 8 13" fill="none" aria-hidden="true" data-astro-cid-pxh4zewh> <path d="M7 1L1.5 6.5L7 12" stroke="currentColor" stroke-width="1.4" stroke-linecap="square" data-astro-cid-pxh4zewh></path> </svg> <span class="group-hover:underline underline-offset-2" data-astro-cid-pxh4zewh>Work</span> </a> </p> <div data-project-rail-heading data-astro-cid-pxh4zewh> <h1 class="min-w-0 break-words font-heading text-[clamp(1.75rem,4vw,2.5rem)] leading-none font-bold tracking-tight text-fg" data-astro-cid-pxh4zewh> ${title} </h1> ${renderComponent($$result, "ProjectSize", $$ProjectSize, {
		"class": "max-lg:hidden",
		"data-astro-cid-pxh4zewh": true
	})} </div> </div> ${railCopy && renderTemplate`<p data-project-copy class="text-[0.72rem] leading-normal font-light whitespace-pre-line text-secondary" data-astro-cid-pxh4zewh> ${railCopy} </p>`} </header> <div data-project-photos class="min-w-0" data-astro-cid-pxh4zewh> ${images.map((image, i) => {
		const caption = photoCaption(image);
		return renderTemplate`<figure data-project-photo class="relative m-0 w-full" data-astro-cid-pxh4zewh> ${renderComponent($$result, "ImageLoader", $$ImageLoader, {
			"src": isCmsImage(image) ? image.src : image,
			"alt": i === 0 ? resolvedCoverAlt : `${title} — photograph ${i + 1}`,
			"width": image.width,
			"height": image.height,
			"class": "w-full",
			"imgClass": "block h-auto w-full",
			"widths": [
				480,
				720,
				960,
				1280,
				1600,
				2e3
			],
			"sizes": "(max-width: 768px) calc(100vw - 2.5rem), min(60rem, calc(100vw - 20.75rem))",
			"loading": i === 0 ? "eager" : "lazy",
			"fetchpriority": i === 0 ? "high" : void 0,
			"decoding": i === 0 ? "sync" : "async",
			"stage": i !== 0,
			"placeholder": isCmsImage(image) ? image.lqip : void 0,
			"data-astro-cid-pxh4zewh": true
		})} ${caption && renderTemplate`<figcaption class="mt-3 max-w-[10.5rem] text-body-sm leading-normal text-fg/30 xl:absolute xl:right-0 xl:bottom-0 xl:mt-0 xl:translate-x-[calc(100%+(var(--spacing)*5))]" data-astro-cid-pxh4zewh> ${caption} </figcaption>`} </figure>`;
	})} </div> </div> ${footerCredits && renderTemplate`<footer data-project-credits class="flex w-full flex-col items-center" data-astro-cid-pxh4zewh> <div class="flex w-full max-w-[25.3rem] flex-col items-center text-center" data-astro-cid-pxh4zewh> <h2 class="text-body-sm font-normal text-fg" data-astro-cid-pxh4zewh>Project Credits</h2> <p class="mt-4 text-[0.72rem] leading-normal font-light whitespace-pre-line text-fg" data-astro-cid-pxh4zewh> ${footerCredits} </p> </div> <div class="mt-[clamp(calc(var(--spacing)*16),10vw,calc(var(--spacing)*30))] h-px w-5 bg-fg" aria-hidden="true" data-astro-cid-pxh4zewh></div> </footer>`} </section>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/SectionProject.astro", void 0);
//#endregion
//#region src/lib/projects.ts
async function getPublishedProjects() {
	return (await getCollection("projects")).sort((a, b) => a.data.order - b.data.order);
}
/** Gallery stills for a project; falls back to the cover. */
function getProjectGallery(entry) {
	return entry.data.gallery.length > 0 ? entry.data.gallery : [entry.data.cover];
}
//#endregion
//#region src/pages/project/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://example.com");
async function getStaticPaths() {
	const projects = await getPublishedProjects();
	return projects.map((entry) => ({
		params: { slug: entry.id },
		props: {
			entry,
			related: projects.filter((project) => project.id !== entry.id).map((project) => ({
				title: project.data.title,
				year: project.data.date.getFullYear(),
				href: `/project/${project.id}/`,
				cover: project.data.cover
			}))
		}
	}));
}
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { entry, related } = Astro.props;
	const gallery = getProjectGallery(entry);
	const title = entry.data.seoTitle || site.name;
	const description = entry.data.seoDescription || site.description;
	const image = entry.data.seoImage?.src || entry.data.cover.src;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": title,
		"description": description,
		"image": image,
		"ogType": "article",
		"jsonLd": articleSchema({
			path: `project/${entry.id}`,
			title: `${entry.data.title} — aroundtheisla`,
			description,
			datePublished: entry.data.date.toISOString(),
			image,
			articleSection: ["Work"],
			breadcrumbParent: {
				name: "Work",
				path: "work"
			},
			...entry.data.location ? { keywords: entry.data.location } : {}
		}),
		"theme": "light"
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main id="main"> ${renderComponent($$result, "SectionProject", $$SectionProject, {
		"title": entry.data.title,
		"description": entry.data.description,
		"credits": entry.data.credits,
		"cover": entry.data.cover,
		"coverAlt": entry.data.cover.alt || `${entry.data.title} cover photograph`,
		"gallery": gallery,
		"related": related
	})} </main> ` })}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/pages/project/[slug].astro", void 0);
var $$file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/pages/project/[slug].astro";
var $$url = "/project/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/project/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
