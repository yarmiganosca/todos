describe('Controller: taskListController', function () {
  beforeEach(module('tasks'));

  it("should attach returned tasks to the scope", inject(function($controller, $rootScope) {
    $controller("taskListController", {$scope: $rootScope});

    $rootScope.getTasks().then(function () {
      expect($rootScope.tasks.length).toEqual(5);
    });
  }));

  it("should set newTaskText to the empty string", inject(function($controller, $rootScope) {
    $controller("taskListController", {$scope: $rootScope});

    expect($rootScope.newTaskText).toEqual('');
  }));
});