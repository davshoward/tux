const gulp = require('gulp');
const gulpif = require('gulp-if');
const config = require('../config');
const tasks = require('../lib/task-config');
const env = require('../lib/env');
const handleErrors = require('../lib/handleErrors');
const browserSync = require('browser-sync');

const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const cssnano = require('gulp-cssnano');

const stylesTask = () => {
	const paths = {
		src: `${config.src}/${config.styles.src}/*.{${tasks.styles.ext}}`,
		dest: `${config.dest}/${config.styles.dest}`
	};

	return gulp
		.src(paths.src)
		.pipe(gulpif(!env.prod, sourcemaps.init()))
		.pipe(postcss())
		.pipe(gulpif(env.prod, cssnano({autoprefixer: false})))
		.pipe(gulpif(!env.prod, sourcemaps.write('./')))
		.on('error', handleErrors)
		.pipe(gulp.dest(paths.dest))
		.pipe(browserSync.stream());
};

gulp.task('styles', stylesTask);

module.exports = stylesTask;
