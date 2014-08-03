function routerConfig ($routeProvider, $httpProvider) {
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name="csrf-token"]').attr('content');

  var params = {controller: 'taskListController', templateUrl: 'tasks/index.html'};

  $routeProvider
    .when('/', params)
    .when('/:status', params)
    .otherwise({redirectTo: '/'});
}

angular.module('tasks', ['ngRoute'])
  .config(['$routeProvider', '$httpProvider', routerConfig]);
