# Functional Requirements

## Version 1 - Arrays
1. It should have a place to store todos.
  - Store todos in arrays
2. It should have a way to display todos.
  - Console.log
3. It should have a way to add new todos.
  -  .push
4. It should have a way to change a todo.
  - ex: todos[0] = "new value here"
5. It should have a way to delete a todo.
  - todos.splice(0, 1)

## Version 2 - Functions
1. It should have a function to display todos
```
function displayTodos() {
      console.log('My todos: ', todos);
}
```
2. It should have a function to add todos.
```
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}
```
3. It should have a function to change todos.
```
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}
```
4. It should have a function to delete todos.

## Version 3 - Objects

1. It should store the todos array on an object
2. It should have a displayTodos method
3. It should have an addTodo method
4. It should have a changeTodo method
5. It should have a deleteTodo method

## Version 4 - Booleans

1. todoList.addTodo should add objects
2. todoList.change should change the todoText property
3. todoList.toggleCompleted should change the completed property

## Version 5 - Loops of Logic

1. .displayTodos should show .todoText
2. .displayTodos should tell you if .todos is empty
3. .displayTodos should show .completed

## Version 6 - Thinking in Code

1. toggleAll: If everything's true, make everything false.
2. toggleAll: Otherwise, make everything true.
