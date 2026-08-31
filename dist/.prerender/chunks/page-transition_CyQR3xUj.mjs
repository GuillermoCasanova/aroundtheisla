import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/content/components/page-transition.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"A covering ",
			createVNode(_components.code, { children: "div" }),
			" that fades the canvas in and out when the visitor follows an internal link. Wired into ",
			createVNode(_components.code, { children: "Layout" }),
			" and ",
			createVNode(_components.code, { children: "PlainLayout" }),
			". It does not enable Astro’s client router — the next page still loads normally; the overlay just hides the swap."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Static composition — the live overlay only runs on a full page load via ",
			createVNode(_components.code, { children: "Layout" }),
			"."
		] }),
		"\n",
		createVNode($$Preview, {
			label: "Covering canvas",
			align: "center",
			children: createVNode("div", {
				class: "min-h-48 w-full bg-canvas",
				"aria-hidden": "true"
			})
		}),
		"\n",
		createVNode(_components.h2, {
			id: "props",
			children: "Props"
		}),
		"\n",
		createVNode($$PropsTable, { props: [{
			name: "class",
			type: "string",
			description: "Extra classes on the overlay root."
		}] }),
		"\n",
		createVNode(_components.h2, {
			id: "behavior",
			children: "Behavior"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Intercepts same-origin ",
				createVNode(_components.code, { children: "<a>" }),
				" clicks (capture phase), fades the overlay in, then assigns the new URL."
			] }),
			"\n",
			createVNode(_components.li, { children: "The destination page starts covered when arriving from a transition, then fades out." }),
			"\n",
			createVNode(_components.li, { children: [
				"Skips modifier-key clicks, new tabs, downloads, hashes, ",
				createVNode(_components.code, { children: "mailto" }),
				" / ",
				createVNode(_components.code, { children: "tel" }),
				", and links marked ",
				createVNode(_components.code, { children: "data-no-transition" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "prefers-reduced-motion: reduce" }), " skips the overlay and navigates immediately."] }),
			"\n",
			createVNode(_components.li, { children: [
				"Without JS, a ",
				createVNode(_components.code, { children: "<noscript>" }),
				" rule hides the overlay so the page stays usable."
			] }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "PageTransition",
	"description": "Full-viewport fade overlay between same-origin navigations — no client router.",
	"category": "layout",
	"order": 7,
	"sourceFile": "src/components/PageTransition.astro",
	"status": "stable",
	"related": ["Layout", "Loader"]
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
		}
	];
}
var url = "src/content/components/page-transition.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/page-transition.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/page-transition.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
