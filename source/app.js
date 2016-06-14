(function(){
  'use strict';
  angular.module('app', ['templates', 'questions', 'ui.router', 'matchmedia-ng', 'questionsList', 'singleQuestion'])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('questions', {
      url: '/',
      templateUrl: 'pages/list/view.html',
      controller: 'QuestionsListCtrl as ctrl'
    }).state('single-question', {
      url: '/question/:id',
      templateUrl: 'pages/question/view.html',
      controller: 'SingleQuestionCtrl as ctrl'
    })
  });
})();
