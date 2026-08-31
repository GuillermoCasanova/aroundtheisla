import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, m as renderSlot, o as renderScript, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/components/Dropdown.astro
createAstro("https://example.com");
var $$Dropdown = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Dropdown;
	const { id, mode = "menu", align = "start", closeOnSelect, staticLabel, multiselectFormat = "count", matchTriggerWidth = true, class: className } = Astro.props;
	const componentId = id ?? `dd-${Math.random().toString(36).slice(2, 10)}`;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(componentId, "id")} data-dropdown="component"${addAttribute(mode, "data-dropdown-mode")}${addAttribute(align, "data-dropdown-align")}${addAttribute(closeOnSelect === void 0 ? void 0 : String(closeOnSelect), "data-dropdown-close-on-select")}${addAttribute(staticLabel ? "true" : void 0, "data-dropdown-static-label")}${addAttribute(multiselectFormat, "data-dropdown-multiselect-format")}${addAttribute(matchTriggerWidth ? void 0 : "false", "data-dropdown-match-trigger-width")} data-dropdown-open="false"${addAttribute(["dropdown", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Dropdown.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Dropdown.astro", void 0);
//#endregion
//#region src/content/components/dropdown.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		a: "a",
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
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
		createVNode(_components.p, { children: "A single dropdown primitive that handles the three real-world patterns marketing and product UI need:" }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "Menu" }), " — list of actions or links (user menu, language switcher)."] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Select" }),
				" — one-of-many picker, like a styled ",
				createVNode(_components.code, { children: "<select>" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "Multiselect" }), " — many-of-many picker for filters and tag pickers."] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"Built on the native ",
			createVNode(_components.a, {
				href: "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",
				children: "Popover API"
			}),
			" so you get top-layer rendering (no clipping inside ",
			createVNode(_components.code, { children: "overflow:hidden" }),
			"), click-outside dismiss, and Escape-to-close without a single line of JS for those parts. Positioning uses CSS Anchor Positioning where supported and falls back to a small JS positioner everywhere else."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Action menu",
			align: "stretch",
			children: createVNode($$Dropdown, {
				id: "preview-menu",
				mode: "menu",
				children: [createVNode("button", {
					"data-dropdown": "trigger",
					class: "inline-flex items-center gap-2  border border-stroke bg-panel px-4 py-2 text-sm text-fg",
					children: [createVNode("span", {
						"data-dropdown": "label",
						children: "Account"
					}), createVNode("svg", {
						"data-dropdown": "arrow",
						width: "12",
						height: "12",
						viewBox: "0 0 12 12",
						fill: "currentColor",
						"aria-hidden": "true",
						children: createVNode("path", { d: "M2 4l4 4 4-4z" })
					})]
				}), createVNode("div", {
					"data-dropdown": "list",
					class: "min-w-48 p-1",
					children: [
						createVNode("a", {
							"data-dropdown": "item",
							href: "#profile",
							class: "text-sm",
							children: "Profile"
						}),
						createVNode("a", {
							"data-dropdown": "item",
							href: "#billing",
							class: "text-sm",
							children: "Billing"
						}),
						createVNode("a", {
							"data-dropdown": "item",
							href: "#team",
							class: "text-sm",
							children: "Team"
						}),
						createVNode("button", {
							"data-dropdown": "item",
							type: "button",
							class: "text-sm text-error",
							children: "Sign out"
						})
					]
				})]
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Single-select (radio)",
			align: "stretch",
			children: createVNode($$Dropdown, {
				id: "preview-select",
				mode: "select",
				children: [createVNode("button", {
					"data-dropdown": "trigger",
					class: "inline-flex items-center gap-2  border border-stroke bg-panel px-4 py-2 text-sm text-fg",
					children: [createVNode("span", {
						"data-dropdown": "label",
						children: "Category"
					}), createVNode("svg", {
						"data-dropdown": "arrow",
						width: "12",
						height: "12",
						viewBox: "0 0 12 12",
						fill: "currentColor",
						"aria-hidden": "true",
						children: createVNode("path", { d: "M2 4l4 4 4-4z" })
					})]
				}), createVNode("div", {
					"data-dropdown": "list",
					class: "min-w-48 p-1",
					children: [
						createVNode("label", {
							"data-dropdown": "item",
							class: "text-sm",
							children: [createVNode("input", {
								type: "radio",
								name: "preview-cat",
								value: "news"
							}), createVNode(_components.p, { children: "News" })]
						}),
						createVNode("label", {
							"data-dropdown": "item",
							class: "text-sm",
							children: [createVNode("input", {
								type: "radio",
								name: "preview-cat",
								value: "updates"
							}), createVNode(_components.p, { children: "Updates" })]
						}),
						createVNode("label", {
							"data-dropdown": "item",
							class: "text-sm",
							children: [createVNode("input", {
								type: "radio",
								name: "preview-cat",
								value: "releases"
							}), createVNode(_components.p, { children: "Releases" })]
						})
					]
				})]
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Multi-select (checkboxes)",
			align: "stretch",
			children: createVNode($$Dropdown, {
				id: "preview-multi",
				mode: "multiselect",
				children: [createVNode("button", {
					"data-dropdown": "trigger",
					class: "inline-flex items-center gap-2  border border-stroke bg-panel px-4 py-2 text-sm text-fg",
					children: [createVNode("span", {
						"data-dropdown": "label",
						children: "Tags"
					}), createVNode("svg", {
						"data-dropdown": "arrow",
						width: "12",
						height: "12",
						viewBox: "0 0 12 12",
						fill: "currentColor",
						"aria-hidden": "true",
						children: createVNode("path", { d: "M2 4l4 4 4-4z" })
					})]
				}), createVNode("div", {
					"data-dropdown": "list",
					class: "min-w-48 p-1",
					children: [
						createVNode("label", {
							"data-dropdown": "item",
							class: "text-sm",
							children: [createVNode("input", {
								type: "checkbox",
								name: "preview-tags",
								value: "design"
							}), createVNode(_components.p, { children: "Design" })]
						}),
						createVNode("label", {
							"data-dropdown": "item",
							class: "text-sm",
							children: [createVNode("input", {
								type: "checkbox",
								name: "preview-tags",
								value: "engineering"
							}), createVNode(_components.p, { children: "Engineering" })]
						}),
						createVNode("label", {
							"data-dropdown": "item",
							class: "text-sm",
							children: [createVNode("input", {
								type: "checkbox",
								name: "preview-tags",
								value: "product"
							}), createVNode(_components.p, { children: "Product" })]
						}),
						createVNode("label", {
							"data-dropdown": "item",
							class: "text-sm",
							children: [createVNode("input", {
								type: "checkbox",
								name: "preview-tags",
								value: "marketing"
							}), createVNode(_components.p, { children: "Marketing" })]
						})
					]
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
				name: "id",
				type: "string",
				description: "Stable wrapper ID. Auto-generated if omitted."
			},
			{
				name: "mode",
				type: "\"menu\" | \"select\" | \"multiselect\"",
				default: "\"menu\"",
				description: "Behavior + ARIA pattern. menu = role=menu/menuitem; select = role=radiogroup with native radios; multiselect = role=group with native checkboxes."
			},
			{
				name: "align",
				type: "\"start\" | \"end\"",
				default: "\"start\"",
				description: "Horizontal alignment of the popover relative to the trigger."
			},
			{
				name: "closeOnSelect",
				type: "boolean",
				description: "Close after a selection. Default: true for menu/select, false for multiselect."
			},
			{
				name: "staticLabel",
				type: "boolean",
				description: "Don't replace the trigger label with the selected option(s). Default: true for menu, false otherwise."
			},
			{
				name: "multiselectFormat",
				type: "\"count\" | \"list\"",
				default: "\"count\"",
				description: "\"count\" → \"Tags (3)\"; \"list\" → \"Design, Engineering, Product\"."
			},
			{
				name: "matchTriggerWidth",
				type: "boolean",
				default: "true",
				description: "Apply the trigger width as a min-width on the popover (JS-positioned fallback only)."
			},
			{
				name: "class",
				type: "string",
				description: "Additional classes on the wrapper."
			}
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "markup-contract",
			children: "Markup contract"
		}),
		"\n",
		createVNode(_components.p, { children: "The component expects this structure inside its slot:" }),
		"\n",
		createVNode(_components.pre, {
			class: "astro-code github-dark",
			style: {
				backgroundColor: "#24292e",
				color: "#e1e4e8",
				overflowX: "auto"
			},
			tabindex: "0",
			"data-language": "html",
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
							children: "button"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-dropdown"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"trigger\""
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
							children: " data-dropdown"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"label\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">Category</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "span"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">     "
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "<!-- optional, replaced on selection -->"
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
							children: " data-dropdown"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"arrow\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">"
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "<!-- chevron -->"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "svg"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">  "
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "<!-- optional, rotates when open -->"
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
							children: "button"
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
							style: { color: "#85E89D" },
							children: "div"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-dropdown"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"list\""
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
						style: { color: "#6A737D" },
						children: "  <!-- For mode=\"menu\": <a> or <button> elements -->"
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
							children: "a"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-dropdown"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"item\""
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
							children: "\"/profile\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">Profile</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "a"
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
							children: "button"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-dropdown"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"item\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " type"
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
							style: { color: "#E1E4E8" },
							children: ">Sign out</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "button"
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
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "  <!-- For mode=\"select\": <label> wrapping a radio -->"
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
							children: "label"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-dropdown"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"item\""
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
							children: "input"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " type"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"radio\""
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
							children: "\"cat\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " value"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"news\""
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
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "    News"
					})
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
							style: { color: "#85E89D" },
							children: "label"
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
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "  <!-- For mode=\"multiselect\": <label> wrapping a checkbox -->"
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
							children: "label"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-dropdown"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"item\""
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
							children: "input"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " type"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"checkbox\""
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
							children: "\"tags\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " value"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"design\""
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
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "    Design"
					})
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
							style: { color: "#85E89D" },
							children: "label"
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
		createVNode(_components.h3, {
			id: "inner-data-attributes",
			children: "Inner data attributes"
		}),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "Attribute" }),
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
					createVNode(_components.td, { children: createVNode(_components.code, { children: "data-dropdown=\"trigger\"" }) }),
					"\n",
					createVNode(_components.td, { children: [
						"The button. The script wires ",
						createVNode(_components.code, { children: "popovertarget" }),
						", ",
						createVNode(_components.code, { children: "aria-controls" }),
						", ",
						createVNode(_components.code, { children: "aria-expanded" }),
						", ",
						createVNode(_components.code, { children: "aria-haspopup" }),
						"."
					] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "data-dropdown=\"list\"" }) }),
					"\n",
					createVNode(_components.td, { children: [
						"The popover panel. The script adds the ",
						createVNode(_components.code, { children: "popover" }),
						" attribute, an ID, and the appropriate ",
						createVNode(_components.code, { children: "role" }),
						"."
					] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "data-dropdown=\"item\"" }) }),
					"\n",
					createVNode(_components.td, { children: "One option / menu item." }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "data-dropdown=\"label\"" }) }),
					"\n",
					createVNode(_components.td, { children: "Span inside the trigger whose text gets replaced on selection." }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "data-dropdown=\"arrow\"" }) }),
					"\n",
					createVNode(_components.td, { children: [
						"Chevron that gets ",
						createVNode(_components.code, { children: "transform: rotate(180deg)" }),
						" while open."
					] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "data-dropdown=\"item-label\"" }) }),
					"\n",
					createVNode(_components.td, { children: "Optional — explicit element whose text is used for the selection label, when the item contains extra markup." }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "modes-in-detail",
			children: "Modes in detail"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "menu--action-menu",
			children: [createVNode(_components.code, { children: "menu" }), " — action menu"]
		}),
		"\n",
		createVNode(_components.p, { children: [
			"ARIA: ",
			createVNode(_components.code, { children: "role=\"menu\"" }),
			" on the list, ",
			createVNode(_components.code, { children: "role=\"menuitem\"" }),
			" on each item with ",
			createVNode(_components.code, { children: "tabindex=\"-1\"" }),
			"."
		] }),
		"\n",
		createVNode(_components.p, { children: "Keyboard:" }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "ArrowDown/ArrowUp from the trigger opens the popover and focuses first/last item." }),
			"\n",
			createVNode(_components.li, { children: "ArrowDown/ArrowUp inside the menu cycle through items." }),
			"\n",
			createVNode(_components.li, { children: "Home / End jump to first / last." }),
			"\n",
			createVNode(_components.li, { children: "Tab closes and lets focus continue naturally." }),
			"\n",
			createVNode(_components.li, { children: [
				"Enter/Space activate the focused item (native ",
				createVNode(_components.code, { children: "<a>" }),
				" / ",
				createVNode(_components.code, { children: "<button>" }),
				" behavior)."
			] }),
			"\n",
			createVNode(_components.li, { children: "Escape closes (native popover)." }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"The trigger label is ",
			createVNode(_components.strong, { children: "not" }),
			" replaced — this is an action menu, not a selection."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "select--single-choice-picker",
			children: [createVNode(_components.code, { children: "select" }), " — single-choice picker"]
		}),
		"\n",
		createVNode(_components.p, { children: [
			"ARIA: ",
			createVNode(_components.code, { children: "role=\"radiogroup\"" }),
			" on the list. Native ",
			createVNode(_components.code, { children: "<input type=\"radio\">" }),
			" does the rest — screen readers announce “1 of 3” automatically and arrow-key navigation between radios is built in."
		] }),
		"\n",
		createVNode(_components.p, { children: "Behavior:" }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "Selecting a radio updates the trigger label to that option’s text." }),
			"\n",
			createVNode(_components.li, { children: [
				"The popover closes after selection (configurable via ",
				createVNode(_components.code, { children: "closeOnSelect={false}" }),
				")."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "multiselect--multi-choice-picker",
			children: [createVNode(_components.code, { children: "multiselect" }), " — multi-choice picker"]
		}),
		"\n",
		createVNode(_components.p, { children: [
			"ARIA: ",
			createVNode(_components.code, { children: "role=\"group\"" }),
			" on the list with ",
			createVNode(_components.code, { children: "aria-labelledby" }),
			" pointing at the trigger. Native ",
			createVNode(_components.code, { children: "<input type=\"checkbox\">" }),
			" provides accessible toggle, with Space-to-toggle and screen-reader announcements."
		] }),
		"\n",
		createVNode(_components.p, { children: "Behavior:" }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Trigger label updates to a count (",
				createVNode(_components.code, { children: "Tags (3)" }),
				") or comma-separated list, controlled by ",
				createVNode(_components.code, { children: "multiselectFormat" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: "The popover stays open while the user picks; closes on click-outside (native), Escape (native), or when focus leaves the popover entirely." }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "accessibility",
			children: "Accessibility"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Trigger gets ",
				createVNode(_components.code, { children: "aria-haspopup=\"menu\"" }),
				" (menu mode) or ",
				createVNode(_components.code, { children: "\"listbox\"" }),
				" (select / multiselect)."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "aria-expanded" }),
				" reflects the popover state in real time via the ",
				createVNode(_components.code, { children: "toggle" }),
				" event."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"For form modes (select / multiselect), the chosen ARIA roles wrap ",
				createVNode(_components.strong, { children: "native" }),
				" radios and checkboxes — these are accessible by default and submit naturally inside ",
				createVNode(_components.code, { children: "<form>" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "role=\"menuitem\"" }), " items are managed via roving tabindex; the menu pattern matches WAI-ARIA’s APG specification."] }),
			"\n",
			createVNode(_components.li, { children: [
				"The popover lives in the top layer, so a dropdown inside an ",
				createVNode(_components.code, { children: "overflow:hidden" }),
				" parent is never clipped."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Disabled items: add ",
				createVNode(_components.code, { children: "disabled" }),
				" (form inputs / buttons) or ",
				createVNode(_components.code, { children: "aria-disabled=\"true\"" }),
				" to the wrapping ",
				createVNode(_components.code, { children: "[data-dropdown=\"item\"]" }),
				". The script skips them in keyboard navigation."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "positioning",
			children: "Positioning"
		}),
		"\n",
		createVNode(_components.p, { children: "By default the popover is anchored below the trigger and aligned to its left edge." }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "Browsers with CSS Anchor Positioning" }), " (Chromium 125+, Safari 26+) get a pure-CSS implementation that follows the trigger as the page scrolls, with automatic flip-up when there’s no room below."] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Other browsers" }),
				" use a small JS positioner: position computed on ",
				createVNode(_components.code, { children: "toggle" }),
				", updated on scroll/resize while the popover is open, clamped to the viewport edges."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"Use ",
			createVNode(_components.code, { children: "align=\"end\"" }),
			" to right-align the popover with the trigger."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "forms",
			children: "Forms"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Because select and multiselect modes use native radios and checkboxes, dropping a ",
			createVNode(_components.code, { children: "<Dropdown>" }),
			" inside a ",
			createVNode(_components.code, { children: "<form>" }),
			" Just Works:"
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
							children: "form"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " action"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"/search\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " method"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"get\""
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
							children: "Dropdown"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " mode"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"multiselect\""
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
							children: "button"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-dropdown"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"trigger\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " type"
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
							children: " class"
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
							children: "      <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "span"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-dropdown"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"label\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">Tags</"
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
							children: "    </"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "button"
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
							children: "div"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-dropdown"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"list\""
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
							children: "      <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "label"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-dropdown"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"item\""
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
							children: "        <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "input"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " type"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"checkbox\""
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
							children: "\"tags\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " value"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"design\""
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
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "        Design"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "      </"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "label"
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
							children: "      <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "label"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-dropdown"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"item\""
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
							children: "        <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "input"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " type"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"checkbox\""
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
							children: "\"tags\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " value"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"eng\""
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
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "        Engineering"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "      </"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "label"
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
							children: "    </"
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
							children: "Dropdown"
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
							children: "button"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " type"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"submit\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">Search</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "button"
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
							style: { color: "#85E89D" },
							children: "form"
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
			"Submitting the form sends ",
			createVNode(_components.code, { children: "tags=design&tags=eng" }),
			" exactly like a normal checkbox group — no JS post-processing required."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "dependencies",
			children: "Dependencies"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "None." }),
				" Native ",
				createVNode(_components.a, {
					href: "https://caniuse.com/mdn-html_global_attributes_popover",
					children: "Popover API"
				}),
				" (Baseline 2024 — all evergreen browsers)."
			] }),
			"\n",
			createVNode(_components.li, { children: "CSS Anchor Positioning is used as a progressive enhancement; the JS positioning fallback handles everything else." }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "notes",
			children: "Notes"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: createVNode(_components.code, { children: "data-dropdown-open" }) }), " on the wrapper mirrors the popover state in the DOM, so non-Anchor-Positioning CSS hooks (like the chevron rotation) work everywhere."] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "Multiple instances" }), " on a page are independent — each gets its own popover ID and its own listeners. No shared module state."] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "View transitions" }),
				" — re-init runs on ",
				createVNode(_components.code, { children: "astro:page-load" }),
				", idempotent via ",
				createVNode(_components.code, { children: "data-script-initialized" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: createVNode(_components.code, { children: "matchTriggerWidth" }) }),
				" only affects the JS-positioned fallback. Anchor-positioned popovers size themselves naturally; add ",
				createVNode(_components.code, { children: "min-width: anchor-size(width)" }),
				" in your styles if you want it there too."
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
	"title": "Dropdown",
	"description": "Accessible popover-based dropdown with three modes — action menu, single-select, and multi-select. Built on the native Popover API for free top-layer rendering, light dismiss, and Escape handling.",
	"category": "pattern",
	"order": 56,
	"sourceFile": "src/components/Dropdown.astro",
	"status": "stable",
	"related": [
		"Modal",
		"ComboboxGrouped",
		"FilterBar"
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
			"slug": "markup-contract",
			"text": "Markup contract"
		},
		{
			"depth": 3,
			"slug": "inner-data-attributes",
			"text": "Inner data attributes"
		},
		{
			"depth": 2,
			"slug": "modes-in-detail",
			"text": "Modes in detail"
		},
		{
			"depth": 3,
			"slug": "menu--action-menu",
			"text": "menu — action menu"
		},
		{
			"depth": 3,
			"slug": "select--single-choice-picker",
			"text": "select — single-choice picker"
		},
		{
			"depth": 3,
			"slug": "multiselect--multi-choice-picker",
			"text": "multiselect — multi-choice picker"
		},
		{
			"depth": 2,
			"slug": "accessibility",
			"text": "Accessibility"
		},
		{
			"depth": 2,
			"slug": "positioning",
			"text": "Positioning"
		},
		{
			"depth": 2,
			"slug": "forms",
			"text": "Forms"
		},
		{
			"depth": 2,
			"slug": "dependencies",
			"text": "Dependencies"
		},
		{
			"depth": 2,
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/dropdown.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/dropdown.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/dropdown.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
