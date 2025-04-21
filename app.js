// app.js
document.addEventListener('DOMContentLoaded', () => {
    // Form submission handling
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Client-side validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                showMessage('Please fill in all fields', 'error');
                return;
            }

            if (!validateEmail(email)) {
                showMessage('Please enter a valid email address', 'error');
                return;
            }

            try {
                // Submit form to server
                const response = await fetch('/submit-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams(new FormData(form))
                });

                if (response.ok) {
                    showMessage('Message sent successfully!', 'success');
                    form.reset();
                } else {
                    throw new Error('Server error');
                }
            } catch (error) {
                showMessage('Error sending message. Please try again.', 'error');
            }
        });
    }

    // Handle success query parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        showMessage('Message sent successfully!', 'success');
    }

    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = `form-message ${type}`;
        setTimeout(() => formMessage.textContent = '', 5000);
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});