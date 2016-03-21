(function() {
  'use strict';

  angular
    .module('rsaPasswordShare')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
