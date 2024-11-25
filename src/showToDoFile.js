import { projects, projectsList } from './index.js';

function showProjects() {
    projectsList.innerHTML = ""; 
    for (let i = 0; i < projects.length; i++) {
        const newproject = document.createElement("div");
        newproject.classList.add("newproject");

        newproject.innerHTML = `
            <div class="project">
                <h4>Title: ${projects[i].title}</h4>
                <h4>Description: ${projects[i].description}</h4>
                <h4>Due Date: ${projects[i].dueDate}</h4>
                <h4>Priority: ${projects[i].priority}</h4>
                <h4>Notes: ${projects[i].notes}</h4>
                <h4>${projects[i].checklist ? "Done" : "Not Done"}</h4>
            </div>`;
        projectsList.appendChild(newproject);


        
    }
}

export default showProjects;