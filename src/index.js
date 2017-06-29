// Vendors
require('jquery');
require('bootstrap');

// Fonts and CSS
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.min.css');
var cssContext = require.context('./assets/css', true, /\.css$/);
cssContext.keys().forEach(cssContext);

// Modules

var app = 'app';
module.exports = app;
