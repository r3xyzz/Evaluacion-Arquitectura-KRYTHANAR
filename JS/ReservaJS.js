document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const roomType = document.getElementById('roomType').value;
    const guests = document.getElementById('guests').value;

    const confirmationMessage = `
        Your booking has been confirmed! 
        Check-in: ${checkin} 
        Check-out: ${checkout} 
        Room Type: ${roomType} 
        Number of Guests: ${guests}
    `;

    document.getElementById('confirmationMessage').textContent = confirmationMessage;
    document.getElementById('confirmation').classList.remove('hidden');
    document.querySelector('.booking-form').classList.add('hidden');
});
