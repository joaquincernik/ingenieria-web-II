let buttonTransferencia = document.getElementById('button-transferencia')
let inputUnico = document.getElementById('input-transferencia-unico')
let inputMultiple = document.getElementById('input-transferencia-multiple')
let showTransferencia = document.getElementById('show-transferencia')

inputUnico.addEventListener('change',function(){
    showTransferencia.style.display = 'block'

})

inputMultiple.addEventListener('change',function(){
    showTransferencia.style.display = 'block'
})

showTransferencia.addEventListener('input',()=>{
    if(showTransferencia.querySelector('input').value > 0){
    buttonTransferencia.removeAttribute('disabled')
    }
    else{
        buttonTransferencia.setAttribute('disabled' , '')
    }

})