import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, l as renderComponent, o as renderScript, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Icon } from "./components_BhnmEz9L.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
import { t as $$Logo } from "./Logo_hAF4YedL.mjs";
//#region src/components/LogoMenu.astro
createAstro("https://example.com");
var $$LogoMenu = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LogoMenu;
	const { href = "/", ariaLabel = "Home", class: className = "", logoClass = "h-5 w-auto", items = [
		{
			type: "action",
			label: "Copy logo as SVG",
			action: "copy-svg"
		},
		{
			type: "link",
			label: "Download logo pack",
			href: "/brand/"
		},
		{
			type: "link",
			label: "View brand guidelines",
			href: "/brand/guidelines/"
		}
	] } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div data-logo-menu${addAttribute(["relative inline-block", className], "class:list")} data-astro-cid-cqu42klm> <a${addAttribute(href, "href")}${addAttribute(ariaLabel, "aria-label")} aria-haspopup="menu" aria-expanded="false" data-logo-trigger class="inline-flex items-center text-fg transition hover:text-intent outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas" data-astro-cid-cqu42klm> <span data-logo-svg class="contents" data-astro-cid-cqu42klm> ${renderComponent($$result, "Logo", $$Logo, {
		"class": logoClass,
		"data-astro-cid-cqu42klm": true
	})} </span> </a> <div data-logo-panel role="menu"${addAttribute(`${ariaLabel} options`, "aria-label")} tabindex="-1" class="absolute left-0 top-full z-50 mt-2 hidden min-w-56 border border-stroke bg-panel py-1 shadow-popover" data-astro-cid-cqu42klm> ${items.map((item) => {
		if (item.type === "action") return renderTemplate`<button type="button" role="menuitem" data-logo-item${addAttribute(item.action, "data-action")} class="block w-full text-left px-3 py-2 text-sm text-fg-muted transition hover:bg-panel-muted hover:text-fg focus-visible:bg-panel-muted focus-visible:text-fg outline-none" data-astro-cid-cqu42klm> ${item.label} </button>`;
		const link = item;
		return renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(link.target, "target")}${addAttribute(link.target === "_blank" ? "noopener noreferrer" : void 0, "rel")} role="menuitem" data-logo-item class="block px-3 py-2 text-sm text-fg-muted transition hover:bg-panel-muted hover:text-fg focus-visible:bg-panel-muted focus-visible:text-fg outline-none" data-astro-cid-cqu42klm> ${link.label} </a>`;
	})} </div> <div data-logo-toast role="status" aria-live="polite" class="pointer-events-none fixed bottom-4 right-4 z-[60] hidden items-center gap-2 border border-stroke bg-panel px-3 py-2 text-xs text-fg-muted shadow-popover" data-theme="dark" data-astro-cid-cqu42klm> ${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:check",
		"class": "h-3.5 w-3.5 text-intent",
		"aria-hidden": "true",
		"data-astro-cid-cqu42klm": true
	})} <span data-logo-toast-text data-astro-cid-cqu42klm>Copied</span> </div> </div> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/LogoMenu.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/LogoMenu.astro", void 0);
//#endregion
//#region src/content/components/logo-menu.mdx
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
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"Wraps the site ",
			createVNode(_components.code, { children: "Logo" }),
			" in a normal home link and overrides the browser’s right-click menu with a small custom one. The first item copies the inline ",
			createVNode(_components.code, { children: "<svg>" }),
			" markup to the clipboard; remaining items are arbitrary links (brand assets, press kit, guidelines, Figma file, etc.). Wired into ",
			createVNode(_components.code, { children: "NavMorph" }),
			" by default — right-click the wordmark in the header to see it."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Right-click the wordmark",
			align: "start",
			children: createVNode($$LogoMenu, { logoClass: "h-5 w-auto" })
		}),
		"\n",
		createVNode($$Preview, {
			label: "Custom items",
			align: "start",
			children: createVNode($$LogoMenu, {
				logoClass: "h-5 w-auto",
				items: [
					{
						type: "action",
						label: "Copy logo as SVG",
						action: "copy-svg"
					},
					{
						type: "link",
						label: "Press kit",
						href: "/press/"
					},
					{
						type: "link",
						label: "Figma file",
						href: "https://figma.com/file/abc",
						target: "_blank"
					},
					{
						type: "link",
						label: "Brand guidelines",
						href: "/brand/guidelines/"
					}
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
				name: "href",
				type: "string",
				default: "\"/\"",
				description: "Destination of the logo home link (left-click)."
			},
			{
				name: "ariaLabel",
				type: "string",
				default: "\"Home\"",
				description: "Accessible label for the trigger anchor and prefix on the menu's aria-label."
			},
			{
				name: "items",
				type: "Item[]",
				default: "3-item default",
				description: "Menu entries. See item shape below. Defaults to: Copy logo as SVG / Download logo pack / View brand guidelines."
			},
			{
				name: "class",
				type: "string",
				description: "Extra classes on the wrapping <div> (e.g. layout padding)."
			},
			{
				name: "logoClass",
				type: "string",
				default: "\"h-5 w-auto\"",
				description: "Classes forwarded to the inner <Logo /> SVG."
			}
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "item-shape",
			children: "Item shape"
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
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "  |"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " { "
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "type"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: ":"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"action\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "; "
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "label"
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
							children: "action"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: ":"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"copy-svg\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " }"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "  |"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " { "
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "type"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "?:"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"link\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "; "
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "label"
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
							children: "href"
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
							children: "target"
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
							children: " };"
						})
					]
				})
			] })
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "action" }),
				" items render as ",
				createVNode(_components.code, { children: "<button>" }),
				" and run the named action. Currently only ",
				createVNode(_components.code, { children: "\"copy-svg\"" }),
				" is supported — extend the ",
				createVNode(_components.code, { children: "panel.click" }),
				" handler in the component script to add more."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "link" }),
				" items render as ",
				createVNode(_components.code, { children: "<a>" }),
				". When ",
				createVNode(_components.code, { children: "target=\"_blank\"" }),
				", ",
				createVNode(_components.code, { children: "rel=\"noopener noreferrer\"" }),
				" is added automatically."
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
			id: "trigger",
			children: "Trigger"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"The whole logo is a single ",
				createVNode(_components.code, { children: "<a href={href}>" }),
				" so left-click navigates home."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"A ",
				createVNode(_components.code, { children: "contextmenu" }),
				" listener on that anchor calls ",
				createVNode(_components.code, { children: "preventDefault()" }),
				" and toggles the panel."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "panel",
			children: "Panel"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "role=\"menu\"" }),
				" with ",
				createVNode(_components.code, { children: "role=\"menuitem\"" }),
				" children."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Positioned absolutely (",
				createVNode(_components.code, { children: "top-full mt-2 left-0" }),
				"); only visible while not ",
				createVNode(_components.code, { children: "hidden" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Closes on: outside click, ",
				createVNode(_components.code, { children: "Escape" }),
				", ",
				createVNode(_components.code, { children: "Tab" }),
				", or after an item is chosen."
			] }),
			"\n",
			createVNode(_components.li, { children: "Arrow Up/Down/Home/End move focus through items." }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "aria-expanded" }), " on the trigger reflects panel state."] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "copy-svg",
			children: "Copy SVG"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Clones the inline ",
				createVNode(_components.code, { children: "<svg>" }),
				", ensures ",
				createVNode(_components.code, { children: "xmlns" }),
				" is present, serializes via ",
				createVNode(_components.code, { children: "XMLSerializer" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Writes to clipboard via ",
				createVNode(_components.code, { children: "navigator.clipboard.writeText" }),
				"; falls back to a hidden ",
				createVNode(_components.code, { children: "<textarea>" }),
				" + ",
				createVNode(_components.code, { children: "document.execCommand(\"copy\")" }),
				" if the modern API rejects (e.g. insecure context)."
			] }),
			"\n",
			createVNode(_components.li, { children: "On success, fires the toast with “Logo copied to clipboard”; on failure, “Copy failed”." }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "toast",
			children: "Toast"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Single ",
				createVNode(_components.code, { children: "role=\"status\" aria-live=\"polite\"" }),
				" element fixed at ",
				createVNode(_components.code, { children: "bottom-4 right-4" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: "Fades + slides in (180 ms), holds 1.8 s, fades out (200 ms)." }),
			"\n",
			createVNode(_components.li, { children: [
				"Honours ",
				createVNode(_components.code, { children: "prefers-reduced-motion: reduce" }),
				" (no transitions)."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Lives inside the component instance, so multiple ",
				createVNode(_components.code, { children: "LogoMenu" }),
				" mounts each get their own toast."
			] }),
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
							children: " LogoMenu "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/LogoMenu.astro\""
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
							children: "/* Default — 3 items, links to /brand/ and /brand/guidelines/ */"
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
							children: "LogoMenu"
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
							children: "/* Custom items */"
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
					children: [createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "<"
					}), createVNode(_components.span, {
						style: { color: "#79B8FF" },
						children: "LogoMenu"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  href"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"/\""
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
							children: "    { type: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"action\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", label: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Copy logo as SVG\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", action: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"copy-svg\""
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
							children: "    { type: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"link\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", label: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Press kit\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", href: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"/press/\""
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
							children: "    { type: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"link\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", label: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Figma file\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", href: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"https://figma.com/file/abc\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", target: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"_blank\""
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
		createVNode(_components.h2, {
			id: "extending",
			children: "Extending"
		}),
		"\n",
		createVNode(_components.p, { children: "To add a new action (e.g. “Copy logo as PNG”):" }),
		"\n",
		createVNode(_components.ol, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Extend the ",
				createVNode(_components.code, { children: "ActionItem" }),
				" union with the new action name."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Render it as a ",
				createVNode(_components.code, { children: "<button data-action=\"…\">" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Branch on the action in the ",
				createVNode(_components.code, { children: "panel.click" }),
				" handler inside the script and call your handler."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Resolve to ",
				createVNode(_components.code, { children: "true" }),
				" on success so the toast confirms."
			] }),
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
			createVNode(_components.li, { children: [
				"The script is module-scoped and queries ",
				createVNode(_components.code, { children: "[data-logo-menu]" }),
				" once on load. If you mount one dynamically, call ",
				createVNode(_components.code, { children: "init()" }),
				" manually."
			] }),
			"\n",
			createVNode(_components.li, { children: "Right-click on touch devices doesn’t apply — left-click still navigates home; the menu is desktop-only by intent. A long-press handler can be added if needed." }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "LogoMenu",
	"description": "Logo home link with a custom right-click context menu — copy SVG to clipboard, plus configurable links (brand assets, guidelines).",
	"category": "pattern",
	"order": 25,
	"sourceFile": "src/components/LogoMenu.astro",
	"status": "stable",
	"related": [
		"Logo",
		"Nav",
		"NavMorph"
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
			"depth": 3,
			"slug": "item-shape",
			"text": "Item shape"
		},
		{
			"depth": 2,
			"slug": "mechanism",
			"text": "Mechanism"
		},
		{
			"depth": 3,
			"slug": "trigger",
			"text": "Trigger"
		},
		{
			"depth": 3,
			"slug": "panel",
			"text": "Panel"
		},
		{
			"depth": 3,
			"slug": "copy-svg",
			"text": "Copy SVG"
		},
		{
			"depth": 3,
			"slug": "toast",
			"text": "Toast"
		},
		{
			"depth": 2,
			"slug": "usage",
			"text": "Usage"
		},
		{
			"depth": 2,
			"slug": "extending",
			"text": "Extending"
		},
		{
			"depth": 2,
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/logo-menu.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/logo-menu.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/logo-menu.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
