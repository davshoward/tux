const { src, dest } = require('gulp');
const gulpif = require('gulp-if');
const config = require('../config').html;
const env = require('../lib/env');
const handleErrors = require('../lib/handleErrors');

const browserSync = require('browser-sync');

const data = require('gulp-data');
const htmlmin = require('gulp-htmlmin');
const nunjucksRender = require('gulp-nunjucks-render');
const strip = require('gulp-strip-comments');
const fs = require('fs');

const html = () => {
	const exclude = `${config.src}/**/{${config.excludeFolders.join(',')}}/**`;

	const parseData = () => JSON.parse(fs.readFileSync(config.data));

	const nunjucksRenderOptions = {};
	nunjucksRenderOptions.path = config.render.path;
	nunjucksRenderOptions.envOptions = config.render.envOptions;

	return src([`${config.src}/**/*.{${config.ext}}`, `!${exclude}`])
		.pipe(data(parseData))
		.on('error', handleErrors)
		.pipe(nunjucksRender(nunjucksRenderOptions))
		.on('error', handleErrors)
		.pipe(gulpif(env.prod, strip()))
		.pipe(gulpif(env.prod, htmlmin(config.htmlmin)))
		.pipe(dest(config.dest))
		.pipe(browserSync.stream());
};

module.exports = html;
