import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
//#region src/content/components/nav-inline.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		a: "a",
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
			"Site navigation for AroundTheIsla when the desktop bar should show ",
			createVNode(_components.strong, { children: "inline links" }),
			" instead of a hamburger. Matches the ",
			createVNode(_components.a, {
				href: "https://www.figma.com/design/ypu3FsyfkPDzChjuarqlF5/Website---AroundTheIsla?node-id=222-520&m=dev",
				children: "Figma Home ALT"
			}),
			" header: wordmark on the left, bold ",
			createVNode(_components.strong, { children: "Work" }),
			" / ",
			createVNode(_components.strong, { children: "About" }),
			" on the right. Below ",
			createVNode(_components.code, { children: "md" }),
			", the two-line hamburger and full-screen overlay from ",
			createVNode(_components.code, { children: "NavSimple" }),
			" take over."
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
							children: " NavInline "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/NavInline.astro\""
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
							children: "NavInline"
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
			createVNode(_components.code, { children: "NavSimple" }),
			"."
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"To use this as the site header, change the import in ",
			createVNode(_components.code, { children: "src/layouts/Layout.astro" }),
			":"
		] }),
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
			children: createVNode(_components.code, { children: createVNode(_components.span, {
				class: "line",
				children: createVNode(_components.span, {
					style: { color: "#E1E4E8" },
					children: "import Nav from \"../components/NavInline.astro\";  // was: NavSimple.astro"
				})
			}) })
		}),
		"\n",
		createVNode(_components.p, { children: [createVNode(_components.code, { children: "NavSimple" }), " stays available for the always-hamburger treatment."] }),
		"\n",
		createVNode(_components.h2, {
			id: "behavior",
			children: "Behavior"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: [
					"Desktop (",
					createVNode(_components.code, { children: "md+" }),
					"):"
				] }),
				" inline primary links; hamburger is not rendered in the layout (",
				createVNode(_components.code, { children: "md:hidden" }),
				")."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "Mobile:" }), " toggle opens/closes the overlay; Esc closes and returns focus to the button."] }),
			"\n",
			createVNode(_components.li, { children: [
				"Panel uses ",
				createVNode(_components.code, { children: "role=\"dialog\"" }),
				" with a focus trap while open; body scroll is locked."
			] }),
			"\n",
			createVNode(_components.li, { children: "Resizing to desktop while open closes the drawer." }),
			"\n",
			createVNode(_components.li, { children: "Reduced motion: opacity fade instead of the clip reveal." }),
			"\n",
			createVNode(_components.li, { children: "Clicking a drawer link closes the overlay." }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "NavInline",
	"description": "Wordmark + bold inline links on desktop; hamburger overlay below md. Figma Home ALT desktop bar.",
	"category": "layout",
	"order": 24,
	"sourceFile": "src/components/NavInline.astro",
	"status": "stable",
	"related": [
		"NavSimple",
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
var url = "src/content/components/nav-inline.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/nav-inline.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/nav-inline.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
