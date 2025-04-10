const inputEmail = document.getElementById('email')
const inputPassword = document.getElementById('password')

function validarNoVacio(){
    if(inputEmail.value.length > 0 && inputPassword.value.length > 0){
        document.getElementById('button-register').removeAttribute('disabled')
    }
    if(inputEmail.value.length == 0 || inputPassword.value.length == 0){
        document.getElementById('button-register').setAttribute('disabled', '')
    }
}
inputEmail.addEventListener('input',validarNoVacio)
inputPassword.addEventListener('input',validarNoVacio)

