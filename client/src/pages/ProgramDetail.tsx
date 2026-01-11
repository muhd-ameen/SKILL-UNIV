import { useState } from "react";
import { useRoute, Link } from "wouter";
import { useProgram } from "@/hooks/use-programs";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Check, Clock, Calendar, Briefcase, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EnrollmentModal } from "@/components/EnrollmentModal";
import { SEO } from "@/components/SEO";

export default function ProgramDetail() {
  const [, params] = useRoute("/programs/:slug");
  const slug = params?.slug || "";
  const { data: program, isLoading, isError } = useProgram(slug);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-20 space-y-8">
        <Skeleton className="h-12 w-2/3" />
        <Skeleton className="h-64 w-full rounded-xl" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-40 w-full" />
        </div>
      </div>
    );
  }

  if (isError || !program) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Program not found</h1>
        <Link href="/programs">
          <Button>Back to Programs</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO 
        title={program.title}
        canonicalUrl={`/programs/${program.slug}`}
        description={program.description}
        keywords={`${program.title}, ${program.category}, ${program.idealFor}, skill training bangalore, professional course, career development`}
        ogType="article"
      />
      
      {/* Hero */}
      <div className="bg-[#252422] text-white pt-16 pb-24 md:pt-24 md:pb-32 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-2/3 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>
         <div className="container mx-auto px-4 relative z-10">
          <Link href="/programs">
            <Button variant="link" className="text-white/60 hover:text-white pl-0 mb-8 gap-2">
              <ArrowLeft size={16} /> Back to Programs
            </Button>
          </Link>
          <div className="flex flex-col lg:flex-row gap-8 justify-between items-center lg:items-start">
            <div className="max-w-3xl text-center lg:text-left">
              <Badge className="bg-primary text-secondary mb-6 hover:bg-primary">{program.category}</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white">{program.title}</h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">{program.description}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 min-w-[300px] w-full max-w-sm lg:w-auto">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="text-primary" />
                  <div>
                    <p className="text-xs text-white/60">Duration</p>
                    <p className="font-semibold">{program.format}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="text-primary" />
                  <div>
                    <p className="text-xs text-white/60">Ideal For</p>
                    <p className="font-semibold">{program.idealFor}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button 
                  onClick={() => setIsEnrollModalOpen(true)}
                  className="w-full bg-primary text-secondary hover:bg-primary/90 font-bold rounded-xl py-6 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 animate-pulse hover:animate-none"
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
         </div>
      </div>

      {/* Enrollment Modal */}
      <EnrollmentModal 
        open={isEnrollModalOpen} 
        onOpenChange={setIsEnrollModalOpen}
        programName={program.title}
      />

      {/* Content */}
      <div className="container mx-auto px-4 -mt-16 md:-mt-20 relative z-20 mb-12 md:mb-20">
        <div className="bg-card rounded-2xl md:rounded-3xl shadow-xl border border-border p-6 md:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-foreground">What You Will Learn</h2>
              <div className="space-y-4">
                {program.outcomes?.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full text-green-700 dark:text-green-400 mt-1">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <p className="font-medium text-foreground">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-foreground">Program Structure</h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                <p>
                  This comprehensive program is designed to give you practical, hands-on experience. 
                  Unlike traditional education, we focus on project-based learning.
                </p>
                <ul className="list-none space-y-4 mt-6 pl-0">
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">01.</span>
                    <span>Foundations and Core Concepts</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">02.</span>
                    <span>Advanced Techniques & Best Practices</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">03.</span>
                    <span>Real-world Capstone Projects</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">04.</span>
                    <span>Career Prep & Interview Coaching</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
