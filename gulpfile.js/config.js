const webpack = require('webpack');
const glob = require('glob');
const path = require('path');
const env = require('./lib/env');

const src = 'src';
const dest = 'public';

const assets = [
	{
		src: `${src}/fonts/*`,
		dest: `${dest}/fonts`,
	},
	{
		src: `${src}/static/*`,
		dest: `${dest}/`,
	},
];

const server = {
	files: [],
	server: {
		baseDir: dest,
		middleware: [],
		serveStaticOptions: {
			extensions: ['html'],
		},
	},
	watchOptions: {
		debounceDelay: 2000,
	},
};

const html = {
	src: `${src}/html`,
	dest: `${dest}/`,
	data: `${src}/data/data.json`,
	render: {
		path: `${src}/html`,
		envOptions: {
			watch: false,
		},
	},
	htmlmin: {
		collapseWhitespace: true,
	},
	excludeFolders: ['layout', 'components', 'macros'],
	ext: ['html', 'njk', 'json'],
};

const images = {
	src: `${src}/images/**/*`,
	dest: `${dest}/`,
	watch: `${src}/images/**/*`,
	ext: ['jpg', 'png', 'svg', 'gif', 'webp'],
};

const styles = {
	src: `${src}/styles/*.css`,
	dest: `${dest}/styles`,
	watch: `${src}/styles/**/*.css`,
};

const scripts = {
	src: `${src}/js/**`,
	dest: `${dest}/js`,
	webpack: {
		mode: env.prod ? 'production' : 'development',
		context: path.resolve(__dirname, `../${src}/js`),
		entry: {
			main: !env.prod
				? ['webpack-hot-middleware/client?reload=true', './main.js']
				: ['./main.js'],
			vendor: glob.sync(
				path.resolve(__dirname, `../${src}/js/vendor/**/*.js`)
			),
		},
		output: {
			path: path.resolve(__dirname, `../${dest}/js`),
			filename: '[name].bundle.js',
			publicPath: '/js',
		},
		resolve: {
			alias: {
				utils: `${src}/js/utils`,
				modules: `${src}/js/modules`,
			},
		},
		plugins: !env.prod ? [new webpack.HotModuleReplacementPlugin()] : [],
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ['babel-loader'],
				},
			],
		},
	},
};

const report = {
	src: [styles.dest, scripts.dest, images.dest],
};

module.exports = {
	src,
	dest,
	server,
	assets,
	images,
	html,
	styles,
	scripts,
	report,
};
