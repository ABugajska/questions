(function(){
  'use strict';
  angular.module('questionsList', ['templates', 'questions', 'list'])
    .controller('QuestionsListCtrl', ['Questions', function(Questions){
      var ctrl = this;
      Questions.getAllQuestions().then(function(response){
        ctrl.questions = response.data;
        console.log(response.data);
      });
    }]);
})();
