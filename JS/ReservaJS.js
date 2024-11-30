// Define el precio por habitación
const pricePerRoom = 100;

function calculatePrice() {
    const rooms = document.getElementById('rooms').value; // Obtener el número de habitaciones
    const totalPrice = rooms * pricePerRoom; // Calcular el precio total
    document.getElementById('totalPrice').innerText = `$${totalPrice}`; // Mostrar el precio total

    // Guardar el precio total en localStorage
    localStorage.setItem('roomTotal', totalPrice);
}

function goToExtras() {
    const totalPrice = localStorage.getItem('roomTotal');
    if (totalPrice && totalPrice > 0) {
        window.location.href = '../Reserva/Reserva2.html';
    } else {
        alert('Por favor, selecciona el número de habitaciones antes de continuar.');
    }
}

function goToPayment() {
    const totalPrice = localStorage.getItem('roomTotal');
    if (totalPrice && totalPrice > 0) {
        window.location.href = '../Pago/Pagar.html';
    } else {
        alert('Por favor, selecciona el número de habitaciones antes de continuar.');
    }
}
