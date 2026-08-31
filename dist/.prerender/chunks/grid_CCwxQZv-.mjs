import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, m as renderSlot, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
import { t as $$CardFeatured } from "./CardFeatured_CKhO3Gk8.mjs";
//#region src/components/Grid.astro
createAstro("https://example.com");
var $$Grid = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Grid;
	const { mobile = 1, mobileLandscape, tablet, desktop, gap = "gap-6", class: className = "" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute([
		"grid",
		{
			1: "grid-cols-1",
			2: "grid-cols-2",
			3: "grid-cols-3",
			4: "grid-cols-4",
			5: "grid-cols-5",
			6: "grid-cols-6",
			7: "grid-cols-7",
			8: "grid-cols-8",
			9: "grid-cols-9",
			10: "grid-cols-10",
			11: "grid-cols-11",
			12: "grid-cols-12"
		}[mobile],
		mobileLandscape && {
			1: "sm:grid-cols-1",
			2: "sm:grid-cols-2",
			3: "sm:grid-cols-3",
			4: "sm:grid-cols-4",
			5: "sm:grid-cols-5",
			6: "sm:grid-cols-6",
			7: "sm:grid-cols-7",
			8: "sm:grid-cols-8",
			9: "sm:grid-cols-9",
			10: "sm:grid-cols-10",
			11: "sm:grid-cols-11",
			12: "sm:grid-cols-12"
		}[mobileLandscape],
		tablet && {
			1: "md:grid-cols-1",
			2: "md:grid-cols-2",
			3: "md:grid-cols-3",
			4: "md:grid-cols-4",
			5: "md:grid-cols-5",
			6: "md:grid-cols-6",
			7: "md:grid-cols-7",
			8: "md:grid-cols-8",
			9: "md:grid-cols-9",
			10: "md:grid-cols-10",
			11: "md:grid-cols-11",
			12: "md:grid-cols-12"
		}[tablet],
		desktop && {
			1: "lg:grid-cols-1",
			2: "lg:grid-cols-2",
			3: "lg:grid-cols-3",
			4: "lg:grid-cols-4",
			5: "lg:grid-cols-5",
			6: "lg:grid-cols-6",
			7: "lg:grid-cols-7",
			8: "lg:grid-cols-8",
			9: "lg:grid-cols-9",
			10: "lg:grid-cols-10",
			11: "lg:grid-cols-11",
			12: "lg:grid-cols-12"
		}[desktop],
		gap,
		className
	], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Grid.astro", void 0);
//#endregion
//#region src/content/components/grid.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		a: "a",
		code: "code",
		em: "em",
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
			"A thin wrapper around CSS grid that exposes breakpoint counts as semantic prop names instead of Tailwind’s raw ",
			createVNode(_components.code, { children: "sm:" }),
			" / ",
			createVNode(_components.code, { children: "md:" }),
			" / ",
			createVNode(_components.code, { children: "lg:" }),
			" prefixes. Mirrors the breakpoint API of ",
			createVNode(_components.a, {
				href: "/components/slider-basic/",
				children: createVNode(_components.code, { children: "SliderBasic" })
			}),
			" so the same mental model works whether you’re laying out a static grid or a horizontal scroller."
		] }),
		"\n",
		createVNode(_components.p, { children: "Anything you put inside renders as a child cell — the component doesn’t shape its children, it just controls how many columns they sit in at each breakpoint." }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "3-column on desktop, 2 on tablet, 1 on mobile",
			children: createVNode($$Grid, {
				mobile: 1,
				tablet: 2,
				desktop: 3,
				gap: "gap-4",
				class: "w-full",
				children: [
					createVNode("div", {
						class: "border border-stroke bg-canvas p-6 text-sm text-fg",
						children: "Cell A"
					}),
					createVNode("div", {
						class: "border border-stroke bg-canvas p-6 text-sm text-fg",
						children: "Cell B"
					}),
					createVNode("div", {
						class: "border border-stroke bg-canvas p-6 text-sm text-fg",
						children: "Cell C"
					}),
					createVNode("div", {
						class: "border border-stroke bg-canvas p-6 text-sm text-fg",
						children: "Cell D"
					}),
					createVNode("div", {
						class: "border border-stroke bg-canvas p-6 text-sm text-fg",
						children: "Cell E"
					}),
					createVNode("div", {
						class: "border border-stroke bg-canvas p-6 text-sm text-fg",
						children: "Cell F"
					})
				]
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "With CardFeatured children — common pattern",
			children: createVNode($$Grid, {
				mobile: 1,
				tablet: 2,
				desktop: 3,
				gap: "gap-4",
				class: "w-full",
				children: [
					createVNode($$CardFeatured, {
						title: "Fast",
						description: "Sub-second cold start.",
						class: "bg-canvas",
						children: createVNode("span", {
							slot: "eyebrow",
							children: "Performance"
						})
					}),
					createVNode($$CardFeatured, {
						title: "Safe",
						description: "Zero-trust by default.",
						class: "bg-canvas",
						children: createVNode("span", {
							slot: "eyebrow",
							children: "Security"
						})
					}),
					createVNode($$CardFeatured, {
						title: "Open",
						description: "Built on open standards.",
						class: "bg-canvas",
						children: createVNode("span", {
							slot: "eyebrow",
							children: "Standards"
						})
					})
				]
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Six columns at desktop, stepping down at each breakpoint",
			children: createVNode($$Grid, {
				mobile: 1,
				mobileLandscape: 2,
				tablet: 3,
				desktop: 6,
				gap: "gap-2",
				class: "w-full",
				children: [
					createVNode("div", {
						class: "border border-stroke bg-panel-muted p-4 text-center text-xs text-fg-muted",
						children: "1"
					}),
					createVNode("div", {
						class: "border border-stroke bg-panel-muted p-4 text-center text-xs text-fg-muted",
						children: "2"
					}),
					createVNode("div", {
						class: "border border-stroke bg-panel-muted p-4 text-center text-xs text-fg-muted",
						children: "3"
					}),
					createVNode("div", {
						class: "border border-stroke bg-panel-muted p-4 text-center text-xs text-fg-muted",
						children: "4"
					}),
					createVNode("div", {
						class: "border border-stroke bg-panel-muted p-4 text-center text-xs text-fg-muted",
						children: "5"
					}),
					createVNode("div", {
						class: "border border-stroke bg-panel-muted p-4 text-center text-xs text-fg-muted",
						children: "6"
					})
				]
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
				name: "mobile",
				type: "1 | 2 | … | 12",
				default: "1",
				description: "Columns at the base breakpoint (always applies)."
			},
			{
				name: "mobileLandscape",
				type: "1 | 2 | … | 12",
				description: "Columns at the sm breakpoint (640px+). Skip to inherit from mobile."
			},
			{
				name: "tablet",
				type: "1 | 2 | … | 12",
				description: "Columns at the md breakpoint (768px+). Skip to inherit from the previous breakpoint."
			},
			{
				name: "desktop",
				type: "1 | 2 | … | 12",
				description: "Columns at the lg breakpoint (1024px+). Skip to inherit from the previous breakpoint."
			},
			{
				name: "gap",
				type: "string",
				default: "\"gap-6\"",
				description: "Tailwind gap utility — `gap-2`, `gap-4`, `gap-6`, `gap-8`, etc."
			},
			{
				name: "class",
				type: "string",
				description: "Extra classes on the grid container — e.g. `items-center`, `justify-items-stretch`."
			}
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "why-use-this-instead-of-writing-div-classgrid-grid-cols--directly",
			children: [
				"Why use this instead of writing ",
				createVNode(_components.code, { children: "<div class=\"grid grid-cols-...\">" }),
				" directly"
			]
		}),
		"\n",
		createVNode(_components.p, { children: "Two reasons:" }),
		"\n",
		createVNode(_components.ol, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"\n",
				createVNode(_components.p, { children: [
					createVNode(_components.strong, { children: "Named breakpoints read better." }),
					" ",
					createVNode(_components.code, { children: "<Grid mobile={1} tablet={2} desktop={3}>" }),
					" describes intent at the call site. ",
					createVNode(_components.code, { children: "<div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3\">" }),
					" is the same shape but you have to mentally translate ",
					createVNode(_components.code, { children: "md:" }),
					" → “tablet”. For one grid, fine. Across a project of 30 grids, the named version stays scannable."
				] }),
				"\n"
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"\n",
				createVNode(_components.p, { children: [
					createVNode(_components.strong, { children: "Consistent breakpoint vocabulary." }),
					" The starter uses ",
					createVNode(_components.code, { children: "mobile / mobileLandscape / tablet / desktop" }),
					" as the shared breakpoint names across ",
					createVNode(_components.code, { children: "Grid" }),
					" and ",
					createVNode(_components.code, { children: "SliderBasic" }),
					". Sticking to that vocabulary in the components page keeps the mental model uniform — when you read ",
					createVNode(_components.code, { children: "tablet={2}" }),
					" in either component, it means the same thing (md, 768px+)."
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"For one-off, exotic layouts (auto-fit, named grid areas, span tricks) you’ll still drop down to raw ",
			createVNode(_components.code, { children: "grid" }),
			" utilities. The component is for the common case of “N equal columns at each breakpoint.”"
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
							children: " Grid "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/Grid.astro\""
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
							children: "Grid"
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
							children: "\"gap-4\""
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
							children: "\"One\""
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
							children: "\"Two\""
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
							children: "\"Three\""
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
							children: "Grid"
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
			id: "with-alignment-overrides-via-class",
			children: ["With alignment overrides via ", createVNode(_components.code, { children: "class" })]
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
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "<"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Grid"
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
							children: "tablet"
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
							children: "class"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"items-center justify-items-stretch py-8\""
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
						children: "  …"
					})
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
							children: "Grid"
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
			"The ",
			createVNode(_components.code, { children: "class" }),
			" prop appends to the component’s own utilities — see the “Passing ",
			createVNode(_components.code, { children: "class" }),
			" to a component” pattern used across this starter."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "dont-override-structural-props-via-class",
			children: ["Don’t override structural props via ", createVNode(_components.code, { children: "class" })]
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
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "{"
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "/* ❌ Don't — Tailwind specificity flat, last-emitted wins, hard to reason about */"
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
							style: { color: "#E1E4E8" },
							children: "<"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Grid"
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
							children: "class"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"gap-2\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " gap"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"gap-12\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " />"
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
							children: "{"
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "/* ✅ Use the typed prop */"
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
							style: { color: "#E1E4E8" },
							children: "<"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Grid"
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
							children: "gap"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"gap-2\""
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
			"Use ",
			createVNode(_components.code, { children: "class" }),
			" for orthogonal additions (alignment, padding, background) — not for things the component already exposes."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "mechanism",
			children: "Mechanism"
		}),
		"\n",
		createVNode(_components.p, { children: "Internally the component maps each prop to a Tailwind utility lookup table:" }),
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
							children: "const"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " base"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: ":"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " Record"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "<"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "Cols"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "string"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "> "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " { "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "1"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ": "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"grid-cols-1\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "2"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ": "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"grid-cols-2\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", … };"
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
							children: " md"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: ":"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "   Record"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "<"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "Cols"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "string"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "> "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " { "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "1"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ": "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"md:grid-cols-1\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "2"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ": "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"md:grid-cols-2\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", … };"
						})
					]
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Then assembles them via ",
			createVNode(_components.code, { children: "class:list" }),
			" so falsy props (skipped breakpoints) drop out automatically:"
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
							style: { color: "#85E89D" },
							children: "div"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " class:list"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={["
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#9ECBFF" },
						children: "  \"grid\""
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: ","
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  base[mobile],"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  mobileLandscape "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "&&"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " sm[mobileLandscape],"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  tablet "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "&&"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " md[tablet],"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  desktop "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "&&"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " lg[desktop],"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  gap,"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  className,"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "]}>"
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
							style: { color: "#85E89D" },
							children: "div"
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
		createVNode(_components.p, { children: "The lookup tables are required because Tailwind’s content scanner only generates utilities it can see literally in the source. Building class names dynamically with template strings would generate utilities Tailwind never emits — see the example below." }),
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
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "// ❌ Tailwind doesn't see md:grid-cols-3 anywhere literally"
					})
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
							children: " cls"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " `md:grid-cols-${"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "tablet"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "}`"
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
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "// ✅ Lookup table — every value appears literally"
					})
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
							children: " md"
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
							style: { color: "#79B8FF" },
							children: "1"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ": "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"md:grid-cols-1\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "2"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ": "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"md:grid-cols-2\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "3"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ": "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"md:grid-cols-3\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " };"
						})
					]
				})
			] })
		}),
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
					"Breakpoint inheritance is ",
					createVNode(_components.code, { children: "sm < md < lg" }),
					", not “skip and inherit.”"
				] }),
				" If you set ",
				createVNode(_components.code, { children: "mobile={1}" }),
				" and ",
				createVNode(_components.code, { children: "desktop={3}" }),
				" but skip ",
				createVNode(_components.code, { children: "tablet" }),
				", the tablet view inherits from ",
				createVNode(_components.code, { children: "mobileLandscape" }),
				" (or from ",
				createVNode(_components.code, { children: "mobile" }),
				" if that’s also skipped) — ",
				createVNode(_components.em, { children: "not" }),
				" a midpoint between mobile and desktop. CSS doesn’t interpolate column counts."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Max 12 columns." }),
				" The lookup tables go up to 12 because that’s where Tailwind’s ",
				createVNode(_components.code, { children: "grid-cols-*" }),
				" defaults stop. If you need 13+, extend the tables in ",
				createVNode(_components.code, { children: "Grid.astro" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: [createVNode(_components.code, { children: "gap" }), " is a string, not an enum."] }),
				" This is intentional — it lets you pass any Tailwind gap utility (",
				createVNode(_components.code, { children: "gap-px" }),
				", ",
				createVNode(_components.code, { children: "gap-x-4" }),
				", ",
				createVNode(_components.code, { children: "gap-y-8" }),
				"). The trade-off is no autocomplete, and a typo silently produces no gap."
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
	"title": "Grid",
	"description": "Responsive CSS-grid wrapper with named breakpoints — mobile, mobileLandscape, tablet, desktop.",
	"category": "layout",
	"order": 15,
	"sourceFile": "src/components/Grid.astro",
	"status": "stable",
	"related": ["SectionMain"]
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
			"slug": "why-use-this-instead-of-writing-div-classgrid-grid-cols--directly",
			"text": "Why use this instead of writing <div class=\"grid grid-cols-...\"> directly"
		},
		{
			"depth": 2,
			"slug": "usage",
			"text": "Usage"
		},
		{
			"depth": 3,
			"slug": "with-alignment-overrides-via-class",
			"text": "With alignment overrides via class"
		},
		{
			"depth": 3,
			"slug": "dont-override-structural-props-via-class",
			"text": "Don’t override structural props via class"
		},
		{
			"depth": 2,
			"slug": "mechanism",
			"text": "Mechanism"
		},
		{
			"depth": 2,
			"slug": "gotchas",
			"text": "Gotchas"
		}
	];
}
var url = "src/content/components/grid.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/grid.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/grid.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
