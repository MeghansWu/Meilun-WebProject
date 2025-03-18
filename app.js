// app.js
// Client-Side JavaScript for All Pages

// Toggle Card Functionality for Home Page
function toggleCard(card) {
    // Toggle active class for visual feedback
    card.classList.toggle('active');
    
    // Example of dynamic content update
    if (card.classList.contains('active')) {
        card.querySelector('p').textContent = 'More details...';
    } else {
        card.querySelector('p').textContent = 'Click to expand...';
    }
}

// Contact Form Validation
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simple email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // If validation passes
    alert('Form submitted successfully!');
    this.reset(); // Clear form fields
});

// Mobile Menu Toggle (Can be added later)
// Current implementation is responsive through CSS media queries