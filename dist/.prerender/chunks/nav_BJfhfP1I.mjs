//#region src/content/components/nav.mdx?astroPropagatedAssets
async function getMod() {
	return import("./nav_CVrC8mel.mjs");
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
