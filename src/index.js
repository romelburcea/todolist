import addprojects from './addToDoFile';
import showProjects from './showToDoFile';
import filterStuff from './priorityFile';
import { format, compareAsc } from 'date-fns';
import "./styles.css";
import { addPriorityButtonListeners } from './filterButtonsFile';
import { highButton, medBtn, lowBtn } from './filterButtonsFile';
import { setupFormValidation } from './formValidation';


export function todo(title, description, dueDate, priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
}


export const projects = [new todo("Coding for an Hour", "As it says, coding", "18/11/2024", " High", "Messed around with git and webpack, then started the project fully", "Done")];

export const projectsList = document.querySelector(".projectsList");


const addbtn = document.querySelector(".addtodo")
const dialog = document.querySelector(".mydialog")
const cancel = document.getElementById("cancel")
const submit = document.getElementById("submit")
const deleteBtn = document.querySelector(".deletetodo")


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

medBtn.addEventListener("click", () => {
    filterStuff(projects, "medium")
})

lowBtn.addEventListener("click", () => {
    filterStuff(projects, "low")
})

document.addEventListener("DOMContentLoaded", () => {
    setupFormValidation()
})


const resetButton = document.getElementById("resetButton");



resetButton.addEventListener("click", () => {
    showProjects(); 
});

addPriorityButtonListeners()



