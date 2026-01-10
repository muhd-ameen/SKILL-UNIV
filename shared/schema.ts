import { pgTable, text, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const programs = pgTable("programs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  idealFor: text("ideal_for").notNull(),
  format: text("format").notNull(),
  outcomes: text("outcomes").array(),
  slug: text("slug").notNull().unique(),
});

export const enquiries = pgTable("enquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  interest: text("interest"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

// === SCHEMAS ===
export const insertProgramSchema = createInsertSchema(programs).omit({ id: true });
export const insertEnquirySchema = createInsertSchema(enquiries).omit({ id: true, createdAt: true });

// === TYPES ===
export type Program = typeof programs.$inferSelect;
export type InsertProgram = z.infer<typeof insertProgramSchema>;
export type Enquiry = typeof enquiries.$inferSelect;
export type InsertEnquiry = z.infer<typeof insertEnquirySchema>;

// === API CONTRACT TYPES ===
export type ProgramResponse = Program;
export type EnquiryResponse = Enquiry;
