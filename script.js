document.addEventListener('DOMContentLoaded', () => {
    const form =document.getElementById('todo-form');
    const input = document.getElementById('todo-input')
    const todoList = doucment.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = input.value.trim();
        if (taskText !== '') {
            addTodoItem(taskText);
            input.value = '';
            input.focus();
        }
    });

    function addTodoItem(text) {

        const li = doucment.createElement('li');
        li.classList.add('todo-item');

        const span = doument.createElement('span');
        span.textContent = text;

        span.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const dletetBtn = document.createElement('button');
        delteBtn.textContent = 'Delete'
        deleteBtn.classList.add('delete-btn');

        delteBtn.addEventListener('click', () => {
            li.remove();
        });
        
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});