var path = require('path');

module.exports = function pathToUrl() {
	return path.join.apply(this, arguments).replace(/\\/g, '/');
};
