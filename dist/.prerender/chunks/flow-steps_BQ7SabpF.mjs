import { C as addAttribute, F as createComponent, M as unescapeHTML, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, l as renderComponent, o as renderScript, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/components/FlowSteps.astro
createAstro("https://example.com");
var $$FlowSteps = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$FlowSteps;
	const { title, description, steps, panelHeight = 560, duration = 800, class: className } = Astro.props;
	const uid = Math.random().toString(36).slice(2, 8);
	const panelHTML = await Promise.all(steps.map((_, i) => Astro.slots.has(`panel-${i}`) ? Astro.slots.render(`panel-${i}`) : Promise.resolve("")));
	return renderTemplate`${maybeRenderHead($$result)}<div data-flow-steps${addAttribute(`--flow-active: 0; --flow-duration: ${duration}ms; --flow-panel-h: ${panelHeight}px;`, "style")}${addAttribute(["relative md:grid md:grid-cols-2  border-stroke bg-canvas", className], "class:list")}>   <div class="hidden md:flex md:flex-col md:justify-between"> ${(title || description) && renderTemplate`<div class="px-10 pt-20 pb-10"> ${title && renderTemplate`<h2 class="h3">${title}</h2>`} ${description && renderTemplate`<p class="mt-4 text-fg-muted text-body-md max-w-md">${description}</p>`} </div>`} <div class="relative" role="tablist" aria-orientation="vertical"${addAttribute(title ?? "Steps", "aria-label")}> ${steps.map((step, i) => renderTemplate`<button type="button" data-flow-step${addAttribute(i, "data-index")}${addAttribute(`flow-${uid}-tab-${i}`, "id")} role="tab"${addAttribute(i === 0 ? "true" : "false", "aria-selected")}${addAttribute(`flow-${uid}-panel-${i}`, "aria-controls")}${addAttribute(i === 0 ? 0 : -1, "tabindex")}${addAttribute(i === 0 ? "" : void 0, "data-open")} class="flow-step w-full text-left relative cursor-pointer px-10 border-t border-stroke focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-focus"> <span class="flex items-center gap-x-3"> <span aria-hidden="true" class="flow-step-num inline-flex h-[18px] min-w-[18px] items-center justify-center  border border-stroke bg-panel-muted text-fg text-[10px] leading-none font-semibold"> ${i + 1} </span> <span class="text-body-sm font-medium">${step.title}</span> </span> <span class="flow-step-desc block text-fg-muted text-body-md"> <span class="flow-step-desc-inner block"> <span class="block pt-2">${step.description}</span> </span> </span> </button>`)} <div class="h-px absolute left-0 bottom-0 w-full bg-stroke" aria-hidden="true"></div> </div> </div>  <div class="hidden md:grid relative overflow-hidden border border-stroke bg-panel-muted [grid-template-areas:'stack'] [&amp;&gt;*]:[grid-area:stack]"${addAttribute(`min-height: var(--flow-panel-h);`, "style")}> ${steps.map((step, i) => renderTemplate`<div data-flow-panel${addAttribute(i, "data-index")}${addAttribute(`flow-${uid}-panel-${i}`, "id")} role="tabpanel"${addAttribute(`flow-${uid}-tab-${i}`, "aria-labelledby")}${addAttribute(i === 0 ? 0 : -1, "tabindex")}${addAttribute(i === 0 ? "false" : "true", "aria-hidden")}${addAttribute(i !== 0, "inert")} class="flow-panel flex items-center justify-center px-8 md:px-12 focus-visible:outline-2 focus-visible:outline-focus"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(panelHTML[i])}` })} </div>`)} </div>  <div class="md:hidden"> ${(title || description) && renderTemplate`<div class="px-6 pt-16 pb-8"> ${title && renderTemplate`<h2 class="h3">${title}</h2>`} ${description && renderTemplate`<p class="mt-4 text-fg-muted text-body-md">${description}</p>`} </div>`} ${steps.map((step, i) => renderTemplate`<div class="border-t border-stroke"> <div class="py-8 px-6"> <div class="flex items-center gap-x-3"> <span aria-hidden="true" class="inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full border border-intent bg-intent text-fg-on-intent text-[10px] leading-none font-semibold"> ${i + 1} </span> <h3 class="text-sm font-medium">${step.title}</h3> </div> <p class="pt-2 text-fg-muted text-sm">${step.description}</p> </div> <div class="relative flex items-center justify-center px-8 bg-panel-muted"${addAttribute(`min-height: calc(var(--flow-panel-h) * 0.85);`, "style")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(panelHTML[i])}` })} </div> </div>`)} </div> </div> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/FlowSteps.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/FlowSteps.astro", void 0);
//#endregion
//#region src/content/components/flow-steps.mdx
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
		ul: "ul"
	}, props.components);
	const { Fragment: Fragment$1 } = _components;
	if (!Fragment$1) _missingMdxReference("Fragment", true);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"A “how it works” section. The clickable step list on the left drives a ",
			createVNode(_components.strong, { children: "vertical-carousel panel" }),
			" on the right — clicking a step slides the panel column so the selected panel is in view. On mobile it collapses to a flat stack of step-header → panel pairs, so the same content reads as a linear walkthrough without any JS."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Three-step flow",
			align: "stretch",
			children: createVNode("div", {
				class: "w-full",
				children: createVNode($$FlowSteps, {
					title: "How it works.",
					description: "Issue mobile wallet credentials with a simple API integration.",
					panelHeight: 360,
					duration: 600,
					steps: [
						{
							title: "Issue credentials from your portal",
							description: "Control the look and feel of credential issuance directly in your portal."
						},
						{
							title: "Craft a template to issue passes via API",
							description: "Display your brand in wallet. Issue credentials via API, delivered over SMS."
						},
						{
							title: "Users install your custom crafted credential",
							description: "Users receive a text with a link to install the pass on their phone."
						}
					],
					children: [
						createVNode(Fragment$1, {
							slot: "panel-0",
							children: createVNode("div", {
								class: "w-full max-w-sm rounded-2xl bg-canvas p-6 shadow-popover",
								children: [
									createVNode("div", {
										class: "text-sm font-semibold text-fg",
										children: "Add credential"
									}),
									createVNode("div", {
										class: "mt-3 text-xs text-fg-muted",
										children: "Branded pass — preview before issue."
									}),
									createVNode("div", { class: "mt-6 h-24 rounded-lg bg-panel-muted" })
								]
							})
						}),
						createVNode(Fragment$1, {
							slot: "panel-1",
							children: createVNode("pre", {
								class: "w-full max-w-sm rounded-2xl bg-fg p-5 font-mono text-xs leading-5 text-canvas",
								children: `curl https://api.example.com/v1/credentials \\
