let tasks = [];

function updateList() {
    const list = document.getElementById('tasklist');
    list.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                span.classList.add('completed');
            } else {
                span.classList.remove('completed');
            }
        });

        const span = document.createElement('span');
        span.textContent = task;

        li.appendChild(checkbox);
        li.appendChild(span);
        list.appendChild(li);
    });
}

function add() {
    const input = document.getElementById('text1');
    const task = input.value.trim();
    if (task === '') {
        alert("Please Enter A Task!");
        return;
    }
    tasks.push(task);
    input.value = '';
    updateList();
}

function deleteTask() {
    if (tasks.length === 0) {
        alert("No Task To Delete!");
        return;
    }
    tasks.pop();
    updateList();
}

function view() {
    if (tasks.length === 0) {
        alert("No Task To Display!");
        return;
    }
    updateList();
}
