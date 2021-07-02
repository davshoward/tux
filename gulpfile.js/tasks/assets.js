const { src, dest } = require('gulp');
const changed = require('gulp-changed');
const config = require('../config').assets;
const handleErrors = require('../lib/handleErrors');
const browserSync = require('browser-sync');

const assets = (callback) => {
	if (config.length <= 0) {
		return callback();
	}

	config.forEach((entry) => {
		src(entry.src)
			.pipe(changed(entry.dest))
			.on('error', handleErrors)
			.pipe(dest(entry.dest))
			.pipe(browserSync.stream());
	});

	return callback();
};

module.exports = assets;
