(function(){
  'use strict';
  angular.module('list.question.header', ['angularModalService', 'modal'])
    .component('questionHeader', {
      templateUrl: 'components/list/question/header/view.html',
      bindings: {
        question: '<'
      },
      controller: function(ModalService){
        var ctrl = this;
        ctrl.show = function(){
          ModalService.showModal({
            templateUrl: "components/modal/view.html",
            controller: "ModalCtrl as ctrl",
            inputs: {
              user: ctrl.question.author
            }
          });
        }

      }

    });
})();
