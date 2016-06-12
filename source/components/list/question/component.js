(function(){
  'use strict';
  angular.module('list.question', ['activities'])
    .component('question', {
      templateUrl: 'components/list/question/view.html',
      bindings: {
        question: '<'
      }
    });
})();
