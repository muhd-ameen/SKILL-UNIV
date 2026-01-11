import { readFileSync } from "fs";
import { join } from "path";
import type { Program, InsertProgram, Enquiry, InsertEnquiry } from "@shared/schema";

// Load programs from JSON file
const programsPath = join(process.cwd(), "data", "programs.json");
let programsData: Program[] = [];

try {
  const fileContent = readFileSync(programsPath, "utf-8");
  programsData = JSON.parse(fileContent);
} catch (error) {
  console.error("Error loading programs.json:", error);
  programsData = [];
}

// In-memory storage for enquiries (logs to console in static mode)
const enquiriesStore: Enquiry[] = [];
let enquiryIdCounter = 1;

export interface IStorage {
  getPrograms(): Promise<Program[]>;
  getProgramBySlug(slug: string): Promise<Program | undefined>;
  createProgram(program: InsertProgram): Promise<Program>;
  createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry>;
}

export class JsonStorage implements IStorage {
  async getPrograms(): Promise<Program[]> {
    return programsData;
  }

  async getProgramBySlug(slug: string): Promise<Program | undefined> {
    return programsData.find((p) => p.slug === slug);
  }

  async createProgram(program: InsertProgram): Promise<Program> {
    const newProgram: Program = {
      ...program,
      id: programsData.length + 1,
      outcomes: program.outcomes || null,
    };
    programsData.push(newProgram);
    return newProgram;
  }

  async createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry> {
    const newEnquiry: Enquiry = {
      id: enquiryIdCounter++,
      name: enquiry.name,
      email: enquiry.email,
      phone: enquiry.phone || null,
      interest: enquiry.interest || null,
      message: enquiry.message || null,
      createdAt: new Date(),
    };
    
    // Log the enquiry (in production, you might want to send an email or store differently)
    console.log("📧 New Enquiry Received:", newEnquiry);
    enquiriesStore.push(newEnquiry);
    
    return newEnquiry;
  }
}

export const storage = new JsonStorage();
