import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { n as $$Image, t as $$Picture } from "./_astro_assets_CWgiBl4N.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import demo from "@images/feature-1.webp";
//#region src/content/components/image.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		blockquote: "blockquote",
		code: "code",
		em: "em",
		h2: "h2",
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
		createVNode(_components.p, { children: [
			createVNode(_components.code, { children: "<Image>" }),
			" and ",
			createVNode(_components.code, { children: "<Picture>" }),
			" are Astro’s built-in image components (from ",
			createVNode(_components.code, { children: "astro:assets" }),
			"). They run the source through ",
			createVNode(_components.strong, { children: "Sharp at build time" }),
			" — resizing, transcoding, and emitting hashed files into ",
			createVNode(_components.code, { children: "dist/_astro/*" }),
			" — then output an ",
			createVNode(_components.code, { children: "<img>" }),
			"/",
			createVNode(_components.code, { children: "<picture>" }),
			" with intrinsic ",
			createVNode(_components.code, { children: "width" }),
			"/",
			createVNode(_components.code, { children: "height" }),
			" so the layout never shifts (CLS). This is the ",
			createVNode(_components.strong, { children: "standard" }),
			" for every content/decorative image in the starter; raw ",
			createVNode(_components.code, { children: "<img>" }),
			" is reserved for ",
			createVNode(_components.code, { children: "/public" }),
			" assets (SVG logos, favicons) and runtime/CMS URL strings."
		] }),
		"\n",
		createVNode(_components.blockquote, { children: [
			"\n",
			createVNode(_components.p, { children: [
				createVNode(_components.strong, { children: "Works on Cloudflare with no adapter." }),
				" The starter is pure-static (",
				createVNode(_components.code, { children: "output: 'static'" }),
				", no adapter), so Sharp runs during ",
				createVNode(_components.code, { children: "npm run build" }),
				" and Cloudflare just serves the static ",
				createVNode(_components.code, { children: "/_astro/*" }),
				" output. Do ",
				createVNode(_components.strong, { children: "not" }),
				" add ",
				createVNode(_components.code, { children: "@astrojs/cloudflare" }),
				" for images — its image service is a passthrough that ships unoptimized/broken AVIF."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "<Image> — single optimized source",
			align: "start",
			children: createVNode("div", {
				class: "w-full max-w-md",
				children: createVNode($$Image, {
					src: demo,
					alt: "Schema builder screenshot",
					loading: "lazy",
					decoding: "async",
					class: "w-full h-auto"
				})
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "<Picture> — multi-format (AVIF → WebP), responsive widths",
			align: "start",
			children: createVNode("div", {
				class: "w-full max-w-md",
				children: createVNode($$Picture, {
					src: demo,
					alt: "Schema builder screenshot",
					widths: [400, 800],
					sizes: "(min-width: 768px) 400px, 100vw",
					formats: ["avif", "webp"],
					fallbackFormat: "webp",
					quality: 70,
					loading: "lazy",
					decoding: "async",
					class: "w-full h-auto"
				})
			})
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
							children: " { Image, Picture } "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"astro:assets\""
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
						children: "// Import the asset — this is what unlocks optimization + dimension inference."
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
							children: " hero "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@images/hero.webp\""
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
							children: " shot "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@images/screenshot.webp\""
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
							children: "/* Single optimized image. width/height inferred from the import. */"
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
							children: "Image"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " src"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={shot} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "alt"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Schema builder\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " loading"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"lazy\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " decoding"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"async\""
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
							children: "/* Above-the-fold / LCP image — never lazy-load it. */"
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
							children: "Image"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " src"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={hero} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "alt"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " widths"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={["
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "800"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "1600"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "]} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "sizes"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"100vw\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "       loading"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"eager\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " fetchpriority"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"high\""
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
							children: "/* Multi-format + responsive: emits <picture> with AVIF then WebP. */"
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
						children: "Picture"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "  src"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={hero}"
					})]
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
							children: "\"Product hero\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  widths"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={["
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "600"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "1200"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "1800"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "]}"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  sizes"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"(min-width: 1024px) 1100px, 100vw\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  formats"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={["
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"avif\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"webp\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "]}"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  fallbackFormat"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"webp\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  quality"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "70"
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
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "/>"
					})
				})
			] })
		}),
		"\n",
		createVNode(_components.h2, {
			id: "image-vs-picture",
			children: [
				createVNode(_components.code, { children: "<Image>" }),
				" vs ",
				createVNode(_components.code, { children: "<Picture>" })
			]
		}),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "Use" }),
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
					createVNode(_components.td, { children: createVNode(_components.strong, { children: createVNode(_components.code, { children: "<Image>" }) }) }),
					"\n",
					createVNode(_components.td, { children: [
						"The default. One source, one output format. Add ",
						createVNode(_components.code, { children: "widths" }),
						" + ",
						createVNode(_components.code, { children: "sizes" }),
						" for a responsive ",
						createVNode(_components.code, { children: "srcset" }),
						"."
					] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.strong, { children: createVNode(_components.code, { children: "<Picture>" }) }) }),
					"\n",
					createVNode(_components.td, { children: [
						"You want ",
						createVNode(_components.strong, { children: "multiple formats" }),
						" (AVIF with a WebP fallback) or art-direction. Emits a ",
						createVNode(_components.code, { children: "<picture>" }),
						" with ",
						createVNode(_components.code, { children: "<source>" }),
						" per format. Best for large hero/banner images where AVIF’s extra savings matter."
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "rules-the-ones-that-actually-bite",
			children: "Rules (the ones that actually bite)"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: [
					"Pass the imported asset, not its ",
					createVNode(_components.code, { children: ".src" }),
					"."
				] }),
				" ",
				createVNode(_components.code, { children: "src={img}" }),
				" ✅ — ",
				createVNode(_components.code, { children: "src={img.src}" }),
				" ❌. The string form is just a URL and silently skips optimization ",
				createVNode(_components.em, { children: "and" }),
				" the ",
				createVNode(_components.code, { children: "width" }),
				"/",
				createVNode(_components.code, { children: "height" }),
				" inference that prevents CLS."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: ["Import from ", createVNode(_components.code, { children: "src/images/" })] }),
				" (aliased ",
				createVNode(_components.code, { children: "@images/*" }),
				"). Only un-optimizable assets (SVGs, favicons, OG/social images) belong in ",
				createVNode(_components.code, { children: "public/" }),
				" and stay as raw ",
				createVNode(_components.code, { children: "<img>" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Don’t lazy-load the LCP image." }),
				" The hero / first above-the-fold image gets ",
				createVNode(_components.code, { children: "loading=\"eager\"" }),
				" + ",
				createVNode(_components.code, { children: "fetchpriority=\"high\"" }),
				". Everything below the fold gets ",
				createVNode(_components.code, { children: "loading=\"lazy\"" }),
				" + ",
				createVNode(_components.code, { children: "decoding=\"async\"" }),
				". Lazy-loading the LCP element directly tanks the LCP metric."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: [createVNode(_components.code, { children: "alt" }), " is required."] }),
				" Use a real description for meaningful images, ",
				createVNode(_components.code, { children: "alt=\"\"" }),
				" (+ ",
				createVNode(_components.code, { children: "aria-hidden=\"true\"" }),
				") for decorative ones."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "The same imported asset is deduped." }),
				" Reusing one import across a page emits a single ",
				createVNode(_components.code, { children: "/_astro/*" }),
				" file referenced everywhere."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "accepting-images-in-your-own-components",
			children: "Accepting images in your own components"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"When a component renders an image it owns, type the prop as ",
			createVNode(_components.strong, { children: createVNode(_components.code, { children: "ImageMetadata" }) }),
			" and render ",
			createVNode(_components.code, { children: "<Image>" }),
			":"
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
							style: { color: "#F97583" },
							children: " type"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " { ImageMetadata } "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"astro\""
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
							children: " { Image } "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"astro:assets\""
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
							children: "interface"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " Props"
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
							children: "  src"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: ":"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " ImageMetadata"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ";   "
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "// an imported asset, not a string"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "  alt"
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
							style: { color: "#E1E4E8" },
							children: " { "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "src"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "alt"
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
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "<"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Image"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " src"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={src} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "alt"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={alt} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "loading"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"lazy\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " decoding"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"async\""
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
			"For primitives that must also accept ",
			createVNode(_components.strong, { children: "runtime/CMS URL strings" }),
			" (",
			createVNode(_components.code, { children: "Avatar" }),
			", ",
			createVNode(_components.code, { children: "Media" }),
			", ",
			createVNode(_components.code, { children: "SliderBasicMap" }),
			"), the starter pattern is a union prop that branches on the type — imported assets get optimized, strings fall through to a plain ",
			createVNode(_components.code, { children: "<img>" }),
			":"
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
							style: { color: "#F97583" },
							children: " type"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " { ImageMetadata } "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"astro\""
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
							children: " { Image } "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"astro:assets\""
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
							children: "interface"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " Props"
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
							children: "  src"
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
							children: "  alt"
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
							style: { color: "#E1E4E8" },
							children: " { "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "src"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "alt"
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
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "{src "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "&&"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " ("
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "typeof"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " src "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "==="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"string\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "  ?"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " <"
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
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "{src} "
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
							children: "{alt} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "loading"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"lazy\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " decoding"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"async\""
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
							style: { color: "#F97583" },
							children: "  :"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " <"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Image"
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
							children: "{src} "
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
							children: "{alt} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "loading"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"lazy\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " decoding"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"async\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " />)}"
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
				createVNode(_components.strong, { children: "Content-collection images" }),
				" go through ",
				createVNode(_components.code, { children: "astro:assets" }),
				" too: use ",
				createVNode(_components.code, { children: "image()" }),
				" in the Zod schema (",
				createVNode(_components.code, { children: "heroImage: image().optional()" }),
				") so frontmatter image paths resolve to ",
				createVNode(_components.code, { children: "ImageMetadata" }),
				" and optimize on build."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Remote images" }),
				" (a literal URL string to ",
				createVNode(_components.code, { children: "<Image>" }),
				") require explicit ",
				createVNode(_components.code, { children: "width" }),
				"/",
				createVNode(_components.code, { children: "height" }),
				" and need the domain allow-listed in ",
				createVNode(_components.code, { children: "image.domains" }),
				"/",
				createVNode(_components.code, { children: "image.remotePatterns" }),
				"; they aren’t downloaded and re-encoded the way local imports are."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: createVNode(_components.code, { children: "quality" }) }),
				" accepts a number (",
				createVNode(_components.code, { children: "0–100" }),
				") or a preset (",
				createVNode(_components.code, { children: "\"low\" | \"mid\" | \"high\" | \"max\"" }),
				"). 70 is a good default for photographic content."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "SVGs" }),
				" don’t benefit from Sharp — keep them as inline ",
				createVNode(_components.code, { children: "<svg>" }),
				", an ",
				createVNode(_components.code, { children: "astro-icon" }),
				" ",
				createVNode(_components.code, { children: "<Icon>" }),
				", or a ",
				createVNode(_components.code, { children: "/public" }),
				" ",
				createVNode(_components.code, { children: "<img>" }),
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
	"title": "Image & Picture",
	"description": "Optimized images via astro:assets — build-time Sharp transforms, hashed cacheable output, responsive sources, and the Cloudflare-static rules to follow.",
	"category": "primitive",
	"order": 6,
	"sourceFile": "src/pages/index.astro",
	"status": "stable",
	"related": [
		"CardFeatured",
		"Media",
		"Avatar",
		"SliderBasicMap"
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
			"slug": "usage",
			"text": "Usage"
		},
		{
			"depth": 2,
			"slug": "image-vs-picture",
			"text": "<Image> vs <Picture>"
		},
		{
			"depth": 2,
			"slug": "rules-the-ones-that-actually-bite",
			"text": "Rules (the ones that actually bite)"
		},
		{
			"depth": 2,
			"slug": "accepting-images-in-your-own-components",
			"text": "Accepting images in your own components"
		},
		{
			"depth": 2,
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/image.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/image.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/image.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
