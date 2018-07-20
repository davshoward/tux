const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const env = require('../lib/env');

const defaultTask = cb => {
	const tasks = ['fonts', 'images', 'videos', 'html', 'styles', 'scripts', 'static'];

	env.prod
		? gulpSequence('clean', tasks, cb)
		: gulpSequence('clean', tasks, 'watch', cb);
};

gulp.task('default', defaultTask);

module.exports = defaultTask;
