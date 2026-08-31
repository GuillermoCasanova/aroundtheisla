import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, m as renderSlot, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Icon$1 } from "./components_BhnmEz9L.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/components/Icon.astro
createAstro("https://example.com");
var $$Icon = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Icon;
	const { size = "md", fluid = false, label, class: className = "" } = Astro.props;
	const role = label ? "img" : void 0;
	const ariaHidden = label ? void 0 : "true";
	return renderTemplate`${maybeRenderHead($$result)}<span${addAttribute([
		"icon",
		`icon--${size}`,
		fluid && "icon--fluid",
		className
	], "class:list")}${addAttribute(role, "role")}${addAttribute(label, "aria-label")}${addAttribute(ariaHidden, "aria-hidden")} data-astro-cid-ccg5yoga> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Icon.astro", void 0);
//#endregion
//#region src/content/components/icon.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"A thin wrapper that fixes one job: every icon on the site shares the same size scale, the same alignment behavior, and the same accessibility defaults. The actual graphic is whatever you drop into the slot — an ",
			createVNode(_components.code, { children: "astro-icon" }),
			" ",
			createVNode(_components.code, { children: "<Icon>" }),
			", a raw ",
			createVNode(_components.code, { children: "<svg>" }),
			", or an ",
			createVNode(_components.code, { children: "<img>" }),
			". The child stretches to fill the box (",
			createVNode(_components.code, { children: "width: 100%; height: 100%" }),
			"), so call sites stop carrying ",
			createVNode(_components.code, { children: "h-4 w-4" }),
			" / ",
			createVNode(_components.code, { children: "size-5" }),
			" Tailwind utilities."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Sizes (xs · sm · md · lg · xl)",
			children: createVNode("div", {
				class: "flex items-end gap-6 text-fg",
				children: [
					createVNode($$Icon, {
						size: "xs",
						children: createVNode($$Icon$1, { name: "lucide:star" })
					}),
					createVNode($$Icon, {
						size: "sm",
						children: createVNode($$Icon$1, { name: "lucide:star" })
					}),
					createVNode($$Icon, {
						size: "md",
						children: createVNode($$Icon$1, { name: "lucide:star" })
					}),
					createVNode($$Icon, {
						size: "lg",
						children: createVNode($$Icon$1, { name: "lucide:star" })
					}),
					createVNode($$Icon, {
						size: "xl",
						children: createVNode($$Icon$1, { name: "lucide:star" })
					})
				]
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Mixed icon sources (lucide · inline svg · img)",
			children: createVNode("div", {
				class: "flex items-center gap-6 text-fg",
				children: [
					createVNode($$Icon, {
						size: "lg",
						children: createVNode($$Icon$1, { name: "lucide:search" })
					}),
					createVNode($$Icon, {
						size: "lg",
						children: createVNode("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							children: [createVNode("circle", {
								cx: "12",
								cy: "12",
								r: "9"
							}), createVNode("path", { d: "M12 7v5l3 2" })]
						})
					}),
					createVNode($$Icon, {
						size: "lg",
						label: "Astro logo",
						children: createVNode("svg", {
							viewBox: "0 0 24 24",
							fill: "currentColor",
							"aria-hidden": "true",
							children: createVNode("path", { d: "M12 2 4 22h16L12 2zm0 6 5 12H7l5-12z" })
						})
					})
				]
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Inline with text",
			children: createVNode("p", {
				class: "flex items-center gap-2 text-fg",
				children: [createVNode($$Icon, {
					size: "sm",
					children: createVNode($$Icon$1, { name: "lucide:check" })
				}), createVNode(_components.p, { children: "Saved to your library" })]
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Fluid — scales with container width",
			children: createVNode("div", {
				class: "flex w-full items-center justify-center gap-4 text-fg",
				style: "container-type: inline-size;",
				children: [createVNode($$Icon, {
					size: "lg",
					fluid: true,
					children: createVNode($$Icon$1, { name: "lucide:zap" })
				}), createVNode("span", {
					class: "text-sm text-fg-muted",
					children: "Resize the viewport to see the icon scale."
				})]
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
				name: "size",
				type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\"",
				default: "\"md\"",
				description: "Sets the box dimensions via the --icon-size CSS variable. xs=12px, sm=14px, md=16px, lg=20px, xl=24px."
			},
			{
				name: "fluid",
				type: "boolean",
				default: "false",
				description: "Switches the size to a clamp() that grows with the nearest container's inline size (cqi). Aligns icons with the project's fluid type scale."
			},
			{
				name: "label",
				type: "string",
				description: "Accessible name. Sets role='img' + aria-label. Omit for decorative icons (gets aria-hidden='true' automatically)."
			},
			{
				name: "class",
				type: "string",
				description: "Extra classes appended to the wrapper (color, margin, etc.)."
			}
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
				"Renders a single ",
				createVNode(_components.code, { children: "<span class=\"icon icon--{size}\">" }),
				" that sets ",
				createVNode(_components.code, { children: "width" }),
				" and ",
				createVNode(_components.code, { children: "height" }),
				" from ",
				createVNode(_components.code, { children: "--icon-size" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The slotted child is targeted with ",
				createVNode(_components.code, { children: ":global(svg)" }),
				" / ",
				createVNode(_components.code, { children: ":global(img)" }),
				" and stretched to ",
				createVNode(_components.code, { children: "100%/100%" }),
				", so it always fills the box."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "display: inline-flex" }),
				" + ",
				createVNode(_components.code, { children: "align-items: center" }),
				" keeps icons baseline-aligned next to text without per-call-site flex utilities."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "flex-shrink: 0" }), " so an icon next to a long label can’t get squashed inside a flex row."] }),
			"\n",
			createVNode(_components.li, { children: [
				"Accessibility: passing ",
				createVNode(_components.code, { children: "label" }),
				" flips on ",
				createVNode(_components.code, { children: "role=\"img\" aria-label=\"…\"" }),
				". With no label the wrapper is ",
				createVNode(_components.code, { children: "aria-hidden=\"true\"" }),
				" — the default for decorative icons."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "fluid-scaling",
			children: "Fluid scaling"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"When ",
			createVNode(_components.code, { children: "fluid" }),
			" is set, ",
			createVNode(_components.code, { children: "--icon-size" }),
			" becomes a ",
			createVNode(_components.code, { children: "clamp(MIN, intercept + slope*cqi, MAX)" }),
			" expression mirroring the typography ramp in ",
			createVNode(_components.code, { children: "global.css" }),
			". The icon grows when its container is wide (",
			createVNode(_components.code, { children: "cqi" }),
			" = 1% of the nearest container’s inline size) and pins at the min/max at the extremes. Use it only inside an element that has ",
			createVNode(_components.code, { children: "container-type: inline-size" }),
			" set — otherwise ",
			createVNode(_components.code, { children: "cqi" }),
			" resolves against the viewport and you’ll just get viewport-fluid sizing."
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
							children: " Icon "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/Icon.astro\""
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
							children: " { Icon "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "as"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " LucideIcon } "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"astro-icon/components\""
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
							children: "{"
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "/* Decorative — aria-hidden by default */"
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
							children: "Icon"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " size"
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
							style: { color: "#E1E4E8" },
							children: "><"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "LucideIcon"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " name"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"lucide:search\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " /></"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Icon"
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
							children: "{"
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "/* Meaningful — gets role=\"img\" + aria-label */"
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
							children: "Icon"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " size"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"lg\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " label"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Open menu\""
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
							children: "LucideIcon"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " name"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"lucide:menu\""
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
							children: "Icon"
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
							children: "{"
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "/* Inline SVG, no library needed */"
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
							children: "Icon"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " size"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"sm\""
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
							children: "svg"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " viewBox"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"0 0 24 24\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " fill"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"currentColor\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "><"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "path"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " d"
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
							style: { color: "#E1E4E8" },
							children: " /></"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "svg"
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
							children: "Icon"
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
							children: "{"
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "/* Fluid — scales with the surrounding container's inline size */"
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
							children: "Icon"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " size"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"lg\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " fluid"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "><"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "LucideIcon"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " name"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"lucide:zap\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " /></"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Icon"
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
		createVNode(_components.blockquote, { children: [
			"\n",
			createVNode(_components.p, { children: [
				"The ",
				createVNode(_components.code, { children: "astro-icon" }),
				" import is aliased to ",
				createVNode(_components.code, { children: "LucideIcon" }),
				" because both components are named ",
				createVNode(_components.code, { children: "Icon" }),
				". Only one needs an alias — pick whichever is less common in the file."
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
			createVNode(_components.li, { children: ["Static sizes: ", createVNode(_components.code, { children: "xs 0.75rem · sm 0.875rem · md 1rem · lg 1.25rem · xl 1.5rem" })] }),
			"\n",
			createVNode(_components.li, { children: [
				"Fluid sizes (when ",
				createVNode(_components.code, { children: "fluid" }),
				" is set): ",
				createVNode(_components.code, { children: "clamp()" }),
				" ramps mirroring the typography scale"
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Color: inherited (",
				createVNode(_components.code, { children: "currentColor" }),
				") — set via the parent’s text color, e.g. ",
				createVNode(_components.code, { children: "text-fg-muted" }),
				" or ",
				createVNode(_components.code, { children: "text-intent" })
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
	"title": "Icon",
	"description": "Slot-based icon wrapper that owns the box (size, alignment, ARIA) so any child SVG, lucide icon, or img scales consistently.",
	"category": "primitive",
	"order": 5,
	"sourceFile": "src/components/Icon.astro",
	"status": "stable",
	"related": ["Button", "Breadcrumbs"]
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
			"slug": "mechanism",
			"text": "Mechanism"
		},
		{
			"depth": 3,
			"slug": "fluid-scaling",
			"text": "Fluid scaling"
		},
		{
			"depth": 2,
			"slug": "usage",
			"text": "Usage"
		},
		{
			"depth": 2,
			"slug": "tokens",
			"text": "Tokens"
		}
	];
}
var url = "src/content/components/icon.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/icon.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/icon.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
