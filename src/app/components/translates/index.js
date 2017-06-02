'use strict';
require('angular-translate');
require('angular-sanitize');
require('angular-translate-loader-static-files');
require('angular-translate-storage-cookie');
require('angular-translate-storage-local');
require('angular-cookies');

angular.module('translates', ['pascalprecht.translate', 'ngSanitize', 'ngCookies'])
.config(require('./config'));
