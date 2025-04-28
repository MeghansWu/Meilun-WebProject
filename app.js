document.addEventListener('DOMContentLoaded', () => {
    const formMessage = document.getElementById('formMessage');

    // Check URL parameters for success
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        showMessage('Form submitted successfully!', 'success');
    }

    // Helper function to display message
    function showMessage(text, type) {
        if (!formMessage) return;
        formMessage.textContent = text;
        formMessage.className = `form-message ${type}`;
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 5000);
    }
});
