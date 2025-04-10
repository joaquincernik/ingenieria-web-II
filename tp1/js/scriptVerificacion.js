let botonSeleccionado = null;

function handlerVerificacion(event) {
  document.getElementById("button-verificar").removeAttribute("disabled");
  if (botonSeleccionado) {
    botonSeleccionado.classList.remove("boton-seleccionado");
    botonSeleccionado = document.getElementById(event.id);
    botonSeleccionado.classList.add("boton-seleccionado");
  } else {
    botonSeleccionado = document.getElementById(event.id);
    botonSeleccionado.classList.add("boton-seleccionado");
  }
}

//verificar codigo
let num1 = document.getElementById("number-1");
let num2 = document.getElementById("number-2");
let num3 = document.getElementById("number-3");
let num4 = document.getElementById("number-4");

let contador = 0;
let codigoUsuario = ['','','','']
num1.addEventListener("input", () => {
  if (num1.value > 0) {
    contador++;
    codigoUsuario[0] = num1.value
  } else {
    contador--;
    codigoUsuario[0] = ''
  }
  enableButton();
  num2.focus()
});
num2.addEventListener("input", () => {
  if (num2.value > 0) {
    contador++;
    codigoUsuario[1] = num2.value
  } else {
    contador--;
    codigoUsuario[1] = ''
  }
  enableButton();
  num3.focus()
});

num3.addEventListener("input", () => {
  if (num3.value > 0) {
    contador++;
    codigoUsuario[2] = num3.value
  } else {
    contador--;
    codigoUsuario[2] = ''
  }
  enableButton();
  num4.focus()
});

num4.addEventListener("input", () => {
  if (num4.value > 0) {
    contador++;
    codigoUsuario[3] = num3.value
  } else {
    contador--;
    codigoUsuario[3] = ''
  }
  enableButton();
});

//pongo mi numero en el local storage
localStorage.setItem('codigo','7777')
function enableButton() {
    
  if (contador == 4) {
    document
      .getElementById("button-number-verificar")
      .removeAttribute("disabled");

    if(codigoUsuario.join('') === localStorage.getItem('codigo')){
        alert('CODGIO CORRECTAMENTE INGRESADO');
    }
  }
  else{
    document
    .getElementById("button-number-verificar")
    .setAttribute("disabled", '');    
  }
}

/*
const inputs = document.querySelectorAll('input');

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1) {
      const nextInput = inputs[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  });
});*/