import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { deskStructure } from "./deskStructure";

export default defineConfig({
  name: "aroundtheisla",
  title: "aroundtheisla",
  projectId: "7dd4oax3",
  dataset: "production",
  plugins: [
    structureTool({ structure: deskStructure }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    newDocumentOptions: (prev) =>
      prev.filter(
        (template) =>
          !["siteSettings", "footerSettings"].includes(template.templateId),
      ),
  },
});
