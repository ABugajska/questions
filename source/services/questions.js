(function(){
  'use strict';
  angular.module('questions', [])
  .service('Questions', function($rootScope, $http){

    this.getAllQuestions = function(){
      return $http.get('questions.json');
    };
  });
})();
