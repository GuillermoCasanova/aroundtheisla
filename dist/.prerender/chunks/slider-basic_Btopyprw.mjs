import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
import { t as $$CardFeatured } from "./CardFeatured_CKhO3Gk8.mjs";
import { t as $$SliderBasic } from "./SliderBasic_C7V0bvne.mjs";
//#region src/content/components/slider-basic.mdx
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
		strong: "strong",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"A horizontal carousel built on ",
			createVNode(_components.strong, { children: "native CSS scroll-snap" }),
			". Touch swipe, trackpad inertia, and momentum are all handled by the browser. JavaScript is only used for the prev/next buttons, pagination dots, keyboard nav, optional mouse drag, and ARIA bookkeeping. No Swiper, no Embla, no extra dependency."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Three slides per view (desktop)",
			align: "stretch",
			children: createVNode("div", {
				class: "w-full",
				children: createVNode($$SliderBasic, {
					mobile: 1,
					mobileLandscape: 2,
					desktop: 3,
					gap: "md",
					ariaLabel: "Featured cards",
					children: [
						createVNode($$CardFeatured, {
							title: "Performance",
							description: "Ship the smallest possible bundle by default — most pages emit zero JS.",
							class: "bg-canvas",
							children: createVNode("span", {
								slot: "eyebrow",
								children: "Pillar 1"
							})
						}),
						createVNode($$CardFeatured, {
							title: "Accessibility",
							description: "Native primitives, semantic HTML, focus states, reduced-motion support.",
							class: "bg-canvas",
							children: createVNode("span", {
								slot: "eyebrow",
								children: "Pillar 2"
							})
						}),
						createVNode($$CardFeatured, {
							title: "Authoring",
							description: "Markdown collections with typed schemas; MDX where interactivity matters.",
							class: "bg-canvas",
							children: createVNode("span", {
								slot: "eyebrow",
								children: "Pillar 3"
							})
						}),
						createVNode($$CardFeatured, {
							title: "Theming",
							description: "Semantic tokens flip light/dark automatically; one source of truth.",
							class: "bg-canvas",
							children: createVNode("span", {
								slot: "eyebrow",
								children: "Pillar 4"
							})
						}),
						createVNode($$CardFeatured, {
							title: "DX",
							description: "Vite-powered dev loop, content collections, view transitions, ergonomic.",
							class: "bg-canvas",
							children: createVNode("span", {
								slot: "eyebrow",
								children: "Pillar 5"
							})
						})
					]
				})
			})
		}),
		"\n",
		createVNode(_components.h2, {
			id: "why-scroll-snap-and-not-swiper",
			children: "Why scroll-snap and not Swiper"
		}),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "Concern" }),
					"\n",
					createVNode(_components.th, { children: "Swiper" }),
					"\n",
					createVNode(_components.th, { children: "SliderBasic (scroll-snap)" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			createVNode(_components.tbody, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Bundle cost" }),
					"\n",
					createVNode(_components.td, { children: "~30kb min+gz" }),
					"\n",
					createVNode(_components.td, { children: "0 deps; ~1.5kb of inline script" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Touch / trackpad inertia" }),
					"\n",
					createVNode(_components.td, { children: "JS-simulated" }),
					"\n",
					createVNode(_components.td, { children: "Native, hardware-accelerated" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Lazy-load images" }),
					"\n",
					createVNode(_components.td, { children: "Manual hooks" }),
					"\n",
					createVNode(_components.td, { children: "Just works — slides are real DOM" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Virtual slides" }),
					"\n",
					createVNode(_components.td, { children: "Yes (good for 1000+ slides)" }),
					"\n",
					createVNode(_components.td, { children: "No" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Free-mode physics" }),
					"\n",
					createVNode(_components.td, { children: "Yes" }),
					"\n",
					createVNode(_components.td, { children: "No" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Parallax / 3D effects" }),
					"\n",
					createVNode(_components.td, { children: "Yes" }),
					"\n",
					createVNode(_components.td, { children: "No" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: "Use Swiper if you need virtual slides, free-mode physics, or 3D effects. For everything else, scroll-snap is lighter, faster, and more accessible." }),
		"\n",
		createVNode(_components.h2, {
			id: "props",
			children: "Props"
		}),
		"\n",
		createVNode($$PropsTable, { props: [
			{
				name: "id",
				type: "string",
				description: "Optional ID on the root."
			},
			{
				name: "ariaLabel",
				type: "string",
				default: "\"Slider\"",
				description: "Used in aria-labels and the live region."
			},
			{
				name: "mobile",
				type: "1 | 2 | 3 | 4 | 5 | 6",
				default: "1",
				description: "Slides visible on the base breakpoint (always applies)."
			},
			{
				name: "mobileLandscape",
				type: "1 | 2 | 3 | 4 | 5 | 6",
				description: "Slides visible at sm (640px+)."
			},
			{
				name: "tablet",
				type: "1 | 2 | 3 | 4 | 5 | 6",
				description: "Slides visible at md (768px+)."
			},
			{
				name: "desktop",
				type: "1 | 2 | 3 | 4 | 5 | 6",
				description: "Slides visible at lg (1024px+)."
			},
			{
				name: "gap",
				type: "\"none\" | \"sm\" | \"md\" | \"lg\"",
				default: "\"md\"",
				description: "Space between slides (0, 0.5rem, 1rem, 1.5rem)."
			},
			{
				name: "showArrows",
				type: "boolean",
				default: "true",
				description: "Render prev/next buttons below the track."
			},
			{
				name: "showDots",
				type: "boolean",
				default: "true",
				description: "Render pagination dots below the track."
			},
			{
				name: "draggable",
				type: "boolean",
				default: "true",
				description: "Enable mouse click-and-drag on desktop (touch is always on)."
			},
			{
				name: "class",
				type: "string",
				default: "\"\"",
				description: "Extra classes on the root."
			}
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"The breakpoint API mirrors ",
			createVNode(_components.code, { children: "Grid" }),
			": ",
			createVNode(_components.code, { children: "mobile" }),
			" / ",
			createVNode(_components.code, { children: "mobileLandscape" }),
			" / ",
			createVNode(_components.code, { children: "tablet" }),
			" / ",
			createVNode(_components.code, { children: "desktop" }),
			"."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "usage",
			children: "Usage"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "manual-children",
			children: "Manual children"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Each direct child of ",
			createVNode(_components.code, { children: "SliderBasic" }),
			" becomes a slide automatically — no wrapper element required."
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
							children: " \"@components/SliderBasic.astro\""
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
							style: { color: "#B392F0" },
							children: " mobile"
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
							children: "mobileLandscape"
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
							children: "} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "gap"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"md\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " ariaLabel"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Featured cards\""
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
							children: "\"Slide one\""
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
							children: "\"…\""
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
							children: "\"bg-canvas\""
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
							children: "    <"
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
							children: ">Performance</"
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
							children: "  </"
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
							children: "\"Slide two\""
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
							children: "\"…\""
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
							children: "\"bg-canvas\""
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
							children: "    <"
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
							children: ">Accessibility</"
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
							children: "  </"
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
							children: "\"Slide three\""
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
							children: "\"…\""
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
							children: "\"bg-canvas\""
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
		createVNode(_components.h3, {
			id: "mapped-from-data",
			children: "Mapped from data"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"For collection-driven sliders, see ",
			createVNode(_components.code, { children: "SliderBasicMap" }),
			", which forwards every prop here and adds ",
			createVNode(_components.code, { children: "items={[]}" }),
			" plus default-card rendering."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "equal-heights",
			children: "Equal heights"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"The track sets ",
			createVNode(_components.code, { children: "align-items: stretch" }),
			", so every slide matches the tallest one’s height — but only if you ",
			createVNode(_components.strong, { children: "don’t" }),
			" add ",
			createVNode(_components.code, { children: "h-full" }),
			" to the slide root. ",
			createVNode(_components.code, { children: "height: 100%" }),
			" on a flex item with an indefinite parent height resolves to ",
			createVNode(_components.code, { children: "auto" }),
			" and overrides the stretch."
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
						children: "<!-- Correct: equal heights — let flex stretch do the work -->"
					})
				}),
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
							children: " class"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"bg-canvas\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " ... />"
						})
					]
				}),
				"\n",
				createVNode(_components.span, { class: "line" }),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "<!-- Wrong: h-full breaks the stretch on indefinite parents -->"
					})
				}),
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
							children: " class"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"bg-canvas h-full\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " ... />"
						})
					]
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"To align content ",
			createVNode(_components.strong, { children: "inside" }),
			" a card (e.g. push a button to the bottom), use ",
			createVNode(_components.code, { children: "flex flex-col" }),
			" on the card body and ",
			createVNode(_components.code, { children: "mt-auto" }),
			" on the pinned element."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "mouse-drag-desktop",
			children: "Mouse drag (desktop)"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Enabled by default via ",
			createVNode(_components.code, { children: "draggable={true}" }),
			". The handler:"
		] }),
		"\n",
		createVNode(_components.ol, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"On ",
				createVNode(_components.code, { children: "pointerdown" }),
				" (mouse only), records ",
				createVNode(_components.code, { children: "scrollLeft" }),
				" and adds ",
				createVNode(_components.code, { children: "is-dragging" }),
				" to the track."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The ",
				createVNode(_components.code, { children: "is-dragging" }),
				" class disables ",
				createVNode(_components.code, { children: "scroll-snap-type" }),
				" mid-drag and switches the cursor to ",
				createVNode(_components.code, { children: "grabbing" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"On ",
				createVNode(_components.code, { children: "pointermove" }),
				", writes ",
				createVNode(_components.code, { children: "scrollLeft = startScroll - dx" }),
				" directly — no JS animation needed."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"On ",
				createVNode(_components.code, { children: "pointerup" }),
				" (or cancel/leave), removes the class. Snap re-engages and the browser settles to the nearest slide."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"A capture-phase ",
				createVNode(_components.code, { children: "click" }),
				" handler suppresses link/button activation if the gesture moved more than 4px (so users don’t accidentally navigate when dragging past a card link)."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"Touch devices keep using native scroll regardless of ",
			createVNode(_components.code, { children: "draggable" }),
			" — the early-out checks ",
			createVNode(_components.code, { children: "e.pointerType !== \"mouse\"" }),
			"."
		] }),
		"\n",
		createVNode(_components.p, { children: "Disable per instance:" }),
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
						style: { color: "#B392F0" },
						children: " draggable"
					}),
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={"
					}),
					createVNode(_components.span, {
						style: { color: "#79B8FF" },
						children: "false"
					}),
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "} ... />"
					})
				]
			}) })
		}),
		"\n",
		createVNode(_components.h2, {
			id: "keyboard",
			children: "Keyboard"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Focus the track (it’s ",
			createVNode(_components.code, { children: "tabindex=\"0\"" }),
			"), then:"
		] }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "←" }),
				" / ",
				createVNode(_components.code, { children: "→" }),
				": previous / next slide"
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "Home" }), ": first slide"] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "End" }), ": last slide"] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: "Keyboard events scroll the same way the buttons do — no separate code path." }),
		"\n",
		createVNode(_components.h2, {
			id: "a11y",
			children: "A11y"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Root: ",
				createVNode(_components.code, { children: "role=\"region\"" }),
				", ",
				createVNode(_components.code, { children: "aria-roledescription=\"carousel\"" }),
				", ",
				createVNode(_components.code, { children: "aria-label" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Each slide: ",
				createVNode(_components.code, { children: "role=\"group\"" }),
				", ",
				createVNode(_components.code, { children: "aria-roledescription=\"slide\"" }),
				", ",
				createVNode(_components.code, { children: "aria-label=\"N of total\"" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Pagination dots: ",
				createVNode(_components.code, { children: "role=\"tablist\"" }),
				" with ",
				createVNode(_components.code, { children: "role=\"tab\"" }),
				" children carrying ",
				createVNode(_components.code, { children: "aria-selected" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"A visually hidden live region (",
				createVNode(_components.code, { children: "aria-live=\"polite\"" }),
				") announces the current slide as the user scrolls."
			] }),
			"\n",
			createVNode(_components.li, { children: "The track is keyboard-focusable with a visible focus ring." }),
			"\n",
			createVNode(_components.li, { children: [
				"Respects ",
				createVNode(_components.code, { children: "prefers-reduced-motion: reduce" }),
				" — ",
				createVNode(_components.code, { children: "scroll-behavior" }),
				" falls back to ",
				createVNode(_components.code, { children: "auto" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "mechanism",
			children: "Mechanism"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "slide-widths-via-css-variables",
			children: "Slide widths via CSS variables"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Per-view counts are written as CSS vars (",
			createVNode(_components.code, { children: "--per-view" }),
			", ",
			createVNode(_components.code, { children: "--per-view-sm" }),
			", ",
			createVNode(_components.code, { children: "--per-view-md" }),
			", ",
			createVNode(_components.code, { children: "--per-view-lg" }),
			") on the root. A single ",
			createVNode(_components.code, { children: "calc()" }),
			" in the global stylesheet derives slide width from the active var:"
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
			"data-language": "css",
			children: createVNode(_components.code, { children: [
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "["
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "data-slider-track"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "] "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: ">"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: " *"
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
							style: { color: "#79B8FF" },
							children: "  flex"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ": "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "0"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " 0"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " calc"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "    ("
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "100"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "%"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " -"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " ("
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "var"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "--per-view"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ") "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "-"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " 1"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ") * "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "var"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "--slider-gap"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "1"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "rem"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ")) / "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "var"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "--per-view"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ")"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  );"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "}"
					})
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: "This means N slides + (N-1) gaps fit exactly in the viewport at any breakpoint, with no class-name explosion." }),
		"\n",
		createVNode(_components.h3, {
			id: "why-style-isglobal",
			children: ["Why ", createVNode(_components.code, { children: "<style is:global>" })]
		}),
		"\n",
		createVNode(_components.p, { children: [
			"The track’s child selector (",
			createVNode(_components.code, { children: "[data-slider-track] > *" }),
			") needs to match elements rendered by other components (e.g. ",
			createVNode(_components.code, { children: "CardFeatured" }),
			"). Astro’s default scoped CSS would only match elements with the same scope hash, so children from other components would be skipped. ",
			createVNode(_components.code, { children: "is:global" }),
			" bypasses scoping — selectors are tight enough (",
			createVNode(_components.code, { children: "[data-slider-track]" }),
			") that this isn’t a leak risk."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "active-slide-tracking",
			children: "Active slide tracking"
		}),
		"\n",
		createVNode(_components.p, { children: "A scroll listener computes which slide’s left edge is closest to the track’s left edge, then updates dot state, prev/next disabled state, and the live region — all rAF-throttled so fast swipes don’t thrash." }),
		"\n",
		createVNode(_components.h2, {
			id: "gotchas",
			children: "Gotchas"
		}),
		"\n",
		createVNode(_components.ol, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: [
					"Don’t put ",
					createVNode(_components.code, { children: "h-full" }),
					" on slides."
				] }),
				" It breaks flex ",
				createVNode(_components.code, { children: "align-items: stretch" }),
				". See ",
				createVNode(_components.a, {
					href: "#equal-heights",
					children: "Equal heights"
				}),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: ["The track must be ", createVNode(_components.code, { children: "position: relative" })] }),
				" for ",
				createVNode(_components.code, { children: "slide.offsetLeft" }),
				" math to be reliable. Already wired into the component — don’t remove it if you ever rework the markup."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: [createVNode(_components.code, { children: "is:global" }), " styles are global."] }),
				" All selectors are namespaced under ",
				createVNode(_components.code, { children: "[data-slider]" }),
				" / ",
				createVNode(_components.code, { children: "[data-slider-track]" }),
				", but be aware: tweaking these in one project affects every slider on the page."
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
	"title": "SliderBasic",
	"description": "Native scroll-snap carousel — touch, trackpad, drag, keyboard, dots, arrows. No deps.",
	"category": "pattern",
	"order": 80,
	"sourceFile": "src/components/SliderBasic.astro",
	"status": "stable",
	"related": ["SliderBasicMap", "CardFeatured"]
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
			"slug": "why-scroll-snap-and-not-swiper",
			"text": "Why scroll-snap and not Swiper"
		},
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
			"depth": 3,
			"slug": "manual-children",
			"text": "Manual children"
		},
		{
			"depth": 3,
			"slug": "mapped-from-data",
			"text": "Mapped from data"
		},
		{
			"depth": 2,
			"slug": "equal-heights",
			"text": "Equal heights"
		},
		{
			"depth": 2,
			"slug": "mouse-drag-desktop",
			"text": "Mouse drag (desktop)"
		},
		{
			"depth": 2,
			"slug": "keyboard",
			"text": "Keyboard"
		},
		{
			"depth": 2,
			"slug": "a11y",
			"text": "A11y"
		},
		{
			"depth": 2,
			"slug": "mechanism",
			"text": "Mechanism"
		},
		{
			"depth": 3,
			"slug": "slide-widths-via-css-variables",
			"text": "Slide widths via CSS variables"
		},
		{
			"depth": 3,
			"slug": "why-style-isglobal",
			"text": "Why <style is:global>"
		},
		{
			"depth": 3,
			"slug": "active-slide-tracking",
			"text": "Active slide tracking"
		},
		{
			"depth": 2,
			"slug": "gotchas",
			"text": "Gotchas"
		}
	];
}
var url = "src/content/components/slider-basic.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/slider-basic.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/slider-basic.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
