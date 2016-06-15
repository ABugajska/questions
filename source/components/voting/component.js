(function(){
  'use strict';
  angular.module('voting', [])
    .component('voting', {
      templateUrl: 'components/voting/view.html',
      bindings: {
        votes: '<'
      },
      controller: function(){
        var ctrl = this;
        ctrl.votes = ctrl.votes;
        ctrl.upVotes = function(){
          ctrl.votes = ctrl.votes + 1;
        };
        ctrl.downVotes = function(){
          ctrl.votes = ctrl.votes - 1;
        };
      }
    });
})();
