function taskListController ($scope, $routeParams, $filter, taskService) {
  $scope.getTasks = function () {
    return taskService.getTasks().success(function (response) {
      $scope.tasks = response.tasks;

      $scope.$watch('tasks', function (newValue, oldValue) {
        $scope.activeCount    = $filter('filter')($scope.tasks, {completed: false}).length;
        $scope.completedCount = $scope.tasks.length - $scope.activeCount;
        $scope.allCompleted   = ($scope.activeCount == 0);
      }, true);
    }).error(function (response, status, headers, config) {
      console.log("something bad happened. oh noes! have a nice day.");
    });
  };

  // $scope.getTasks();

  $scope.newTaskText = '';

  var statusFilters = {
    active:    {completed: false},
    completed: {completed: true},
    '':        null
  };

  $scope.$on('$routeChangeSuccess', function () {
    $scope.status = $routeParams.status || '';

    $scope.statusFilter = statusFilters[$scope.status];
  });

  $scope.addTask = function () {
    if ($scope.newTaskText.length == 0) {
      return;
    }

    var task = {text: $scope.newTaskText, completed: false};

    taskService.createTask(task)
      .success(function (response) {
        $scope.tasks.push(response.task);
        $scope.newTaskText = '';
      });
  };
}

angular.module('tasks')
  .controller('taskListController', ['$scope', '$routeParams', '$filter', 'taskService', taskListController]);