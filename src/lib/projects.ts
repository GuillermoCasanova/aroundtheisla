// Content-source seam for photography projects.
// Sanity (build-time) → plain shapes consumed by sections / routes.
import { getCollection, type CollectionEntry } from "astro:content";
import type { CmsImage } from "./cms-image";

export type Project = CollectionEntry<"projects">;

export async function getPublishedProjects(): Promise<Project[]> {
  const all = await getCollection("projects");
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** Gallery stills for a project; falls back to the cover. */
export function getProjectGallery(entry: Project): CmsImage[] {
  return entry.data.gallery.length > 0 ? entry.data.gallery : [entry.data.cover];
}
