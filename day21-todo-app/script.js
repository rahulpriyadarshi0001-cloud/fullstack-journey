const taskInput = document.querySelector('#task-input');
const addBtn = document.querySelector('#add-btn');
const taskList = document.querySelector('#task-list');
const taskCount = document.querySelector('#task-count');

let tasks = [];

function saveToLocalStorage(){
  localStorage.setItem('myTasks',JSON.stringify(tasks));
}


function renderTasks() {
  taskList.innerHTML = ''; 
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = "p-3 bg-gray-800 rounded-xl border border-gray-700 flex justify-between items-center gap-3 transition-all hover:border-cyan-500/50";
        
        li.innerHTML = `
            <span class="flex-1 ${task.completed ? 'line-through text-gray-500' : 'text-white'}">
                ${task.text}
            </span>
            <div class="flex gap-2">
                <button class="delete-btn p-1 text-rose-500 hover:bg-rose-500/10 rounded transition-all" data-index="${index}">
                    ✕
                </button>
                <button class="complete-btn p-1 text-emerald-500 hover:bg-emerald-500/10 rounded transition-all" data-index="${index}">
                    ✓
                </button> 
            </div>
        `;
        taskList.appendChild(li);
    });

    taskCount.innerText = tasks.length;

    saveToLocalStorage();
  
}

addBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();
  if(text === "") return;
  tasks.push({text,completed:false});
  renderTasks();
  taskInput.value = "";
});

taskList.addEventListener('click',(e) => {
  if(e.target.classList.contains('delete-btn')) {
    const index = e.target.dataset.index;
    tasks.splice(index,1);
    renderTasks();
  }else if (e.target.classList.contains('complete-btn')){
    const index = e.target.dataset.index;
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
  }
});

function loadTasks() {
  const savedTasks = localStorage.getItem('myTasks');

  if(!savedTasks) return;
  const parsedTasks = JSON.parse(savedTasks);
  tasks = parsedTasks;
  renderTasks();
}
loadTasks();



