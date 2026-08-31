import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
//#region src/content/components/nav-simple.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"Site navigation for AroundTheIsla: a brand wordmark on the left and a two-line hamburger on the right. The hamburger is visible from desktop down — there is no separate desktop link row. Opening it reveals a ",
			createVNode(_components.strong, { children: "full-screen black overlay" }),
			" that animates down from the top, with links centered in the viewport. For desktop inline links instead, use ",
			createVNode(_components.code, { children: "NavInline" }),
			"."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "usage",
			children: "Usage"
		}),
		"\n",
		createVNode(_components.pre, {
			class: "astro-code github-dark",
			style: {
				backgroundColor: "#24292e",
				color: "#e1e4e8",
				overflowX: "auto"
			},
			tabindex: "0",
			"data-language": "astro",
			children: createVNode(_components.code, { children: [
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "---"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "import"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " NavSimple "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/NavSimple.astro\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ";"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "---"
					})
				}),
				"\n",
				createVNode(_components.span, { class: "line" }),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "<"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "NavSimple"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " />"
						})
					]
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Optional props: ",
			createVNode(_components.code, { children: "brand" }),
			", ",
			createVNode(_components.code, { children: "homeHref" }),
			", ",
			createVNode(_components.code, { children: "links" }),
			", ",
			createVNode(_components.code, { children: "cta" }),
			", and ",
			createVNode(_components.code, { children: "class" }),
			". Same ",
			createVNode(_components.code, { children: "announcement" }),
			" slot as ",
			createVNode(_components.code, { children: "Nav" }),
			" / ",
			createVNode(_components.code, { children: "NavMorph" }),
			"."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "behavior",
			children: "Behavior"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "Toggle opens/closes the overlay; Esc closes and returns focus to the button." }),
			"\n",
			createVNode(_components.li, { children: [
				"Panel uses ",
				createVNode(_components.code, { children: "role=\"dialog\"" }),
				" with a focus trap while open; body scroll is locked."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Overlay reveals via ",
				createVNode(_components.code, { children: "clip-path" }),
				" from the top; link stack eases into the vertical center."
			] }),
			"\n",
			createVNode(_components.li, { children: "Reduced motion: opacity fade instead of the clip reveal." }),
			"\n",
			createVNode(_components.li, { children: "Clicking a link closes the overlay." }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "NavSimple",
	"description": "Minimal wordmark + hamburger that opens a full-screen black overlay at every breakpoint.",
	"category": "layout",
	"order": 23,
	"sourceFile": "src/components/NavSimple.astro",
	"status": "stable",
	"related": [
		"NavInline",
		"Nav",
		"NavMorph",
		"NavMega",
		"AnnouncementBanner"
	]
};
function getHeadings() {
	return [{
		"depth": 2,
		"slug": "usage",
		"text": "Usage"
	}, {
		"depth": 2,
		"slug": "behavior",
		"text": "Behavior"
	}];
}
var url = "src/content/components/nav-simple.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/nav-simple.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/nav-simple.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
