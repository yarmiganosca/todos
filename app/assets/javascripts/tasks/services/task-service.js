function taskService ($http) {
  return {
    getTasks: function (task) {
      return $http.get('/tasks.json');
    },
    createTask: function (task) {
      return $http.post('/tasks.json', task);
    },
    updateTask: function (task) {
      return $http.put('/tasks/' + task.id + '.json', task);
    }
  }
}

angular.module('tasks')
  .service('taskService', ['$http', taskService]);