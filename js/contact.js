const form = document.querySelector("form");
const formName = document.querySelector("#Name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const message = document.querySelector("#message");

const nameError = document.querySelector("#nameError");
const subjectError = document.querySelector("#subjectError");
const emailError = document.querySelector("#emailError");
const addressError = document.querySelector("#addressError");




form.addEventListener("submit", validateForm);

function validateForm(){
    event.preventDefault();

    if (checkLength(formName.value, 1) === true){
        nameError.style.display = "none";
    }
    else {
        nameError.style.display = "block";
    }

    if (checkLength(subject.value, 10) === true){
        subjectError.style.display = "none";
    }
    else {
        subjectError.style.display = "block";
    }
    
    if(checkEmail(email.value) === true){
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
    
    if (checkLength(address.value, 25) === true){
        addressError.style.display = "none";
    }
    else {
        addressError.style.display = "block";
    } 
    
    if (checkLength(formName.value, 1) && checkLength(subject.value, 10) && checkEmail(email.value) && checkLength(address.value, 25)) {
        message.innerHTML = `<div class="message">Your message has been sent</div>`;
        form.reset(); 
    }
    else {
        message.innerHTML = "";
    }
    
    
}


function checkLength(value, len) {
    if (value.trim().length >= len){
        return true;
    }
    else {
        return false;
    }
}

function checkEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}



// function checkInput(){
//     if(checkLength(formName.value, 1) && checkLength(subject.value, 10) && checkEmail(email.value) && checkLength(adress.value, 25)) {
//         button.diabled = false;
//     }
//     else {
//         button.diabled = true;
//     }

// }

// function submitForm(event) {
   
//         event.preventDefault();
        // message.innerHTML = `<div class="message">Your message has been sent</div>`;
        // form.reset(); 
    
//         // message.innerHTML = `<div class="message">Invalid Input</div>`;
//     }

    



// formName.addEventListener("keyup", checkInput);
// subject.addEventListener("keyup", checkInput);
// email.addEventListener("keyup", checkInput);
// adress.addEventListener("keyup", checkInput);
// message.addEventListener("keyup", checkInput);

// form.addEventListener("submit", submitForm);

// function checkLength(value, len) {
//     if (value.trim().length >= len){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

