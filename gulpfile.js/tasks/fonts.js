const gulp = require('gulp');
const changed = require('gulp-changed');
const config = require('../config');
const tasks = require('../lib/task-config');
const browserSync = require('browser-sync');

const fontsTask = () => {
	const paths = {
		src: `${config.src}/${config.fonts.src}/**/*.{${tasks.fonts.ext}}`,
		dest: `${config.dest}/${config.fonts.dest}`
	};

	return gulp
		.src(paths.src)
		.pipe(changed(paths.dest))
		.pipe(gulp.dest(paths.dest))
		.pipe(browserSync.stream());
};

gulp.task('fonts', fontsTask);

module.exports = fontsTask;
