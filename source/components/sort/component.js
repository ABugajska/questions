(function(){
  'use strict';
  angular.module('sort', ['list'])
    .component('sort', {
      templateUrl: 'components/sort/view.html',
      bindings: {
        questions: '<'
      }
    });
})();
