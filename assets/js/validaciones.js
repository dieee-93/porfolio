export function valida(input) {
  const tipoDeInput = input.dataset.tipo;

  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }


  if (input.validity.valid) {
    input.parentElement.classList.remove("contacto__inputbox--invalid");
    input.parentElement.querySelector(
      ".contacto__input-message-error"
    ).innerHTML = "";
    console.log(input.parentElement);
  } else {
    input.parentElement.classList.add("contacto__inputbox--invalid");
    input.parentElement.querySelector(
      ".contacto__input-message-error"
    ).innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    console.log(input.parentElement);
  }
}
const tipoDeErrores = ["valueMissing", "typeMismatch", "patternMismatch", "customError"];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
    patternMismatch: "El nombre debe contener entre 3 a 20 caracteres.",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  asunto: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "El asunto debe contener entre 5 a 20 caracteres.",
  },
  mensaje: {
    valueMissing: "Este campo no puede estar vacío",
    customError: "El mensaje debe contener entre 20 a 300 caracteres.",
  },
};

const validadores = {
    mensaje: (input) => validarMensaje(input),
  };

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

function validarMensaje(input) {
    const pattern = /^[\s\S]{20,300}$/;
    const userMsg = input.value;
    
    let mensaje = "";
    if (!pattern.test(userMsg)) {
      mensaje = "El mensaje debe contener entre 20 y 300 caracteres";
    }
  
    input.setCustomValidity(mensaje);
  }

