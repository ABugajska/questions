(function(){
  'use strict';
  angular.module('singleQuestion', ['templates', 'questions', 'list'])
    .controller('SingleQuestionCtrl', function(Questions, $stateParams){
      var ctrl = this;
      console.log($stateParams);
      Questions.getSingleQuestion($stateParams.id).then(function(question){
        ctrl.question = question;
      });

    });
})();
