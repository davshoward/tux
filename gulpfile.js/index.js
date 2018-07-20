/* 
    gulpfile.js
    ------------
    One large file was too difficult to maintain so each task has been split into more managable sizes.
*/

const requireDir = require('require-dir');
requireDir('./tasks', { recurse: true });