import addprojects from './addToDoFile';
import showProjects from './showToDoFile';
import filterStuff from './priorityFile';
import { format, compareAsc } from 'date-fns';
import "./styles.css";


export function todo(title, description, dueDate, priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
}


export const projects = [new todo("Clean", "Dishes, Vacuum", "19/11/2024", "Medium", "Need to wash dishes and what not", true)];

export const projectsList = document.querySelector(".projectsList");


const addbtn = document.querySelector(".addtodo")
const dialog = document.querySelector(".mydialog")
const cancel = document.getElementById("cancel")
const submit = document.getElementById("submit")
const deleteBtn = document.querySelector(".deletetodo")
const highButton = document.querySelector(".highBtn")

addbtn.addEventListener("click", () => {
    dialog.showModal()
})

cancel.addEventListener("click", () => {
    dialog.close()
})

submit.addEventListener("click", (event) => {
    event.preventDefault()
    addprojects()
})

deleteBtn.addEventListener("click", () => {
    if(projectsList.children.length > 0){
        projectsList.removeChild(projectsList.lastChild)
        projects.pop()
    }
})

highButton.addEventListener("click", () => {
   filterStuff(projects, "high")
    
})

const resetButton = document.createElement("button");
resetButton.textContent = "Show All";
document.body.appendChild(resetButton);

resetButton.addEventListener("click", () => {
    showProjects(); // Render all projects
});

// console.log(addprojects())
// console.log(showProjects())


// function showProjects(){
//     for(let i = 0; i < projects.length; i++){
//         const newproject = document.createElement("div")
//         newproject.classList.add(".newproject")
//         newproject.innerHTML = `<div class="book">
//                 <h4>Title: ${projects[i].title} </h4>
//                 <h4>Description: ${projects[i].description} </h4>
//                 <h4>Due Date: ${projects[i].dueDate}</h4>
//                 <h4>Priority: ${projects[i].priority}</h4>
//                 <h4>Notes: ${projects[i].notes}</h4>
//                 <h4>Done</h4> ${project[i].checklist}`

//             projectsList.appendChild(newproject)
//     }

// }


// function addprojects(){
//     const title = document.getElementById("title").value
//     const description = document.getElementById("description").value
//     const duedate = document.getElementById("duedate").value
//     const priority = document.getElementById("priority").value
//     const notes = document.getElementById("notes").value
//     const checklist = document.getElementById("checklist").checked


//     const ifDone = checklist ? "Done" : "Not Done"

//     const todoItem = new todo(title, description, duedate, priority, notes, checklist)

//     projects.push(todoItem)

//     for(let i = 0 ; i < projects.length; i++){
//         console.log(projects[i])
//     }

//     const container = document.createElement("div")
//     container.classList.add("container")

//     container.innerHTML = `<div class="project">
//                 <h4>Title: ${title} </h4>
//                 <h4>Description: ${description}</h4>
//                 <h4>Due Date: ${duedate}</h4>
//                 <h4>Priority: ${priority}</h4>
//                 <h4>Notes: ${notes}</h4>
//                 <h4>${ifDone}</h4>        
//     </div>`

//     projectsList.appendChild(container)
// }