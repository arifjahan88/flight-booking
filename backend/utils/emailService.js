const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL_USER,
    pass: process.env.NODEMAILER_EMAIL_PASSWORD,
  },
});

const generateBookingEmailTemplate = (booking, flight, user) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: #003366;
          color: white;
          padding: 20px;
          text-align: center;
        }
        .booking-details {
          background-color: #f9f9f9;
          padding: 20px;
          margin: 20px 0;
          border-radius: 5px;
        }
        .footer {
          text-align: center;
          padding: 20px;
          background-color: #f5f5f5;
        }
        .button {
          background-color: #4CAF50;
          color: white;
          padding: 12px 20px;
          text-decoration: none;
          border-radius: 5px;
          display: inline-block;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Booking Confirmation</h1>
        </div>
        
        <div class="booking-details">
          <h2>Dear ${user?.fullname},</h2>
          <p>Thank you for booking with us! Your flight has been successfully confirmed.</p>
          
          <h3>Booking Details:</h3>
          <p>Booking ID: ${booking?._id}</p>
          <p>Flight Name: ${flight?.flightname}</p>
          <p>Number of Seats: ${booking?.seats}</p>
          <p>From: ${flight?.from}</p>
          <p>To: ${flight?.to}</p>
          <p>Date: ${new Date(flight?.date).toLocaleDateString()}</p>
        </div>
        
        <div class="footer">
          <p>If you have any questions, please don't hesitate to contact us.</p>
          <p>Thank you for choosing our services!</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Function to send booking confirmation email
const sendBookingConfirmationEmail = async (booking, flight, user) => {
  try {
    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL_USER,
      to: booking.email,
      subject: "Flight Booking Confirmation",
      html: generateBookingEmailTemplate(booking, flight, user),
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = { sendBookingConfirmationEmail };
