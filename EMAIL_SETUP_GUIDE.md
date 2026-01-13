# Email Setup Guide for Shinde Foods Contact Form

## Gmail App Password Setup

Since you're using Gmail (`shreyash.padase@gmail.com`), you need to generate an **App Password** instead of using your regular Gmail password.

### Steps to Generate Gmail App Password:

1. **Enable 2-Step Verification** (if not already enabled):
   - Go to: https://myaccount.google.com/security
   - Click on "2-Step Verification"
   - Follow the steps to enable it

2. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Or navigate: Google Account → Security → 2-Step Verification → App passwords
   - Select "Mail" as the app
   - Select "Other (Custom name)" as the device
   - Enter: "Shinde Foods Contact Form"
   - Click "Generate"
   - **Copy the 16-character password** (e.g., `abcd efgh ijkl mnop`)

3. **Update .env file**:
   ```env
   EMAIL_USER=shreyash.padase@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password-here
   ```
   Replace `your-16-char-app-password-here` with the app password (remove spaces)

4. **Restart the backend server**:
   ```bash
   cd backend
   npm run dev
   ```

## Alternative: Use Different Email Service

If you don't want to use Gmail, you can use other services:

### Outlook/Hotmail:
```env
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

Update `backend/config/emailConfig.js`:
```javascript
service: 'outlook'
```

### Yahoo:
```env
EMAIL_USER=your-email@yahoo.com
EMAIL_PASSWORD=your-app-password
```

Update `backend/config/emailConfig.js`:
```javascript
service: 'yahoo'
```

### Custom SMTP (e.g., GoDaddy, Bluehost):
Update `backend/config/emailConfig.js`:
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.your-domain.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});
```

## Testing the Setup

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```

3. Go to the Contact Us page and submit a test form

4. Check the terminal output for any errors

## Email Flow

When a user submits the contact form:

1. **Email to Company** (shreyash.padase@mitaoe.ac.in):
   - Beautiful HTML formatted email with all form details
   - Subject: "🔔 New Contact Form Submission: [Subject]"
   - Includes: Name, Email, Phone, Company, Subject, Message
   - Quick action buttons to reply or call

2. **Auto-Reply to Customer**:
   - Confirmation email sent to the customer's email
   - Subject: "✅ Thank You for Contacting Shinde Foods"
   - Professional branded email with company details
   - Reassures customer that they'll get a response within 24 hours

## Troubleshooting

### Error: "Invalid login"
- Generate Gmail App Password (see steps above)
- Make sure 2-Step Verification is enabled
- Use the app password, not your regular Gmail password

### Error: "Connection timeout"
- Check your internet connection
- Some networks block SMTP ports
- Try using port 465 (secure) or 587 (TLS)

### Error: "self signed certificate"
- Already handled in code with `rejectUnauthorized: false`
- This is safe for development

### Email not received:
- Check spam/junk folder
- Verify the email address in .env is correct
- Check backend terminal for any error messages
- Verify nodemailer is installed: `npm list nodemailer`

## Security Notes

- **Never commit .env file to Git** (already in .gitignore)
- Use environment variables in production
- Rotate app passwords periodically
- For production, consider using dedicated email service like SendGrid, AWS SES, or Mailgun

## Current Configuration

```
From: shreyash.padase@gmail.com (Shinde Foods sender email)
To: shreyash.padase@mitaoe.ac.in (Company inbox - receives all contact form submissions)
Reply-To: Customer's email (so you can directly reply to customers)
```

## Files Created/Modified

1. `backend/config/emailConfig.js` - Email configuration with Nodemailer
2. `backend/routes/contact.js` - API endpoint for sending emails
3. `backend/server.js` - Added contact route
4. `backend/.env` - Email credentials
5. `frontend/src/Components/Page/ContactUs.jsx` - Form with validation and submission

## Next Steps

1. ✅ Install nodemailer (Done)
2. ⏳ Generate Gmail App Password
3. ⏳ Update .env with app password
4. ⏳ Restart backend server
5. ⏳ Test the contact form
