const todos = [''];
           
render();

function addToDo() {
    const textbox = document.getElementById("todo-title");
    const title = textbox.value;
    todos.push(title);

    render();
}

function render() {
    // reset the list
    document.getElementById('todo-list').innerHTML = '';

    todos.forEach(function (todoTitle) {
        const element = document.createElement('div');
        element.innerText = todoTitle;
        const todoList = document.getElementById("todo-list");
        todoList.appendChild(element);
    });
    
}

function deleteToDo() {
    todos.length = 0;

    render();
}