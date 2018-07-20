const gulp = require('gulp');
const changed = require('gulp-changed');
const config = require('../config');
const tasks = require('../lib/task-config');
const browserSync = require('browser-sync');

const videosTask = () => {
	const paths = {
		src: `${config.src}/${config.videos.src}/**/*.{${tasks.videos.ext}}`,
		dest: `${config.dest}/${config.videos.dest}`
	};

	return gulp
		.src(paths.src)
		.pipe(changed(paths.dest))
		.pipe(gulp.dest(paths.dest))
		.pipe(browserSync.stream());
};

gulp.task('videos', videosTask);

module.exports = videosTask;
