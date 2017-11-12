// Defines todoList object. The todoList object encompasses all code below.
var todoList = {
  // todos: [], defines todos as an (initially empty) array.
  todos: [],
  displayTodos: function() {
    // if this.todos.legth === 0, the code prints 'Your todo list is empty' to the console.
    if (this.todos.length === 0) {
      console.log("Your todo list is empty!")
    // if this.todo.length does not equal 0, the todos are printed to the console
    } else {
      console.log('My todos: ');
      // this for loop prints out each of the todos in the array as long as i < this.todos.length. The i++ is the condition
      for (i = 0; i < this.todos.length; i++) {
        // this if statement evaluates if todos has been completed. If completed = true, it prints (x) before todoText. If it is false, it prints ( ) before todoText.
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  // addTodo adds new todos using .push, and then this.displayTodos prints the updated list to the console.
  addTodo: function(todoText) {
    this.todos.push({
      // Setting todoText: todoText sets the variable todoText to the parameter.
      todoText: todoText,
      // This sets the value of all newly created todos to the boolean value of false.
      completed: false,
    });
    this.displayTodos();
  },
  // The changeTodo method allows modification of existing todos by passing in the position of the todo to be changed, and also passing in the updated todo string. Once the change has been made, this.displayTodos prints out the updated list.
  changeTodo: function(position, todoText) {
    // this.todos[position].todoText pulls up the todo to be changed through its position and sets it uqual to the (updated) todoText parameter.
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  // The deleteTodo method allows the removal of todos by passing in the position of the todo to be changed as a parameter, and then prints out the updated list of todos.
  deleteTodo: function(position) {
    // The .splice method is used in this case to change the contents of the todos array by removing existing elements using their position. The other parameter is the number of items to remove from the array - in this case just 1.
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  // The toggle completed method changes the value of the completed property. Essentially flipping a light switch. Uses the bang operator (!) to accomplish this. After toggling, this.displayTodos prints the list to the console.
  toggleCompleted: function(position) {
    // This line grabs and saves a reference to the specific todo.
    var todo = this.todos[position];
    // This line sets todo.completed to the opposite of what it is using the bang opperator.
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
