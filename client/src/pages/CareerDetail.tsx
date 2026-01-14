import { useRoute, Link } from "wouter";
import { MapPin, Clock, Briefcase, ChevronRight, Home, Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { jobs } from "./Careers";

export default function CareerDetail() {
  const [, params] = useRoute("/careers/:slug");
  const slug = params?.slug || "";
  
  const job = jobs.find(j => j.slug === slug);

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4 text-foreground">Position not found</h1>
        <Link href="/careers">
          <Button>Back to Careers</Button>
        </Link>
      </div>
    );
  }

  const whatsappNumber = "919626664792";
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the "${job.title}" position at Skill Univ. I would like to know more about this opportunity.`
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${job.title} - Careers`}
        canonicalUrl={`/careers/${job.slug}`}
        description={job.description}
        keywords={`${job.title}, ${job.department} jobs, skill univ careers, ${job.location} jobs`}
      />
      
      {/* Hero */}
      <div className="bg-[#252422] text-white pt-16 pb-24 md:pt-24 md:pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" onClick={() => window.scrollTo(0, 0)}>
              <span className="flex items-center gap-1 text-white/60 hover:text-white transition-colors cursor-pointer">
                <Home size={14} />
                <span className="hidden sm:inline">Home</span>
              </span>
            </Link>
            <ChevronRight size={14} className="text-white/40" />
            <Link href="/careers" onClick={() => window.scrollTo(0, 0)}>
              <span className="text-white/60 hover:text-white transition-colors cursor-pointer">Careers</span>
            </Link>
            <ChevronRight size={14} className="text-white/40" />
            <span className="text-white font-medium truncate max-w-[200px] sm:max-w-none">{job.title}</span>
          </nav>
          
          <div className="flex flex-col lg:flex-row gap-8 justify-between items-start">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-primary text-primary-foreground">{job.department}</Badge>
                <Badge variant="outline" className="border-white/30 text-white">{job.type}</Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">{job.title}</h1>
              <p className="text-lg text-white/80 leading-relaxed mb-6">{job.description}</p>
              
              <div className="flex flex-wrap gap-6 text-white/70">
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  {job.location}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  {job.experience}
                </span>
                <span className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  {job.type}
                </span>
              </div>
            </div>
            
            {/* Apply Card */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 w-full lg:w-auto lg:min-w-[320px]">
              <h3 className="text-lg font-bold text-white mb-4">Interested in this role?</h3>
              <div className="space-y-3">
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold rounded-xl py-4 hover:bg-primary/90 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Apply via WhatsApp
                </a>
                <a 
                  href={`mailto:shyamjith@theskilluniv.com?subject=Application for ${job.title}&body=Hi,%0D%0A%0D%0AI am interested in the ${job.title} position.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0AThank you.`}
                  className="w-full flex items-center justify-center gap-2 bg-white/10 text-white font-bold rounded-xl py-4 hover:bg-white/20 transition-colors border border-white/20"
                >
                  <Mail className="w-5 h-5" />
                  Apply via Email
                </a>
              </div>
              <p className="text-white/50 text-sm mt-4 text-center">
                shyamjith@theskilluniv.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-16 md:-mt-20 relative z-20 mb-12 md:mb-20">
        <div className="bg-card rounded-2xl md:rounded-3xl shadow-xl border border-border p-6 md:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            {/* Responsibilities */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-foreground">Responsibilities</h2>
              <div className="space-y-4">
                {job.responsibilities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="bg-primary/20 p-1 rounded-full text-primary mt-1">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-foreground">Requirements</h2>
              <div className="space-y-4">
                {job.requirements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="bg-primary/20 p-1 rounded-full text-primary mt-1">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-12 md:mt-16 pt-8 border-t border-border">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-foreground">What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {job.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-primary/10">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 md:mt-16 pt-8 border-t border-border text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Ready to join us?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="rounded-full px-8 gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Apply via WhatsApp
                </Button>
              </a>
              <a href="mailto:shyamjith@theskilluniv.com">
                <Button size="lg" variant="outline" className="rounded-full px-8 gap-2">
                  <Mail className="w-5 h-5" />
                  shyamjith@theskilluniv.com
                </Button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