--request POST \\
--header "Authorization: Bearer ..." \\
--data '{"template_id": "abc-123"}'`
							})
						}),
						createVNode(Fragment$1, {
							slot: "panel-2",
							children: createVNode("div", {
								class: "w-full max-w-xs rounded-3xl border border-stroke bg-canvas p-4 shadow-popover",
								children: [
									createVNode("div", {
										class: "text-xs text-fg-muted",
										children: "SMS · just now"
									}),
									createVNode("div", {
										class: "mt-2 text-sm text-fg",
										children: "Your pass is ready. Tap to install:"
									}),
									createVNode("div", {
										class: "mt-1 text-xs text-intent underline",
										children: createVNode(_components.a, {
											href: "https://wal.let/p/abc-123",
											children: "https://wal.let/p/abc-123"
										})
									})
								]
							})
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
				name: "title",
				type: "string",
				description: "Heading shown above the step list."
			},
			{
				name: "description",
				type: "string",
				description: "Lead paragraph under the heading."
			},
			{
				name: "steps",
				type: "Step[]",
				required: true,
				description: "Array of { title, description } — one per step."
			},
			{
				name: "panelHeight",
				type: "number",
				default: "560",
				description: "Minimum height of the panel area in px (desktop)."
			},
			{
				name: "duration",
				type: "number",
				default: "800",
				description: "Transition duration in ms for slide + description reveal."
			},
			{
				name: "class",
				type: "string",
				description: "Additional classes on the wrapper."
			}
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"The ",
			createVNode(_components.code, { children: "Step" }),
			" shape:"
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
			"data-language": "ts",
			children: createVNode(_components.code, { children: [
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "interface"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " Step"
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
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "}"
					})
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Panels are passed via named slots: ",
			createVNode(_components.code, { children: "panel-0" }),
			", ",
			createVNode(_components.code, { children: "panel-1" }),
			", etc. — one per step."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "mechanism",
			children: "Mechanism"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "the-vertical-carousel",
			children: "The vertical carousel"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"All panels occupy the ",
			createVNode(_components.strong, { children: "same CSS grid cell" }),
			" (",
			createVNode(_components.code, { children: "[grid-template-areas:'stack']" }),
			" with every child placed into ",
			createVNode(_components.code, { children: "stack" }),
			"), so they sit on top of each other. Each panel sets its own index as a CSS custom property (",
			createVNode(_components.code, { children: "--flow-i" }),
			") and the root sets ",
			createVNode(_components.code, { children: "--flow-active" }),
			" to the selected index. The transform is:"
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
			children: createVNode(_components.code, { children: createVNode(_components.span, {
				class: "line",
				children: [
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "transform: translateY(calc((var(--flow-i) - var(--flow-active)) "
					}),
					createVNode(_components.span, {
						style: { color: "#85E89D" },
						children: "*"
					}),
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: " 100%));"
					})
				]
			}) })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"With ",
			createVNode(_components.code, { children: "overflow: hidden" }),
			" on the container, only the panel whose ",
			createVNode(_components.code, { children: "--flow-i" }),
			" equals ",
			createVNode(_components.code, { children: "--flow-active" }),
			" is visible — the others sit just above or below the viewport. Changing ",
			createVNode(_components.code, { children: "--flow-active" }),
			" animates the whole column in one motion. The transition is CSS-only; JS just flips the custom property."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "step-description-reveal",
			children: "Step description reveal"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"The expanded description under the active step uses the ",
			createVNode(_components.strong, { children: [
				"CSS grid ",
				createVNode(_components.code, { children: "0fr" }),
				" / ",
				createVNode(_components.code, { children: "1fr" })
			] }),
			" technique (same as ",
			createVNode(_components.code, { children: "Accordion" }),
			") so height animates without JS measurement. It works inside a ",
			createVNode(_components.code, { children: "<button>" }),
			" because the animated element is a ",
			createVNode(_components.code, { children: "<span>" }),
			" with ",
			createVNode(_components.code, { children: "display: grid" }),
			"."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "mobile-layout",
			children: "Mobile layout"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Below ",
			createVNode(_components.code, { children: "md" }),
			" the component renders a ",
			createVNode(_components.strong, { children: "separate DOM tree" }),
			": the stepped carousel is hidden, and a flat stack of ",
			createVNode(_components.code, { children: "step-header" }),
			" + ",
			createVNode(_components.code, { children: "panel" }),
			" pairs is shown. No JS runs against the mobile tree — panels are always visible, in order. Zero interactivity required."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "named-slots-via-astroslotsrender",
			children: ["Named slots via ", createVNode(_components.code, { children: "Astro.slots.render" })]
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Astro requires static slot names, so the component renders each ",
			createVNode(_components.code, { children: "panel-N" }),
			" slot to HTML in the frontmatter and injects it via ",
			createVNode(_components.code, { children: "<Fragment set:html={…} />" }),
			". The caller’s API stays ",
			createVNode(_components.code, { children: "<Fragment slot=\"panel-0\">…</Fragment>" }),
			". Panel content is duplicated between desktop and mobile renders — keep panels visual and side-effect-free (no form inputs that would collide on IDs, no iframes that would double-load)."
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
				"The step list is ",
				createVNode(_components.code, { children: "role=\"tablist\"" }),
				" with ",
				createVNode(_components.code, { children: "aria-orientation=\"vertical\"" }),
				"; each step is a native ",
				createVNode(_components.code, { children: "<button role=\"tab\">" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Each panel is ",
				createVNode(_components.code, { children: "role=\"tabpanel\"" }),
				" with ",
				createVNode(_components.code, { children: "tabindex=\"0\"" }),
				" so screen-reader users can enter the panel content."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "aria-selected" }),
				" + ",
				createVNode(_components.code, { children: "aria-controls" }),
				" (tab) and ",
				createVNode(_components.code, { children: "aria-labelledby" }),
				" + ",
				createVNode(_components.code, { children: "aria-hidden" }),
				" (panel) wired on every state change."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Roving ",
				createVNode(_components.code, { children: "tabindex" }),
				" — only the active tab has ",
				createVNode(_components.code, { children: "tabindex=\"0\"" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: "Keyboard: ArrowUp/Down and ArrowLeft/Right cycle (wrapping); Home/End jump to first/last." }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Reduced motion" }),
				" — slide, padding, pill fill, and description reveal transitions are all disabled under ",
				createVNode(_components.code, { children: "prefers-reduced-motion: reduce" }),
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
			"\n",
			createVNode(_components.li, { children: "Each instance uses a random UID in its ARIA IDs, so multiple FlowSteps coexist safely on the same page." }),
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
							children: " FlowSteps "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/FlowSteps.astro\""
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
							children: " SectionMain "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/SectionMain.astro\""
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
							children: "SectionMain"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " id"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"how-it-works\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " padding"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"none\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " contentPadding"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"none\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " borderTop"
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
						children: "FlowSteps"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "    title"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"How it works.\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "    description"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Issue mobile wallet credentials with a simple API integration.\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "    steps"
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
							children: "      { title: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Issue credentials from your portal\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", description: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Control the look and feel of credential issuance.\""
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
							children: "      { title: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Craft a template to issue passes via API\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", description: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Display your brand in wallet.\""
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
							children: "      { title: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Users install your custom crafted credential\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", description: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Users receive a text with an install link.\""
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
						children: "    ]}"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  >"
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
							style: { color: "#79B8FF" },
							children: "Fragment"
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
							children: "\"panel-0\""
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
							children: "\"w-full max-w-sm rounded-2xl bg-canvas p-6 shadow-popover\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">…</"
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
							style: { color: "#79B8FF" },
							children: "Fragment"
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
							style: { color: "#79B8FF" },
							children: "Fragment"
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
							children: "\"panel-1\""
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
							children: "pre"
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
							children: "\"w-full max-w-sm rounded-2xl bg-fg text-canvas p-5 font-mono text-xs\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">…</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "pre"
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
							style: { color: "#79B8FF" },
							children: "Fragment"
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
							style: { color: "#79B8FF" },
							children: "Fragment"
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
							children: "\"panel-2\""
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
							children: "img"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " src"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"/assets/phone-preview.png\""
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
							children: "\"Install preview on phone\""
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
							children: "    </"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Fragment"
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
							children: "FlowSteps"
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
							children: "SectionMain"
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
			id: "tuning-panel-height",
			children: "Tuning panel height"
		}),
		"\n",
		createVNode(_components.p, { children: [
			createVNode(_components.code, { children: "panelHeight" }),
			" sets the desktop minimum (px) — the grid container’s ",
			createVNode(_components.code, { children: "min-height" }),
			". If a panel’s content is taller, the whole column grows. Mobile panels use ",
			createVNode(_components.code, { children: "85%" }),
			" of this value."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "tuning-duration",
			children: "Tuning duration"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Default ",
			createVNode(_components.code, { children: "800ms" }),
			" drives panel slide, step padding expansion, number-pill fill, and description reveal — all four stay in sync."
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
							children: "FlowSteps"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " duration"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "500"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "steps"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={…}>"
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
							children: "FlowSteps"
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
				createVNode(_components.strong, { children: [
					"Best placed inside ",
					createVNode(_components.code, { children: "SectionMain padding=\"none\" contentPadding=\"none\"" }),
					"."
				] }),
				" FlowSteps already handles its own 2-column grid, internal padding, and top/bottom borders — wrapping it in ",
				createVNode(_components.code, { children: "SectionMain" }),
				"’s gutter grid will either clip it or over-indent it."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Panels should feel like ",
				createVNode(_components.strong, { children: "posters, not live UI" }),
				" — they’re duplicated (desktop + mobile trees) and inactive desktop versions sit translated off-screen. Avoid heavy iframes, autoplay video, or forms with shared IDs."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The number pill uses ",
				createVNode(_components.code, { children: "bg-intent" }),
				" / ",
				createVNode(_components.code, { children: "text-fg-on-intent" }),
				" when active, so it inherits theme correctly in light and dark mode."
			] }),
			"\n",
			createVNode(_components.li, { children: "Multiple instances on a page are safe — each picks up its own UID for ARIA IDs." }),
			"\n",
			createVNode(_components.li, { children: "Long step descriptions are fine — the grid-rows technique measures real height, so nothing clips. The button itself grows with the description." }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
	throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
var frontmatter = {
	"title": "FlowSteps",
	"description": "Stepped how-it-works section — clickable step list drives a vertical-carousel panel of poster content.",
	"category": "pattern",
	"order": 60,
	"sourceFile": "src/components/FlowSteps.astro",
	"status": "stable",
	"related": ["Tabs", "SectionMain"]
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
			"slug": "the-vertical-carousel",
			"text": "The vertical carousel"
		},
		{
			"depth": 3,
			"slug": "step-description-reveal",
			"text": "Step description reveal"
		},
		{
			"depth": 3,
			"slug": "mobile-layout",
			"text": "Mobile layout"
		},
		{
			"depth": 3,
			"slug": "named-slots-via-astroslotsrender",
			"text": "Named slots via Astro.slots.render"
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
			"depth": 3,
			"slug": "tuning-panel-height",
			"text": "Tuning panel height"
		},
		{
			"depth": 3,
			"slug": "tuning-duration",
			"text": "Tuning duration"
		},
		{
			"depth": 2,
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/flow-steps.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/flow-steps.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/flow-steps.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
