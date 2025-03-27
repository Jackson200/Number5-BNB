import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import { z } from "zod";
import { contactSchema } from "@shared/schema";

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
      await transporter.sendMail(mailOptions);
      
      // Return success response
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error sending contact form:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to send message. Please try again later." });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
