var path = require('path');

module.exports = function projectPath(...paths) {
	return path.resolve(process.env.INIT_CWD, ...paths);
};
