const webpack = require('webpack');
const path = require('path');

const pathToUrl = require('../lib/pathToUrl');
const projectPath = require('../lib/projectPath');
const tasks = require('../lib/task-config');
const env = require('../lib/env');

const config = require('../config');

const paths = {
	src: projectPath(config.src, config.scripts.src),
	dest: projectPath(config.dest, config.scripts.dest),
	publicPath: pathToUrl(tasks.scripts.publicPath || config.scripts.dest, '/')
};

function addDotExt(string) {
	return string.indexOf('.') === 0 ? string : `.${string}`;
}
const ext = tasks.scripts.ext.map(addDotExt);

const hmrPath = 'webpack-hot-middleware/client?reload=true';

const glob = require('glob');
const vendorPath = projectPath(
	config.src,
	config.scripts.src,
	'vendor/**/*.js'
);
const vendorGlob = glob.sync(vendorPath);

const webpackConfig = {
	mode: env.prod ? 'production' : 'development',
	context: paths.src,
	entry: {
		app: !env.prod
			? [hmrPath, tasks.scripts.entry.app]
			: [tasks.scripts.entry.app],
		vendor: vendorGlob
	},
	output: {
		path: path.normalize(paths.dest),
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
		publicPath: paths.publicPath
	},
	plugins: !env.prod ? [new webpack.HotModuleReplacementPlugin()] : [],
	resolve: {
		modules: [paths.src, projectPath('node_modules')],
		extensions: ext
	},
	module: {
		rules: [
			{
				exclude: path.resolve(__dirname, 'node_modules/'),
				loader: 'babel-loader',
				query: {
					presets: [['env', { modules: false }]]
				}
			}
		]
	},
	externals: {
		jQuery: 'jquery',
		$: 'jquery'
	}
};

module.exports = webpackConfig;
