const { src, dest } = require("gulp");
const gulpif = require("gulp-if");
const changed = require("gulp-changed");
const config = require("../config").images;
const env = require("../lib/env");
const browserSync = require("browser-sync");

const imagemin = require("gulp-imagemin");

const imageminConfig = [
	imagemin.gifsicle({ interlaced: true }),
	imagemin.mozjpeg({ progressive: true }),
	imagemin.optipng({ optimizationLevel: 5 }),
	imagemin.svgo({
		plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
	})
];

const images = () =>
	src(config.src)
		.pipe(changed(config.dest))
		.pipe(dest(config.dest))
		.pipe(gulpif(env.prod, imagemin(imageminConfig)))
		.pipe(browserSync.stream());

module.exports = images;
