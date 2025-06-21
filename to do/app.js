var taskInput = document.getElementById('taskInput');
var taskList = document.getElementById('taskList');

function addTask() {
    var taskText = taskInput.value.trim();
    if (taskText === '') return;

    var taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    var taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    var editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => editTask(taskSpan);

    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => taskDiv.remove();

    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(editBtn);
    taskDiv.appendChild(deleteBtn);

    taskList.appendChild(taskDiv);

    taskInput.value = '';
}

function editTask(taskSpan) {
    var newTask = prompt("Edit your task:", taskSpan.textContent);
    if (newTask !== null && newTask.trim() !== '') {
        taskSpan.textContent = newTask.trim();
    }
}