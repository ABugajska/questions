(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('index.html',
    '<html><head><title>Questions app</title></head><body ng-app="app"><base href="/" /><ui-view></ui-view><script src="libs.js"></script><script src="templates.js"></script><script src="bundle.js"></script></body></html>');
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
    '<p>hello world</p>');
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
