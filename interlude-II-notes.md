# Interlude - Debugging

The debugger is one of the most important tools in your arsenal.

1. It helps you solve problems when something is wrong with your code. You have full visibility.

2. Super helpful for understanding your code. Going through your code in debugger gives you a much deeper understanding of what is happening.

#### To initiate debugger:

``` JavaScript

var todoList = {
  debugger; // Pass in 'debugger' where you need to test
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your todo list is empty!")
    } else {
      console.log('My todos: ');
      for (i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
```

##### Focus on understanding, not building from scratch!
