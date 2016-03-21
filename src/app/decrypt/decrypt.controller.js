(function () {
    'use strict';

    angular
        .module('rsaPasswordShare')
        .controller('DecryptController', DecryptController);

    /** @ngInject */
    function DecryptController() {
        var vm = this;
        vm.decrypted = { message: "asdf"};
        var crypt = new JSEncrypt({default_key_size: 1024});
        crypt.getKey();
        vm.privatekey = crypt.getPrivateKey();
        vm.publickey = crypt.getPublicKey();

        vm.decryptIt = function() {
            vm.decrypted = {message: crypt.decrypt(vm.message)};
        }
    }
})();
