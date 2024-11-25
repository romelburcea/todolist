import { projects,projectsList } from "./index.js";

// function filterStuff(projects, projectsPriority){
//     return projects.filter(project => project.priority === projectsPriority)
// }


    function filterStuff(){
        projectsList.innerHTML = ""
        
        for(let i = 0; i < projects.length; i++){
            const filteredArr = projects.filter(project => project.priority === "high")
            const filteredProject = document.createElement("div")
            filteredProject.classList.add("filteredProject")
    
            filteredProject.innerHTML = `
                <div class="project">
                    <h4>Title: ${projects[i].title}</h4>
                    <h4>Description: ${projects[i].description}</h4>
                    <h4>Due Date: ${projects[i].dueDate}</h4>
                    <h4>Priority: ${projects[i].priority}</h4>
                    <h4>Notes: ${projects[i].notes}</h4>
                    <h4>${projects[i].checklist ? "Done" : "Not Done"}</h4>
                </div>`;
    
                projectsList.appendChild(filteredProject)
        }
    }




export default filterStuff


/// sa nu uit!! -> trb sa termin functia 
/// si sa vad la ce trb sa ii dau appendchild
/// sa testez daca functioneaza si dupa sa le fac special si pt medium si low
