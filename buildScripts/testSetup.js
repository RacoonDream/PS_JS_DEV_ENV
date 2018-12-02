// This file isnt transpiled so must use CommonJS and ES5

// Require babel to transpile before our tests runs

require('babel-register')();

require.extensions['.css']= function(){}; // mocha doesnt understand .css in js which webpack understands

