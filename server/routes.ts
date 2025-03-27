import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import { z } from "zod";
import { contactSchema, breakfastRequestSchema, bookingInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactSchema.parse(req.body);
      
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
        from: `"Number 5 Website" <${process.env.SMTP_USER || "number5atlanticview@gmail.com"}>`,
        to: "Number5AtlanticView@gmail.com",
        subject: `New ${validatedData.subject} Inquiry from ${validatedData.name}`,
        text: `
          Name: ${validatedData.name}
          Email: ${validatedData.email}
          Subject: ${validatedData.subject}
          
          Message:
          ${validatedData.message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        `,
        replyTo: validatedData.email,
      };
      
      // Send the email
      console.log("Attempting to send email with nodemailer...");
      try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.messageId);
        
        // Return success response
        res.status(200).json({ message: "Message sent successfully", messageId: info.messageId });
      } catch (emailError) {
        console.error("Nodemailer error:", emailError);
        throw emailError;
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ 
          message: "Failed to send message. Please try again later.",
          error: error instanceof Error ? error.message : String(error)
        });
      }
    }
  });

  // Breakfast request form submission endpoint
  app.post("/api/breakfast-request", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = breakfastRequestSchema.parse(req.body);
      
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
        from: `"Number 5 Website" <${process.env.SMTP_USER || "number5atlanticview@gmail.com"}>`,
        to: "Number5AtlanticView@gmail.com",
        subject: `Breakfast Request from ${validatedData.name}`,
        text: `
          Name: ${validatedData.name}
          Email: ${validatedData.email}
          Room: ${validatedData.roomNumber}
          Arrival Date: ${validatedData.arrivalDate}
          Dietary Requirements: ${validatedData.dietaryRequirements || 'None specified'}
          Breakfast Preference: ${validatedData.breakfastPreference}
          Additional Notes: ${validatedData.additionalNotes || 'None provided'}
        `,
        html: `
          <h2>New Breakfast Request</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Room:</strong> ${validatedData.roomNumber}</p>
          <p><strong>Arrival Date:</strong> ${validatedData.arrivalDate}</p>
          <p><strong>Dietary Requirements:</strong> ${validatedData.dietaryRequirements || 'None specified'}</p>
          <p><strong>Breakfast Preference:</strong> ${validatedData.breakfastPreference}</p>
          <p><strong>Additional Notes:</strong> ${(validatedData.additionalNotes || 'None provided').replace(/\n/g, '<br>')}</p>
        `,
        replyTo: validatedData.email,
      };
      
      // Send the email
      console.log("Attempting to send breakfast request email with nodemailer...");
      try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Breakfast request email sent successfully:", info.messageId);
        
        // Return success response
        res.status(200).json({ message: "Breakfast request sent successfully", messageId: info.messageId });
      } catch (emailError) {
        console.error("Nodemailer error:", emailError);
        throw emailError;
      }
    } catch (error) {
      console.error("Error sending breakfast request:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ 
          message: "Failed to send request. Please try again later.",
          error: error instanceof Error ? error.message : String(error)
        });
      }
    }
  });

  // Booking inquiry form submission endpoint
  app.post("/api/booking-inquiry", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = bookingInquirySchema.parse(req.body);
      
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
        from: `"Number 5 Website" <${process.env.SMTP_USER || "number5atlanticview@gmail.com"}>`,
        to: "Number5AtlanticView@gmail.com",
        subject: `Booking Inquiry from ${validatedData.name}`,
        text: `
          Name: ${validatedData.name}
          Email: ${validatedData.email}
          Phone: ${validatedData.phone}
          Check-in: ${validatedData.checkIn}
          Check-out: ${validatedData.checkOut}
          Guests: ${validatedData.guests}
          Room Type: ${validatedData.roomType}
          Special Requests: ${validatedData.specialRequests || 'None specified'}
        `,
        html: `
          <h2>New Booking Inquiry</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone}</p>
          <p><strong>Check-in:</strong> ${validatedData.checkIn}</p>
          <p><strong>Check-out:</strong> ${validatedData.checkOut}</p>
          <p><strong>Guests:</strong> ${validatedData.guests}</p>
          <p><strong>Room Type:</strong> ${validatedData.roomType}</p>
          <p><strong>Special Requests:</strong> ${(validatedData.specialRequests || 'None specified').replace(/\n/g, '<br>')}</p>
        `,
        replyTo: validatedData.email,
      };
      
      // Send the email
      console.log("Attempting to send booking inquiry email with nodemailer...");
      try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Booking inquiry email sent successfully:", info.messageId);
        
        // Return success response
        res.status(200).json({ message: "Booking inquiry sent successfully", messageId: info.messageId });
      } catch (emailError) {
        console.error("Nodemailer error:", emailError);
        throw emailError;
      }
    } catch (error) {
      console.error("Error sending booking inquiry:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ 
          message: "Failed to send inquiry. Please try again later.",
          error: error instanceof Error ? error.message : String(error)
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
