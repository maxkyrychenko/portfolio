import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/images/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`
	},
	src: {
		js: `${srcFolder}/js/app.js`,
		images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/images/**/*.svg`,
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/files/**/*.*`,
		scss: `${srcFolder}/scss/style.scss`
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
		html: `${srcFolder}/**/*.html`,
		files: `${srcFolder}/files/**/*.*`
	},
	clean: buildFolder,
	buildFolder,
	srcFolder,
	rootFolder,
	ftp: ``
};
