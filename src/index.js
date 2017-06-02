// Vendors
require('jquery');
require('bootstrap');
require('@uirouter/angularjs');
require('angular-ui-bootstrap');

// Fonts and CSS
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.min.css');
var cssContext = require.context('./assets/css', true, /\.css$/);
cssContext.keys().forEach(cssContext);

// Modules
require('./app/components/index');
require('./app/login/index');

var app = 'app';
module.exports = app;

angular
.module(app, ['ui.router', 'ui.bootstrap', 'components', 'login'])
.config(require('./config'));
