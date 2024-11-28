export function setupFormValidation(){
    const form = document.querySelector(".myform")

    if(form){
        form.addEventListener("submit", (e) => {
            if(!form.checkValidity()){
                e.preventDefault()
                alert("Heh, sorry pal, fill all forms. Nothing personnel")
            }
        })
    }
}