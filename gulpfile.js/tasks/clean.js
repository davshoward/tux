const del = require('del');
const config = require('../config').dest;

const clean = () => del(config);

module.exports = clean;
