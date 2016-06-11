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
