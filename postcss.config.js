module.exports = {
	plugins: [
		require("postcss-import"),
		require("postcss-preset-env")({
			stage: 1
		}),
		require("postcss-nested"),
		require("postcss-color-mod-function")
	]
};
