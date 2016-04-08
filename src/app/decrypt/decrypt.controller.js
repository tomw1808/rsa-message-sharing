(function () {
    'use strict';

    angular
        .module('rsaPasswordShare')
        .controller('DecryptController', DecryptController);

    /** @ngInject */
    function DecryptController() {
        var vm = this;
        vm.decrypted = { message: ""};
        var crypt = new JSEncrypt({default_key_size: 2048});
        crypt.getKey();
        vm.privatekey = crypt.getPrivateKey();
        vm.publickey = crypt.getPublicKey();

        vm.decryptIt = function() {
            vm.decrypted = {message: crypt.decrypt(vm.message)};
        }
    }
})();
