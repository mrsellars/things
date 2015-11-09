(function() {
  var app = angular.module('things', ['ngStorage']);

  app.controller('ThingsController', function($scope, $localStorage) {
    if($localStorage.todos) {
      this.todos = $localStorage.todos.reverse();
    }
    else {
      $localStorage.todos = [];
      this.todos = $localStorage.todos;
    }

    this.todo = {};
    this.addToDo = function() {
      this.todo['generated_at'] = Date.now();
      $localStorage.todos.push(this.todo);
      console.log('Add ToDo');
      this.todo = {};
    };

    this.removeToDo = function(item) {
      var index = this.todos.indexOf(item);
      delete $localStorage.todos.splice(index, 1);
      console.log('Delete ToDo');
    };
  });
})();
