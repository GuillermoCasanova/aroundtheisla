import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/content/components/section-home-slideshow.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"Pinned horizontal project strip from the Figma “left right slideshow” frame. Pass ",
			createVNode(_components.code, { children: "slides" }),
			" from the CMS page section (or any ",
			createVNode(_components.code, { children: "{ image, href? }" }),
			" list)."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode(_components.p, { children: "The live pin/scrub needs a full page scroll, so the showcase shows the static first frame." }),
		"\n",
		createVNode($$Preview, {
			label: "Static first frame (scroll behavior on a page that includes this section)",
			align: "stretch",
			children: createVNode("div", {
				class: "relative h-80 w-full overflow-hidden bg-canvas",
				children: createVNode("p", {
					class: "absolute inset-x-0 top-4 px-4 text-body-sm text-fg-muted",
					children: createVNode(_components.p, { children: "SectionHomeSlideshow — preview is static; visit a page that includes this section for the pinned scroll swipe." })
				})
			})
		}),
		"\n",
		createVNode(_components.h2, {
			id: "props",
			children: "Props"
		}),
		"\n",
		createVNode($$PropsTable, { props: [
			{
				name: "slides",
				type: "SlideshowSlide[]",
				description: "Ordered photographs. Each item is an imported asset or CMS image, with an optional project href."
			},
			{
				name: "ariaLabel",
				type: "string",
				default: "\"Project photographs\"",
				description: "Accessible name for the section landmark."
			},
			{
				name: "class",
				type: "string",
				description: "Extra classes on the section root."
			}
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "behavior",
			children: "Behavior"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"GSAP ScrollTrigger pins the viewport and scrubs the track ",
				createVNode(_components.code, { children: "x" }),
				" so images move ",
				createVNode(_components.strong, { children: "right → left" }),
				" as the user scrolls down."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"First image is the LCP candidate (",
				createVNode(_components.code, { children: "loading=\"eager\"" }),
				" + ",
				createVNode(_components.code, { children: "fetchpriority=\"high\"" }),
				")."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "prefers-reduced-motion: reduce" }), " skips the pin and falls back to native horizontal scroll-snap."] }),
			"\n",
			createVNode(_components.li, { children: [
				"Full-bleed on purpose — does not wrap ",
				createVNode(_components.code, { children: "SectionMain" }),
				", so the pin matches the edge-to-edge Figma composition."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "tokens",
			children: "Tokens"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Surfaces: ",
				createVNode(_components.code, { children: "bg-canvas" }),
				", veil ",
				createVNode(_components.code, { children: "bg-panel-muted/40" })
			] }),
			"\n",
			createVNode(_components.li, { children: "Type/role colors inherit from the page theme" }),
			"\n",
			createVNode(_components.li, { children: "Motion: GSAP scrub (no hardcoded duration/easing in CSS beyond the reduced-motion path)" }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "SectionHomeSlideshow",
	"description": "Full-bleed homepage gallery — vertical scroll pins the frame and swipes project photographs right to left.",
	"category": "pattern",
	"order": 12,
	"sourceFile": "src/components/SectionHomeSlideshow.astro",
	"status": "stable",
	"related": ["SectionMain", "Loader"]
};
function getHeadings() {
	return [
		{
			"depth": 2,
			"slug": "preview",
			"text": "Preview"
		},
		{
			"depth": 2,
			"slug": "props",
			"text": "Props"
		},
		{
			"depth": 2,
			"slug": "behavior",
			"text": "Behavior"
		},
		{
			"depth": 2,
			"slug": "tokens",
			"text": "Tokens"
		}
	];
}
var url = "src/content/components/section-home-slideshow.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/section-home-slideshow.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/section-home-slideshow.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
