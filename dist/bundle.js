
(function(){
  'use strict';
  angular.module('questionsList', ['templates', 'questions'])
    .controller('QuestionsListCtrl', ['Questions', function(Questions){
      var ctrl = this;
      Questions.getAllQuestions().then(function(response){
        ctrl.questions = response.data;
        console.log(response.data);
      });
    }]);
})();

(function(){
  'use strict';
  angular.module('questions', [])
  .service('Questions', function($rootScope, $http){

    this.getAllQuestions = function(){
      return $http.get('questions.json');
    };
  });
})();

(function(){
  'use strict';
  angular.module('app', ['templates', 'questions', 'ui.router', 'questionsList'])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('questions', {
      url: '/',
      templateUrl: 'pages/list/view.html',
      controller: 'QuestionsListCtrl as ctrl'
    })
  });
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3F1ZXN0aW9uL2NvbnRyb2xsZXIuanMiLCJwYWdlcy9saXN0L2NvbnRyb2xsZXIuanMiLCJzZXJ2aWNlcy9xdWVzdGlvbnMuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcbiAgYW5ndWxhci5tb2R1bGUoJ3F1ZXN0aW9uc0xpc3QnLCBbJ3RlbXBsYXRlcycsICdxdWVzdGlvbnMnXSlcbiAgICAuY29udHJvbGxlcignUXVlc3Rpb25zTGlzdEN0cmwnLCBbJ1F1ZXN0aW9ucycsIGZ1bmN0aW9uKFF1ZXN0aW9ucyl7XG4gICAgICB2YXIgY3RybCA9IHRoaXM7XG4gICAgICBRdWVzdGlvbnMuZ2V0QWxsUXVlc3Rpb25zKCkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgIGN0cmwucXVlc3Rpb25zID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcbiAgYW5ndWxhci5tb2R1bGUoJ3F1ZXN0aW9ucycsIFtdKVxuICAuc2VydmljZSgnUXVlc3Rpb25zJywgZnVuY3Rpb24oJHJvb3RTY29wZSwgJGh0dHApe1xuXG4gICAgdGhpcy5nZXRBbGxRdWVzdGlvbnMgPSBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuICRodHRwLmdldCgncXVlc3Rpb25zLmpzb24nKTtcbiAgICB9O1xuICB9KTtcbn0pKCk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnO1xuICBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyd0ZW1wbGF0ZXMnLCAncXVlc3Rpb25zJywgJ3VpLnJvdXRlcicsICdxdWVzdGlvbnNMaXN0J10pXG5cbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcil7XG4gICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9ob21lJyk7XG5cbiAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgncXVlc3Rpb25zJywge1xuICAgICAgdXJsOiAnLycsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL2xpc3Qvdmlldy5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdRdWVzdGlvbnNMaXN0Q3RybCBhcyBjdHJsJ1xuICAgIH0pXG4gIH0pO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
