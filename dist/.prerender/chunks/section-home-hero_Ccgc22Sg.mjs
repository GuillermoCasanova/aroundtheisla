import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/content/components/section-home-hero.mdx
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
			"Figma Home (",
			createVNode(_components.code, { children: "222:21" }),
			"): a white canvas and one photograph, centered. The shot is chosen at random from the homepage’s Sanity hero photographs (up to 5) whenever the page loads. Brand + menu stay in ",
			createVNode(_components.code, { children: "NavInline" }),
			"."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "props",
			children: "Props"
		}),
		"\n",
		createVNode($$PropsTable, { props: [{
			name: "images",
			type: "CmsImage[]",
			required: true,
			description: "Hero photographs from Sanity. One is shown at random."
		}, {
			name: "class",
			type: "string",
			description: "Extra classes on the section root."
		}] }),
		"\n",
		createVNode(_components.h2, {
			id: "layout",
			children: "Layout"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Full-viewport on purpose — does not wrap ",
				createVNode(_components.code, { children: "SectionMain" }),
				", so the crop matches the edge-to-edge Figma composition."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Images are authored on the Home document in Studio (",
				createVNode(_components.code, { children: "Hero photographs" }),
				")."
			] }),
			"\n",
			createVNode(_components.li, { children: "Without JavaScript the first photograph is shown." }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "SectionHomeHero",
	"description": "Homepage frame — one photograph picked at random from the Sanity hero set (up to 5) on each landing.",
	"category": "pattern",
	"order": 10,
	"sourceFile": "src/components/SectionHomeHero.astro",
	"status": "per-project",
	"related": [
		"HeroBanner",
		"SectionHomeSlideshow",
		"NavInline"
	]
};
function getHeadings() {
	return [{
		"depth": 2,
		"slug": "props",
		"text": "Props"
	}, {
		"depth": 2,
		"slug": "layout",
		"text": "Layout"
	}];
}
var url = "src/content/components/section-home-hero.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/section-home-hero.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/section-home-hero.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
