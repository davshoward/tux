const gulp = require('gulp');
const gulpif = require('gulp-if');
const changed = require('gulp-changed');
const config = require('../config');
const tasks = require('../lib/task-config');
const env = require('../lib/env');
const browserSync = require('browser-sync');

const imagemin = require('gulp-imagemin');

const imagesTask = () => {
	const paths = {
		src: `${config.src}/${config.images.src}/**/*.{${tasks.images.ext}}`,
		dest: `${config.dest}/${config.images.dest}`
	};

	const imageminConfig = [
		imagemin.gifsicle({ interlaced: true }),
		imagemin.jpegtran({ progressive: true }),
		imagemin.optipng({ optimizationLevel: 5 }),
		imagemin.svgo({
			plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
		})
	];

	return gulp
		.src(paths.src)
		.pipe(changed(paths.dest))
		.pipe(gulp.dest(paths.dest))
		.pipe(gulpif(env.prod, imagemin(imageminConfig)))
		.pipe(browserSync.stream());
};

gulp.task('images', imagesTask);

module.exports = imagesTask;
