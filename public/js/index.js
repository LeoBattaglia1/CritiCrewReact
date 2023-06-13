//accede a propiedades y métodos de diferentes objetos y realizar diferentes acciones,
// como agregar eventos, obtener valores de elementos del formulario 
//y mostrar información en la consola.
document.addEventListener('DOMContentLoaded', function() {
    var registroForm = document.getElementById('registroForm');
    registroForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var nombreCompleto = document.getElementById('nombreCompleto').value;
      var correoElectronico = document.getElementById('correoElectronico').value;
      var contrasena = document.getElementById('contrasena').value;
  
      var datos = {
        nombreCompleto: nombreCompleto,
        correoElectronico: correoElectronico,
        contrasena: contrasena
      };
  
      console.log(datos);
  
      // Guardar los datos en un array para validar el inicio de sesión en el siguiente formulario
      var datosArray = JSON.parse(localStorage.getItem('datosArray')) || [];
      datosArray.push(datos);
      localStorage.setItem('datosArray', JSON.stringify(datosArray));
  
      // Redireccionar al formulario de inicio de sesión
      window.location.href = 'login.html';
    });
  });