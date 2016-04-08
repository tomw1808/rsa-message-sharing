(function() {
  'use strict';

  angular
    .module('rsaPasswordShare')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.bla = "Password";
  }
})();
