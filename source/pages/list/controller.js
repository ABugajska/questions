(function(){
  'use strict';
  angular.module('questionsList', ['templates', 'questions', 'list', 'search', 'sort', 'activities', 'list.question.header'])
    .controller('QuestionsListCtrl', ['Questions', function(Questions){
      var ctrl = this;
      Questions.getAllQuestions().then(function(response){
        ctrl.questions = response.data;
        console.log(response.data);
      });
      ctrl.searchQuestion = "";
      ctrl.sort = 'activities.length';
    }]);
})();
