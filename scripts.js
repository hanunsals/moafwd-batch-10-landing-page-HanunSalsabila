// Add this in a new JavaScript file (scripts.js)
function subscribe() {
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value;

    // Check if the email is provided
    if (emailValue.trim() !== '') {
        // Clear the email input
        emailInput.value = '';

        // Show an alert
        alert('Thank you for subscribing!');

        // You can add additional logic here, such as sending the data to a server
    } else {
        // Show an alert if the email is empty
        alert('Please enter your email address.');
    }
}
