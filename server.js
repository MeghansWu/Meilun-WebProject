const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to handle form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the project root folder
app.use(express.static(__dirname));

// Handle form submission
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  console.log('New form submission:', { name, email, message }); // Log form data to terminal
  res.redirect('/contact.html?success=true'); // Redirect back to contact page with success message
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
