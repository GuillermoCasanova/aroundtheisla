import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, l as renderComponent, m as renderSlot, n as mergeSlots, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { n as $$Image } from "./_astro_assets_CWgiBl4N.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
import { t as $$CardFeatured } from "./CardFeatured_CKhO3Gk8.mjs";
import { t as $$SliderBasic } from "./SliderBasic_C7V0bvne.mjs";
//#region src/components/SliderBasicMap.astro
createAstro("https://example.com");
var $$SliderBasicMap = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SliderBasicMap;
	const { items = [], cardClass = "bg-canvas", titleClass, titleTag, ...sliderProps } = Astro.props;
	return renderTemplate`${renderComponent($$result, "SliderBasic", $$SliderBasic, { ...sliderProps }, { "default": ($$result) => renderTemplate`${items.map((item) => renderTemplate`${renderComponent($$result, "CardFeatured", $$CardFeatured, {
		"title": item.title,
		"description": item.description,
		"border": "all",
		"class": cardClass,
		"titleClass": item.titleClass ?? titleClass,
		"titleTag": item.titleTag ?? titleTag
	}, mergeSlots({ "eyebrow": ($$result) => renderTemplate`${item.eyebrow && renderTemplate`${maybeRenderHead($$result)}<span>${item.eyebrow}</span>`}` }, item.imageSrc && (typeof item.imageSrc === "string" ? { "media": ($$result) => renderTemplate`<img${addAttribute(item.imageSrc, "src")}${addAttribute(item.imageAlt ?? "", "alt")} class="w-full h-auto mt-4 mask-b-from-30% mask-b-to-95%">` } : { "media": ($$result) => renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"slot": "media",
		"src": item.imageSrc,
		"alt": item.imageAlt ?? "",
		"class": "w-full h-auto mt-4 mask-b-from-30% mask-b-to-95%",
		"loading": "lazy",
		"decoding": "async"
	})}` })))}`)}${renderSlot($$result, $$slots["default"])} ` })}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/SliderBasicMap.astro", void 0);
