import { z } from "zod";

const optional = (max: number) => z.string().trim().max(max).optional().or(z.literal(""));

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.email("Please enter a valid email").max(200),
  phone: optional(30),
  company: optional(120),
  inquiry: optional(60),
  message: z.string().trim().min(10, "Tell us a little more (10+ characters)").max(5000),
  // Honeypot: real users never fill this hidden field.
  website: z.string().max(0).optional().or(z.literal("")),
});

export const applicationSchema = z.object({
  role: z.string().trim().min(2, "Please choose a role").max(120),
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.email("Please enter a valid email").max(200),
  phone: z.string().trim().min(7, "Please enter your phone number").max(30),
  linkedin: optional(300),
  message: optional(3000),
  website: z.string().max(0).optional().or(z.literal("")),
});

export const RESUME_MAX_BYTES = 5 * 1024 * 1024;
export const RESUME_EXTENSIONS = [".pdf", ".doc", ".docx"];
