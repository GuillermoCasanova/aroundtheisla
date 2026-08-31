import { f as $$Button } from "./Layout_Dlmeugkd.mjs";
import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
import { t as $$CardFeatured } from "./CardFeatured_CKhO3Gk8.mjs";
//#region src/content/components/card-featured.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: "A flexible content card with title, description, optional eyebrow label, optional media that bleeds to the bottom edge, and an optional action area. Colors and borders use semantic tokens, so the card flips automatically in dark mode." }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "With eyebrow + button",
			align: "start",
			children: createVNode("div", {
				class: "w-full max-w-md",
				children: createVNode($$CardFeatured, {
					title: "Design content structures your way.",
					description: "Full control with a streamlined, API-first experience.",
					border: "all",
					children: [createVNode("span", {
						slot: "eyebrow",
						children: "Schema Builder"
					}), createVNode($$Button, {
						slot: "button",
						label: "Read docs",
						href: "/docs",
						variant: "secondary"
					})]
				})
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Plain — no eyebrow, no button",
			align: "start",
			children: createVNode("div", {
				class: "w-full max-w-md",
				children: createVNode($$CardFeatured, {
					title: "Learn more about our approach.",
					description: "Straightforward, no surprises.",
					border: "all"
				})
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Borders: y only",
			align: "start",
			children: createVNode("div", {
				class: "w-full max-w-md",
				children: createVNode($$CardFeatured, {
					title: "Build faster with our REST API.",
					description: "Simple, well-documented endpoints.",
					border: "y",
					titleTag: "h2",
					children: createVNode("span", {
						slot: "eyebrow",
						children: "API"
					})
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
				name: "title",
				type: "string",
				description: "Card heading text. Heading element is omitted entirely when not set."
			},
			{
				name: "description",
				type: "string",
				description: "Body text below the title. Omitted when not set."
			},
			{
				name: "border",
				type: "\"all\" | \"y\" | \"x\" | \"none\"",
				default: "\"all\"",
				description: "Which borders to render, all using border-stroke."
			},
			{
				name: "titleTag",
				type: "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\"",
				default: "\"h3\"",
				description: "Semantic heading level for the title."
			},
			{
				name: "titleClass",
				type: "string",
				default: "\"h3\"",
				description: "Class applied to the title element — controls visual size."
			},
			{
				name: "class",
				type: "string",
				default: "\"\"",
				description: "Additional classes on the outer wrapper."
			}
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "slots",
			children: "Slots"
		}),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "Slot" }),
					"\n",
					createVNode(_components.th, { children: "Purpose" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			createVNode(_components.tbody, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "eyebrow" }) }),
					"\n",
					createVNode(_components.td, { children: "Small label above the title. Only rendered when content is provided." }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "media" }) }),
					"\n",
					createVNode(_components.td, { children: "Image or video that bleeds flush to the bottom edge of the card." }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "button" }) }),
					"\n",
					createVNode(_components.td, { children: "Action area below description. Only rendered when content is provided." }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"All three slots use ",
			createVNode(_components.code, { children: "Astro.slots.has(...)" }),
			" at build time, so nothing renders (and no empty wrapper is emitted) when a slot is unused."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "mechanism",
			children: "Mechanism"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"The eyebrow slot is wrapped in a ",
				createVNode(_components.code, { children: "text-body-sm text-fg-muted" }),
				" container by default. Pass richer content (a badge, icon + text) and it takes over."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"When the ",
				createVNode(_components.code, { children: "media" }),
				" slot has content, bottom padding drops to ",
				createVNode(_components.code, { children: "pb-0" }),
				" so the media sits flush. Otherwise ",
				createVNode(_components.code, { children: "pb-8" }),
				" keeps spacing consistent."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The ",
				createVNode(_components.code, { children: "border" }),
				" prop maps to ",
				createVNode(_components.code, { children: "border" }),
				", ",
				createVNode(_components.code, { children: "border-y" }),
				", ",
				createVNode(_components.code, { children: "border-x" }),
				", or no border — always using the theme’s ",
				createVNode(_components.code, { children: "--color-stroke" }),
				" token."
			] }),
			"\n",
			createVNode(_components.li, { children: "Title is fully optional — pass nothing and no heading element renders." }),
			"\n"
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
							children: " CardFeatured "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/CardFeatured.astro\""
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
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "import"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " Button "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/Button.astro\""
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
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "import"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " { Image } "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"astro:assets\""
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
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "import"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " screenshot "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@images/feature-1.webp\""
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
					children: [createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "<"
					}), createVNode(_components.span, {
						style: { color: "#79B8FF" },
						children: "CardFeatured"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  title"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Design content structures your way.\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  description"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Full control with a streamlined, API-first experience.\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  border"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"all\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: ">"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "span"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " slot"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"eyebrow\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">Schema Builder</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "span"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  {"
					}), createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "/* media slot takes any markup; prefer <Image> from astro:assets for"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "      raster screenshots so the build emits an optimized, sized /_astro/* file */"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "}"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  <"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Image"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " slot"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"media\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " src"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={screenshot} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "alt"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Schema builder interface\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " loading"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"lazy\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " decoding"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"async\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " />"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "</"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "CardFeatured"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">"
						})
					]
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
							children: "CardFeatured"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " title"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Build faster with our REST API.\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " description"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"...\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " border"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"y\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " titleTag"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"h2\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "span"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " slot"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"eyebrow\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">API</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "span"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  <"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Button"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " slot"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"button\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " href"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"/docs\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">Read docs</"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Button"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "</"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "CardFeatured"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">"
						})
					]
				})
			] })
		}),
		"\n",
		createVNode(_components.h2, {
			id: "notes",
			children: "Notes"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"The card itself is not a link — wrap it with ",
				createVNode(_components.code, { children: "<Clickable>" }),
				" if the whole card should navigate."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Colors use semantic tokens, so dropping the card inside ",
				createVNode(_components.code, { children: "[data-theme=\"dark\"]" }),
				" automatically flips its surface, border, and text."
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
	"title": "CardFeatured",
	"description": "Content card with optional eyebrow, media, and button area, driven by semantic theme tokens.",
	"category": "block",
	"order": 10,
	"sourceFile": "src/components/CardFeatured.astro",
	"status": "stable",
	"related": [
		"CardIcon",
		"Clickable",
		"SliderBasicMap"
	]
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
			"slug": "slots",
			"text": "Slots"
		},
		{
			"depth": 2,
			"slug": "mechanism",
			"text": "Mechanism"
		},
		{
			"depth": 2,
			"slug": "usage",
			"text": "Usage"
		},
		{
			"depth": 2,
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/card-featured.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/card-featured.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/card-featured.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
