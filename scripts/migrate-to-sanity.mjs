import { createClient } from "@sanity/client";
import { createReadStream, existsSync, readdirSync, readFileSync } from "node:fs";
import { basename, join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// cspell:ignore presento nombre fotógrafo basado lajas didi dicen ustedes prefieran sé pero volando muchas cosas bonitas pasando sentado procesar nunca imaginé sucederían quiero aprovechar además presentarme breve pausa simplemente agradecer gracias han apoyado concepto corazón tienen conocimiento sobre espacio manifestarme mostrar arte sueño estar compartiendo fotos será así deje respirar esto desde casa año

// One-shot import of the original markdown + local images. After the first
// successful run those sources were removed; re-running needs the files back.

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function loadEnv(filePath) {
  if (!existsSync(filePath)) return;
  for (const line of readFileSync(filePath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (key && process.env[key] === undefined) process.env[key] = value;
  }
}

loadEnv(join(root, ".env"));

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  throw new Error(
    "PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN are required.",
  );
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2025-01-01",
  useCdn: false,
});

const assetCache = new Map();

function key(prefix, index) {
  return `${prefix}${String(index).padStart(3, "0")}`;
}

async function uploadImage(absPath, alt) {
  const resolvedPath = resolve(absPath);
  const cached = assetCache.get(resolvedPath);
  if (cached) {
    return { ...cached, alt: alt || cached.alt };
  }
  if (!existsSync(resolvedPath)) {
    throw new Error(`Missing image: ${resolvedPath}`);
  }
  const filename = basename(resolvedPath);
  process.stdout.write(`  upload ${filename}\n`);
  const asset = await client.assets.upload(
    "image",
    createReadStream(resolvedPath),
    { filename },
  );
  const value = {
    _type: "altImage",
    asset: { _type: "reference", _ref: asset._id },
    alt: alt || filename,
  };
  assetCache.set(resolvedPath, value);
  return value;
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error("Missing frontmatter");
  const data = {};
  let currentList = null;
  for (const line of match[1].split("\n")) {
    if (/^\s+-\s+/.test(line) && currentList) {
      const item = line.replace(/^\s+-\s+/, "").replace(/^["']|["']$/g, "");
      data[currentList].push(item);
      continue;
    }
    currentList = null;
    const kv = line.match(/^([A-Za-z][\w]*):\s*(.*)$/);
    if (!kv) continue;
    const name = kv[1];
    const value = kv[2];
    if (value === "" || value === "[]") {
      if (value === "[]") data[name] = [];
      else {
        data[name] = [];
        currentList = name;
      }
      continue;
    }
    data[name] = value.replace(/^["']|["']$/g, "");
  }
  return data;
}

function galleryFiles(slug) {
  const dir = join(root, "src/images/galleries", slug);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => join(dir, file));
}

const ABOUT = {
  instagramHref: "https://www.instagram.com/aroundtheisla/",
  instagramHandle: "@aroundtheisla",
  brand: "aroundtheisla",
  paragraphs: [
    "Hola, me presento. mi nombre es Didiel González Rodríguez ({handle}) - fotógrafo basado en lajas, puerto rico. me dicen didi, didielo, isla, como ustedes prefieran.",
    "yo no sé para ustedes, pero mi año se ha ido volando. muchas cosas bonitas pasando que no me he sentado a procesar. muchas cosas que nunca imaginé que sucederían. quiero aprovechar este post - para además de presentarme - dar una breve pausa y simplemente agradecer. gracias a todos los que han apoyado este concepto, desde el corazón. y para los que no tienen conocimiento sobre el concepto - aroundtheisla es simplemente un espacio para manifestarme y mostrar mi arte.",
    "para mi es un sueño estar compartiendo mis fotos con ustedes y será así hasta el día que deje de respirar. gracias gracias gracias. esto es de mi para ustedes.",
    "desde casa.",
  ],
  caption:
    "[1] Hola, me presento. mi nombre es Didiel González Rodríguez ({handle}) - fotógrafo basado en lajas, puerto rico. me dicen didi, didielo, isla, como ustedes prefieran.",
  portraitAlt:
    "Didiel González Rodríguez seated on a scooter outdoors in Puerto Rico",
};

async function migrateProjects() {
  const dir = join(root, "src/content/projects");
  const files = readdirSync(dir).filter((file) => file.endsWith(".md"));
  const ids = [];
  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    const data = parseFrontmatter(readFileSync(join(dir, file), "utf8"));
    const coverPath = resolve(dir, data.cover);
    process.stdout.write(`project ${slug}\n`);
    const cover = await uploadImage(coverPath, `${data.title} cover photograph`);
    const gallery = [];
    for (const [index, absPath] of galleryFiles(slug).entries()) {
      const image = await uploadImage(
        absPath,
        `${data.title} — photograph ${index + 1}`,
      );
      gallery.push({ ...image, _key: key("gal", index) });
    }
    const doc = {
      _id: `project-${slug}`,
      _type: "project",
      title: data.title,
      slug: { _type: "slug", current: slug },
      description: data.description,
      date: data.date,
      location: data.location || undefined,
      order: Number(data.order),
      cover,
      gallery,
    };
    await client.createOrReplace(doc);
    ids.push(`project-${slug}`);
  }
  return ids;
}

async function migratePages() {
  process.stdout.write("pages\n");
  const hero = await uploadImage(
    join(root, "src/images/hero-banner-default.jpg"),
    "Around the Isla project photograph",
  );
  const portrait = await uploadImage(
    join(root, "src/images/about-portrait.png"),
    ABOUT.portraitAlt,
  );

  await client.createOrReplace({
    _id: "page-home",
    _type: "page",
    title: "aroundtheisla",
    slug: { _type: "slug", current: "home" },
    seo: {
      _type: "seo",
      title: "aroundtheisla",
      description:
        "Photography by Didiel González Rodríguez — aroundtheisla.",
    },
    theme: "dark",
    layout: "site",
    lang: "en",
    showInNav: false,
    navOrder: 0,
    hideFooter: true,
    heroImages: [{ ...hero, _key: "hero001" }],
    sections: [
      {
        _type: "sctnHero",
        _key: "hero",
        image: hero,
        projectName: "PROJECT NAME",
      },
    ],
  });

  await client.createOrReplace({
    _id: "page-work",
    _type: "page",
    title: "Work",
    slug: { _type: "slug", current: "work" },
    seo: {
      _type: "seo",
      title: "Work",
      description:
        "Selected photography projects from aroundtheisla — browse the gallery in grid or list view.",
    },
    theme: "light",
    layout: "site",
    lang: "en",
    showInNav: true,
    navOrder: 10,
    hideFooter: false,
    sections: [
      {
        _type: "sctnWork",
        _key: "work",
        source: "all",
      },
    ],
  });

  await client.createOrReplace({
    _id: "page-about",
    _type: "page",
    title: "About",
    slug: { _type: "slug", current: "about" },
    seo: {
      _type: "seo",
      title: "About",
      description:
        "Hola — Didiel González Rodríguez (@aroundtheisla), fotógrafo basado en Lajas, Puerto Rico.",
    },
    theme: "light",
    layout: "site",
    lang: "es",
    showInNav: true,
    navOrder: 20,
    hideFooter: false,
    sections: [
      {
        _type: "sctnAbout",
        _key: "about",
        paragraphs: ABOUT.paragraphs,
        instagramHref: ABOUT.instagramHref,
        instagramHandle: ABOUT.instagramHandle,
        brand: ABOUT.brand,
        portrait,
        caption: ABOUT.caption,
      },
    ],
  });

  await client.createOrReplace({
    _id: "page-contact",
    _type: "page",
    title: "Contact",
    slug: { _type: "slug", current: "contact" },
    seo: {
      _type: "seo",
      title: "Contact",
      description: "Get in touch with aroundtheisla.",
    },
    theme: "light",
    layout: "site",
    lang: "en",
    showInNav: false,
    navOrder: 90,
    hideFooter: false,
    sections: [
      {
        _type: "sctnContact",
        _key: "contact",
        heading: "Get in touch",
        lede: "Drop your details and we'll be in touch shortly.",
      },
    ],
  });
}

const projects = await migrateProjects();
await migratePages();
process.stdout.write(
  `Done. ${projects.length} projects and 4 pages written to ${dataset}.\n`,
);
