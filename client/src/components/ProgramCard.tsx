import { Link } from "wouter";
import { ArrowRight, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ProgramResponse } from "@shared/schema";

export function ProgramCard({ program }: { program: ProgramResponse }) {
  return (
    <div className="group bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <Badge variant="secondary" className="bg-primary/80 text-primary-foreground font-medium">
          {program.category}
        </Badge>
        <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <ArrowRight className="h-4 w-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {program.title}
      </h3>
      
      <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
        {program.description}
      </p>
      
      <div className="space-y-3 mb-6 pt-4 border-t border-border/50">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4 text-primary" />
          <span>{program.format}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <User className="w-4 h-4 text-primary" />
          <span>{program.idealFor}</span>
        </div>
      </div>

      <Link href={`/programs/${program.slug}`}>
        <button className="w-full py-3 rounded-xl border-2 border-primary bg-transparent text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
          View Program Details
        </button>
      </Link>
    </div>
  );
}
