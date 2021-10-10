const form = document.querySelector(".form-container");
const email = document.getElementById("email");
const country = document.getElementById("country");
const postcode = document.getElementById("postcode");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const hasError = (field) => {
    if(field.validity.valueMissing){
        return "Please fill out this field";
    }
    if(field.validity.typeMismatch){
        if(field.type === "email"){
            return "Please enter a valid email address";
        }
        if(field.type === "text"){
            return "Please enter valid text"
        }
    }
    if(field.validity.patternMismatch){    
        if(field.type === "password"){
            return "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        }
    }
    
}

document.addEventListener("input", (e) => {
    if(!e.target.validity.valid){
        e.target.classList.add("error");
        e.target.nextElementSibling.textContent = hasError(e.target);
        e.target.nextElementSibling.classList.add("show-error");
    }else{
        e.target.classList.remove("error");
        e.target.nextElementSibling.classList.remove("show-error")
    }
}, true)

document.getElementById("submit").addEventListener("click", (e) => {
    let inputs = document.getElementsByTagName("input");
        for(let i=0;i<inputs.length;i++) {
            if(!inputs[i].validity.valid){
                inputs[i].nextElementSibling.textContent = hasError(inputs[i]);
                inputs[i].classList.add("error");
                inputs[i].nextElementSibling.classList.add("show-error");
                e.preventDefault();
            }
            if(inputs[i].id === "password2"){
                if(inputs[i].value !== inputs[i-1].value){
                    inputs[i].nextElementSibling.textContent = "Passwords do not match";
                    inputs[i].classList.add("error");
                    inputs[i].nextElementSibling.classList.add("show-error");
                    e.preventDefault()
                }
            }    
    }
})