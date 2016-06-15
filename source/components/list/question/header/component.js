(function(){
  'use strict';
  angular.module('list.question.header', [])
    .component('questionHeader', {
      templateUrl: 'components/list/question/header/view.html',
      bindings: {
        question: '<'
      }
    });
})();
