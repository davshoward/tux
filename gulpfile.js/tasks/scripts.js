const gulp = require('gulp');

const config = require('../config');
const tasks = require('../lib/task-config');
const webpackConfig = require('./webpack.config');

const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const scriptsTask = callback => {
	const paths = {
		src: `${config.src}/${config.scripts.src}/${tasks.scripts.entry}`,
		dest: `${config.dest}/${config.scripts.dest}`
	};

	return gulp
		.src(paths.src)
		.pipe(webpackStream(webpackConfig, webpack))
		.pipe(gulp.dest(paths.dest));
};

gulp.task('scripts', scriptsTask);

module.exports = scriptsTask;
