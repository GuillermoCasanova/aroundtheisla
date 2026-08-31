import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
import { t as $$CopyButton } from "./CopyButton_CXxbTPtV.mjs";
//#region src/content/components/copy-button.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		a: "a",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
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
			"Small, focused copy-to-clipboard button. Useful next to inline tokens, share URLs, install commands — and used as the copy affordance inside ",
			createVNode(_components.code, { children: "CodeBlock" }),
			"."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Literal value",
			align: "center",
			children: createVNode("div", {
				class: "flex items-center gap-3 py-4",
				children: [createVNode("code", {
					class: "border border-stroke bg-panel px-2 py-1 text-sm",
					children: "npm install astro"
				}), createVNode($$CopyButton, {
					value: "npm install astro",
					label: "Copy install command",
					class: "border border-stroke bg-panel px-2 py-1 text-sm"
				})]
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Targeted element",
			align: "center",
			children: createVNode("div", {
				class: "flex items-center gap-3 py-4",
				children: [createVNode("code", {
					id: "copy-share-url",
					class: "border border-stroke bg-panel px-2 py-1 text-sm",
					children: createVNode(_components.a, {
						href: "https://example.com/share/abc123",
						children: "https://example.com/share/abc123"
					})
				}), createVNode($$CopyButton, {
					target: "#copy-share-url",
					class: "border border-stroke bg-panel px-2 py-1 text-sm"
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
				name: "value",
				type: "string",
				description: "Literal string to copy. Use this OR `target`, not both."
			},
			{
				name: "target",
				type: "string",
				description: "CSS selector for the element whose `.textContent` is copied."
			},
			{
				name: "label",
				type: "string",
				default: "\"Copy\"",
				description: "Accessible label and idle button text."
			},
			{
				name: "copiedLabel",
				type: "string",
				default: "\"Copied\"",
				description: "Feedback text shown briefly after a successful copy."
			},
			{
				name: "feedbackDuration",
				type: "number",
				default: "1500",
				description: "Time in ms the feedback state remains visible."
			},
			{
				name: "class",
				type: "string",
				description: "Additional classes on the button."
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
					createVNode(_components.td, { children: [
						"Button text. Defaults to the ",
						createVNode(_components.code, { children: "label" }),
						" prop."
					] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "icon-idle" }) }),
					"\n",
					createVNode(_components.td, { children: "Custom idle-state icon. Defaults to a clipboard SVG." }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "icon-copied" }) }),
					"\n",
					createVNode(_components.td, { children: "Custom copied-state icon. Defaults to a checkmark SVG." }),
					"\n"
				] }),
				"\n"
			] }),
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
				"Real ",
				createVNode(_components.code, { children: "<button type=\"button\">" }),
				" — focusable, keyboard-activatable."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "aria-label" }),
				" set to ",
				createVNode(_components.code, { children: "label" }),
				" prop — screen readers announce the action even if the visible text is just an icon."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"A visually-hidden ",
				createVNode(_components.code, { children: "aria-live=\"polite\"" }),
				" region announces “Copied to clipboard” / “Copy failed” to assistive tech."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The state swap (idle ↔ copied) uses a ",
				createVNode(_components.code, { children: "data-copy-state" }),
				" attribute that CSS reads — no inline style manipulation, no flash."
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
			createVNode(_components.li, { children: "Falls back gracefully — if the Clipboard API is denied (insecure context, permissions), the live region announces “Copy failed” and the visual state stays idle." }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "value" }),
				" takes precedence over ",
				createVNode(_components.code, { children: "target" }),
				" if both are set."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Reads ",
				createVNode(_components.code, { children: "target.textContent.trim()" }),
				" — appropriate for code/URL snippets but be aware of trailing whitespace stripping if you depend on it."
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
	"title": "CopyButton",
	"description": "Tiny button that copies a string (or referenced element's text) to the clipboard with momentary feedback.",
	"category": "primitive",
	"order": 12,
	"sourceFile": "src/components/CopyButton.astro",
	"status": "stable",
	"related": ["CodeBlock"]
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
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/copy-button.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/copy-button.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/copy-button.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
