const nodemailer = require('nodemailer');
require('dotenv').config();

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASSWORD // Your Gmail App Password (not regular password)
  },
  tls: {
    rejectUnauthorized: false
  },
  debug: true, // Enable debug output
  logger: true // Log to console
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email transporter error:', error);
    console.log('\n⚠️  SETUP REQUIRED:');
    console.log('1. Go to: https://myaccount.google.com/apppasswords');
    console.log('2. Generate an App Password for "Mail"');
    console.log('3. Update EMAIL_PASSWORD in .env file');
    console.log('4. Restart the server\n');
  } else {
    console.log('✅ Email server is ready to send messages');
    console.log(`📧 Configured email: ${process.env.EMAIL_USER}`);
  }
});

module.exports = transporter;
