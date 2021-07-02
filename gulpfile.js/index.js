const { series, parallel, watch } = require('gulp');
const browserSync = require('browser-sync');

const config = require('./config');
const env = require('./lib/env');

const clean = require('./tasks/clean');
const styles = require('./tasks/styles');
const html = require('./tasks/html');
const images = require('./tasks/images');
const assets = require('./tasks/assets');
const report = require('./tasks/report');
const scripts = require('./tasks/scripts');
const server = require('./tasks/server');

const watching = (callback) => {
	watch(config.styles.watch, styles);
	watch(config.images.watch, images);
	watch(config.html.src, html);
	watch(config.html.data, html);

	callback();
};

const tasks = [styles, images, assets, html, scripts];

module.exports = {
	default: env.prod
		? series(clean, parallel(...tasks), report)
		: series(clean, parallel(...tasks), watching, server),
};
