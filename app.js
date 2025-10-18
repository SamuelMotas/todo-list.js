let taskList = document.getElementById("tasklist");

function addTask() {
    let taskInput = document.getElementById("taskinput");
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Veuillez remplir le formulaire svp");
        return;
    }

    let li = document.getElement("li");
    
}