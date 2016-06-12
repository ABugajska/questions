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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGlzdC9xdWVzdGlvbi9jb21wb25lbnQuanMiLCJwYWdlcy9xdWVzdGlvbi9jb250cm9sbGVyLmpzIiwicGFnZXMvbGlzdC9jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9zb3J0L2NvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvc2VhcmNoL2NvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvbGlzdC9jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2FjdGl2aXRpZXMvY29tcG9uZW50LmpzIiwic2VydmljZXMvcXVlc3Rpb25zLmpzIiwiYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcbiAgYW5ndWxhci5tb2R1bGUoJ2xpc3QucXVlc3Rpb24nLCBbJ2FjdGl2aXRpZXMnXSlcbiAgICAuY29tcG9uZW50KCdxdWVzdGlvbicsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9saXN0L3F1ZXN0aW9uL3ZpZXcuaHRtbCcsXG4gICAgICBiaW5kaW5nczoge1xuICAgICAgICBxdWVzdGlvbjogJzwnXG4gICAgICB9XG4gICAgfSk7XG59KSgpO1xuIiwiIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcbiAgYW5ndWxhci5tb2R1bGUoJ3F1ZXN0aW9uc0xpc3QnLCBbJ3RlbXBsYXRlcycsICdxdWVzdGlvbnMnLCAnbGlzdCcsICdzZWFyY2gnLCAnc29ydCcsICdhY3Rpdml0aWVzJ10pXG4gICAgLmNvbnRyb2xsZXIoJ1F1ZXN0aW9uc0xpc3RDdHJsJywgWydRdWVzdGlvbnMnLCBmdW5jdGlvbihRdWVzdGlvbnMpe1xuICAgICAgdmFyIGN0cmwgPSB0aGlzO1xuICAgICAgUXVlc3Rpb25zLmdldEFsbFF1ZXN0aW9ucygpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICBjdHJsLnF1ZXN0aW9ucyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSk7XG4gICAgfV0pO1xufSkoKTtcbiIsIihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG4gIGFuZ3VsYXIubW9kdWxlKCdzb3J0JywgWydsaXN0J10pXG4gICAgLmNvbXBvbmVudCgnc29ydCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9zb3J0L3ZpZXcuaHRtbCcsXG4gICAgICBiaW5kaW5nczoge1xuICAgICAgICBxdWVzdGlvbnM6ICc8J1xuICAgICAgfVxuICAgIH0pO1xufSkoKTtcbiIsIihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG4gIGFuZ3VsYXIubW9kdWxlKCdzZWFyY2gnLCBbJ2xpc3QnXSlcbiAgICAuY29tcG9uZW50KCdzZWFyY2gnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvc2VhcmNoL3ZpZXcuaHRtbCcsXG4gICAgICBiaW5kaW5nczoge1xuICAgICAgICBxdWVzdGlvbnM6ICc8J1xuICAgICAgfVxuICAgIH0pO1xufSkoKTtcbiIsIihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG4gIGFuZ3VsYXIubW9kdWxlKCdsaXN0JywgWydsaXN0LnF1ZXN0aW9uJ10pXG4gICAgLmNvbXBvbmVudCgnbGlzdCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9saXN0L3ZpZXcuaHRtbCcsXG4gICAgICBiaW5kaW5nczoge1xuICAgICAgICBxdWVzdGlvbnM6ICc8J1xuICAgICAgfVxuICAgIH0pO1xufSkoKTtcbiIsIihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG4gIGFuZ3VsYXIubW9kdWxlKCdhY3Rpdml0aWVzJywgW10pXG4gICAgLmNvbXBvbmVudCgnYWN0aXZpdGllcycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9hY3Rpdml0aWVzL3ZpZXcuaHRtbCcsXG4gICAgICBiaW5kaW5nczoge1xuICAgICAgICBhY3Rpdml0aWVzOiAnPCdcbiAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnO1xuICBhbmd1bGFyLm1vZHVsZSgncXVlc3Rpb25zJywgW10pXG4gIC5zZXJ2aWNlKCdRdWVzdGlvbnMnLCBmdW5jdGlvbigkcm9vdFNjb3BlLCAkaHR0cCl7XG5cbiAgICB0aGlzLmdldEFsbFF1ZXN0aW9ucyA9IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCdxdWVzdGlvbnMuanNvbicpO1xuICAgIH07XG4gIH0pO1xufSkoKTtcbiIsIihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3RlbXBsYXRlcycsICdxdWVzdGlvbnMnLCAndWkucm91dGVyJywgJ3F1ZXN0aW9uc0xpc3QnXSlcblxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKXtcbiAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2hvbWUnKTtcblxuICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdxdWVzdGlvbnMnLCB7XG4gICAgICB1cmw6ICcvJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvbGlzdC92aWV3Lmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ1F1ZXN0aW9uc0xpc3RDdHJsIGFzIGN0cmwnXG4gICAgfSlcbiAgfSk7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
