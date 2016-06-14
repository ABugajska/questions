(function(){
  'use strict';
  angular.module('search', ['list'])
    .component('search', {
      templateUrl: 'components/search/view.html',
      bindings: {
        search: '='
      }
    });
})();
