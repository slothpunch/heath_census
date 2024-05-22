const taskInput = document.getElementById('taskInput');

const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');

let tasks = [];

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push({text: taskText});
        taskInput.value = ""; 
        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, idx) => {
        const li = document.createElement("li");
        // a ternary operator 
        li.innerHTML=`<input type="checkbox" id="task-${idx}" ${task.completed ? "checked" : ""}>
        <label for="task-${idx}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(idx));
        taskList.appendChild(li);
    });

}

function toggleTask(idx) {
    // It helps by selecting the checkbox regardless. 
    // If selected, then it will mark that particular task as completed.
    tasks[idx].completed = !tasks[idx].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    // tasks = tasks.filter((task) => {!task.completed}); -> not working
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
// displayTasks();
