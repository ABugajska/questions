(function(){
  'use strict';
  angular.module('list', ['list.question'])
    .component('list', {
      templateUrl: 'components/list/view.html',
      bindings: {
        questions: '<'
      }
    });
})();
