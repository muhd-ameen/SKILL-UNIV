import { useQuery } from "@tanstack/react-query";
import type { ProgramResponse } from "@shared/schema";

// Use static JSON file for production (Netlify), API for development
const isProd = import.meta.env.PROD;
const PROGRAMS_URL = isProd ? "/data/programs.json" : "/api/programs";

export function usePrograms() {
  return useQuery<ProgramResponse[]>({
    queryKey: ["programs"],
    queryFn: async () => {
      const res = await fetch(PROGRAMS_URL);
      if (!res.ok) throw new Error("Failed to fetch programs");
      return res.json();
    },
  });
}

export function useProgram(slug: string) {
  return useQuery<ProgramResponse | null>({
    queryKey: ["program", slug],
    queryFn: async () => {
      // In production, fetch all programs and find by slug
      if (isProd) {
        const res = await fetch(PROGRAMS_URL);
        if (!res.ok) throw new Error("Failed to fetch programs");
        const programs: ProgramResponse[] = await res.json();
        return programs.find(p => p.slug === slug) || null;
      }
      
      // In development, use the API
      const res = await fetch(`/api/programs/${slug}`);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch program");
      return res.json();
    },
    enabled: !!slug,
  });
}
