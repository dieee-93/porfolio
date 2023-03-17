import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");
const textarea = document.querySelectorAll("textarea");
const submitBtn = document.querySelector(".contacto__submit-btn");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});


textarea[0].addEventListener("blur", (txtarea) => {
 valida(txtarea.target);
});


submitBtn.addEventListener('click', (event) => {enviarForm(event)});

function enviarForm (event) {
    
    event.preventDefault();
    if (formValid()){
        submitMsg();
        reiniciarForm();
    } else {
        submitMsg();
    }

}

function reiniciarForm(){
    inputs.forEach((input) => {
        input.value="";
    })
    textarea[0].value="";
}

function formValid() {
    let res = true;

    inputs.forEach((input) => {
        if(!input.validity.valid){
            res = false;
        }
    })

    if (!textarea[0].validity.valid){
        res = false;
    }

    return res;

}

function submitMsg(){
    const submitMsg = document.querySelector(".contacto__submit-msg");

    if (formValid()){
        submitMsg.textContent = "El mensaje fue enviado con exito."
        submitMsg.classList.add("contacto__submit-msg--success");
    } else{
        submitMsg.textContent = "El contenido de algunos campos es erroneo."
        submitMsg.classList.add("contacto__submit-msg--error");
    }

    window.setTimeout(() => {
        submitMsg.classList.remove("contacto__submit-msg--success");
        submitMsg.classList.remove("contacto__submit-msg--error");
        submitMsg.textContent= "";
    },2000)

}