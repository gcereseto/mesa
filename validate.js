window.onload = iniciar;

function iniciar() {
  document.getElementById('send').addEventListener('click', validate, false);
}

function valida_Nombres() {
  var elemento = document.getElementById('Nombres');
  if (elemento.value == '') {
    alert('El campo Nombres no puede estar vacío');
    return false;
  }
  return true;
}
function valida_Apellido() {
    var elemento = document.getElementById('Apellido');
    if (elemento.value == '') {
      alert('El campo Apellido no puede estar vacío');
      return false;
    }
    return true;
  }


function valida_nrotel() {
  var elemento = document.getElementById('nrotel');
  if (elemento.value == ''){
    alert('El campo Teléfono no puede estar vacío');
    return false;
  }
  return true;
}


function validate(e) {
  if (valida_Nombres() && valida_Apellido() && valida_nrotel()){
    return true;
  }
  return false;
}
