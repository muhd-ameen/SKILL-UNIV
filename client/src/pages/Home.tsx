import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import heroImage from '@assets/generated_images/modern_abstract_illustration_of_career_growth_and_employability.png';
import { ArrowRight, CheckCircle2, TrendingUp, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePrograms } from "@/hooks/use-programs";
import { ProgramCard } from "@/components/ProgramCard";
import { Skeleton } from "@/components/ui/skeleton";
import { ContactOptionsModal } from "@/components/ContactOptionsModal";
import { SEO } from "@/components/SEO";

export default function Home() {
  const { data: programs, isLoading } = usePrograms();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const features = [
    {
      icon: TrendingUp,
      title: "Industry-Relevant Skills",
      description: "Curriculum designed with top tech companies to ensure employability."
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "Learn directly from senior engineers and product leaders."
    },
    {
      icon: ShieldCheck,
      title: "Placement Support",
      description: "Dedicated career services to help you land your dream job."
    }
  ];

  return (
    <div className="w-full">
      <SEO 
        canonicalUrl="/"
        description="Transform your career with Skill Univ's industry-aligned programs. Not EdTech, EmployTech. Master Full Stack Development, Digital Marketing, Data Analytics & more. 92% hiring rate. Based in Bangalore."
        keywords="skill training bangalore, career development india, full stack development course, digital marketing training, data analytics bootcamp, professional courses bangalore, employability skills, job-ready training, tech education india, placement guarantee courses"
      />
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/20 -skew-x-12 translate-x-20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-foreground font-medium text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Accepting new cohort applications
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
                Not EdTech. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">EmployTech.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Skills that keep you hired. We don't just teach you how to code; we teach you how to build, ship, and thrive in the modern tech ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/programs">
                  <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                    Explore Programs
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 rounded-full border-2 bg-transparent hover:bg-muted"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Talk to an Advisor
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Abstract Illustration Placeholder */}
              <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-[#252422] to-[#252422]/80 p-1 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                <div 
                  className="h-full w-full bg-background rounded-[1.8rem] overflow-hidden relative flex items-center justify-center bg-cover bg-center"
                  style={{ backgroundImage: `url(${heroImage})` }}
                >
                  <div className="absolute inset-0 bg-[#252422]/10"></div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 left-0 sm:-bottom-6 sm:-left-6 bg-card p-3 sm:p-4 rounded-xl shadow-xl border border-border max-w-[200px] sm:max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600 dark:text-green-400">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-bold text-foreground">92% Hiring Rate</span>
                </div>
                <p className="text-xs text-muted-foreground">Our graduates consistently land roles at top tier tech companies.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Skill Univ?</h2>
            <p className="text-muted-foreground text-lg">
              We bridge the gap between academic theory and industry reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 md:py-24 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
              <p className="text-muted-foreground text-lg">Designed for the modern workforce.</p>
            </div>
            <Link href="/programs">
              <Button variant="ghost" className="gap-2 hidden md:flex group">
                View All Programs <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 rounded-2xl bg-muted animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs?.slice(0, 3).map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          )}
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/programs">
              <Button variant="outline" className="w-full rounded-full">View All Programs</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#252422] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to upgrade your career?</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Join thousands of students who have transformed their careers with Skill Univ.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90 rounded-full px-10 py-6 text-lg font-bold">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Options Modal */}
      <ContactOptionsModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen} 
      />
    </div>
  );
}
