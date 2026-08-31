//#region src/content/components/image-loader.mdx?astroPropagatedAssets
async function getMod() {
	return import("./image-loader_DgHkwaGW.mjs");
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
