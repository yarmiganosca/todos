function task (taskService) {
  return {
    restrict: 'E',

    replace: true,

    templateUrl: 'tasks/task.html',

    scope: {
      task: '='
    },

    link: function (scope, element, attributes) {
      scope.$watch('task', function (newValue, oldValue) {
        if (!!oldValue) {
          taskService.updateTask(scope.task);
        }
      }, true);

      scope.editingInProgress = false;

      scope.startEditing = function () {
        scope.editingInProgress = true;
      };

      scope.finishEditing = function () {
        scope.editingInProgress = false;
      };
    }
  };
}

angular.module('tasks')
  .directive('task', ['taskService', task]);