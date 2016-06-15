(function(){
  'use strict';
  angular.module('list.question.content', [])
    .component('questionContent', {
      templateUrl: 'components/list/question/content/view.html',
      bindings: {
        question: '<'
      }
    });
})();
