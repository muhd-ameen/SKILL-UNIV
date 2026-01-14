import { z } from "zod";

// === TYPE DEFINITIONS ===
export interface Program {
  id: number;
  title: string;
  description: string;
  category: string;
  idealFor: string;
  format: string;
  duration?: string | null;
  guaranteedInternship?: boolean | null;
  outcomes: string[] | null;
  slug: string;
}

export interface Enquiry {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  interest: string | null;
  message: string | null;
  createdAt: Date | null;
}

// === SCHEMAS ===
export const insertProgramSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  idealFor: z.string().min(1, "Ideal for is required"),
  format: z.string().min(1, "Format is required"),
  duration: z.string().optional().nullable(),
  guaranteedInternship: z.boolean().optional().nullable(),
  outcomes: z.array(z.string()).optional(),
  slug: z.string().min(1, "Slug is required"),
});

export const insertEnquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().optional(),
});

// === TYPES ===
export type InsertProgram = z.infer<typeof insertProgramSchema>;
export type InsertEnquiry = z.infer<typeof insertEnquirySchema>;

// === API CONTRACT TYPES ===
export type ProgramResponse = Program;
export type EnquiryResponse = Enquiry;
