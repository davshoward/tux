const { src } = require("gulp");
const config = require("../config");
const sizereport = require("gulp-sizereport");

const report = () => {
	let srcs = config.report.src;

	config.assets &&
		config.assets.length &&
		config.assets.forEach(a => srcs.push[a.dest]);

	srcs = srcs.map(x => `${x}/**/*`);

	return src(srcs).pipe(sizereport({ gzip: true }));
};

module.exports = report;
