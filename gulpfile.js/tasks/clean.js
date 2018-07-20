const gulp = require('gulp');
const del = require('del');
const config = require('../config');

const cleanTask = () => {
	const path = config.dest;

	return del(path);
};

gulp.task('clean', cleanTask);

module.exports = cleanTask;
