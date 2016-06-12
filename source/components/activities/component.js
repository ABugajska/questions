(function(){
  'use strict';
  angular.module('activities', [])
    .component('activities', {
      templateUrl: 'components/activities/view.html',
      bindings: {
        activities: '<'
      }
    });
})();
