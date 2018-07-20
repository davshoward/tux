const gulp = require('gulp');
const gulpif = require('gulp-if');
const config = require('../config');
const tasks = require('../lib/task-config');
const env = require('../lib/env');
const handleErrors = require('../lib/handleErrors');
const browserSync = require('browser-sync');

const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const cssnano = require('gulp-cssnano');

const stylesTask = () => {
	const paths = {
		src: `${config.src}/${config.styles.src}/**/*.{${tasks.styles.ext}}`,
		dest: `${config.dest}/${config.styles.dest}`
	};

	const postCssOptions = [cssnext(config.styles.autoprefixer)];

	return gulp
		.src(paths.src)
		.pipe(gulpif(!env.prod, sourcemaps.init()))
		.pipe(sass(tasks.styles.sass))
		.on('error', handleErrors)
		.pipe(postcss(postCssOptions))
		.pipe(gulpif(env.prod, cssnano(config.styles.cssnano)))
		.pipe(gulpif(!env.prod, sourcemaps.write('./')))
		.pipe(gulp.dest(paths.dest))
		.pipe(browserSync.stream());
};

gulp.task('styles', stylesTask);

module.exports = stylesTask;
