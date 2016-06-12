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
  $templateCache.put('components/list/view.html',
    '<ul class="questions"><li ng-repeat="question in $ctrl.questions" class="questions__item"><question question="question"></question></li></ul>');
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
    '<input type="text" placeholder="search" />hello');
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
    '<div class="sortowanie"><p>sortowanie</p><input type="radio" /></div>');
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
    '<h2>QUESTIONS</h2><search></search><sort></sort><list questions="ctrl.questions"></list>');
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
    '<p>{{$ctrl.question.author.name}}&nbsp;<span>is asking:</span></p><h4 class="hello">{{$ctrl.question.title}}</h4>');
}]);
})();
