const express = require('express');
const router = express.Router();
const transporter = require('../config/emailConfig');

// POST: Send contact form email
router.post('/send', async (req, res) => {
  try {
    const { fullName, email, phone, company, subject, message } = req.body;

    // Validation
    if (!fullName || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: Full Name, Email, Subject, and Message'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Email to company (Shinde Foods)
    const companyMailOptions = {
      from: `"${fullName}" <${process.env.EMAIL_USER}>`,
      to: 'shreyash.padase@mitaoe.ac.in',
      replyTo: email,
      subject: `🔔 New Contact Form Submission: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #8B1B1F 0%, #A52A2A 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { background: #ffffff; padding: 30px; border: 2px solid #FBE5E5; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; padding: 15px; background: #FDF2F2; border-left: 4px solid #8B1B1F; border-radius: 5px; }
            .field-label { font-weight: bold; color: #8B1B1F; font-size: 14px; text-transform: uppercase; margin-bottom: 5px; }
            .field-value { color: #333; font-size: 16px; word-wrap: break-word; }
            .message-box { background: #FDF2F2; padding: 20px; border-radius: 8px; margin-top: 15px; border: 1px solid #FBE5E5; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            .badge { display: inline-block; padding: 5px 15px; background: #8B1B1F; color: white; border-radius: 20px; font-size: 12px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🍽️ Shinde Foods - New Contact Form</h1>
              <p style="margin: 5px 0 0 0; font-size: 14px;">Contact Form Submission</p>
            </div>
            <div class="content">
              <div style="text-align: center; margin-bottom: 25px;">
                <span class="badge">NEW INQUIRY</span>
              </div>
              
              <div class="field">
                <div class="field-label">👤 Full Name</div>
                <div class="field-value">${fullName}</div>
              </div>

              <div class="field">
                <div class="field-label">📧 Email Address</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #8B1B1F; text-decoration: none;">${email}</a></div>
              </div>

              ${phone ? `
              <div class="field">
                <div class="field-label">📱 Phone Number</div>
                <div class="field-value"><a href="tel:${phone}" style="color: #8B1B1F; text-decoration: none;">${phone}</a></div>
              </div>
              ` : ''}

              ${company ? `
              <div class="field">
                <div class="field-label">🏢 Company Name</div>
                <div class="field-value">${company}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="field-label">📋 Subject</div>
                <div class="field-value">${subject}</div>
              </div>

              <div class="field">
                <div class="field-label">💬 Message</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>

              <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #FDF2F2 0%, #FBE5E5 100%); border-radius: 8px; text-align: center;">
                <p style="margin: 0 0 15px 0; color: #8B1B1F; font-weight: bold;">Quick Actions</p>
                <a href="mailto:${email}" style="display: inline-block; padding: 12px 25px; background: linear-gradient(135deg, #8B1B1F 0%, #A52A2A 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 5px;">Reply via Email</a>
                ${phone ? `<a href="tel:${phone}" style="display: inline-block; padding: 12px 25px; background: linear-gradient(135deg, #6B1519 0%, #8B1B1F 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 5px;">Call Now</a>` : ''}
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Shinde Foods Contact Form</p>
              <p>📍 Pabal Futanwadi Road, Pabal, Shirur, Pune, Maharashtra - 412403</p>
              <p style="color: #8B1B1F; font-weight: bold;">Premium Quality Frozen Foods</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Auto-reply email to customer
    const customerMailOptions = {
      from: `"Shinde Foods" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '✅ Thank You for Contacting Shinde Foods',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #8B1B1F 0%, #A52A2A 100%); color: white; padding: 40px 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .header h1 { margin: 0; font-size: 28px; }
            .content { background: #ffffff; padding: 30px; border: 2px solid #FBE5E5; }
            .message-box { background: #FDF2F2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #8B1B1F; }
            .info-card { background: #FDF2F2; padding: 20px; border-radius: 8px; margin: 15px 0; }
            .footer { background: linear-gradient(135deg, #6B1519 0%, #8B1B1F 100%); color: white; padding: 30px; text-align: center; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; padding: 15px 30px; background: linear-gradient(135deg, #8B1B1F 0%, #A52A2A 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 10px 5px; }
            .highlight { color: #8B1B1F; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🍽️ Thank You, ${fullName}!</h1>
              <p style="margin: 10px 0 0 0; font-size: 16px;">We've received your message</p>
            </div>
            <div class="content">
              <p style="font-size: 16px; color: #333;">Dear <span class="highlight">${fullName}</span>,</p>
              
              <p style="font-size: 15px; line-height: 1.8;">
                Thank you for reaching out to <span class="highlight">Shinde Foods</span>! We appreciate your interest in our premium quality frozen food products.
              </p>

              <div class="message-box">
                <p style="margin: 0 0 10px 0; font-weight: bold; color: #8B1B1F;">📋 Your Message Summary:</p>
                <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
                <p style="margin: 5px 0;"><strong>Message:</strong> ${message.substring(0, 150)}${message.length > 150 ? '...' : ''}</p>
              </div>

              <p style="font-size: 15px; line-height: 1.8;">
                Our team will review your inquiry and get back to you within <span class="highlight">24 hours</span>. For urgent matters, feel free to reach out directly via email.
              </p>

              <div class="info-card">
                <h3 style="color: #8B1B1F; margin-top: 0;">📞 Contact Information</h3>
                <p style="margin: 8px 0;">📧 <strong>Email:</strong> info@shindefoods.com</p>
                <p style="margin: 8px 0;">📍 <strong>Address:</strong> Pabal Futanwadi Road, Pabal, Shirur, Pune, Maharashtra - 412403</p>
                <p style="margin: 8px 0;">🏢 <strong>Location:</strong> Pune, Maharashtra, India</p>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:info@shindefoods.com" class="button">📧 Email Us</a>
              </div>

              <div style="background: #FDF2F2; padding: 20px; border-radius: 8px; margin-top: 25px;">
                <h3 style="color: #8B1B1F; margin-top: 0;">🌟 Why Choose Shinde Foods?</h3>
                <ul style="line-height: 2; color: #333;">
                  <li>✓ Premium Quality Frozen Foods</li>
                  <li>✓ Export-Grade Standards</li>
                  <li>✓ Wide Product Range</li>
                  <li>✓ Reliable B2B Partner</li>
                </ul>
              </div>
            </div>
            <div class="footer">
              <h3 style="margin: 0 0 15px 0;">Shinde Foods</h3>
              <p style="margin: 5px 0; font-size: 14px;">Premium Quality Frozen Foods - Excellence in Every Bite</p>
              <p style="margin: 15px 0 5px 0; font-size: 12px; opacity: 0.9;">This is an automated response. Please do not reply to this email.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send both emails
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(customerMailOptions);

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully! We will get back to you within 24 hours.'
    });

  } catch (error) {
    console.error('❌ Email sending error:', error);
    console.error('Error details:', error.message);
    
    // Provide specific error messages
    let errorMessage = 'Failed to send email. Please try again later or contact us directly at info@shindefoods.com';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please contact the administrator.';
      console.error('\n⚠️  Gmail App Password needed! See EMAIL_SETUP_GUIDE.md\n');
    } else if (error.code === 'ETIMEDOUT' || error.code === 'ECONNECTION') {
      errorMessage = 'Connection timeout. Please check your internet connection and try again.';
    }
    
    res.status(500).json({
      success: false,
      message: errorMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;
