//#region src/content/components/media.mdx?astroPropagatedAssets
async function getMod() {
	return import("./media_B5futfBR.mjs");
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
