// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Configure email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Form submission route
app.post('/submit-form', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Server-side validation
        if (!name || !email || !message) {
            return res.status(400).send('All fields are required');
        }

        // Configure email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Portfolio Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        // Send email
        await transporter.sendMail(mailOptions);
        res.redirect('/contact.html?success=true');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending message');
    }
    
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});