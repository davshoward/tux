const gulp = require('gulp');
const changed = require('gulp-changed');
const config = require('../config');
const browserSync = require('browser-sync');

const staticTask = () => {
	const paths = {
		src: `${config.src}/${config.static.src}/**/*`,
		dest: `${config.dest}/${config.static.dest}`
	};

	return gulp
		.src(paths.src)
		.pipe(changed(paths.dest))
		.pipe(gulp.dest(paths.dest))
		.pipe(browserSync.stream());
};

gulp.task('static', staticTask);

module.exports = staticTask;
