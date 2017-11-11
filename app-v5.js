// Defines todoList object
var todoList = {
  todos: [],
  // displays todos if conditions are met (this.todos.length === 0)
  displayTodos: function() {
    // if this.todos.legth === 0, the code prints 'Your todo list is empty' to the console.
    if (this.todos.length === 0) {
      console.log("Your todo list is empty!")
    // if this.todo.length does not equal 0, the todos are printed to the console
    } else {
      console.log('My todos: ');
      // this for loop prints out each of the todos in the array as long as i < this.todos.length. The i++ is the condition
      for (i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  // more comments!
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
