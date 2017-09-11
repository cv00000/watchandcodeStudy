// todo list array.
var todos = [];

// display todos.
function displayTodos() {
  console.log('My todos: ', todos);
}

// add new todo function.
function addTodo(newTodo) {
  todos.push(newTodo);
  displayTodos();
}

// change todo function.
function changeTodo(position, newTodoValue) {
  todos[position] = newTodoValue;
  displayTodos();
}

// delete todo function.
function deleteTodo(position) {
  todos.splice(position, 1);
}
