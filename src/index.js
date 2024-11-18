import { format, compareAsc } from 'date-fns';
import "./styles.css";

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
