window.addEventListener('load', function() {
  var addList = document.getElementById('input-list'); /* variable para escribir la lista*/
  var form = document.getElementById('formul'); /* variable para el formulario*/
  var saveButton = document.getElementById('save-list'); /* variable para el boton */
  addList.addEventListener('click', saving); /* llamando al evento click  en el input*/

  function saving() { /* funcion para ingresar  formulario*/
    form.classList.add('trelloList');/* añadiendo  las listas*/
  }

  saveButton.addEventListener('click', createList); /* creando al evento click en el boton guardar lista*/
  function createList() { /* funcion para crear  la lista*/
    form.classList.toggle('trelloList'); /* el primer formulario aparece en el lado derecho*/
  }
});