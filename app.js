let taskList = document.getElementById("tasklist");

function addTask() {
    let taskInput = document.getElementById("taskinput");
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Veuillez remplir le formulaire svp");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = taskText;

    let editButton = document.createElement("button")
    editButton.innerHTML = '<ion-icon name="pencil-outline"></ion-icon>'

    editButton.onclick = function () {
        editTask(li)
    }

    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = '<ion-icon name="trash-outline"></ion-icon>'

    deleteButton.onclick = function () {
        deleteTask(li)
    }

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
}

function editTask(task) {
    let taskTextElement = task.firstChild;
    let taskText = taskTextElement.textContent;

    let newTaskText = prompt("Modifier la tâche:", taskText);

    if (newTaskText === null || newTaskText === "") {
        return;// Ne rien faire si l'utilisateur a cliqué sur Annuler ou n'a pas entré de nouveau texte
    }

    taskTextElement.textContent = newTaskText;
}

function deleteTask(task){
    taskList.removeChild(task);
}