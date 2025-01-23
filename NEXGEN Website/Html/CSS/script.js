// script.js

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// script.js

// Initialize Email.js with the public key
emailjs.init('yKvQENLaXKl1Zeilv');

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Prepare email parameters
        const emailParams = {
            from_name: name,
            from_email: email,
            to_email: 'ross123solo456@gmail.com', // Your email address
            message: message
        };

        // Send email using Email.js
        emailjs.send('service_7pc2jt7', 'template_4bfwdfs', emailParams)
            .then(response => {
                alert('Thank you! Your message has been sent successfully.');
                document.getElementById('contact-form').reset();
            })
            .catch(error => {
                console.error('Email sending failed:', error);
                alert('Oops! Something went wrong. Please try again later.');
            });
    } else {
        alert('Please fill in all fields.');
    }
});
