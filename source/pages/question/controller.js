(function(){
  'use strict';
  angular.module('singleQuestion', ['templates', 'questions', 'list', 'list.question.header', 'list.question.content', 'voting'])
    .controller('SingleQuestionCtrl', function(Questions, $stateParams){
      var ctrl = this;
      console.log($stateParams);
      Questions.getSingleQuestion($stateParams.id).then(function(question){
        ctrl.question = question;
      });

    });
})();
