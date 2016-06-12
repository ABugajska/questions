(function(){
  'use strict';
  angular.module('list.question', [])
    .component('question', {
      templateUrl: 'components/list/question/view.html',
      bindings: {
        question: '<'
      }
    });
})();


(function(){
  'use strict';
  angular.module('questionsList', ['templates', 'questions', 'list', 'search', 'sort'])
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
  angular.module('sort', ['list'])
    .component('sort', {
      templateUrl: 'components/sort/view.html',
      bindings: {
        questions: '<'
      }
    });
})();

(function(){
  'use strict';
  angular.module('search', ['list'])
    .component('search', {
      templateUrl: 'components/search/view.html',
      bindings: {
        questions: '<'
      }
    });
})();

(function(){
  'use strict';
  angular.module('list', ['list.question'])
    .component('list', {
      templateUrl: 'components/list/view.html',
      bindings: {
        questions: '<'
      }
    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGlzdC9xdWVzdGlvbi9jb21wb25lbnQuanMiLCJwYWdlcy9xdWVzdGlvbi9jb250cm9sbGVyLmpzIiwicGFnZXMvbGlzdC9jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9zb3J0L2NvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvc2VhcmNoL2NvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvbGlzdC9jb21wb25lbnQuanMiLCJzZXJ2aWNlcy9xdWVzdGlvbnMuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG4gIGFuZ3VsYXIubW9kdWxlKCdsaXN0LnF1ZXN0aW9uJywgW10pXG4gICAgLmNvbXBvbmVudCgncXVlc3Rpb24nLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvbGlzdC9xdWVzdGlvbi92aWV3Lmh0bWwnLFxuICAgICAgYmluZGluZ3M6IHtcbiAgICAgICAgcXVlc3Rpb246ICc8J1xuICAgICAgfVxuICAgIH0pO1xufSkoKTtcbiIsIiIsIihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG4gIGFuZ3VsYXIubW9kdWxlKCdxdWVzdGlvbnNMaXN0JywgWyd0ZW1wbGF0ZXMnLCAncXVlc3Rpb25zJywgJ2xpc3QnLCAnc2VhcmNoJywgJ3NvcnQnXSlcbiAgICAuY29udHJvbGxlcignUXVlc3Rpb25zTGlzdEN0cmwnLCBbJ1F1ZXN0aW9ucycsIGZ1bmN0aW9uKFF1ZXN0aW9ucyl7XG4gICAgICB2YXIgY3RybCA9IHRoaXM7XG4gICAgICBRdWVzdGlvbnMuZ2V0QWxsUXVlc3Rpb25zKCkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgIGN0cmwucXVlc3Rpb25zID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcbiAgYW5ndWxhci5tb2R1bGUoJ3NvcnQnLCBbJ2xpc3QnXSlcbiAgICAuY29tcG9uZW50KCdzb3J0Jywge1xuICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL3NvcnQvdmlldy5odG1sJyxcbiAgICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIHF1ZXN0aW9uczogJzwnXG4gICAgICB9XG4gICAgfSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcbiAgYW5ndWxhci5tb2R1bGUoJ3NlYXJjaCcsIFsnbGlzdCddKVxuICAgIC5jb21wb25lbnQoJ3NlYXJjaCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9zZWFyY2gvdmlldy5odG1sJyxcbiAgICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIHF1ZXN0aW9uczogJzwnXG4gICAgICB9XG4gICAgfSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcbiAgYW5ndWxhci5tb2R1bGUoJ2xpc3QnLCBbJ2xpc3QucXVlc3Rpb24nXSlcbiAgICAuY29tcG9uZW50KCdsaXN0Jywge1xuICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2xpc3Qvdmlldy5odG1sJyxcbiAgICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIHF1ZXN0aW9uczogJzwnXG4gICAgICB9XG4gICAgfSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcbiAgYW5ndWxhci5tb2R1bGUoJ3F1ZXN0aW9ucycsIFtdKVxuICAuc2VydmljZSgnUXVlc3Rpb25zJywgZnVuY3Rpb24oJHJvb3RTY29wZSwgJGh0dHApe1xuXG4gICAgdGhpcy5nZXRBbGxRdWVzdGlvbnMgPSBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuICRodHRwLmdldCgncXVlc3Rpb25zLmpzb24nKTtcbiAgICB9O1xuICB9KTtcbn0pKCk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnO1xuICBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyd0ZW1wbGF0ZXMnLCAncXVlc3Rpb25zJywgJ3VpLnJvdXRlcicsICdxdWVzdGlvbnNMaXN0J10pXG5cbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcil7XG4gICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9ob21lJyk7XG5cbiAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgncXVlc3Rpb25zJywge1xuICAgICAgdXJsOiAnLycsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL2xpc3Qvdmlldy5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdRdWVzdGlvbnNMaXN0Q3RybCBhcyBjdHJsJ1xuICAgIH0pXG4gIH0pO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
