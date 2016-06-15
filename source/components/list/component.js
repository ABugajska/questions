(function(){
  'use strict';
  angular.module('list', ['list.question'])
    .component('list', {
      templateUrl: 'components/list/view.html',
      bindings: {
        questions: '<',
        search: '<',
        sort: '<'
      },
      controller: function(){
        var ctrl = this;
        ctrl.limit = 4;
        ctrl.loadMore = function(){
          ctrl.limit = ctrl.limit + 4;
        };
      }
    });
})();
