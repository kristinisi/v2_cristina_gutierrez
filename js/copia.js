//-----------------CUADRO DIÁLOGO------------------
document.getElementById("reservar").addEventListener("click", function (event) {
    event.preventDefault(); // Evita el envío automático del formulari

  // Validar el formulario aquí antes de mostrar el diálogo de confirmación
  var nombre = document.getElementById("nombre").value;
  var apellido1 = document.getElementById("apellido1").value;
  var apellido2 = document.getElementById("apellido2").value;
  var fecha = document.getElementById("fecha").value;
  var hora = document.getElementById("hora").value;
  var personas = document.getElementById("personas").value;
  var mensaje = document.getElementById("mensaje").value;
  var tarjeta = document.getElementById("tarjeta").value;
  var caducidad = document.getElementById("caducidad").value;
  var seguridad = document.getElementById("seguridad").value;
  var titular = document.getElementById("titular").value;
  var importe = document.getElementById("importe").value;

  // Si todos los datos son válidos, mostrar el cuadro de diálogo de confirmación
  if (
    nombre &&
    apellido1 &&
    apellido2 &&
    fecha &&
    hora &&
    personas &&
    mensaje &&
    tarjeta &&
    caducidad &&
    seguridad &&
    titular &&
    importe
  ) {
    document.getElementById("confirmDialog").style.display = "block";
  } else {
    // Mostrar un mensaje de error o realizar otras acciones si los datos no son válidos
    alert("Por favor, complete todos los campos antes de reservar.");
  }
});

// Agrega un evento de clic al botón "Sí" en el cuadro de diálogo de confirmación
document
  .getElementById("confirmarReserva")
  .addEventListener("click", function () {
    // Cerrar la ventana modal
    document.getElementById("confirmDialog").style.display = "none";
    // Limpiar el formulario
    document.querySelector(".formulario").reset();
  });

document.querySelectorAll(".close").forEach(function (element) {
  element.addEventListener("click", function () {
    document.getElementById("confirmDialog").style.display = "none";
  });
});




<!-- <div id="confirmDialog" class="modal">
<div class="modal-content">
  <span class="close">&times;</span>
  <p>¿Estás seguro de que deseas reservar?</p>
  <button id="confirmarReserva">Sí</button>
  <button class="close">Cancelar</button>
</div>
</div> -->