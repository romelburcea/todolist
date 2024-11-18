import { format, compareAsc } from 'date-fns';
import "./styles.css";


const projectsList  = document.querySelector(".projectsList")

const projects = [new todo("Clean", "Dishes, Vacuum", "19/11/2024", "Medium", "Need to wash dishes and what not", "Done")]

function todo (title, description, dueDate, priority, notes, checklist){
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.notes = notes
    this.checklist = checklist
}


const addbtn = document.querySelector(".addtodo")
const dialog = document.querySelector(".mydialog")
const cancel = document.getElementById("cancel")
const submit = document.getElementById("submit")

addbtn.addEventListener("click", () => {
    dialog.showModal()
})

cancel.addEventListener("click", () => {
    dialog.close()
})


function showProjects(){
    for(let i = 0; i < projects.length; i++){
        const newproject = document.createElement("div")
        newproject.classList.add(".newproject")
        newproject.innerHTML = `<div class="book">
                <h4>Title: ${projects[i].title} </h4>
                <h4>Description: ${projects[i].description} </h4>
                <h4>Due Date: ${projects[i].dueDate}</h4>
                <h4>Priority: ${projects[i].priority}</h4>
                <h4>Notes: ${projects[i].notes}</h4>
                <h4>Done</h4> ${project[i].checklist}`

            projectsList.appendChild(newproject)
    }

}
