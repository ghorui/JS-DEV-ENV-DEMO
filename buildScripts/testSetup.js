//This file isn't transpiled, so must use commonJS and EC5

//Register babel to transpiled before our test run
require('babel-register')();

//Disable webpack feature that MOCHA does not understand
require.extensions['.css'] = function () { };
