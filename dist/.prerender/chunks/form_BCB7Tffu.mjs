import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$Form } from "./Form_C-39q8SU.mjs";
import { t as $$Field } from "./Field_DzsbRHkc.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/content/components/form.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
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
			"Thin wrapper around ",
			createVNode(_components.code, { children: "<form>" }),
			" that turns it into a state-driven, progressively-enhanced submission flow without forcing a framework on the consumer."
		] }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Without JS:" }),
				" the browser does a normal ",
				createVNode(_components.code, { children: "POST" }),
				" (or ",
				createVNode(_components.code, { children: "GET" }),
				") to ",
				createVNode(_components.code, { children: "action" }),
				" and reloads the page."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "With JS:" }),
				" the script intercepts submit, runs HTML5 validation, posts via ",
				createVNode(_components.code, { children: "fetch" }),
				", and exposes the lifecycle through ",
				createVNode(_components.code, { children: "data-form-status" }),
				" so feedback regions show/hide automatically."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "Honeypot" }), " is on by default — adds a hidden field bots fill in but humans don’t. If the field has a value at submit time, the form silently “succeeds” without sending."] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Contact form",
			align: "stretch",
			children: createVNode("div", {
				class: "w-full max-w-md",
				children: createVNode($$Form, {
					action: "/api/contact",
					method: "POST",
					children: [
						createVNode($$Field, {
							label: "Name",
							name: "name",
							required: true,
							autocomplete: "name"
						}),
						createVNode($$Field, {
							label: "Email",
							name: "email",
							type: "email",
							required: true,
							autocomplete: "email"
						}),
						createVNode($$Field, {
							label: "Message",
							name: "message",
							type: "textarea",
							required: true,
							rows: 4
						}),
						createVNode("button", {
							type: "submit",
							class: "bg-intent px-4 py-2 text-sm font-medium text-fg-on-intent",
							children: createVNode(_components.p, { children: "Send message" })
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
				name: "action",
				type: "string",
				required: true,
				description: "Form action URL."
			},
			{
				name: "method",
				type: "\"GET\" | \"POST\"",
				default: "\"POST\"",
				description: "HTTP method."
			},
			{
				name: "enctype",
				type: "\"application/x-www-form-urlencoded\" | \"multipart/form-data\" | \"text/plain\"",
				description: "Encoding type. Browser default unless specified."
			},
			{
				name: "endpoint",
				type: "string",
				description: "Where to POST via fetch when JS-enhanced. Defaults to `action`."
			},
			{
				name: "noEnhance",
				type: "boolean",
				default: "false",
				description: "Skip the JS-enhanced submit path entirely — let the browser do a full page POST."
			},
			{
				name: "honeypot",
				type: "boolean",
				default: "true",
				description: "Add a hidden honeypot input."
			},
			{
				name: "honeypotName",
				type: "string",
				default: "\"website\"",
				description: "Name attribute of the honeypot field."
			},
			{
				name: "id",
				type: "string",
				description: "Form ID. Auto-generated if omitted."
			},
			{
				name: "class",
				type: "string",
				description: "Additional classes on the form."
			}
		] }),
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
					createVNode(_components.td, { children: "(default)" }),
					"\n",
					createVNode(_components.td, { children: "Form body — Field components, submit button, fieldsets, etc." }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "success" }) }),
					"\n",
					createVNode(_components.td, { children: [
						"Region shown after a successful submit. Has ",
						createVNode(_components.code, { children: "role=\"status\"" }),
						"."
					] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "error" }) }),
					"\n",
					createVNode(_components.td, { children: [
						"Region shown after a failed submit. Has ",
						createVNode(_components.code, { children: "role=\"alert\"" }),
						"."
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: "Both slots have sensible defaults (generic “Thanks” / “Something went wrong” messages), so you can omit them." }),
		"\n",
		createVNode(_components.h2, {
			id: "status-states",
			children: "Status states"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"The form carries a ",
			createVNode(_components.code, { children: "data-form-status" }),
			" attribute for CSS to drive UI:"
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
					createVNode(_components.td, { children: createVNode(_components.code, { children: "idle" }) }),
					"\n",
					createVNode(_components.td, { children: "Initial / after reset." }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "submitting" }) }),
					"\n",
					createVNode(_components.td, { children: "Fetch in flight. Submit buttons inside the form are auto-disabled." }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "success" }) }),
					"\n",
					createVNode(_components.td, { children: "Server returned 2xx. The success region is shown; the form is reset." }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "error" }) }),
					"\n",
					createVNode(_components.td, { children: "Network or non-2xx response. The error region is shown." }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: "Custom events are dispatched on the form for JS callers:" }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "form:success" }), " — fires after a successful submit."] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "form:error" }),
				" — fires on failure, with ",
				createVNode(_components.code, { children: "event.detail" }),
				" set to the underlying error."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "validation",
			children: "Validation"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"HTML5 validation runs first. If any field is invalid, the form does not submit — instead, each invalid field’s ",
				createVNode(_components.code, { children: "[data-field-error]" }),
				" region gets the native ",
				createVNode(_components.code, { children: "validationMessage" }),
				", and the first invalid input receives focus."
			] }),
			"\n",
			createVNode(_components.li, { children: "As the user types, valid input clears the error state on that field." }),
			"\n",
			createVNode(_components.li, { children: [
				"The form is rendered with ",
				createVNode(_components.code, { children: "novalidate" }),
				" so the browser doesn’t show its native bubbles — ",
				createVNode(_components.code, { children: "Field" }),
				" surfaces messages inline instead."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "honeypot",
			children: "Honeypot"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"When ",
			createVNode(_components.code, { children: "honeypot" }),
			" is ",
			createVNode(_components.code, { children: "true" }),
			" (default), a hidden text input named ",
			createVNode(_components.code, { children: "website" }),
			" is injected. Real users never see or fill it; bots typically auto-fill anything ",
			createVNode(_components.code, { children: "<input type=\"text\">" }),
			" they can find. If the field has a value at submit time, the form silently transitions to ",
			createVNode(_components.code, { children: "success" }),
			" without making a network request — bots get no signal that they were caught."
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"To disable, pass ",
			createVNode(_components.code, { children: "honeypot={false}" }),
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
				"Form remains a real ",
				createVNode(_components.code, { children: "<form>" }),
				" — keyboard / screen-reader semantics intact."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Success region: ",
				createVNode(_components.code, { children: "role=\"status\"" }),
				", ",
				createVNode(_components.code, { children: "aria-live=\"polite\"" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Error region: ",
				createVNode(_components.code, { children: "role=\"alert\"" }),
				", ",
				createVNode(_components.code, { children: "aria-live=\"assertive\"" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: "Submit buttons get visually disabled (opacity + pointer-events: none) but remain in the DOM so screen-reader focus isn’t lost." }),
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
				"Default endpoint mirrors ",
				createVNode(_components.code, { children: "action" }),
				" — set ",
				createVNode(_components.code, { children: "endpoint" }),
				" separately only if your fetch target differs from your no-JS fallback URL."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "multipart/form-data" }), " is supported (file uploads work via FormData)."] }),
			"\n",
			createVNode(_components.li, { children: [
				"For HubSpot-specific forms, see ",
				createVNode(_components.code, { children: "HubspotForm" }),
				" — it has additional logic for HubSpot’s portal/form-ID submission API."
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
	"title": "Form",
	"description": "Progressive-enhancement form wrapper. Works without JS via native submission; with JS, intercepts and posts via fetch with idle/submitting/success/error states.",
	"category": "form",
	"order": 10,
	"sourceFile": "src/components/Form.astro",
	"status": "stable",
	"related": ["Field", "HubspotForm"]
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
			"slug": "status-states",
			"text": "Status states"
		},
		{
			"depth": 2,
			"slug": "validation",
			"text": "Validation"
		},
		{
			"depth": 2,
			"slug": "honeypot",
			"text": "Honeypot"
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
var url = "src/content/components/form.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/form.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/form.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
