import { projects,projectsList } from "./index.js";

function filterStuff(projects, projectsPriority){
    const filteredProjects = projects.filter(project => project.priority === projectsPriority)
    projectsList.innerHTML = ""

    filteredProjects.forEach(project => {
        const projectDiv = document.createElement("div")
        projectDiv.classList.add("project")
        projectDiv.innerHTML = `
            <h4>Title: ${project.title}</h4>
            <h4>Description: ${project.description}</h4>
            <h4>Due Date: ${project.dueDate}</h4>
            <h4>Priority: ${project.priority}</h4>
            <h4>Notes: ${project.notes}</h4>
            <h4>${project.checklist ? "Done" : "Not Done"}</h4>
        `
        projectsList.appendChild(projectDiv);
    });
    


}


   




export default filterStuff


/// sa nu uit!! -> trb sa termin functia 
/// si sa vad la ce trb sa ii dau appendchild
/// sa testez daca functioneaza si dupa sa le fac special si pt medium si low
