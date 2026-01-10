import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.programs.list.path, async (req, res) => {
    const programs = await storage.getPrograms();
    res.json(programs);
  });

  app.get(api.programs.get.path, async (req, res) => {
    const program = await storage.getProgramBySlug(req.params.slug);
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }
    res.json(program);
  });

  app.post(api.enquiries.create.path, async (req, res) => {
    try {
      const input = api.enquiries.create.input.parse(req.body);
      const enquiry = await storage.createEnquiry(input);
      res.status(201).json(enquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed data function
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existing = await storage.getPrograms();
  if (existing.length === 0) {
    const seedPrograms = [
      {
        title: "Foundational Career Program",
        description: "A comprehensive start for fresh graduates looking to enter the workforce with confidence.",
        category: "Foundational",
        idealFor: "Students & Graduates",
        format: "Hybrid",
        outcomes: ["Communication Mastery", "Corporate Etiquette", "Resume Building"],
        slug: "foundational-career-program"
      },
      {
        title: "Full Stack Developer Pathway",
        description: "Master the MERN stack and build real-world applications from day one.",
        category: "Role-Based Skill Programs",
        idealFor: "Career Switchers",
        format: "Online",
        outcomes: ["React & Node.js Proficiency", "Database Design", "API Development"],
        slug: "full-stack-developer"
      },
      {
        title: "Digital Marketing Specialist",
        description: "Learn to lead, sell, and communicate through digital channels.",
        category: "Role-Based Skill Programs",
        idealFor: "Marketing Professionals",
        format: "Online",
        outcomes: ["SEO/SEM", "Social Media Strategy", "Analytics"],
        slug: "digital-marketing-specialist"
      },
      {
        title: "Leadership & Management",
        description: "Upskill for the next level of your career with practical leadership training.",
        category: "Professional Upskilling",
        idealFor: "Managers",
        format: "In-person",
        outcomes: ["Team Management", "Strategic Thinking", "Conflict Resolution"],
        slug: "leadership-management"
      }
    ];

    for (const p of seedPrograms) {
      await storage.createProgram(p);
    }
  }
}
