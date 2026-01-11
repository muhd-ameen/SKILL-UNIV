import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, GraduationCap } from "lucide-react";
import { SEO } from "@/components/SEO";
import { usePrograms } from "@/hooks/use-programs";
import { ProgramCard } from "@/components/ProgramCard";
import { ProgramCardSkeleton } from "@/components/ProgramCardSkeleton";

export default function NotFound() {
  const { data: programs, isLoading } = usePrograms();
  
  // Get 3 random programs to suggest
  const suggestedPrograms = programs?.slice(0, 3) || [];

  return (
    <div className="min-h-screen w-full bg-background">
      <SEO 
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to Skill Univ homepage to explore our programs."
        noIndex={true}
      />
      
      {/* Hero Section */}
      <div className="flex items-center justify-center py-16 md:py-24">
        <div className="text-center px-4">
          <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="gap-2 rounded-full">
                <Home size={18} />
                Go Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 rounded-full"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={18} />
              Go Back
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/programs">
            <Button variant="ghost" className="gap-2">
              <Search size={16} />
              Search Programs
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost" className="gap-2">
              About Us
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" className="gap-2">
              Contact
            </Button>
          </Link>
        </div>
      </div>

      {/* Suggested Programs */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <GraduationCap size={24} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Explore Our Programs
          </h3>
          <p className="text-muted-foreground">
            While you're here, check out some of our popular courses
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((i) => (
              <ProgramCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {suggestedPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link href="/programs">
            <Button size="lg" variant="outline" className="rounded-full gap-2">
              View All Programs
              <ArrowLeft size={16} className="rotate-180" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
