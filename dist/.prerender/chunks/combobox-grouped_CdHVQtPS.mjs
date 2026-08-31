import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, l as renderComponent, o as renderScript, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Icon } from "./components_BhnmEz9L.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/components/ComboboxGrouped.astro
createAstro("https://example.com");
var $$ComboboxGrouped = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ComboboxGrouped;
	const { id = `combobox-${Math.random().toString(36).slice(2, 9)}`, name, groups, value, placeholder = "Select an option…", searchPlaceholder = "Search…", emptyText = "No results found.", ariaLabel = "Select an option", class: className = "" } = Astro.props;
	const listboxId = `${id}-listbox`;
	const inputId = `${id}-input`;
	const initialLabel = value !== void 0 ? groups.flatMap((g) => g.items).find((i) => i.value === value)?.label ?? placeholder : placeholder;
	return renderTemplate`${maybeRenderHead($$result)}<div data-combobox${addAttribute(["relative", className], "class:list")}${addAttribute(id, "id")}>  ${name && renderTemplate`<input type="hidden"${addAttribute(name, "name")}${addAttribute(value ?? "", "value")} data-combobox-value>`}  <button type="button" data-combobox-trigger aria-haspopup="listbox" aria-expanded="false"${addAttribute(listboxId, "aria-controls")}${addAttribute(ariaLabel, "aria-label")} class="flex w-full items-center justify-between gap-2 border border-stroke bg-canvas px-3 py-2 text-left text-sm text-fg transition hover:border-stroke-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas cursor-pointer"> <span data-combobox-label${addAttribute(["truncate", value === void 0 && "text-fg-muted"], "class:list")}> ${initialLabel} </span> ${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:chevrons-up-down",
		"class": "h-4 w-4 shrink-0 text-fg-muted",
		"aria-hidden": "true"
	})} </button>  <div data-combobox-panel data-open="false" class="absolute left-0 right-0 top-full z-40 mt-1 hidden border border-stroke bg-panel shadow-popover">  <div class="flex items-center gap-2 border-b border-stroke px-3"> ${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:search",
		"class": "h-4 w-4 text-fg-muted shrink-0",
		"aria-hidden": "true"
	})} <input type="text"${addAttribute(inputId, "id")} data-combobox-search role="combobox" autocomplete="off" aria-autocomplete="list" aria-expanded="true"${addAttribute(listboxId, "aria-controls")}${addAttribute(searchPlaceholder, "placeholder")} class="w-full bg-transparent py-2.5 text-sm text-fg placeholder:text-fg-muted outline-none"> </div> <ul${addAttribute(listboxId, "id")} role="listbox"${addAttribute(ariaLabel, "aria-label")} data-combobox-list class="max-h-64 overflow-y-auto py-1"> ${groups.map((group, gi) => renderTemplate`<li role="presentation" data-combobox-group${addAttribute([gi > 0 && "mt-1 border-t border-stroke pt-1"], "class:list")}> <div data-combobox-heading class="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-fg-subtle"> ${group.heading} </div> <ul role="presentation" class="flex flex-col"> ${group.items.map((item, ii) => {
		const optionId = `${id}-opt-${gi}-${ii}`;
		const isSelected = value === item.value;
		return renderTemplate`<li role="option"${addAttribute(optionId, "id")} data-combobox-option${addAttribute(item.value, "data-value")}${addAttribute(item.disabled ? "true" : "false", "data-disabled")}${addAttribute(isSelected ? "true" : "false", "aria-selected")}${addAttribute(item.disabled ? "true" : "false", "aria-disabled")} tabindex="-1" class="flex cursor-pointer items-start gap-2 px-3 py-2 text-sm text-fg-muted transition aria-disabled:cursor-not-allowed aria-disabled:opacity-50 hover:bg-panel-muted hover:text-fg [&amp;[data-active='true']]:bg-panel-muted [&amp;[data-active='true']]:text-fg [&amp;[aria-selected='true']]:text-fg"> ${renderComponent($$result, "Icon", $$Icon, {
			"name": "lucide:check",
			"class:list": ["h-4 w-4 mt-0.5 shrink-0 text-intent", !isSelected && "invisible"],
			"data-combobox-check": true,
			"aria-hidden": "true"
		})} <span class="flex flex-col gap-0.5 min-w-0"> <span class="truncate text-fg">${item.label}</span> ${item.description && renderTemplate`<span class="truncate text-xs text-fg-muted">${item.description}</span>`} </span> </li>`;
	})} </ul> </li>`)} </ul>  <div data-combobox-empty class="hidden px-3 py-6 text-center text-sm text-fg-muted"> ${emptyText} </div> </div> </div> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/ComboboxGrouped.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/ComboboxGrouped.astro", void 0);
//#endregion
//#region src/content/components/combobox-grouped.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: "A searchable dropdown with grouped options. Live filtering, full keyboard navigation, group headings that hide automatically when their items are filtered out, an empty state, and form integration via a hidden input." }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Three groups, no preselection",
			align: "start",
			children: createVNode("div", {
				class: "w-full max-w-sm",
				children: createVNode($$ComboboxGrouped, {
					name: "framework",
					placeholder: "Select a framework…",
					ariaLabel: "Choose a framework",
					groups: [
						{
							heading: "Frameworks",
							items: [
								{
									value: "astro",
									label: "Astro",
									description: "Content-focused, ships zero JS by default"
								},
								{
									value: "nextjs",
									label: "Next.js",
									description: "React framework with SSR + static"
								},
								{
									value: "nuxt",
									label: "Nuxt",
									description: "Vue framework with SSR + static"
								},
								{
									value: "sveltekit",
									label: "SvelteKit",
									description: "Svelte's official meta-framework"
								}
							]
						},
						{
							heading: "Styling",
							items: [{
								value: "tailwind",
								label: "Tailwind CSS",
								description: "Utility-first CSS framework"
							}, {
								value: "css-modules",
								label: "CSS Modules",
								description: "Scoped class names"
							}]
						},
						{
							heading: "Bundlers",
							items: [
								{
									value: "vite",
									label: "Vite",
									description: "ESM-native dev server"
								},
								{
									value: "esbuild",
									label: "esbuild",
									description: "Go-based, very fast"
								},
								{
									value: "rollup",
									label: "Rollup",
									description: "Library-friendly bundler",
									disabled: true
								}
							]
						}
					]
				})
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "With preselected value",
			align: "start",
			children: createVNode("div", {
				class: "w-full max-w-sm",
				children: createVNode($$ComboboxGrouped, {
					value: "astro",
					placeholder: "Select a framework…",
					ariaLabel: "Choose a framework",
					groups: [{
						heading: "Frameworks",
						items: [
							{
								value: "astro",
								label: "Astro",
								description: "Content-focused, ships zero JS by default"
							},
							{
								value: "nextjs",
								label: "Next.js",
								description: "React framework with SSR + static"
							},
							{
								value: "nuxt",
								label: "Nuxt",
								description: "Vue framework with SSR + static"
							}
						]
					}]
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
				name: "id",
				type: "string",
				default: "random combobox-xxxxx",
				description: "ID on the root and prefix for option IDs."
			},
			{
				name: "name",
				type: "string",
				description: "If provided, emits a hidden <input> for <form> submission."
			},
			{
				name: "groups",
				type: "Group[]",
				required: true,
				description: "Grouped options. See type shapes below."
			},
			{
				name: "value",
				type: "string",
				description: "Initial selected value (must match an item.value in groups)."
			},
			{
				name: "placeholder",
				type: "string",
				default: "\"Select an option…\"",
				description: "Trigger text when nothing is selected."
			},
			{
				name: "searchPlaceholder",
				type: "string",
				default: "\"Search…\"",
				description: "Placeholder for the search input."
			},
			{
				name: "emptyText",
				type: "string",
				default: "\"No results found.\"",
				description: "Message shown when the filter hides every option."
			},
			{
				name: "ariaLabel",
				type: "string",
				default: "\"Select an option\"",
				description: "Accessible name on the trigger and listbox."
			},
			{
				name: "class",
				type: "string",
				default: "\"\"",
				description: "Extra classes on the root."
			}
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "type-shapes",
			children: "Type shapes"
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
							children: " Item"
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
							children: "  value"
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
							children: "  label"
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
							children: "  disabled"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "?:"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " boolean"
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
				}),
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
							children: " Group"
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
							children: "  heading"
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
							children: "  items"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: ":"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " Item"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "[];"
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
							children: " ComboboxGrouped "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/ComboboxGrouped.astro\""
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
							style: { color: "#85E89D" },
							children: "form"
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
							children: "\"post\""
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
							children: "\"/submit\""
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
						children: "  <"
					}), createVNode(_components.span, {
						style: { color: "#79B8FF" },
						children: "ComboboxGrouped"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "    name"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"framework\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "    placeholder"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Select a framework…\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "    ariaLabel"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Choose a framework\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "    groups"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={["
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "      {"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "        heading: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Frameworks\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ","
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "        items: ["
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "          { value: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"astro\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", label: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Astro\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", description: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Content-focused, ships zero JS by default\""
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
							children: "          { value: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"nextjs\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", label: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Next.js\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", description: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"React framework with SSR + static\""
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
						children: "        ],"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "      },"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "      {"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "        heading: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Bundlers\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ","
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "        items: ["
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "          { value: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"vite\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", label: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Vite\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", description: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"ESM-native dev server\""
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
							children: "          { value: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"rollup\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", label: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Rollup\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", description: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Library-friendly bundler\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", disabled: "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "true"
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
						children: "        ],"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "      },"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "    ]}"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  />"
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
							children: ">Continue</"
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
		createVNode(_components.h3, {
			id: "pre-selected-value",
			children: "Pre-selected value"
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
			children: createVNode(_components.code, { children: createVNode(_components.span, {
				class: "line",
				children: [
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "<"
					}),
					createVNode(_components.span, {
						style: { color: "#79B8FF" },
						children: "ComboboxGrouped"
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
						children: "\"astro\""
					}),
					createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: " groups"
					}),
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={…} />"
					})
				]
			}) })
		}),
		"\n",
		createVNode(_components.p, { children: "The trigger text and check icon are pre-rendered server-side, so the right option appears even before JS hydrates." }),
		"\n",
		createVNode(_components.h3, {
			id: "reacting-to-changes-from-js",
			children: "Reacting to changes from JS"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"The component dispatches a custom event ",
			createVNode(_components.code, { children: "combobox:change" }),
			" on the root whenever a selection is made:"
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
							children: "script"
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
							children: "  document."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "querySelector"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"#my-combobox\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ")?."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "addEventListener"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"combobox:change\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", ("
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "e"
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
							children: " {"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "    const"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " { "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "value"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "label"
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
							children: " e.detail;"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "    console."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "log"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Selected:\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", value, label);"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  });"
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
							style: { color: "#85E89D" },
							children: "script"
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
			"The hidden ",
			createVNode(_components.code, { children: "<input name=\"…\">" }),
			" value is updated on the same change, so server-side form handling needs no JS at all."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "behavior",
			children: "Behavior"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "Open / close." }), " Trigger click toggles the panel. ArrowDown / Enter / Space on the trigger opens it. Click outside closes. Esc closes and returns focus to the trigger."] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Filter." }),
				" Typing in the search input filters items live by combined ",
				createVNode(_components.code, { children: "label + description" }),
				" text. Group headings hide when all their items are filtered out. The empty state replaces the list when nothing matches."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "Keyboard nav." }), " While the panel is open, focus stays on the search input. ArrowUp/Down moves the highlight (skipping disabled items), Home/End jump to first/last visible, Enter selects, Tab closes naturally."] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Selection." }),
				" Clicking an option (or pressing Enter on the highlighted one) writes its value into the hidden input, updates the trigger label, marks the option ",
				createVNode(_components.code, { children: "aria-selected=\"true\"" }),
				", shows its check icon, dispatches ",
				createVNode(_components.code, { children: "combobox:change" }),
				", closes the panel, and returns focus to the trigger."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Disabled items." }),
				" ",
				createVNode(_components.code, { children: "disabled: true" }),
				" items are visually muted, not selectable by mouse or keyboard, and skipped by ArrowUp/Down."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "Mouse hover." }), " Moving the mouse over an option moves the keyboard highlight too — visual state always matches the active descendant."] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "a11y",
			children: "A11y"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Trigger: ",
				createVNode(_components.code, { children: "aria-haspopup=\"listbox\"" }),
				", ",
				createVNode(_components.code, { children: "aria-expanded" }),
				", ",
				createVNode(_components.code, { children: "aria-controls={listboxId}" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Search input: ",
				createVNode(_components.code, { children: "role=\"combobox\"" }),
				", ",
				createVNode(_components.code, { children: "aria-autocomplete=\"list\"" }),
				", ",
				createVNode(_components.code, { children: "aria-expanded=\"true\"" }),
				", ",
				createVNode(_components.code, { children: "aria-controls={listboxId}" }),
				", ",
				createVNode(_components.code, { children: "aria-activedescendant={highlightedOptionId}" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"List: ",
				createVNode(_components.code, { children: "role=\"listbox\"" }),
				", ",
				createVNode(_components.code, { children: "aria-label" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Options: ",
				createVNode(_components.code, { children: "role=\"option\"" }),
				", ",
				createVNode(_components.code, { children: "aria-selected" }),
				", ",
				createVNode(_components.code, { children: "aria-disabled" }),
				". Each option has a stable ID that the search input can reference via ",
				createVNode(_components.code, { children: "aria-activedescendant" }),
				", so screen readers announce the highlighted option without DOM focus moving away from the input."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Group wrappers and headings use ",
				createVNode(_components.code, { children: "role=\"presentation\"" }),
				" so they don’t appear as items in AT navigation."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"All interactive elements use the project’s focus-ring tokens (",
				createVNode(_components.code, { children: "focus-visible:ring-focus" }),
				", ",
				createVNode(_components.code, { children: "focus-visible:ring-offset-canvas" }),
				")."
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
			createVNode(_components.li, { children: [
				"Trigger: ",
				createVNode(_components.code, { children: "bg-canvas" }),
				", ",
				createVNode(_components.code, { children: "border-stroke" }),
				" / ",
				createVNode(_components.code, { children: "hover:border-stroke-strong" }),
				", ",
				createVNode(_components.code, { children: "text-fg" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Panel: ",
				createVNode(_components.code, { children: "bg-panel" }),
				" with ",
				createVNode(_components.code, { children: "shadow-popover" }),
				" and ",
				createVNode(_components.code, { children: "border-stroke" }),
				" outline."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Group headings: ",
				createVNode(_components.code, { children: "text-fg-subtle" }),
				" (uppercase, tracked) — same treatment as the nav mega menu."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Hover / active option: ",
				createVNode(_components.code, { children: "bg-panel-muted" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Selected check icon: ",
				createVNode(_components.code, { children: "text-intent" }),
				" — only renders for the selected option."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Disabled options: ",
				createVNode(_components.code, { children: "cursor-not-allowed" }),
				" + ",
				createVNode(_components.code, { children: "opacity-50" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "form-integration",
			children: "Form integration"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Pass ",
			createVNode(_components.code, { children: "name=\"myField\"" }),
			" and the component emits a hidden ",
			createVNode(_components.code, { children: "<input>" }),
			" whose value is kept in sync with the selection. The combobox works inside a normal ",
			createVNode(_components.code, { children: "<form>" }),
			" with no extra plumbing — server-side handlers receive ",
			createVNode(_components.code, { children: "myField=astro" }),
			" (or whatever was selected). If ",
			createVNode(_components.code, { children: "name" }),
			" is omitted, no hidden input is emitted; consumers can still read the value via the ",
			createVNode(_components.code, { children: "combobox:change" }),
			" event or the ",
			createVNode(_components.code, { children: "data-combobox-value" }),
			" attribute."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "gotchas",
			children: "Gotchas"
		}),
		"\n",
		createVNode(_components.ol, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Multiple instances on a page." }),
				" Each combobox auto-generates a unique ID via ",
				createVNode(_components.code, { children: "Math.random()" }),
				", so two on the same page won’t collide. If you pass an explicit ",
				createVNode(_components.code, { children: "id" }),
				", make it unique per page yourself."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: [
					createVNode(_components.code, { children: "value" }),
					" must match an ",
					createVNode(_components.code, { children: "item.value" }),
					"."
				] }),
				" If you pass a ",
				createVNode(_components.code, { children: "value" }),
				" that doesn’t exist in ",
				createVNode(_components.code, { children: "groups" }),
				", the trigger falls back to the placeholder."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Filter matches both label and description." }),
				" Watch out for typos in descriptions surfacing matches you didn’t intend. To filter on label only, swap the ",
				createVNode(_components.code, { children: "text" }),
				" line in the script’s ",
				createVNode(_components.code, { children: "filter" }),
				" function."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: [
				"The panel uses ",
				createVNode(_components.code, { children: "position: absolute; left: 0; right: 0; top: 100%" }),
				"."
			] }), " It sits below the trigger and matches its width. If the panel would clip at the bottom of the viewport, you’ll need to add a flip-up adjustment yourself — not built-in to keep the component minimal."] }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "ComboboxGrouped",
	"description": "Searchable dropdown with grouped options, full keyboard nav, empty state, and form integration via hidden input.",
	"category": "pattern",
	"order": 70,
	"sourceFile": "src/components/ComboboxGrouped.astro",
	"status": "stable",
	"related": []
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
			"slug": "type-shapes",
			"text": "Type shapes"
		},
		{
			"depth": 2,
			"slug": "usage",
			"text": "Usage"
		},
		{
			"depth": 3,
			"slug": "pre-selected-value",
			"text": "Pre-selected value"
		},
		{
			"depth": 3,
			"slug": "reacting-to-changes-from-js",
			"text": "Reacting to changes from JS"
		},
		{
			"depth": 2,
			"slug": "behavior",
			"text": "Behavior"
		},
		{
			"depth": 2,
			"slug": "a11y",
			"text": "A11y"
		},
		{
			"depth": 2,
			"slug": "tokens",
			"text": "Tokens"
		},
		{
			"depth": 2,
			"slug": "form-integration",
			"text": "Form integration"
		},
		{
			"depth": 2,
			"slug": "gotchas",
			"text": "Gotchas"
		}
	];
}
var url = "src/content/components/combobox-grouped.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/combobox-grouped.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/combobox-grouped.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
