/**
 * This file runs builds based on environment
 */

var env = process.env.APP_ENV;
var exec = require('child_process').exec;
var cmd = 'webpack --config webpack_configs/' + env + '.js';

console.log('Environment: ' + env);

exec(cmd, function(error, stdout, stderr) {
  console.log(stdout);
});
