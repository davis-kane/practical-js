var todo = ['item 1', 'item 2', 'item 3', 'item 4'];

todo.push('item 5')

console.log("My Todos: " + todo);

// Changing the first item

todo[0] = 'changed item 1';

console.log("My Todos: " + todo);

// Deleting first item

todo.splice(0, 1);

console.log("My Todos: " + todo);
