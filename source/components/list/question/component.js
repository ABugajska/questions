(function(){
  'use strict';
  angular.module('list.question', [])
    .component('question', {
      templateUrl: 'components/list/question/view.html',
      bindings: {
        question: '<'
      }
    });
})();
