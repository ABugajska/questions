(function(){
  'use strict';
  angular.module('singleQuestion', ['templates', 'questions'])
    .controller('SingleQuestionCtrl', ['Questions', function(Questions){
      var ctrl = this;
      Questions.getAllQuestions().then(function(response){
        ctrl.questions = response.data;
        console.log(response.data);
      });
    }]);
})();
