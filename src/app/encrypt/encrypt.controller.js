(function () {
    'use strict';

    angular
        .module('rsaPasswordShare')
        .controller('EncryptController', EncryptController);

    /** @ngInject */
    function EncryptController() {
        var vm = this;


        vm.encryptIt = function() {
            var crypt = new JSEncrypt();
            crypt.setPublicKey(vm.publickey);
            vm.encrypted = crypt.encrypt(vm.message);
        }
    }
})();
