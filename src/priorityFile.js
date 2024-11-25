import { projects,projectsList } from "./index.js";

function filterStuff(){
    projectsList.innerHTML = ""
    const filteredArr = projects.filter(todo => todo.priority = "High")
    for(let i = 0; i < projects.length; i++){
        const filteredProject = document.createElement("div")
        filteredProject.classList.add("filteredProject")

        filteredProject.innerHTML = `
            <div class="project">
                <h4>Title: ${filteredArr[i].title}</h4>
                <h4>Description: ${filteredArr[i].description}</h4>
                <h4>Due Date: ${filteredArr[i].dueDate}</h4>
                // <h4>Priority: ${filteredArr[i].priority}</h4>
                <h4>Notes: ${filteredArr[i].notes}</h4>
                <h4>${filteredArr[i].checklist ? "Done" : "Not Done"}</h4>
            </div>`;

            projectsList.appendChild(filteredProject)
    }
    
}

export default filterStuff


/// sa nu uit!! -> trb sa termin functia 
/// si sa vad la ce trb sa ii dau appendchild
/// sa testez daca functioneaza si dupa sa le fac special si pt medium si low
