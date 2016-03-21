(function() {
  'use strict';

  angular
    .module('rsaPasswordShare')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
