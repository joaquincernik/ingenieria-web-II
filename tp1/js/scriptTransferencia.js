let buttonTransferencia = document.getElementById('button-transferencia')
let inputUnico = document.getElementById('input-transferencia-unico')
let inputMultiple = document.getElementById('input-transferencia-multiple')
let quienRecibeH3 = document.getElementById('quien-recibe-h3')
let quienRecibeInput = document.getElementById('quien-recibe-input')

inputUnico.addEventListener('change',function(){
    buttonTransferencia.removeAttribute('disabled')
    quienRecibeH3.style.display = 'visible'

})

inputMultiple.addEventListener('change',function(){
    buttonTransferencia.removeAttribute('disabled')
    quienRecibeInput.style.display = 'visible'
})

