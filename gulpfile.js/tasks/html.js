const gulp = require('gulp');
const gulpif = require('gulp-if');

const config = require('../config');
const tasks = require('../lib/task-config');
const env = require('../lib/env');
const handleErrors = require('../lib/handleErrors');

const browserSync = require('browser-sync');

const data = require('gulp-data');
const htmlmin = require('gulp-htmlmin');
const nunjucksRender = require('gulp-nunjucks-render');
const strip = require('gulp-strip-comments');
const fs = require('fs');

const htmlTask = () => {
	const exlcude = `!${config.src}/${
		config.html.src
	}/**/{${tasks.html.excludeFolders.join(',')}}/**`;

	const paths = {
		src: [`${config.src}/${config.html.src}/**/*.{${tasks.html.ext}}`, exlcude],
		dest: `${config.dest}/${config.html.dest}`
	};

	const dataParse = () => {
		const dataPath = `${config.src}/${config.html.src}/${tasks.html.dataPath}`;
		return JSON.parse(fs.readFileSync(dataPath));
	};

	const nunjucksRenderOptions = {};
	nunjucksRenderOptions.path = [`${config.src}/${config.html.src}`];
	nunjucksRenderOptions.envOptions = tasks.html.nunjucksRender.envOptions;

	return gulp
		.src(paths.src)
		.pipe(data(dataParse))
		.on('error', handleErrors)
		.pipe(nunjucksRender(nunjucksRenderOptions))
		.on('error', handleErrors)
		.pipe(gulpif(env.prod, strip()))
		.pipe(gulpif(env.prod, htmlmin(tasks.html.htmlmin)))
		.pipe(gulp.dest(paths.dest))
		.pipe(browserSync.stream());
};

gulp.task('html', htmlTask);

module.exports = htmlTask;
