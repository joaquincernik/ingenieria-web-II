const form = document.getElementById('formLogin');
let inputUsuario = document.getElementById('input-usuario')
let inputPassword = document.getElementById('input-password')
let buttonLogin = document.getElementById('button-login')

 form.addEventListener('submit', function(event) {
   event.preventDefault(); // Evita que la página se recargue

   const formData = new FormData(form);

   localStorage.setItem('usuario',formData.get('usuario'))
   localStorage.setItem('password',formData.get('password'))

    window.location.href = 'http://127.0.0.1:5500/views/transferencia.html'
 })

function validarCompletos(){
    if(inputPassword.value.length > 0 && inputUsuario.value.length > 0){
        buttonLogin.removeAttribute('disabled')
    }
}

inputPassword.addEventListener('change',validarCompletos)
inputUsuario.addEventListener('change',validarCompletos)
inputUsuario.addEventListener('change', ()=>{
    if(!inputUsuario.value.includes('@')){
        alert(inputUsuario.value + ' no es un email valido');
    }
})






