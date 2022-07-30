import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

import cleanCss from "gulp-clean-css";
import webpCss from "gulp-webpcss";
import autoprefixer from "gulp-autoprefixer";

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp
		.src(app.path.src.scss, {sourcemaps: app.isDev})
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "SCSS",
					message: "Error: <%= error.message %>"
				})
			)
		)
		.pipe(app.plugins.replace(/@img\//g, "../images/"))
		.pipe(sass({outputStyle: "expanded"}))
		.pipe(
			app.plugins.ifPlugin(
				app.isBuild,
				autoprefixer({
					grid: true,
					cascade: true,
					overrideBrowserslist: ["last 3 versions"]
				})
			)
		)
		.pipe(
			app.plugins.ifPlugin(
				app.isBuild,
				webpCss({webpClass: ".webp", noWebpClass: ".no-webp"})
			)
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.ifPlugin(app.isBuild, cleanCss()))
		.pipe(rename({extname: ".min.css"}))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browserSync.stream());
};
