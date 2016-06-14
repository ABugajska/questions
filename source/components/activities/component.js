(function(){
  'use strict';
  angular.module('activities', [])
    .component('activities', {
      templateUrl: 'components/activities/view.html',
      bindings: {
        activities: '<'
      },
      controller: function(matchmedia){
        var ctrl = this;
        ctrl.limitTo = 4;
        ctrl.tablet = matchmedia.isTablet();
        ctrl.phone = matchmedia.isPhone();

        if(ctrl.tablet || ctrl.phone) {
          ctrl.limitTo = 1;
        }
      }
    });
})();
