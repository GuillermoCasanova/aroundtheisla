import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$ImageLoader } from "./ImageLoader_BPfmAcF3.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
import demo from "@images/feature-1.webp";
//#region src/content/components/image-loader.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"Per-image loading stage: a ",
			createVNode(_components.code, { children: "bg-secondary/80" }),
			" surface covering the photograph until it finishes loading. The photo itself is an AVIF → WebP ",
			createVNode(_components.code, { children: "<Picture>" }),
			" at quality 70. Wired into project gallery slides via ",
			createVNode(_components.code, { children: "SectionProject" }),
			"; reuse anywhere an image needs the branded placeholder. Set ",
			createVNode(_components.code, { children: "stage={false}" }),
			" on the LCP image so the overlay does not hide it."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode(_components.p, { children: "Static stage composition:" }),
		"\n",
		createVNode($$Preview, {
			label: "Secondary color stage",
			align: "center",
			children: createVNode("div", { class: "relative min-h-64 w-full max-w-md bg-secondary/80" })
		}),
		"\n",
		createVNode(_components.p, { children: "Live image with the stage (cached images dismiss immediately):" }),
		"\n",
		createVNode($$Preview, {
			label: "Image with loader",
			align: "start",
			children: createVNode("div", {
				class: "w-full max-w-md",
				children: createVNode($$ImageLoader, {
					src: demo,
					alt: "Demo photograph",
					widths: [400, 800],
					sizes: "(min-width: 768px) 400px, 100vw",
					loading: "lazy"
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
				type: "ImageMetadata | string",
				required: true,
				description: "Imported asset (optimized) or a remote/CMS URL string."
			},
			{
				name: "alt",
				type: "string",
				required: true,
				description: "Accessible description. Pass \"\" only for decorative images."
			},
			{
				name: "widths",
				type: "number[]",
				description: "Responsive srcset widths."
			},
			{
				name: "sizes",
				type: "string",
				description: "sizes attribute paired with widths."
			},
			{
				name: "loading",
				type: "\"eager\" | \"lazy\"",
				default: "\"lazy\"",
				description: "Native loading hint. Use eager + fetchpriority high for LCP."
			},
			{
				name: "fetchpriority",
				type: "\"high\" | \"low\" | \"auto\"",
				description: "Fetch priority for the LCP candidate."
			},
			{
				name: "decoding",
				type: "\"async\" | \"sync\" | \"auto\"",
				default: "\"async\"",
				description: "Native decoding hint."
			},
			{
				name: "preserveAspect",
				type: "boolean",
				default: "true",
				description: "Set aspect-ratio from ImageMetadata. False when a parent already sizes the frame."
			},
			{
				name: "stage",
				type: "boolean",
				default: "true",
				description: "Secondary-color overlay while the photo decodes. Set false on the LCP image."
			},
			{
				name: "placeholder",
				type: "string",
				description: "Sanity LQIP data URL painted under the photo."
			},
			{
				name: "class",
				type: "string",
				description: "Extra classes on the frame."
			},
			{
				name: "imgClass",
				type: "string",
				default: "absolute inset-0 size-full object-cover",
				description: "Extra classes on the img."
			}
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
							children: " ImageLoader "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/ImageLoader.astro\""
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
							children: " \"@images/project.jpg\""
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
							children: "/* Standalone — frame reserves aspect-ratio from the asset */"
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
						children: "ImageLoader"
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
						children: "={shot}"
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
							children: "\"Project photograph\""
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
							children: "720"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "1280"
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
							children: "\"40vw\""
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
							children: "/* Parent owns sizing — fill the figure */"
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
							style: { color: "#85E89D" },
							children: "figure"
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
							children: "\"relative h-[80svh] overflow-hidden\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " style"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "`aspect-ratio: ${"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "shot"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "width"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "} / ${"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "shot"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "height"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "}`"
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
					children: [createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  <"
					}), createVNode(_components.span, {
						style: { color: "#79B8FF" },
						children: "ImageLoader"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "    src"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={shot}"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "    alt"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Project photograph\""
						})
					]
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
							children: "\"absolute inset-0 size-full\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "    preserveAspect"
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
							children: "}"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "    loading"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"eager\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "    fetchpriority"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"high\""
						})
					]
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
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "figure"
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
			id: "behavior",
			children: "Behavior"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Emits AVIF then WebP via ",
				createVNode(_components.code, { children: "OptimizedPicture" }),
				" at quality 70."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Stage uses ",
				createVNode(_components.code, { children: "bg-secondary/80" }),
				" so the brand secondary swatch fills the frame at 80% opacity while the photo decodes."
			] }),
			"\n",
			createVNode(_components.li, { children: "Reduced-motion users skip the fade and reveal immediately." }),
			"\n",
			createVNode(_components.li, { children: [
				"Cached images (",
				createVNode(_components.code, { children: "img.complete" }),
				") skip the stage without waiting for a load event."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "stage={false}" }),
				" skips the overlay so an LCP photograph can paint immediately. An optional ",
				createVNode(_components.code, { children: "placeholder" }),
				" LQIP still fills the frame."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Without JS, a ",
				createVNode(_components.code, { children: "<noscript>" }),
				" rule hides the stage so the photograph stays visible."
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
	"title": "ImageLoader",
	"description": "Photo frame with a secondary-color loading stage — fades out once the image is fully loaded.",
	"category": "primitive",
	"order": 7,
	"sourceFile": "src/components/ImageLoader.astro",
	"status": "stable",
	"related": ["Loader", "SectionProject"]
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
			"slug": "usage",
			"text": "Usage"
		},
		{
			"depth": 2,
			"slug": "behavior",
			"text": "Behavior"
		}
	];
}
var url = "src/content/components/image-loader.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/image-loader.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/image-loader.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
