import type { StructureResolver } from "sanity/structure";
import { FiFileText, FiHome, FiLayout, FiSettings } from "react-icons/fi";

const HIDDEN_TYPES = new Set(["siteSettings", "footerSettings"]);

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("Site Content")
    .showIcons(true)
    .items([
      S.listItem()
        .title("Settings")
        .icon(FiSettings)
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("site-settings")
            .title("Settings"),
        ),
      S.listItem()
        .title("Site Footer")
        .icon(FiLayout)
        .child(
          S.document()
            .schemaType("footerSettings")
            .documentId("footer-settings")
            .title("Site Footer"),
        ),
      S.divider(),
      S.listItem()
        .title("Home Page")
        .icon(FiHome)
        .id("page-home")
        .child(
          S.document()
            .schemaType("page")
            .documentId("page-home")
            .title("Home Page"),
        ),
      S.divider(),
      S.listItem()
        .title("Page")
        .icon(FiFileText)
        .schemaType("page")
        .child(
          S.documentTypeList("page")
            .title("Page")
            .apiVersion("v2025-02-19")
            .filter(
              '_type == "page" && !(_id in ["page-home", "drafts.page-home"])',
            ),
        ),
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId();
        return Boolean(id) && !HIDDEN_TYPES.has(id) && id !== "page";
      }),
    ]);
