const inputMonto = document.getElementById('input-monto')
const montoDisponible = document.getElementById('monto-disponible').textContent

inputMonto.addEventListener('change',() =>{
    document.getElementById('impuestos').textContent = inputMonto.value /10
})

function transferirButton(){
    if(inputMonto.value > montoDisponible){
        alert('El dinero a trasnferir es mayor a $' + montoDisponible);
    }
}

