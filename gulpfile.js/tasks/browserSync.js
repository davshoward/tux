const gulp = require('gulp');
const browserSync = require('browser-sync');

const pathToUrl = require('../lib/pathToUrl');
const tasks = require('../lib/task-config');
const webpackConfig = require('./webpack.config');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const bundler = webpack(webpackConfig);

const browserSyncTask = () => {
	tasks.browserSync.server.middleware = [
		webpackDevMiddleware(bundler, {
			stats: 'errors-only',
			watchOptions: tasks.browserSync.watchOptions || {},
			publicPath: pathToUrl('/', webpackConfig.output.publicPath)
		}),
		webpackHotMiddleware(bundler)
	];

	browserSync.init(tasks.browserSync);
};

gulp.task('browserSync', browserSyncTask);

module.exports = browserSyncTask;
