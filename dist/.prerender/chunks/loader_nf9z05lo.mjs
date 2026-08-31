import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/images/loader-palm.svg?url
var loader_palm_default = "/_astro/loader-palm.Do-ZHviI.svg";
//#endregion
//#region src/content/components/loader.mdx
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
			"Site intro loader from the Figma Loader frame: a blank stage with the palm mark centered. Wired into ",
			createVNode(_components.code, { children: "Layout" }),
			" by default; dismisses after ",
			createVNode(_components.code, { children: "window" }),
			" load (honoring a minimum dwell) and skips on return visits within the same session."
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
			label: "Centered mark on stage",
			align: "center",
			children: createVNode("div", {
				class: "flex min-h-48 w-full items-center justify-center bg-panel text-fg",
				children: createVNode("img", {
					src: loader_palm_default,
					alt: "",
					width: "54",
					height: "84",
					class: "block size-auto text-fg"
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
				name: "minDuration",
				type: "number",
				default: "800",
				description: "Minimum visible time in ms, even if the document is already ready. Matches --duration-default."
			},
			{
				name: "oncePerSession",
				type: "boolean",
				default: "true",
				description: "Skip on return visits within the same browser session."
			},
			{
				name: "class",
				type: "string",
				description: "Extra classes on the overlay root."
			}
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "layout",
			children: "Layout"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Pass ",
			createVNode(_components.code, { children: "skipLoader" }),
			" on ",
			createVNode(_components.code, { children: "Layout" }),
			" to opt a page out (useful for docs or error pages). The overlay is otherwise included on every page."
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
				"Covers the viewport with ",
				createVNode(_components.code, { children: "bg-panel" }),
				" / ",
				createVNode(_components.code, { children: "text-fg" }),
				" so themes invert correctly."
			] }),
			"\n",
			createVNode(_components.li, { children: "Palm mark breathes gently while waiting; reduced-motion users get a static mark and an immediate exit." }),
			"\n",
			createVNode(_components.li, { children: "Locks document scroll while visible; restores on dismiss." }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "role=\"status\"" }),
				" + visually hidden “Loading”; ",
				createVNode(_components.code, { children: "inert" }),
				" while covering the page."
			] }),
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
	"title": "Loader",
	"description": "Full-viewport intro screen with the centered palm mark — fades out once the page is ready.",
	"category": "block",
	"order": 45,
	"sourceFile": "src/components/Loader.astro",
	"status": "stable",
	"related": ["Layout"]
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
			"slug": "layout",
			"text": "Layout"
		},
		{
			"depth": 2,
			"slug": "behavior",
			"text": "Behavior"
		}
	];
}
var url = "src/content/components/loader.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/loader.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/loader.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