//#endregion
//#region src/content/components/slider-basic-map.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		a: "a",
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"A thin convenience wrapper around ",
			createVNode(_components.code, { children: "SliderBasic" }),
			" that maps an array of items into default ",
			createVNode(_components.code, { children: "CardFeatured" }),
			" slides. Use it when you have data — typically from a content collection — and don’t need bespoke per-slide markup. All ",
			createVNode(_components.code, { children: "SliderBasic" }),
			" props pass through unchanged via a rest spread."
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"If you need different children per slide, drop into ",
			createVNode(_components.code, { children: "SliderBasic" }),
			" directly. If you need a different card component, see ",
			createVNode(_components.a, {
				href: "#adapting-for-a-different-card",
				children: "Adapting for a different card"
			}),
			" below."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Mapped from inline data",
			align: "stretch",
			children: createVNode("div", {
				class: "w-full",
				children: createVNode($$SliderBasicMap, {
					mobile: 1,
					mobileLandscape: 2,
					tablet: 2,
					desktop: 3,
					gap: "md",
					ariaLabel: "Resources",
					titleClass: "h4",
					titleTag: "h4",
					items: [
						{
							eyebrow: "Guide",
							title: "Getting started",
							description: "Spin up a project in under five minutes."
						},
						{
							eyebrow: "Reference",
							title: "Component API",
							description: "Props, slots, and data attributes for every component."
						},
						{
							eyebrow: "Tutorial",
							title: "Build a landing page",
							description: "Walk through composing sections from the starter kit."
						},
						{
							eyebrow: "Recipe",
							title: "Connect a CMS",
							description: "Wire any headless CMS into the content collection layer."
						},
						{
							eyebrow: "Deep dive",
							title: "Theming with tokens",
							description: "Light/dark in two declarations, no JS."
						}
					]
				})
			})
		}),
		"\n",
		createVNode(_components.h2, {
			id: "props",
			children: "Props"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"All ",
			createVNode(_components.a, {
				href: "/components/slider-basic/",
				children: [createVNode(_components.code, { children: "SliderBasic" }), " props"]
			}),
			" — ",
			createVNode(_components.code, { children: "mobile" }),
			", ",
			createVNode(_components.code, { children: "mobileLandscape" }),
			", ",
			createVNode(_components.code, { children: "tablet" }),
			", ",
			createVNode(_components.code, { children: "desktop" }),
			", ",
			createVNode(_components.code, { children: "gap" }),
			", ",
			createVNode(_components.code, { children: "showArrows" }),
			", ",
			createVNode(_components.code, { children: "showDots" }),
			", ",
			createVNode(_components.code, { children: "draggable" }),
			", ",
			createVNode(_components.code, { children: "ariaLabel" }),
			", ",
			createVNode(_components.code, { children: "id" }),
			", ",
			createVNode(_components.code, { children: "class" }),
			" — plus:"
		] }),
		"\n",
		createVNode($$PropsTable, { props: [
			{
				name: "items",
				type: "SlideItem[]",
				required: true,
				description: "Array of slide data — see SlideItem shape below."
			},
			{
				name: "cardClass",
				type: "string",
				default: "\"bg-canvas\"",
				description: "Class applied to every mapped CardFeatured."
			},
			{
				name: "titleClass",
				type: "string",
				default: "CardFeatured default (\"h3\")",
				description: "Forwarded to every card; per-item override wins."
			},
			{
				name: "titleTag",
				type: "\"h1\" … \"h6\"",
				default: "CardFeatured default (\"h3\")",
				description: "Forwarded to every card; per-item override wins."
			}
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "slideitem-shape",
			children: [createVNode(_components.code, { children: "SlideItem" }), " shape"]
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
			"data-language": "ts",
			children: createVNode(_components.code, { children: [
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "type"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " SlideItem"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " {"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "  title"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "?:"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " string"
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
							style: { color: "#FFAB70" },
							children: "  description"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "?:"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " string"
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
							style: { color: "#FFAB70" },
							children: "  eyebrow"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "?:"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " string"
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
							style: { color: "#FFAB70" },
							children: "  href"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "?:"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " string"
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
							style: { color: "#FFAB70" },
							children: "  imageSrc"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "?:"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " string"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " |"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " ImageMetadata"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ";  "
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "// imported asset (optimized) or URL string"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "  imageAlt"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "?:"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " string"
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
						children: "  // Optional per-item overrides — useful when one slide needs a different"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "  // heading size from the rest."
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "  titleClass"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "?:"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " string"
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
							style: { color: "#FFAB70" },
							children: "  titleTag"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "?:"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"h1\""
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " |"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"h2\""
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " |"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"h3\""
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " |"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"h4\""
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " |"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"h5\""
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " |"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"h6\""
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
						style: { color: "#E1E4E8" },
						children: "};"
					})
				})
			] })
		}),
		"\n",
		createVNode(_components.h2, {
			id: "usage",
			children: "Usage"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "from-an-array",
			children: "From an array"
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
							children: " SliderBasicMap "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/SliderBasicMap.astro\""
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
						children: "SliderBasicMap"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  mobile"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "1"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "}"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  mobileLandscape"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "2"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "}"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  tablet"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "2"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "}"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  desktop"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "3"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "}"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  gap"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"md\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  ariaLabel"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Resources\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  titleClass"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"h4\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  titleTag"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"h4\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "  items"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={["
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "    { eyebrow: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Guide\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", title: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Getting started\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", description: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Spin up a project in under five minutes.\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " },"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "    { eyebrow: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Reference\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", title: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Component API\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", description: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Props, slots, and data attributes for every component.\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " },"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "    { eyebrow: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Tutorial\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", title: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Build a landing page\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", description: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Walk through composing sections from the starter kit.\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " },"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  ]}"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "/>"
					})
				})
			] })
		}),
		"\n",
		createVNode(_components.h3, {
			id: "from-a-content-collection",
			children: "From a content collection"
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
							children: " { getCollection } "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"astro:content\""
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
							children: " SliderBasicMap "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/SliderBasicMap.astro\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ";"
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
							style: { color: "#F97583" },
							children: "const"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " posts"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " await"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " getCollection"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"posts\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ");"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "const"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " items"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " posts."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "map"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(("
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "p"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ") "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "=>"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " ({"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  title: p.data.title,"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  description: p.data.excerpt,"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  eyebrow: p.data.category,"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  imageSrc: p.data.cover, "
					}), createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "// pass the ImageMetadata (schema uses image()) so it's optimized — not .src"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  imageAlt: p.data.title,"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "}));"
					})
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
							children: "SliderBasicMap"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " items"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={items} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "mobile"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "1"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "tablet"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "2"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "desktop"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "3"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "} />"
						})
					]
				})
			] })
		}),
		"\n",
		createVNode(_components.h3, {
			id: "mixing-manual-and-mapped-slides",
			children: "Mixing manual and mapped slides"
		}),
		"\n",
		createVNode(_components.p, { children: [
			createVNode(_components.code, { children: "SliderBasicMap" }),
			" exposes a pass-through ",
			createVNode(_components.code, { children: "<slot />" }),
			" after the mapped items. Anything you put inside renders alongside the auto-generated cards."
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
			children: createVNode(_components.code, { children: [
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "<"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "SliderBasicMap"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " items"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={items}>"
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
							children: "\"Featured\""
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
							children: "\"Hand-tuned slide\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " class"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"bg-panel\""
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
							children: "SliderBasicMap"
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
			id: "equal-heights",
			children: "Equal heights"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Inherits ",
			createVNode(_components.code, { children: "SliderBasic" }),
			"’s flex ",
			createVNode(_components.code, { children: "align-items: stretch" }),
			". The default ",
			createVNode(_components.code, { children: "cardClass" }),
			" deliberately omits ",
			createVNode(_components.code, { children: "h-full" }),
			" — adding it back would break the stretch. See ",
			createVNode(_components.code, { children: "SliderBasic" }),
			" → Equal heights for the full explanation."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "adapting-for-a-different-card",
			children: "Adapting for a different card"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"When you need a ",
			createVNode(_components.code, { children: "SliderBasicMap" }),
			"-style API but with a different card component, copy this file and follow the same structure. The recipe:"
		] }),
		"\n",
		createVNode(_components.ol, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Copy" }),
				" ",
				createVNode(_components.code, { children: "SliderBasicMap.astro" }),
				" → e.g. ",
				createVNode(_components.code, { children: "SliderTeamMap.astro" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Swap the import" }),
				" — replace ",
				createVNode(_components.code, { children: "CardFeatured" }),
				" with the card you want."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: ["Redefine ", createVNode(_components.code, { children: "SlideItem" })] }),
				" to match the new card’s API (e.g. ",
				createVNode(_components.code, { children: "name" }),
				", ",
				createVNode(_components.code, { children: "role" }),
				", ",
				createVNode(_components.code, { children: "photo" }),
				")."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: [
				"Update the ",
				createVNode(_components.code, { children: "items.map(...)" }),
				" block"
			] }), " so each prop/slot maps to the new card’s API."] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: [
				"Keep the ",
				createVNode(_components.code, { children: "<SliderBasic {...sliderProps}>" }),
				" wrapper, the rest spread, and the pass-through ",
				createVNode(_components.code, { children: "<slot />" })
			] }), " — they handle layout, breakpoints, dots, arrows, and drag for free."] }),
			"\n"
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
							children: " SliderBasic "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"./SliderBasic.astro\""
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
							children: " CardTeam "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"./CardTeam.astro\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ";"
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
							style: { color: "#F97583" },
							children: "type"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " SlideItem"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " { "
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "name"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: ":"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " string"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "; "
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "role"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: ":"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " string"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "; "
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "photo"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: ":"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " string"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " };"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "// …same Props shape, but typed against the new card"
					})
				}),
				"\n",
				createVNode(_components.span, { class: "line" }),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "const"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " { "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "items"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "cardClass"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"bg-canvas\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "..."
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "sliderProps"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " } "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " Astro.props;"
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
							children: "SliderBasic"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " {"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "..."
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "sliderProps}>"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  {items."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "map"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(("
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "item"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ") "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "=>"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " ("
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "    <"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "CardTeam"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " name"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "{item.name} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "role"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "{item.role} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "class"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "{cardClass}>"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "      <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "img"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " slot"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"photo\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " src"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "{item.photo} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "alt"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "{item.name} />"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "    </"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "CardTeam"
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
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  ))}"
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
							children: "slot"
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
							children: "SliderBasic"
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
		createVNode(_components.p, { children: [
			"For 4+ variants, consider a generic ",
			createVNode(_components.code, { children: "Card" }),
			" component prop instead of copying. Astro doesn’t make component-as-prop quite as ergonomic as React, so for 2–3 variants the copy approach is usually cleaner and stays grep-able."
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "SliderBasicMap",
	"description": "Convenience wrapper over SliderBasic — maps an array of items to default CardFeatured slides.",
	"category": "pattern",
	"order": 81,
	"sourceFile": "src/components/SliderBasicMap.astro",
	"status": "stable",
	"related": ["SliderBasic", "CardFeatured"]
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
			"depth": 3,
			"slug": "slideitem-shape",
			"text": "SlideItem shape"
		},
		{
			"depth": 2,
			"slug": "usage",
			"text": "Usage"
		},
		{
			"depth": 3,
			"slug": "from-an-array",
			"text": "From an array"
		},
		{
			"depth": 3,
			"slug": "from-a-content-collection",
			"text": "From a content collection"
		},
		{
			"depth": 3,
			"slug": "mixing-manual-and-mapped-slides",
			"text": "Mixing manual and mapped slides"
		},
		{
			"depth": 2,
			"slug": "equal-heights",
			"text": "Equal heights"
		},
		{
			"depth": 2,
			"slug": "adapting-for-a-different-card",
			"text": "Adapting for a different card"
		}
	];
}
var url = "src/content/components/slider-basic-map.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/slider-basic-map.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/slider-basic-map.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
