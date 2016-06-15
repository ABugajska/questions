(function(){
  'use strict';
  angular.module('questions', [])
  .service('Questions', function($rootScope, $http){
    var that = this;
    this.getAllQuestions = function(){
      return $http.get('questions.json');
    };
    this.getSingleQuestion = function(id){
      return that.getAllQuestions().then(function(response){
        for (var i = 0; i<response.data.length; i++) {
          var currentQuestion = response.data[i];
          if (currentQuestion.id === id) {
            return currentQuestion;
          }
        }
      });
    };
  });
})();
