const button = document.getElementById('button-multiple')
function handleFile(event) {
    const file = event.target.files[0];
    if (file) {
      button.removeAttribute('disabled')
      console.log('Archivo seleccionado:', file.name);
    }
  }