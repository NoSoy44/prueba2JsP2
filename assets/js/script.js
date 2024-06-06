//FORMULARIO
        // Almacenar los datos del formulario
        let titleValue = "";
        let messageValue = "";

        // Obtener referencias a los elementos del DOM
        const btnForm = document.getElementById('sub');
        const form = document.getElementById('Title');
        const form2 = document.getElementById('Message');

        // Función para guardar los datos del formulario
        function saveFormData() {
            titleValue = form.value;
            messageValue = form2.value;
        }

        // Event listener para el botón de submit
        btnForm.addEventListener('click', function(event) {
          event.preventDefault(); // 
          saveFormData();
            // Mostrar un mensaje para confirmar que los datos se guardaron
            alert('Datos guardados: ' + titleValue + ', ' + messageValue);
        });


//Funcion 1

// Función Modal para manipular los eventos
const miVentanaEmergente = document.getElementById('ventanaEmergente')

//Agregar un observador sobre el modal

miVentanaEmergente.addEventListener('show.bs.modal', function (event) {
    console.log('Se esta abriendo el modal');

    //reconoces el elemento que habilita el evento modal
    let boton = event.relatedTarget //eitiquetado relacionado al evento

    let mensaje = boton.getAttribute('data-titulo')
    let contenido = boton.getAttribute('data-contenido')

    document.getElementById('tituloModal').innerText = titleValue;//Usando un id
    document.querySelector('.modal-body').innerText = messageValue;//Usando una clase
})

//Funcion 2

//Inicializar el Popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


// Obtener elementos del Dom
const miPopover = document.getElementById('popover');
let popoverInstance = new bootstrap.Popover(miPopover);

//Crear instancia
miPopover.addEventListener('click', function () {
  miPopover.setAttribute('data-bs-original-title', titleValue);
  miPopover.setAttribute('data-bs-content', messageValue);

  // Destruir instancia anterior y crear una nueva
  popoverInstance.dispose();
  popoverInstance = new bootstrap.Popover(miPopover);


  // Alternar la visibilidad del popover
  if (miPopover.getAttribute('aria-describedby')) {
    popoverInstance.hide();
  } else {
    popoverInstance.show();
  }
});


// Funcion 3

// Inicializar Toast
const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show();
  });
}

// Obtener elemento del Dom
const liveToastBtn = document.getElementById('liveToastBtn');

liveToastBtn.addEventListener('click', function () {
  const toastBody = toastLiveExample.querySelector('.toast-body');
  const newMessage = toastBody.getAttribute('data-titulo');

  const toastTitle = toastLiveExample.querySelector('.me-auto');
  const newTitle = toastTitle.getAttribute('data-titles');

  toastBody.textContent = messageValue;;
  toastTitle.textContent = titleValue;;

  // Cambiar el color de fondo del contenedor
  toastBody.style.backgroundColor = 'lightblue';

});


//Funcion 4

// Obtener elementos del DOM
const btnCanvas = document.getElementById('offcanvas');
const offCanvasElement = document.getElementById('demo');

btnCanvas.addEventListener('click', function () {
  // Asegurarse de que los valores se hayan guardado

  const offCanvasBody = offCanvasElement.querySelector('.offcanvas-body p');
  const offTitle = offCanvasElement.querySelector('.offcanvas-title');

  // Asignar los valores guardados a los elementos del DOM
  offCanvasBody.textContent = messageValue;
  offTitle.textContent = titleValue;

  // Mostrar el contenedor
  offCanvasElement.style.display = 'block';

  // Cambiar el color de fondo del contenedor
  offCanvasElement.style.backgroundColor = 'lightblue';

});