const { src, dest } = require("gulp");
const config = require("../config").scripts;
const webpack = require("webpack");
const webpackStream = require("webpack-stream");

const scripts = () =>
	src(config.src)
		.pipe(webpackStream(config.webpack, webpack))
		.pipe(dest(config.dest));

module.exports = scripts;
