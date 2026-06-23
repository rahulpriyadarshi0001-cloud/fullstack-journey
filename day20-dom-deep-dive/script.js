const addProjBtn = document.querySelector('#add-proj-btn');
const projName = document.querySelector('#proj-name');
const projPriority = document.querySelector('#proj-priority');
const projectGrid = document.querySelector('#project-grid');

addProjBtn.addEventListener('click' , () => {
  const name = projName.value;
  const priority = projPriority.value;

  if(name === "") return alert("Enter a name!");

  const card = document.createElement('div');
  card.className = "px-6 py-2 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-all";
  card.dataset.id = Date.now();

  const title = document.createElement('h3');
  title.className = "text-lg font-bold text-white mb-2";
  title.innerText = name;

  const priorityTag = document.createElement('span');
  priorityTag.innerText= priority.toUpperCase();
  priorityTag.className= "text-[10px] font-mono px-2 py-1 rounded-full ";

  if(priority === "high"){
    priorityTag.classList.add("bg-red-500/20", "text-red-500");
  } else if(priority === "medium"){
      priorityTag.classList.add("bg-blue-500/20", "text-blue-500");
  } else {
      priorityTag.classList.add("bg-green-500/20", "text-green-500");
  }
  const delBtn = document.createElement('button');
  delBtn.innerText = "Delete";
  delBtn.className = "mt-4 w-full py-1 bg-rose-500 text-white text-xs rounded hover:bg-rose-600 transition-all";

    card.appendChild(title);
    card.appendChild(priorityTag);
    card.appendChild(delBtn);


    projectGrid.appendChild(card);

    projName.value = "";
});


projectGrid.addEventListener('click', (e) => {
    // Check if the clicked element is a button AND if it says "Delete"
    if (e.target.tagName === 'BUTTON' && e.target.innerText === 'Delete') {
        
        // FIND THE PARENT (the card) and remove it
        const cardToRemove = e.target.parentElement;
        cardToRemove.remove();
        
        console.log("Deleted project ID:", cardToRemove.dataset.id);
    }
});