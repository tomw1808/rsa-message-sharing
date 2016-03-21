(function() {
  'use strict';

  angular
    .module('rsaPasswordShare')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/encrypt', {
        templateUrl: 'app/encrypt/encrypt.html',
        controller: 'EncryptController',
        controllerAs: 'encrypt'
      })
      .when('/decrypt', {
        templateUrl: 'app/decrypt/decrypt.html',
        controller: 'DecryptController',
        controllerAs: 'decrypt'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
