'use strict';

module.exports = Routes;

/** @ngInject */
function Routes($stateProvider) {
  $stateProvider.state('app.login', {url: '/login', component: 'login'});
}
