//-----------------BARRA DE PROGRESO------------------
document.addEventListener("DOMContentLoaded", function () {
  // Obtener todos los campos del formulario
  var formFields = document.querySelectorAll(
    ".formulario input, .formulario textarea"
  );
  // Calcular el número total de campos
  var totalFields = formFields.length;

  // Función para actualizar la barra de progreso
  function updateProgressBar() {
    // Contar los campos completados
    var completedFields = 0;
    formFields.forEach(function (field) {
      if (field.validity.valid) {
        completedFields++;
      }
    });

    // Calcular el porcentaje de progreso
    var progressPercentage = (completedFields / totalFields) * 100;

    // Actualizar la barra de progreso
    var progressBar = document.querySelector(".progress-bar");
    progressBar.style.width = progressPercentage + "%";
    progressBar.setAttribute("aria-valuenow", progressPercentage);
  }

  // Escuchar eventos de entrada en los campos del formulario
  formFields.forEach(function (field) {
    field.addEventListener("input", updateProgressBar);
  });
});

//-----------------VALIDACIONES------------------
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

//-----------------CUADRO DIÁLOGO------------------
document.getElementById("reservar").addEventListener("click", function (event) {
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
    event.preventDefault(); // Evita el envío automático del formulario
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
