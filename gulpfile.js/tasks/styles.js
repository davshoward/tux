const { src, dest } = require('gulp');
const gulpif = require('gulp-if');
const config = require('../config').styles;
const env = require('../lib/env');
const handleErrors = require('../lib/handleErrors');
const browserSync = require('browser-sync');

const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const cssnano = require('gulp-cssnano');
//const stylelint = require('gulp-stylelint');

const styles = () =>
	src(config.src)
		.pipe(gulpif(!env.prod, sourcemaps.init()))
		// .pipe(
		// 	stylelint({
		// 		reporters: [{ formatter: 'string', console: true }],
		// 	})
		// )
		.pipe(postcss())
		.pipe(gulpif(env.prod, cssnano({ autoprefixer: false })))
		.pipe(gulpif(!env.prod, sourcemaps.write('./')))
		.on('error', handleErrors)
		.pipe(dest(config.dest))
		.pipe(browserSync.stream());

module.exports = styles;
