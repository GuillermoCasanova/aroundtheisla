import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, l as renderComponent, m as renderSlot, o as renderScript, r as spreadAttributes, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { n as $$Image } from "./_astro_assets_CWgiBl4N.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/components/Media.astro
createAstro("https://example.com");
var $$Media = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Media;
	const { src, poster, alt = "", mode = "autoplay", touchMode, aspect = "16/9", loop = true, resetOnPause, pauseOffscreen = true, rootMargin = "10%", pauseDelay = 200, preload = "none", ariaLabel, class: className } = Astro.props;
	const hasToggleSlot = Astro.slots.has("toggle");
	const wrapperIsButton = mode === "click" && !hasToggleSlot;
	const aspectStyle = aspect === "auto" ? void 0 : `--media-aspect: ${aspect};`;
	return renderTemplate`${maybeRenderHead($$result)}<div data-media="component"${addAttribute(mode, "data-media-mode")}${addAttribute(touchMode, "data-media-touch-mode")}${addAttribute(resetOnPause === void 0 ? void 0 : String(resetOnPause), "data-media-reset-on-pause")}${addAttribute(pauseOffscreen ? void 0 : "false", "data-media-pause-offscreen")}${addAttribute(rootMargin, "data-media-root-margin")}${addAttribute(pauseDelay, "data-media-pause-delay")} data-media-status="not-active"${addAttribute(aspectStyle, "style")}${addAttribute(["media", className], "class:list")}${addAttribute(wrapperIsButton ? "button" : void 0, "role")}${addAttribute(wrapperIsButton ? "0" : void 0, "tabindex")}${addAttribute(wrapperIsButton ? "false" : void 0, "aria-pressed")}${addAttribute(wrapperIsButton ? ariaLabel ?? "Play video" : void 0, "aria-label")}> ${poster && (typeof poster === "string" ? renderTemplate`<img data-media="poster" class="media__poster"${addAttribute(poster, "src")}${addAttribute(alt, "alt")} loading="lazy" decoding="async">` : renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"data-media": "poster",
		"class": "media__poster",
		"src": poster,
		"alt": alt,
		"loading": "lazy",
		"decoding": "async"
	})}`)} <video data-media="video"${addAttribute(src, "data-media-src")} class="media__video"${addAttribute(preload, "preload")} muted playsinline${addAttribute(alt ? void 0 : "true", "aria-hidden")}${spreadAttributes(loop ? { loop: true } : {})}></video> ${mode === "click" && renderTemplate`<div data-media="play-overlay" class="media__play" aria-hidden="true"> ${renderSlot($$result, $$slots["play-icon"], renderTemplate` <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" aria-hidden="true"> <path d="M8 5v14l11-7z"></path> </svg> `)} </div>`} ${hasToggleSlot && renderTemplate`<div data-media="toggle-wrap"> ${renderSlot($$result, $$slots["toggle"])} </div>`} </div> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Media.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Media.astro", void 0);
