(function(){
  'use strict';
  angular.module('list', ['questions'])
    .component('listComponent', {
      templateUrl: 'components/list/view.html',
      bindings: {
        questions: '<'
      }
    });


})();
