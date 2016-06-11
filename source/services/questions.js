(function(){
  angular.module('questions', [])
  .service('Questions', function($rootScope, $http){
    var that = this;
    that.questions = {};
    this.getAllQuestions = function(){
      return $http.get('questions.json').success(function(response){
        console.log(response.data);
        return response.data;
      });
    };
  });
})();
