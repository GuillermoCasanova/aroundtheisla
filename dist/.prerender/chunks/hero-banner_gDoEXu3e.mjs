import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/content/components/hero-banner.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"Full-bleed photo hero. Pass ",
			createVNode(_components.code, { children: "image" }),
			" from a CMS photograph or an imported asset. Brand + menu stay in ",
			createVNode(_components.code, { children: "NavInline" }),
			" — this component is the media plane only. The homepage itself uses ",
			createVNode(_components.code, { children: "SectionHomeHero" }),
			"."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "props",
			children: "Props"
		}),
		"\n",
		createVNode($$PropsTable, { props: [
			{
				name: "image",
				type: "ImageMetadata | CmsImage",
				description: "Photograph — imported asset or Sanity image."
			},
			{
				name: "alt",
				type: "string",
				description: "Accessible description of the image. Falls back to the CMS alt."
			},
			{
				name: "projectName",
				type: "string",
				default: "\"\"",
				description: "Lower-right label. Pass an empty string to hide it."
			},
			{
				name: "ariaLabel",
				type: "string",
				default: "\"Featured project\"",
				description: "Accessible name for the section landmark."
			},
			{
				name: "priority",
				type: "boolean",
				default: "true",
				description: "LCP treatment — eager load + high fetch priority. Set false when something else owns LCP."
			},
			{
				name: "class",
				type: "string",
				description: "Extra classes on the section root."
			}
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
							children: " HeroBanner "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/HeroBanner.astro\""
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
							children: "HeroBanner"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " image"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={projectCover} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "projectName"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Around 1\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " alt"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Night crowd, film grain\""
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
		createVNode(_components.h2, {
			id: "layout",
			children: "Layout"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Full-bleed on purpose — does not wrap ",
				createVNode(_components.code, { children: "SectionMain" }),
				", so the crop matches the edge-to-edge Figma composition."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Place under a layout whose nav can sit over the photograph (e.g. light type on a dark photo). ",
				createVNode(_components.code, { children: "NavSimple" }),
				" owns the wordmark + menu; do not duplicate them here."
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
			createVNode(_components.li, { children: ["Surface fallback: ", createVNode(_components.code, { children: "bg-canvas" })] }),
			"\n",
			createVNode(_components.li, { children: [
				"Project label: ",
				createVNode(_components.code, { children: "text-fg/60" }),
				", ",
				createVNode(_components.code, { children: "text-body-xsm" }),
				", uppercase (pair with a dark page theme so type stays light on the photo)"
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Spacing: ",
				createVNode(_components.code, { children: "clamp" }),
				" insets aligned with the homepage slideshow gutters"
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
	"title": "HeroBanner",
	"description": "Full-bleed photo hero — viewport-filling image with an optional lower-right project label.",
	"category": "pattern",
	"order": 11,
	"sourceFile": "src/components/HeroBanner.astro",
	"status": "stable",
	"related": [
		"SectionHomeHero",
		"SectionHomeSlideshow",
		"NavInline",
		"NavSimple",
		"Media"
	]
};
function getHeadings() {
	return [
		{
			"depth": 2,
			"slug": "props",
			"text": "Props"
		},
		{
			"depth": 2,
			"slug": "usage",
			"text": "Usage"
		},
		{
			"depth": 2,
			"slug": "layout",
			"text": "Layout"
		},
		{
			"depth": 2,
			"slug": "tokens",
			"text": "Tokens"
		}
	];
}
var url = "src/content/components/hero-banner.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/hero-banner.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/hero-banner.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
