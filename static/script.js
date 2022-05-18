
function bootstrapAngular() {
    $('[ng-app]').each(function() {
      var module = $(this).attr('ng-app');
      angular.bootstrap(this, [module]);
    });
  };
  $(document).on('page:load', bootstrapAngular);
  
  
  var app = angular.module('myApp', []);
  app.controller('myCtrl', function ($scope) {
  
      $scope.hello = "hello"
  });
  
  app.config(function ($interpolateProvider) {
      $interpolateProvider.startSymbol('{[');
      $interpolateProvider.endSymbol(']}');
  });