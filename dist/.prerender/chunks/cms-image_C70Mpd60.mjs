//#region src/lib/cms-image.ts
function isCmsImage(photo) {
	return !("format" in photo);
}
//#endregion
export { isCmsImage as t };
