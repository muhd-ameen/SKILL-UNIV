import { db } from "./db";
import {
  programs,
  enquiries,
  type InsertProgram,
  type InsertEnquiry,
  type Program,
  type Enquiry
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getPrograms(): Promise<Program[]>;
  getProgramBySlug(slug: string): Promise<Program | undefined>;
  createProgram(program: InsertProgram): Promise<Program>;
  createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry>;
}

export class DatabaseStorage implements IStorage {
  async getPrograms(): Promise<Program[]> {
    return await db.select().from(programs);
  }

  async getProgramBySlug(slug: string): Promise<Program | undefined> {
    const [program] = await db.select().from(programs).where(eq(programs.slug, slug));
    return program;
  }

  async createProgram(program: InsertProgram): Promise<Program> {
    const [newProgram] = await db.insert(programs).values(program).returning();
    return newProgram;
  }

  async createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry> {
    const [newEnquiry] = await db.insert(enquiries).values(enquiry).returning();
    return newEnquiry;
  }
}

export const storage = new DatabaseStorage();
