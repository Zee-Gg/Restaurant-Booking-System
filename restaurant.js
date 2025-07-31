document.addEventListener('DOMContentLoaded', function() {
    // Initialize Pikaday date picker
    var picker = new Pikaday({ field: document.getElementById('date') });

    // Form validation and submission simulation
    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Gather form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var date = document.getElementById('date').value;
        var time = document.getElementById('time').value;
        var guests = document.getElementById('guests').value;
        var requests = document.getElementById('requests').value;

        // Basic validation
        if (!name || !email || !phone || !date || !time || !guests) {
            alert('Please fill out all required fields.');
        } else {
            // Store reservation details in localStorage
            localStorage.setItem('reservationDetails', JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                date: date,
                time: time,
                guests: guests,
                requests: requests
            }));

            // Redirect to confirmation page
            window.location.href = 'confirmation.html';
        }
    });
});
