import nodemailer from 'nodemailer';

// This file is for testing email functionality only

async function testEmailService() {
  console.log("Testing email functionality...");
  console.log("SMTP_PASS environment variable exists:", !!process.env.SMTP_PASS);
  
  try {
    // Set up email transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER || "number5atlanticview@gmail.com",
        pass: process.env.SMTP_PASS || "",
      },
    });
    
    // Email content
    const mailOptions = {
      from: `"Number 5 Website Test" <${process.env.SMTP_USER || "number5atlanticview@gmail.com"}>`,
      to: "Number5AtlanticView@gmail.com",
      subject: `Test Email from Number 5 Website`,
      text: `
        This is a test email from the Number 5 website to verify that email sending is working correctly.
        
        Timestamp: ${new Date().toISOString()}
      `,
      html: `
        <h2>Email Test</h2>
        <p>This is a test email from the Number 5 website to verify that email sending is working correctly.</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `,
    };
    
    console.log("Attempting to send test email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Test email sent successfully:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending test email:", error);
    return false;
  }
}

// Run the test
testEmailService()
  .then(success => {
    console.log("Email test completed. Success:", success);
    process.exit(success ? 0 : 1);
  })
  .catch(err => {
    console.error("Unexpected error during email test:", err);
    process.exit(1);
  });