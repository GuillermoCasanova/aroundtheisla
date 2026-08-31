import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$Field } from "./Field_DzsbRHkc.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/content/components/field.mdx
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
			"A single-input row that handles the boring-but-easy-to-get-wrong parts of form fields: associating a ",
			createVNode(_components.code, { children: "<label>" }),
			" to its input, wiring ",
			createVNode(_components.code, { children: "aria-describedby" }),
			" to helper and error text, surfacing ",
			createVNode(_components.code, { children: "aria-invalid" }),
			" for invalid state, and reserving space so the form doesn’t jump when an error appears."
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"Designed to be paired with ",
			createVNode(_components.code, { children: "Form" }),
			", which surfaces native validation messages into each Field’s error region automatically. Works standalone too."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Text + email + textarea + select + checkbox",
			align: "stretch",
			children: createVNode("div", {
				class: "w-full max-w-md space-y-2",
				children: [
					createVNode($$Field, {
						label: "Full name",
						name: "name",
						placeholder: "Jane Doe",
						required: true,
						helper: "As it appears on your ID."
					}),
					createVNode($$Field, {
						label: "Email",
						name: "email",
						type: "email",
						placeholder: "jane@example.com",
						required: true
					}),
					createVNode($$Field, {
						label: "Message",
						name: "message",
						type: "textarea",
						rows: 3
					}),
					createVNode($$Field, {
						label: "Plan",
						name: "plan",
						type: "select",
						options: [
							{
								value: "free",
								label: "Free"
							},
							{
								value: "pro",
								label: "Pro"
							},
							{
								value: "team",
								label: "Team"
							}
						]
					}),
					createVNode($$Field, {
						label: "Subscribe to newsletter",
						name: "newsletter",
						type: "checkbox"
					})
				]
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Pre-set error state",
			align: "stretch",
			children: createVNode("div", {
				class: "w-full max-w-md",
				children: createVNode($$Field, {
					label: "Email",
					name: "email",
					type: "email",
					value: "not-an-email",
					error: "Please enter a valid email address."
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
				name: "label",
				type: "string",
				required: true,
				description: "Visible label text."
			},
			{
				name: "name",
				type: "string",
				required: true,
				description: "Form data key."
			},
			{
				name: "type",
				type: "\"text\" | \"email\" | \"password\" | \"url\" | \"tel\" | \"number\" | \"search\" | \"textarea\" | \"select\" | \"checkbox\" | \"radio\"",
				default: "\"text\"",
				description: "Input type."
			},
			{
				name: "id",
				type: "string",
				description: "Stable ID. Auto-generated if omitted."
			},
			{
				name: "value",
				type: "string | number",
				description: "Initial value."
			},
			{
				name: "placeholder",
				type: "string",
				description: "Placeholder text (text-like inputs)."
			},
			{
				name: "helper",
				type: "string",
				description: "Helper text shown under the input."
			},
			{
				name: "error",
				type: "string",
				description: "Pre-set error message. Live validation overrides this."
			},
			{
				name: "required",
				type: "boolean",
				default: "false"
			},
			{
				name: "disabled",
				type: "boolean",
				default: "false"
			},
			{
				name: "readonly",
				type: "boolean",
				default: "false"
			},
			{
				name: "autocomplete",
				type: "string",
				description: "Native autocomplete hint, e.g. \"email\", \"name\", \"off\"."
			},
			{
				name: "pattern",
				type: "string",
				description: "Pattern attribute for text inputs."
			},
			{
				name: "minlength / maxlength",
				type: "number",
				description: "String length bounds."
			},
			{
				name: "min / max / step",
				type: "string | number",
				description: "Number / date input bounds."
			},
			{
				name: "rows",
				type: "number",
				default: "4",
				description: "Textarea row count."
			},
			{
				name: "options",
				type: "{ value: string; label: string }[]",
				description: "Select options (when type=\"select\" and no slot is provided)."
			},
			{
				name: "labelHidden",
				type: "boolean",
				default: "false",
				description: "Visually hide the label (kept for screen readers)."
			},
			{
				name: "class",
				type: "string",
				description: "Additional classes on the wrapper."
			}
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "slots",
			children: "Slots"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"For ",
			createVNode(_components.code, { children: "type=\"select\"" }),
			", the default slot can be used to write your own ",
			createVNode(_components.code, { children: "<option>" }),
			" elements (overrides ",
			createVNode(_components.code, { children: "options" }),
			"):"
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
							children: "Field"
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
							children: "\"Country\""
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
							children: "\"country\""
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
							children: "\"select\""
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
							children: "option"
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
							children: "\"\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">Select country</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "option"
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
							children: "option"
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
							children: "\"us\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">United States</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "option"
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
							children: "option"
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
							children: "\"uk\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">United Kingdom</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "option"
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
							children: "Field"
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
			id: "accessibility",
			children: "Accessibility"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "<label for=\"…\">" }), " matched to input id."] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "aria-describedby" }), " points at helper text, error text, or both."] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "aria-invalid=\"true\"" }),
				" set whenever an error is present (either from the ",
				createVNode(_components.code, { children: "error" }),
				" prop or from live validation)."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Required fields show a red ",
				createVNode(_components.code, { children: "*" }),
				" next to the label (decorative — ",
				createVNode(_components.code, { children: "aria-hidden" }),
				"); the actual signal to screen readers is the input’s ",
				createVNode(_components.code, { children: "required" }),
				" attribute."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The error region uses ",
				createVNode(_components.code, { children: "aria-live=\"polite\"" }),
				" so changes are announced without interrupting."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The error region reserves ",
				createVNode(_components.code, { children: "min-height: 1em" }),
				" so the form doesn’t jump when an error message appears."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"For ",
				createVNode(_components.code, { children: "checkbox" }),
				" / ",
				createVNode(_components.code, { children: "radio" }),
				", label and input are wrapped together in a single ",
				createVNode(_components.code, { children: "<label>" }),
				" so clicking either toggles the input."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "working-with-form",
			children: "Working with Form"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"When wrapped in ",
			createVNode(_components.code, { children: "Form" }),
			", validation messages flow automatically:"
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
							children: "Form"
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
							children: "\"/api/contact\""
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
							children: "\"POST\""
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
							children: "Field"
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
							children: "\"Email\""
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
							children: "\"email\""
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
							children: "\"email\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " required"
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
							children: ">Send</"
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
							children: "Form"
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
			"If the user submits with an invalid email, the Field’s error region populates with the browser’s native ",
			createVNode(_components.code, { children: "validationMessage" }),
			", focus jumps to the first invalid input, and ",
			createVNode(_components.code, { children: "aria-invalid" }),
			" is set. As the user fixes the input, the error clears."
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"Outside a Form, the ",
			createVNode(_components.code, { children: "error" }),
			" prop is the only error path — set it from your own validation logic."
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
				"For radio groups, render multiple Field components with the same ",
				createVNode(_components.code, { children: "name" }),
				" and different ",
				createVNode(_components.code, { children: "value" }),
				" props."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"For file uploads, currently bypass Field and use a plain ",
				createVNode(_components.code, { children: "<input type=\"file\">" }),
				" — file inputs have unique label/styling needs that didn’t fit cleanly. May get its own component later."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The ",
				createVNode(_components.code, { children: "sr-only" }),
				" class is provided by Tailwind v4 — ",
				createVNode(_components.code, { children: "labelHidden" }),
				" relies on it."
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
	"title": "Field",
	"description": "Labeled form input row. Wraps text/email/password/url/tel/number/search/textarea/select/checkbox/radio with label, helper, and inline error region — ARIA wired automatically.",
	"category": "form",
	"order": 11,
	"sourceFile": "src/components/Field.astro",
	"status": "stable",
	"related": ["Form"]
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
			"slug": "slots",
			"text": "Slots"
		},
		{
			"depth": 2,
			"slug": "accessibility",
			"text": "Accessibility"
		},
		{
			"depth": 2,
			"slug": "working-with-form",
			"text": "Working with Form"
		},
		{
			"depth": 2,
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/field.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/field.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/field.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
