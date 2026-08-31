//#region src/content/components/footer.mdx?astroPropagatedAssets
async function getMod() {
	return import("./footer_BkUWwDrA.mjs");
}
var defaultMod = {
	__astroPropagation: true,
	getMod,
	collectedLinks: "@@ASTRO-LINKS@@",
	collectedStyles: "@@ASTRO-STYLES@@",
	collectedScripts: []
};
//#endregion
export { defaultMod as default };
