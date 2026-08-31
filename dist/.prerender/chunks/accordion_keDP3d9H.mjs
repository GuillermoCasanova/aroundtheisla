import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
import { t as $$Accordion } from "./Accordion_DnEpkoL8.mjs";
//#region src/content/components/accordion.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"A behavior-only disclosure primitive. The component handles state, ARIA wiring, keyboard navigation, and height animation — and the caller provides the markup for each item via a ",
			createVNode(_components.code, { children: "data-accordion=\"...\"" }),
			" contract. Use this when you need full control over how items look (rich content, icons, embedded buttons, custom typography). For plain question/answer lists, reach for ",
			createVNode(_components.code, { children: "AccordionFAQ" }),
			" instead."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Three items, single-open",
			children: createVNode("div", {
				class: "w-full max-w-md",
				children: createVNode($$Accordion, {
					closePrevious: true,
					openByDefault: 1,
					children: [
						createVNode("div", {
							"data-accordion": "item",
							class: "border-b border-stroke",
							children: [createVNode("button", {
								type: "button",
								"data-accordion": "button",
								class: "flex w-full justify-between py-4 text-left text-fg",
								children: [createVNode(_components.span, { children: "What is Astro?" }), createVNode("svg", {
									"data-accordion": "icon",
									class: "h-4 w-4 shrink-0 text-fg-muted",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									"stroke-width": "2",
									"aria-hidden": "true",
									children: createVNode("path", {
										d: "M6 9l6 6 6-6",
										"stroke-linecap": "round",
										"stroke-linejoin": "round"
									})
								})]
							}), createVNode("div", {
								"data-accordion": "content",
								children: createVNode("div", {
									class: "pb-4 text-fg-muted",
									children: "A web framework for content-driven websites — ships zero JS by default."
								})
							})]
						}),
						createVNode("div", {
							"data-accordion": "item",
							class: "border-b border-stroke",
							children: [createVNode("button", {
								type: "button",
								"data-accordion": "button",
								class: "flex w-full justify-between py-4 text-left text-fg",
								children: [createVNode(_components.span, { children: "How does it compare to Next.js?" }), createVNode("svg", {
									"data-accordion": "icon",
									class: "h-4 w-4 shrink-0 text-fg-muted",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									"stroke-width": "2",
									"aria-hidden": "true",
									children: createVNode("path", {
										d: "M6 9l6 6 6-6",
										"stroke-linecap": "round",
										"stroke-linejoin": "round"
									})
								})]
							}), createVNode("div", {
								"data-accordion": "content",
								children: createVNode("div", {
									class: "pb-4 text-fg-muted",
									children: "Astro ships less JavaScript by default. Next.js is better for app-like UIs."
								})
							})]
						}),
						createVNode("div", {
							"data-accordion": "item",
							children: [createVNode("button", {
								type: "button",
								"data-accordion": "button",
								class: "flex w-full justify-between py-4 text-left text-fg",
								children: [createVNode(_components.span, { children: "Can I use React inside Astro?" }), createVNode("svg", {
									"data-accordion": "icon",
									class: "h-4 w-4 shrink-0 text-fg-muted",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									"stroke-width": "2",
									"aria-hidden": "true",
									children: createVNode("path", {
										d: "M6 9l6 6 6-6",
										"stroke-linecap": "round",
										"stroke-linejoin": "round"
									})
								})]
							}), createVNode("div", {
								"data-accordion": "content",
								children: createVNode("div", {
									class: "pb-4 text-fg-muted",
									children: "Yes — and Vue, Svelte, Solid, Preact, and Lit. Use the right tool per island."
								})
							})]
						})
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
		createVNode($$PropsTable, { props: [
			{
				name: "closePrevious",
				type: "boolean",
				default: "true",
				description: "Close other items when one opens (single-open mode)."
			},
			{
				name: "closeOnSecondClick",
				type: "boolean",
				default: "true",
				description: "Allow closing an open item by clicking it again."
			},
			{
				name: "openByDefault",
				type: "number",
				description: "1-based index of the item to open on page load."
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
							children: "div"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-accordion"
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
							children: "\"button\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-accordion"
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
							children: ">"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "    Trigger text"
					})
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
							children: "svg"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-accordion"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"icon\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "></"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "svg"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">    "
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "<!-- optional -->"
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
							children: "  <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "div"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-accordion"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"content\""
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
							style: { color: "#E1E4E8" },
							children: ">Hidden content here</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "div"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">       "
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "<!-- single wrapper -->"
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
			id: "why-button-and-not-div",
			children: [
				"Why ",
				createVNode(_components.code, { children: "<button>" }),
				" and not ",
				createVNode(_components.code, { children: "<div>" })
			]
		}),
		"\n",
		createVNode(_components.p, { children: [
			createVNode(_components.code, { children: "[data-accordion=\"button\"]" }),
			" ",
			createVNode(_components.strong, { children: [
				"should be a native ",
				createVNode(_components.code, { children: "<button>" }),
				" element"
			] }),
			". Native buttons are focusable and activatable by default, receive the correct accessible name from their visible text, and fire click on Enter and Space without extra wiring. The script applies ARIA and a roving tabindex on whatever element you provide, but it does not re-implement platform focus semantics — a ",
			createVNode(_components.code, { children: "<div role=\"button\">" }),
			" works, but is fragile and fails silently for users on platforms or AT that rely on native semantics."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "content-wrapper-requirement",
			children: "Content wrapper requirement"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"The content div must have ",
			createVNode(_components.strong, { children: "exactly one direct child wrapper" }),
			". The grid-row animation sets ",
			createVNode(_components.code, { children: "min-height: 0" }),
			" on ",
			createVNode(_components.code, { children: "[data-accordion=\"content\"] > *" }),
			" so it can collapse to zero; with two siblings directly inside, margins can collapse oddly mid-animation. Always wrap your content in one ",
			createVNode(_components.code, { children: "<div>" }),
			"."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "mechanism",
			children: "Mechanism"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "animation",
			children: "Animation"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Uses a ",
				createVNode(_components.strong, { children: "CSS grid trick" }),
				" for height: ",
				createVNode(_components.code, { children: "grid-template-rows" }),
				" transitions from ",
				createVNode(_components.code, { children: "minmax(0, 0fr)" }),
				" to ",
				createVNode(_components.code, { children: "minmax(0, 1fr)" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: "No JS height calculation — the browser measures." }),
			"\n",
			createVNode(_components.li, { children: [
				"The optional ",
				createVNode(_components.code, { children: "[data-accordion=\"icon\"]" }),
				" element rotates 180° when active."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Respects ",
				createVNode(_components.code, { children: "prefers-reduced-motion: reduce" }),
				" — both height and icon transitions are disabled."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "aria--accessibility",
			children: "ARIA & accessibility"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Each button receives ",
				createVNode(_components.code, { children: "role=\"button\"" }),
				", ",
				createVNode(_components.code, { children: "aria-expanded" }),
				", ",
				createVNode(_components.code, { children: "aria-controls" }),
				", and a generated ",
				createVNode(_components.code, { children: "id" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Each content region receives ",
				createVNode(_components.code, { children: "role=\"region\"" }),
				" and ",
				createVNode(_components.code, { children: "aria-labelledby" }),
				" pointing at its button."
			] }),
			"\n",
			createVNode(_components.li, { children: "Keyboard: ArrowUp/Down between buttons, Home/End to first/last, Enter/Space toggles." }),
			"\n",
			createVNode(_components.li, { children: [
				"Roving ",
				createVNode(_components.code, { children: "tabindex" }),
				" — only the focused button has ",
				createVNode(_components.code, { children: "tabindex=\"0\"" }),
				", others are ",
				createVNode(_components.code, { children: "-1" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "script-initialization",
			children: "Script initialization"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "data-script-initialized" }), " guards against double-init across Astro view transitions."] }),
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
							children: " Accordion "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/Accordion.astro\""
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
							children: "Accordion"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " closePrevious"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "true"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "openByDefault"
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
							children: "}>"
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
							children: "div"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-accordion"
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
							children: "\"button\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-accordion"
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
							children: "\"flex w-full justify-between py-4\""
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
							style: { color: "#E1E4E8" },
							children: ">What is Astro?</"
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
							children: "      <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "svg"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-accordion"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"icon\""
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
							children: "\"h-4 w-4\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">...</"
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
							children: " data-accordion"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"content\""
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
							children: "div"
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
							children: "\"pb-4 text-fg-muted\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">A web framework for content-driven websites.</"
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
							children: "</"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Accordion"
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
				createVNode(_components.strong, { children: "Nested accordions are not supported." }),
				" The component queries all descendant ",
				createVNode(_components.code, { children: "[data-accordion=\"item\"]" }),
				" elements, so an inner accordion’s items leak into the outer’s keyboard handler."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Styles use ",
				createVNode(_components.code, { children: "is:global" }),
				" because the data-attribute selectors need to reach into slot content."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"For a typed, mapped API over FAQ-style data, use ",
				createVNode(_components.code, { children: "AccordionFAQ" }),
				"."
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
	"title": "Accordion",
	"description": "Low-level disclosure primitive — full markup control, ARIA + keyboard wired by data-attribute contract.",
	"category": "pattern",
	"order": 10,
	"sourceFile": "src/components/Accordion.astro",
	"status": "stable",
	"related": ["AccordionFAQ", "AccordionMorph"]
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
			"slug": "why-button-and-not-div",
			"text": "Why <button> and not <div>"
		},
		{
			"depth": 3,
			"slug": "content-wrapper-requirement",
			"text": "Content wrapper requirement"
		},
		{
			"depth": 2,
			"slug": "mechanism",
			"text": "Mechanism"
		},
		{
			"depth": 3,
			"slug": "animation",
			"text": "Animation"
		},
		{
			"depth": 3,
			"slug": "aria--accessibility",
			"text": "ARIA & accessibility"
		},
		{
			"depth": 3,
			"slug": "script-initialization",
			"text": "Script initialization"
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
var url = "src/content/components/accordion.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/accordion.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/accordion.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
