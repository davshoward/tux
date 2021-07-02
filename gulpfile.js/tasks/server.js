const browserSync = require('browser-sync');
const config = require('../config').server;
const webpackConfig = require('../config').scripts.webpack;
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const bundler = webpack(webpackConfig);

const server = () => {
	config.server.middleware = [
		webpackDevMiddleware(bundler, {
			stats: 'minimal',
		}),
		webpackHotMiddleware(bundler),
	];

	browserSync.init(config);
};

module.exports = server;