//#endregion
//#region src/content/components/media.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		em: "em",
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
		createVNode(_components.p, { children: "A small video tile that handles the three activation patterns marketing pages actually need — autoplay heroes, hover-to-play grids, and click-to-play demos — without re-implementing the lazy-load + pause-on-blur + touch-fallback logic each time." }),
		"\n",
		createVNode(_components.p, { children: [
			"State is exposed via ",
			createVNode(_components.code, { children: "data-media-status" }),
			" (",
			createVNode(_components.code, { children: "not-active" }),
			" | ",
			createVNode(_components.code, { children: "loading" }),
			" | ",
			createVNode(_components.code, { children: "playing" }),
			" | ",
			createVNode(_components.code, { children: "paused" }),
			") so CSS drives the poster/play-overlay swap with no extra JS."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Autoplay (default)",
			align: "stretch",
			children: createVNode("div", {
				class: "w-full max-w-xl",
				children: createVNode($$Media, {
					src: "https://osmo.b-cdn.net/resource-media/media-water-1080x1440.mp4",
					poster: "https://cdn.prod.website-files.com/69b7ba9c70e33d403c399111/69b7d8341c40602ff2a854be_water-placeholder-1080x1440.avif",
					alt: "Water flowing",
					aspect: "3/4",
					class: ""
				})
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Hover to play (touch falls back to autoplay)",
			align: "stretch",
			children: createVNode("div", {
				class: "w-full max-w-xl",
				children: createVNode($$Media, {
					src: "https://osmo.b-cdn.net/resource-media/media-water-1080x1440.mp4",
					poster: "https://cdn.prod.website-files.com/69b7ba9c70e33d403c399111/69b7d8341c40602ff2a854be_water-placeholder-1080x1440.avif",
					alt: "Water flowing",
					mode: "hover",
					aspect: "16/9",
					class: ""
				})
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Click to play (wrapper as button)",
			align: "stretch",
			children: createVNode("div", {
				class: "w-full max-w-xl",
				children: createVNode($$Media, {
					src: "https://osmo.b-cdn.net/resource-media/media-water-1080x1440.mp4",
					poster: "https://cdn.prod.website-files.com/69b7ba9c70e33d403c399111/69b7d8341c40602ff2a854be_water-placeholder-1080x1440.avif",
					alt: "Water flowing",
					mode: "click",
					aspect: "16/9",
					ariaLabel: "Play product demo",
					class: ""
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
				name: "src",
				type: "string",
				required: true,
				description: "Video URL. Loaded lazily on first activation, never up-front."
			},
			{
				name: "poster",
				type: "string | ImageMetadata",
				description: "Poster shown until the video plays — an imported astro:assets asset (optimized) or a URL string. Strongly recommended."
			},
			{
				name: "alt",
				type: "string",
				default: "\"\"",
				description: "Alt text for the poster. Empty = decorative (sets aria-hidden on the <video>)."
			},
			{
				name: "mode",
				type: "\"autoplay\" | \"hover\" | \"click\"",
				default: "\"autoplay\"",
				description: "How the video starts."
			},
			{
				name: "touchMode",
				type: "\"autoplay\" | \"click\"",
				description: "Fallback mode on no-hover devices. Default: hover→autoplay, others unchanged."
			},
			{
				name: "aspect",
				type: "string",
				default: "\"16/9\"",
				description: "CSS aspect-ratio value, e.g. \"3/4\", \"1/1\". Pass \"auto\" to disable."
			},
			{
				name: "loop",
				type: "boolean",
				default: "true",
				description: "Loop the video on end."
			},
			{
				name: "resetOnPause",
				type: "boolean",
				description: "Reset to t=0 on pause. Default: true for hover, false otherwise."
			},
			{
				name: "pauseOffscreen",
				type: "boolean",
				default: "true",
				description: "Pause when scrolled out of viewport."
			},
			{
				name: "rootMargin",
				type: "string",
				default: "\"10%\"",
				description: "IntersectionObserver root margin (pre-load buffer)."
			},
			{
				name: "pauseDelay",
				type: "number",
				default: "200",
				description: "Pause delay in ms — debounces hover-out flicker."
			},
			{
				name: "preload",
				type: "\"none\" | \"metadata\" | \"auto\"",
				default: "\"none\"",
				description: "Native <video preload>. Leave at none — the component controls loading."
			},
			{
				name: "ariaLabel",
				type: "string",
				description: "Accessible label when the wrapper is the click target (no slotted toggle). Defaults to \"Play video\"."
			},
			{
				name: "class",
				type: "string",
				description: "Additional classes on the wrapper."
			}
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "status-hooks",
			children: "Status hooks"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"The wrapper element carries a ",
			createVNode(_components.code, { children: "data-media-status" }),
			" attribute you can target from CSS or JS:"
		] }),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "Status" }),
					"\n",
					createVNode(_components.th, { children: "When" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			createVNode(_components.tbody, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "not-active" }) }),
					"\n",
					createVNode(_components.td, { children: "Mounted, not yet triggered (autoplay before in-view, click before tap)." }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "loading" }) }),
					"\n",
					createVNode(_components.td, { children: [
						"Source assigned, waiting for ",
						createVNode(_components.code, { children: "canplay" }),
						"."
					] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "playing" }) }),
					"\n",
					createVNode(_components.td, { children: "Video is playing." }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "paused" }) }),
					"\n",
					createVNode(_components.td, { children: "Paused by hover-out, click, scroll-out, or tab-hidden." }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: "The built-in styles already use these to fade the poster out and the video in, and to hide the play overlay once the video is playing." }),
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
					createVNode(_components.td, { children: createVNode(_components.code, { children: "play-icon" }) }),
					"\n",
					createVNode(_components.td, { children: "Replace the default ▶ SVG inside the click-mode overlay." }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "toggle" }) }),
					"\n",
					createVNode(_components.td, { children: [
						"Provide your own click target. Any ",
						createVNode(_components.code, { children: "[data-media-toggle]" }),
						" element inside this slot becomes the trigger."
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"When a ",
			createVNode(_components.code, { children: "toggle" }),
			" slot is supplied, the wrapper is ",
			createVNode(_components.strong, { children: "not" }),
			" the click target — it stops being a button and the slotted control owns the interaction."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "examples",
			children: "Examples"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "autoplay-hero",
			children: "Autoplay hero"
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
							children: " Media "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/Media.astro\""
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
						children: "Media"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  src"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"/video/hero.mp4\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  poster"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"/img/hero.avif\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  alt"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Product demo\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  aspect"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"16/9\""
						})
					]
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
			id: "hover-to-play-grid-tile",
			children: "Hover-to-play grid tile"
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
					children: [createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "<"
					}), createVNode(_components.span, {
						style: { color: "#79B8FF" },
						children: "Media"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  src"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"/video/feature-1.mp4\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  poster"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"/img/feature-1.avif\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  alt"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Feature 1\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  mode"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"hover\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  aspect"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"3/4\""
						})
					]
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
			id: "click-to-play-with-a-custom-toggle-button",
			children: "Click-to-play with a custom toggle button"
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
							children: "Media"
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
							children: "\"/video/demo.mp4\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " poster"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"/img/demo.avif\""
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
							children: "\"click\""
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
						style: { color: "#85E89D" },
						children: "button"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "    slot"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"toggle\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "    data-media-toggle"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "    class"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"absolute inset-0 m-auto h-16 w-16 bg-intent text-fg-on-intent\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "    aria-label"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Play product demo\""
						})
					]
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
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "    ▶"
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
							style: { color: "#79B8FF" },
							children: "Media"
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
			id: "click-to-play-with-a-custom-play-icon",
			children: "Click-to-play with a custom play icon"
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
							children: "Media"
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
							children: "\"/video/demo.mp4\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " poster"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"/img/demo.avif\""
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
							children: "\"click\""
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
							children: "\"Play demo\""
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
							children: " slot"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"play-icon\""
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
							children: " width"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"64\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " height"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"64\""
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
							children: "circle"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " cx"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"12\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " cy"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"12\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " r"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"11\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " opacity"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"0.6\""
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
							children: "    <"
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
							children: "\"M9 7v10l8-5z\""
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
							children: "\"white\""
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
							children: "  </"
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
							children: "Media"
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
			id: "mechanism",
			children: "Mechanism"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "lazy-loading",
			children: "Lazy loading"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"The ",
			createVNode(_components.code, { children: "src" }),
			" attribute on ",
			createVNode(_components.code, { children: "<video>" }),
			" is left empty at render time; the real URL lives on ",
			createVNode(_components.code, { children: "data-media-src" }),
			". On first activation (in-view + mode trigger met), the script assigns ",
			createVNode(_components.code, { children: "video.src" }),
			" and calls ",
			createVNode(_components.code, { children: "video.load()" }),
			". This avoids fetching every video on a grid page until they actually need to play."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "activation-modes",
			children: "Activation modes"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "autoplay" }), " — plays the moment the tile crosses the IntersectionObserver root margin."] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "hover" }),
				" — plays on ",
				createVNode(_components.code, { children: "mouseenter" }),
				" / ",
				createVNode(_components.code, { children: "focusin" }),
				", pauses (with ",
				createVNode(_components.code, { children: "pauseDelay" }),
				") on ",
				createVNode(_components.code, { children: "mouseleave" }),
				" / ",
				createVNode(_components.code, { children: "focusout" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "click" }),
				" — plays on ",
				createVNode(_components.code, { children: "click" }),
				". If no ",
				createVNode(_components.code, { children: "toggle" }),
				" slot is provided, the wrapper itself is the button (",
				createVNode(_components.code, { children: "role=\"button\"" }),
				", ",
				createVNode(_components.code, { children: "tabindex=\"0\"" }),
				", Space/Enter handler, ",
				createVNode(_components.code, { children: "aria-pressed" }),
				" reflects state)."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "touch-fallback",
			children: "Touch fallback"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"On ",
			createVNode(_components.code, { children: "(hover: hover) and (pointer: fine)" }),
			" = false, the resolved mode follows ",
			createVNode(_components.code, { children: "touchMode" }),
			" if set, otherwise:"
		] }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "hover" }),
				" → ",
				createVNode(_components.code, { children: "autoplay" })
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "autoplay" }),
				" and ",
				createVNode(_components.code, { children: "click" }),
				" stay as-is"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "auto-pause",
			children: "Auto-pause"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Out of viewport" }),
				" — paused (immediately) when ",
				createVNode(_components.code, { children: "pauseOffscreen" }),
				" is true."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Tab hidden" }),
				" — paused on ",
				createVNode(_components.code, { children: "visibilitychange" }),
				" (saves CPU/battery)."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "Reduced motion" }), " — autoplay and hover modes are gated entirely; click mode stays interactive (the user is asking for it)."] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "re-init-on-view-transitions",
			children: "Re-init on view transitions"
		}),
		"\n",
		createVNode(_components.p, { children: [
			createVNode(_components.code, { children: "initMedia()" }),
			" runs once on ",
			createVNode(_components.code, { children: "DOMContentLoaded" }),
			" and again on every ",
			createVNode(_components.code, { children: "astro:page-load" }),
			". Each instance guards against double-init via ",
			createVNode(_components.code, { children: "data-script-initialized" }),
			"."
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
				"Decorative video by default — ",
				createVNode(_components.code, { children: "aria-hidden=\"true\"" }),
				" is set unless ",
				createVNode(_components.code, { children: "alt" }),
				" is provided."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Click-mode wrapper acts as a real button: keyboard activation (Space/Enter), visible ",
				createVNode(_components.code, { children: ":focus-visible" }),
				" outline using ",
				createVNode(_components.code, { children: "--color-focus" }),
				", and ",
				createVNode(_components.code, { children: "aria-pressed" }),
				" reflects play state."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Slotted ",
				createVNode(_components.code, { children: "toggle" }),
				" lets you own the affordance entirely (recommended when you need a labeled button rather than a whole-tile click target)."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Autoplay and hover modes are suppressed under ",
				createVNode(_components.code, { children: "prefers-reduced-motion: reduce" }),
				". Click mode is preserved because activation is user-initiated."
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
				createVNode(_components.strong, { children: "No web/mp4 fallback array." }),
				" If you need multi-format sources, replace the inner ",
				createVNode(_components.code, { children: "<video>" }),
				" with ",
				createVNode(_components.code, { children: "<source>" }),
				" children — the lazy-load logic uses ",
				createVNode(_components.code, { children: "video.src" }),
				" so you’d need to adapt that, but the rest of the script works unchanged."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: [
					"No native ",
					createVNode(_components.code, { children: "controls" }),
					"."
				] }),
				" Intentional — the component is for ambient/marketing video, not a player. Wrap a real ",
				createVNode(_components.code, { children: "<video controls>" }),
				" if that’s what you need."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: [
					"Poster accepts an imported asset ",
					createVNode(_components.em, { children: "or" }),
					" a URL string."
				] }),
				" Pass an ",
				createVNode(_components.code, { children: "astro:assets" }),
				" import (",
				createVNode(_components.code, { children: "import poster from \"@images/poster.webp\"" }),
				") and it’s optimized through ",
				createVNode(_components.code, { children: "<Image>" }),
				"; pass a string (CMS/remote) and it renders a plain ",
				createVNode(_components.code, { children: "<img>" }),
				". See the ",
				createVNode(_components.strong, { children: "Image & Picture" }),
				" doc."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: [createVNode(_components.code, { children: "muted" }), " is hardcoded."] }),
				" Browsers block sound autoplay anyway; if you genuinely need sound, switch to click mode and remove the attribute on the rendered ",
				createVNode(_components.code, { children: "<video>" }),
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
	"title": "Media",
	"description": "Video tile with autoplay, hover, or click activation. Lazy-loads, pauses out of view and on tab-hidden, respects reduced motion, and falls through to a chosen mode on touch devices.",
	"category": "pattern",
	"order": 55,
	"sourceFile": "src/components/Media.astro",
	"status": "stable",
	"related": ["Tabs", "CardFeatured"]
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
			"slug": "status-hooks",
			"text": "Status hooks"
		},
		{
			"depth": 2,
			"slug": "slots",
			"text": "Slots"
		},
		{
			"depth": 2,
			"slug": "examples",
			"text": "Examples"
		},
		{
			"depth": 3,
			"slug": "autoplay-hero",
			"text": "Autoplay hero"
		},
		{
			"depth": 3,
			"slug": "hover-to-play-grid-tile",
			"text": "Hover-to-play grid tile"
		},
		{
			"depth": 3,
			"slug": "click-to-play-with-a-custom-toggle-button",
			"text": "Click-to-play with a custom toggle button"
		},
		{
			"depth": 3,
			"slug": "click-to-play-with-a-custom-play-icon",
			"text": "Click-to-play with a custom play icon"
		},
		{
			"depth": 2,
			"slug": "mechanism",
			"text": "Mechanism"
		},
		{
			"depth": 3,
			"slug": "lazy-loading",
			"text": "Lazy loading"
		},
		{
			"depth": 3,
			"slug": "activation-modes",
			"text": "Activation modes"
		},
		{
			"depth": 3,
			"slug": "touch-fallback",
			"text": "Touch fallback"
		},
		{
			"depth": 3,
			"slug": "auto-pause",
			"text": "Auto-pause"
		},
		{
			"depth": 3,
			"slug": "re-init-on-view-transitions",
			"text": "Re-init on view transitions"
		},
		{
			"depth": 2,
			"slug": "accessibility",
			"text": "Accessibility"
		},
		{
			"depth": 2,
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/media.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/media.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/media.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
