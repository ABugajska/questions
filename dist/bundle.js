(function(){
  'use strict';
  angular.module('list.question', ['activities'])
    .component('question', {
      templateUrl: 'components/list/question/view.html',
      bindings: {
        question: '<'
      }
    });
})();

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

(function(){
  'use strict';
  angular.module('questionsList', ['templates', 'questions', 'list', 'search', 'sort', 'activities'])
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
  angular.module('activities', [])
    .component('activities', {
      templateUrl: 'components/activities/view.html',
      bindings: {
        activities: '<'
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
  angular.module('app', ['templates', 'questions', 'ui.router', 'questionsList', 'singleQuestion'])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('questions', {
      url: '/',
      templateUrl: 'pages/list/view.html',
      controller: 'QuestionsListCtrl as ctrl'
    }).state('single-question', {
      url: '/question',
      templateUrl: 'pages/question/view.html',
      controller: 'SingleQuestionCtrl as ctrl'
    })
  });
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGlzdC9xdWVzdGlvbi9jb21wb25lbnQuanMiLCJwYWdlcy9xdWVzdGlvbi9jb250cm9sbGVyLmpzIiwicGFnZXMvbGlzdC9jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9zb3J0L2NvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvc2VhcmNoL2NvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvbGlzdC9jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2FjdGl2aXRpZXMvY29tcG9uZW50LmpzIiwic2VydmljZXMvcXVlc3Rpb25zLmpzIiwiYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcbiAgYW5ndWxhci5tb2R1bGUoJ2xpc3QucXVlc3Rpb24nLCBbJ2FjdGl2aXRpZXMnXSlcbiAgICAuY29tcG9uZW50KCdxdWVzdGlvbicsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9saXN0L3F1ZXN0aW9uL3ZpZXcuaHRtbCcsXG4gICAgICBiaW5kaW5nczoge1xuICAgICAgICBxdWVzdGlvbjogJzwnXG4gICAgICB9XG4gICAgfSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcbiAgYW5ndWxhci5tb2R1bGUoJ3NpbmdsZVF1ZXN0aW9uJywgWyd0ZW1wbGF0ZXMnLCAncXVlc3Rpb25zJ10pXG4gICAgLmNvbnRyb2xsZXIoJ1NpbmdsZVF1ZXN0aW9uQ3RybCcsIFsnUXVlc3Rpb25zJywgZnVuY3Rpb24oUXVlc3Rpb25zKXtcbiAgICAgIHZhciBjdHJsID0gdGhpcztcbiAgICAgIFF1ZXN0aW9ucy5nZXRBbGxRdWVzdGlvbnMoKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgY3RybC5xdWVzdGlvbnMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pO1xuICAgIH1dKTtcbn0pKCk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnO1xuICBhbmd1bGFyLm1vZHVsZSgncXVlc3Rpb25zTGlzdCcsIFsndGVtcGxhdGVzJywgJ3F1ZXN0aW9ucycsICdsaXN0JywgJ3NlYXJjaCcsICdzb3J0JywgJ2FjdGl2aXRpZXMnXSlcbiAgICAuY29udHJvbGxlcignUXVlc3Rpb25zTGlzdEN0cmwnLCBbJ1F1ZXN0aW9ucycsIGZ1bmN0aW9uKFF1ZXN0aW9ucyl7XG4gICAgICB2YXIgY3RybCA9IHRoaXM7XG4gICAgICBRdWVzdGlvbnMuZ2V0QWxsUXVlc3Rpb25zKCkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgIGN0cmwucXVlc3Rpb25zID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcbiAgYW5ndWxhci5tb2R1bGUoJ3NvcnQnLCBbJ2xpc3QnXSlcbiAgICAuY29tcG9uZW50KCdzb3J0Jywge1xuICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL3NvcnQvdmlldy5odG1sJyxcbiAgICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIHF1ZXN0aW9uczogJzwnXG4gICAgICB9XG4gICAgfSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcbiAgYW5ndWxhci5tb2R1bGUoJ3NlYXJjaCcsIFsnbGlzdCddKVxuICAgIC5jb21wb25lbnQoJ3NlYXJjaCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9zZWFyY2gvdmlldy5odG1sJyxcbiAgICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIHF1ZXN0aW9uczogJzwnXG4gICAgICB9XG4gICAgfSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcbiAgYW5ndWxhci5tb2R1bGUoJ2xpc3QnLCBbJ2xpc3QucXVlc3Rpb24nXSlcbiAgICAuY29tcG9uZW50KCdsaXN0Jywge1xuICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2xpc3Qvdmlldy5odG1sJyxcbiAgICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIHF1ZXN0aW9uczogJzwnXG4gICAgICB9XG4gICAgfSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcbiAgYW5ndWxhci5tb2R1bGUoJ2FjdGl2aXRpZXMnLCBbXSlcbiAgICAuY29tcG9uZW50KCdhY3Rpdml0aWVzJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2FjdGl2aXRpZXMvdmlldy5odG1sJyxcbiAgICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIGFjdGl2aXRpZXM6ICc8J1xuICAgICAgfVxuICAgIH0pO1xufSkoKTtcbiIsIihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG4gIGFuZ3VsYXIubW9kdWxlKCdxdWVzdGlvbnMnLCBbXSlcbiAgLnNlcnZpY2UoJ1F1ZXN0aW9ucycsIGZ1bmN0aW9uKCRyb290U2NvcGUsICRodHRwKXtcblxuICAgIHRoaXMuZ2V0QWxsUXVlc3Rpb25zID0gZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJ3F1ZXN0aW9ucy5qc29uJyk7XG4gICAgfTtcbiAgfSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsndGVtcGxhdGVzJywgJ3F1ZXN0aW9ucycsICd1aS5yb3V0ZXInLCAncXVlc3Rpb25zTGlzdCcsICdzaW5nbGVRdWVzdGlvbiddKVxuXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpe1xuICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvaG9tZScpO1xuXG4gICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ3F1ZXN0aW9ucycsIHtcbiAgICAgIHVybDogJy8nLFxuICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9saXN0L3ZpZXcuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnUXVlc3Rpb25zTGlzdEN0cmwgYXMgY3RybCdcbiAgICB9KS5zdGF0ZSgnc2luZ2xlLXF1ZXN0aW9uJywge1xuICAgICAgdXJsOiAnL3F1ZXN0aW9uJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvcXVlc3Rpb24vdmlldy5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdTaW5nbGVRdWVzdGlvbkN0cmwgYXMgY3RybCdcbiAgICB9KVxuICB9KTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
