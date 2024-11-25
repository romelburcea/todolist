import { todo, projects, projectsList } from './index.js';

function addprojects() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const duedate = document.getElementById("duedate").value;
    const priority = document.getElementById("priority").value;
    const notes = document.getElementById("notes").value;
    const checklist = document.getElementById("checklist").checked;

    const ifDone = checklist ? "Done" : "Not Done";

    const todoItem = new todo(title, description, duedate, priority, notes, checklist);
    projects.push(todoItem); 

    const container = document.createElement("div");
    container.classList.add("container");

    container.innerHTML = `
        <div class="project">
            <h4>Title: ${title}</h4>
            <h4>Description: ${description}</h4>
            <h4>Due Date: ${duedate}</h4>
            <h4>Priority: ${priority}</h4>
            <h4>Notes: ${notes}</h4>
            <h4>${ifDone}</h4>        
        </div>`;

    projectsList.appendChild(container); 

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("duedate").value = "";
    document.getElementById("priority").value = "";
    document.getElementById("notes").value = "";
    document.getElementById("checklist").checked = false;
}

export default addprojects;