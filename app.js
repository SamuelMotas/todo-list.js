let taskList = document.getElementById("tasklist");
let taskInput = document.getElementById("taskinput");


// Récupérer les tâches sauvegardées ou créer un tableau vide
let savedTasks = localStorage.getItem("tasks");
let taskArray = savedTasks ? JSON.parse(savedTasks) : [];

// Fonction pour créer un <li> avec les boutons
function createTaskElement(taskText) {
    let li = document.createElement("li");
    li.innerHTML = taskText;

    // Bouton modifier
    let editButton = document.createElement("button");
    editButton.innerHTML = '<ion-icon name="pencil-outline"></ion-icon>';
    editButton.onclick = function () { editTask(li); };

    // Bouton supprimer
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
    deleteButton.onclick = function () { deleteTask(li); };

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    return li;
}

// Ajouter une nouvelle tâche
function addTask() {
    let taskInput = document.getElementById("taskinput");
    let taskText = taskInput.value.trim();


    if (taskText === "") {
        alert("Veuillez remplir le formulaire svp");
        return;
    }

    // Ajouter au tableau et au localStorage
    taskArray.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(taskArray));

    // Créer le <li> et l'ajouter au DOM
    let li = createTaskElement(taskText);
    taskList.appendChild(li);

    // Vider le champ
    taskInput.value = "";
}

// Modifier une tâche
function editTask(task) {
    let taskTextElement = task.firstChild;
    let oldTaskText = taskTextElement.textContent;

    let newTaskText = prompt("Modifier la tâche:", oldTaskText);
    if (newTaskText === null || newTaskText.trim() === "") return;

    taskTextElement.textContent = newTaskText;

    // Mettre à jour le tableau et le localStorage
    let index = taskArray.indexOf(oldTaskText);
    if (index > -1) {
        taskArray[index] = newTaskText;
        localStorage.setItem("tasks", JSON.stringify(taskArray));
    }
}

// Supprimer une tâche
function deleteTask(task) {
    let taskText = task.firstChild.textContent;

    taskList.removeChild(task);

    let index = taskArray.indexOf(taskText);
    if (index > -1) {
        taskArray.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(taskArray));
    }
}

// Charger les tâches au démarrage
taskArray.forEach(taskText => {
    let li = createTaskElement(taskText);
    taskList.appendChild(li);
});

// ajouter une tache avec le bouton "enter" du clavier
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {  // Vérifie si c’est la touche Enter
        addTask();                // Appelle ta fonction addTask
    }
});
