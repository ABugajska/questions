(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('index.html',
    '<html><head><title>Questions app</title><link rel="stylesheet" href="application.css" /></head><body ng-app="app"><base href="/" /><ui-view></ui-view><script src="libs.js"></script><script src="templates.js"></script><script src="bundle.js"></script></body></html>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/activities/view.html',
    '<div class="activities"><div ng-repeat="activity in $ctrl.activities" class="activities__item center"><div class="avatar"><img ng-src="{{activity.user.avatar}}" /></div><p>{{activity.type}}</p></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/list/view.html',
    '<ul class="questions"><li ng-repeat="question in $ctrl.questions" class="questions-list-item"><question question="question"></question></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/search/view.html',
    '<input type="text" placeholder="search questions" class="search__input" /><button type="submit">search</button>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/sort/view.html',
    '<span class="italic">Sort by: &nbsp;</span><a href="#">recent</a><span class="italic">&nbsp;or&nbsp;</span><a href="#">all</a>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('pages/list/view.html',
    '<div class="questions-list-page"><div><h2 class="main-header text-inlineb">QUESTIONS</h2><div class="float-right"><sort class="sort"></sort></div></div><search class="search"></search><list questions="ctrl.questions"></list></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('pages/question/view.html',
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/list/question/view.html',
    '<div class="questions__item"><div class="questions__item__header"><p>{{$ctrl.question.author.name}}&nbsp;<span>is asking:</span></p><h4>{{$ctrl.question.title}}</h4></div><activities activities="$ctrl.question.activities"></activities></div><div class="info"><p>related discussions {{$ctrl.question.related_discussions}}</p><p>peers involved {{$ctrl.question.peers_involved}}</p><p>conversations {{$ctrl.question.conversations}}</p></div>');
}]);
})();
