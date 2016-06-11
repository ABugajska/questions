

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

(function(){
  angular.module('app', ['templates', 'questions', 'ui.router'])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('questions', {
      url: '/',
      templateUrl: 'pages/list/view.html'
    })
  });
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3F1ZXN0aW9uL2NvbnRyb2xsZXIuanMiLCJwYWdlcy9saXN0L2NvbnRyb2xsZXIuanMiLCJzZXJ2aWNlcy9xdWVzdGlvbnMuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiIsIiIsIihmdW5jdGlvbigpe1xuICBhbmd1bGFyLm1vZHVsZSgncXVlc3Rpb25zJywgW10pXG4gIC5zZXJ2aWNlKCdRdWVzdGlvbnMnLCBmdW5jdGlvbigkcm9vdFNjb3BlLCAkaHR0cCl7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHRoYXQucXVlc3Rpb25zID0ge307XG4gICAgdGhpcy5nZXRBbGxRdWVzdGlvbnMgPSBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuICRodHRwLmdldCgncXVlc3Rpb25zLmpzb24nKS5zdWNjZXNzKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3RlbXBsYXRlcycsICdxdWVzdGlvbnMnLCAndWkucm91dGVyJ10pXG5cbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcil7XG4gICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9ob21lJyk7XG5cbiAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgncXVlc3Rpb25zJywge1xuICAgICAgdXJsOiAnLycsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL2xpc3Qvdmlldy5odG1sJ1xuICAgIH0pXG4gIH0pO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
