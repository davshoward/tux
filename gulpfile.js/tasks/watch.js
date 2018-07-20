const gulp = require('gulp');
const config = require('../config');
const tasks = require('../lib/task-config');

const watchTask = () => {
	const watchableTasks = [
		'fonts',
		'images',
		'html',
		'styles',
		'static'
	];

	watchableTasks.forEach(watchableTask => {
		const taskPath = config[watchableTask].src;
		const taskExt = tasks[watchableTask] ? `.{${tasks[watchableTask].ext}}` : '';

		const path = `${config.src}/${taskPath}/**/*${taskExt}`;

		gulp.watch(path, [watchableTask]);
	});
};

gulp.task('watch', ['browserSync'], watchTask);

module.exports = watchTask;
