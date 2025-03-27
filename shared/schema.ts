import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User model
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form schema
export const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Breakfast request schema
export const breakfastRequestSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  roomNumber: z.string().min(1, { message: "Please select a room" }),
  arrivalDate: z.string().min(1, { message: "Please provide your arrival date" }),
  dietaryRequirements: z.string().optional(),
  breakfastPreference: z.string().min(1, { message: "Please select at least one breakfast preference" }),
  additionalNotes: z.string().optional(),
});

export type BreakfastRequestData = z.infer<typeof breakfastRequestSchema>;

// Booking inquiry schema
export const bookingInquirySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(5, { message: "Please enter a valid phone number" }),
  checkIn: z.string().min(1, { message: "Please select a check-in date" }),
  checkOut: z.string().min(1, { message: "Please select a check-out date" }),
  guests: z.number().min(1).max(2),
  roomType: z.string().min(1, { message: "Please select a room type" }),
  specialRequests: z.string().optional(),
});

export type BookingInquiryData = z.infer<typeof bookingInquirySchema>;
