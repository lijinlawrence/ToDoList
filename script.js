

function addTask() {
   var input = document.querySelector("input");
   var taskListContainer = document.getElementById("taskListContainer");

   if (input.value.trim() !== "") {
       var taskItem = document.createElement("li");
       taskItem.innerHTML = `
           ${input.value}
           <button class="edit" onclick="edit(event)">Edit</button>
           <button class="delete" onclick="delet(event)">Delete</button>
       `;

       taskListContainer.appendChild(taskItem);
       input.value = "";
   }
}

function delet(event) {
   event.target.parentNode.remove();
}

function edit(event) {
   var currentTask = event.target.parentNode.firstChild.textContent;
   var newTask = prompt("Edit task:", currentTask);

   if (newTask !== null) {
       event.target.parentNode.firstChild.textContent = newTask;
   }
}