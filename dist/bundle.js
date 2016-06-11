
(function(){
  'use strict';
  angular.module('questionsList', ['templates', 'questions', 'list'])
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
  angular.module('list', ['questions'])
    .component('listComponent', {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3F1ZXN0aW9uL2NvbnRyb2xsZXIuanMiLCJwYWdlcy9saXN0L2NvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2xpc3QvY29tcG9uZW50LmpzIiwic2VydmljZXMvcXVlc3Rpb25zLmpzIiwiYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcbiAgYW5ndWxhci5tb2R1bGUoJ3F1ZXN0aW9uc0xpc3QnLCBbJ3RlbXBsYXRlcycsICdxdWVzdGlvbnMnLCAnbGlzdCddKVxuICAgIC5jb250cm9sbGVyKCdRdWVzdGlvbnNMaXN0Q3RybCcsIFsnUXVlc3Rpb25zJywgZnVuY3Rpb24oUXVlc3Rpb25zKXtcbiAgICAgIHZhciBjdHJsID0gdGhpcztcbiAgICAgIFF1ZXN0aW9ucy5nZXRBbGxRdWVzdGlvbnMoKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgY3RybC5xdWVzdGlvbnMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pO1xuICAgIH1dKTtcbn0pKCk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnO1xuICBhbmd1bGFyLm1vZHVsZSgnbGlzdCcsIFsncXVlc3Rpb25zJ10pXG4gICAgLmNvbXBvbmVudCgnbGlzdENvbXBvbmVudCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9saXN0L3ZpZXcuaHRtbCcsXG4gICAgICBiaW5kaW5nczoge1xuICAgICAgICBxdWVzdGlvbnM6ICc8J1xuICAgICAgfVxuICAgIH0pO1xuXG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnO1xuICBhbmd1bGFyLm1vZHVsZSgncXVlc3Rpb25zJywgW10pXG4gIC5zZXJ2aWNlKCdRdWVzdGlvbnMnLCBmdW5jdGlvbigkcm9vdFNjb3BlLCAkaHR0cCl7XG5cbiAgICB0aGlzLmdldEFsbFF1ZXN0aW9ucyA9IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCdxdWVzdGlvbnMuanNvbicpO1xuICAgIH07XG4gIH0pO1xufSkoKTtcbiIsIihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3RlbXBsYXRlcycsICdxdWVzdGlvbnMnLCAndWkucm91dGVyJywgJ3F1ZXN0aW9uc0xpc3QnXSlcblxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKXtcbiAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2hvbWUnKTtcblxuICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdxdWVzdGlvbnMnLCB7XG4gICAgICB1cmw6ICcvJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvbGlzdC92aWV3Lmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ1F1ZXN0aW9uc0xpc3RDdHJsIGFzIGN0cmwnXG4gICAgfSlcbiAgfSk7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
