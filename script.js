// Function to add a new task
function addTask() {
    let taskInput = document.getElementById('taskInput');
    let dateInput = document.getElementById('dateInput');
    
    let task = taskInput.value;
    let dueDate = dateInput.value;
    
    if (task === '') {
        alert('Please enter a task');
        return;
    }
    
    let taskList = document.getElementById('taskList');

    let li = document.createElement('li');
    li.innerHTML = `
        ${task} 
        <small>(Due: ${dueDate ? formatDate(dueDate) : 'No due date'})</small>
        <div>
            <button class="complete-btn" onclick="markCompleted(this)">Complete</button>
            <button class="edit-btn" onclick="editTask(this)">Edit</button>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    taskList.appendChild(li);

    // Clear input fields
    taskInput.value = '';
    dateInput.value = '';
}

// Function to mark a task as completed (erases the task)
function markCompleted(button) {
    let taskItem = button.parentElement.parentElement;
    taskItem.remove(); // Remove task from the list
}

// Function to edit a task
function editTask(button) {
    let taskItem = button.parentElement.parentElement;
    let taskText = taskItem.firstChild.textContent.trim();
    let newTask = prompt('Edit task:', taskText);

    if (newTask !== null && newTask !== '') {
        taskItem.firstChild.textContent = newTask;
    }
}

// Function to delete a task
function deleteTask(button) {
    let taskItem = button.parentElement.parentElement;
    taskItem.remove();
}

// Function to format date
function formatDate(dateStr) {
    let options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    let date = new Date(dateStr);
    return date.toLocaleDateString(undefined, options);
}
