(function(){
  'use strict';
  angular.module('sort', ['list'])
    .component('sort', {
      templateUrl: 'components/sort/view.html',
      bindings: {
        sort: '='
      },
      controller: function(){
          var ctrl = this;
          ctrl.sortByRecent = function(){
            ctrl.sort = 'sort';
          };
          ctrl.sortByHot = function(){
            ctrl.sort = 'activities.length';
          };
      }
    });
})();
