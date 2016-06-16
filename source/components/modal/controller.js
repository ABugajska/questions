(function(){
  'use strict';
  angular.module('modal', ['templates'])
    .controller('ModalCtrl', function(close, user){
      var ctrl = this;
      ctrl.user = user;
      ctrl.dismissModal = function(){
        close();
      };
    });
})();
