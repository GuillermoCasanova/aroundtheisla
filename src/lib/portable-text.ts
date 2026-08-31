import { toHTML, type PortableTextMarkComponent } from "@portabletext/to-html";

function escapeAttr(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
}

const link: PortableTextMarkComponent<{
  _type: string;
  href?: string;
}> = ({ children, value }) => {
  const href = value?.href ?? "#";
  const external = /^https?:\/\//.test(href);
  const rel = external ? ' rel="noopener noreferrer"' : "";
  const target = external ? ' target="_blank"' : "";
  return `<a href="${escapeAttr(href)}"${rel}${target}>${children}</a>`;
};

export function portableTextToHtml(blocks: unknown): string {
  if (!Array.isArray(blocks) || blocks.length === 0) return "";
  return toHTML(blocks, {
    components: {
      marks: { link },
    },
  });
}
