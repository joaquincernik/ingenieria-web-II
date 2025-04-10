let buttonTransferencia = document.getElementById('button-transferencia')
let inputUnico = document.getElementById('input-transferencia-unico')
let inputMultiple = document.getElementById('input-transferencia-multiple')
let showTransferencia = document.getElementById('show-transferencia')

inputUnico.addEventListener('change',function(){
    buttonTransferencia.removeAttribute('disabled')
    showTransferencia.style.display = 'block'

})

inputMultiple.addEventListener('change',function(){
    buttonTransferencia.removeAttribute('disabled')
    showTransferencia.style.display = 'block'
})
