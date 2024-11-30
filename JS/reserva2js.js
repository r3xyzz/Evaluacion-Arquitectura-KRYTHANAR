document.getElementById('extraServicesForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario

    // Capturar los servicios seleccionados
    const selectedServices = [];
    document.querySelectorAll('input[name="services"]:checked').forEach(service => {
        selectedServices.push(service.value);
    });

    // Validar si hay servicios seleccionados
    if (selectedServices.length > 0) {
        // Mostrar el popup
        document.getElementById('popup').classList.remove('hidden');
    } else {
        alert('Por favor, selecciona al menos un servicio.');
    }
});

// Botón de continuar en el popup
document.getElementById('continueButton').addEventListener('click', function () {
    // Ocultar el popup
    document.getElementById('popup').classList.add('hidden');
    alert('Redirigiendo a la siguiente página...');
});
