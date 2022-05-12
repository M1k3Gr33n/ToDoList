const todos = [''];
           
render();
// the above renders the empty array
function addToDo() {
    // adds items to the array
    const textbox = document.getElementById("todo-title");
    const title = textbox.value;
    todos.push(title);

    render();
}
// the above renders the array as things are added
function render() {
    // reset the list
    document.getElementById('todo-list').innerHTML = '';
// renders the list as things are entered into it
    todos.forEach(function (todoTitle) {
        const element = document.createElement('div');
        element.innerText = todoTitle;
        const todoList = document.getElementById("todo-list");
        todoList.appendChild(element);
    });
    
}
// deletes the entire array
function deleteToDo() {
    todos.length = 0;

    render();
    // renders the deleted array
}