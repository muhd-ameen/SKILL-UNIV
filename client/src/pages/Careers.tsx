import { Link } from "wouter";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Mail } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";

// Job listings data
export const jobs = [
  {
    id: 1,
    title: "Student Success Manager",
    slug: "student-success-manager",
    department: "Operations",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "1-3 years",
    description: "Help our students achieve their career goals by providing guidance, support, and ensuring an exceptional learning experience.",
    responsibilities: [
      "Onboard new students and guide them through their learning journey",
      "Monitor student progress and provide proactive support",
      "Conduct regular check-ins and gather feedback from students",
      "Coordinate with instructors to address student concerns",
      "Assist with placement support and career counseling"
    ],
    requirements: [
      "1-3 years of experience in customer success or student support",
      "Excellent communication and interpersonal skills",
      "Empathetic and patient with strong problem-solving abilities",
      "Proficiency in MS Office and basic computer skills",
      "Passion for education and helping others succeed"
    ],
    benefits: [
      "Competitive salary and incentives",
      "Health insurance for you and your family",
      "Flexible working hours",
      "Career growth opportunities",
      "Free access to all Skill Univ courses"
    ]
  },
  {
    id: 2,
    title: "Admissions Counselor",
    slug: "admissions-counselor",
    department: "Operations",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "1-2 years",
    description: "Be the first point of contact for aspiring learners and guide them in choosing the right program for their career goals.",
    responsibilities: [
      "Handle inbound inquiries via phone, email, and WhatsApp",
      "Understand student needs and recommend suitable programs",
      "Conduct counseling sessions and explain program benefits",
      "Follow up with prospective students and convert leads",
      "Maintain accurate records in CRM system"
    ],
    requirements: [
      "1-2 years of experience in sales, counseling, or customer service",
      "Excellent verbal and written communication in English and Hindi",
      "Strong convincing and negotiation skills",
      "Target-oriented mindset with a positive attitude",
      "Knowledge of education industry is a plus"
    ],
    benefits: [
      "Competitive salary with attractive incentives",
      "Health insurance coverage",
      "Performance bonuses",
      "Career advancement opportunities",
      "Free access to all Skill Univ courses"
    ]
  },
  {
    id: 3,
    title: "Operations Coordinator",
    slug: "operations-coordinator",
    department: "Operations",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "1-3 years",
    description: "Ensure smooth day-to-day operations and support various teams to deliver an exceptional experience for students and staff.",
    responsibilities: [
      "Coordinate class schedules and instructor availability",
      "Manage student documentation and enrollment processes",
      "Handle logistics for workshops, events, and webinars",
      "Maintain inventory of learning materials and resources",
      "Support HR and admin tasks as needed"
    ],
    requirements: [
      "1-3 years of experience in operations or administration",
      "Strong organizational and multitasking abilities",
      "Excellent attention to detail",
      "Proficiency in MS Office (Excel, Word, PowerPoint)",
      "Good communication and coordination skills"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance for you and your family",
      "Collaborative work environment",
      "Learning and growth opportunities",
      "Free access to all Skill Univ courses"
    ]
  },
  {
    id: 4,
    title: "Placement Coordinator",
    slug: "placement-coordinator",
    department: "Operations",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "2-4 years",
    description: "Bridge the gap between our students and employers by facilitating placement opportunities and career support.",
    responsibilities: [
      "Build and maintain relationships with hiring companies",
      "Organize placement drives and interview sessions",
      "Prepare students for interviews with mock sessions and guidance",
      "Track and report placement metrics and success rates",
      "Coordinate with academic team for industry-aligned curriculum"
    ],
    requirements: [
      "2-4 years of experience in placements, HR, or recruitment",
      "Strong networking and relationship-building skills",
      "Excellent communication and presentation abilities",
      "Understanding of job market trends and hiring practices",
      "Experience in education sector is preferred"
    ],
    benefits: [
      "Competitive salary with performance incentives",
      "Health insurance coverage",
      "Opportunity to impact student careers",
      "Professional development support",
      "Free access to all Skill Univ courses"
    ]
  },
  {
    id: 5,
    title: "Office Administrator",
    slug: "office-administrator",
    department: "Operations",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "0-2 years",
    description: "Keep our office running smoothly by managing administrative tasks and providing support to all teams.",
    responsibilities: [
      "Manage front desk operations and visitor management",
      "Handle phone calls, emails, and correspondence",
      "Maintain office supplies and coordinate with vendors",
      "Assist with document management and filing",
      "Support event coordination and meeting arrangements"
    ],
    requirements: [
      "0-2 years of experience in office administration",
      "Pleasant personality with professional demeanor",
      "Good communication skills in English and local language",
      "Basic computer skills and MS Office proficiency",
      "Organized and detail-oriented approach"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Friendly work environment",
      "Career growth path",
      "Free access to all Skill Univ courses"
    ]
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Careers"
        canonicalUrl="/careers"
        description="Join Skill Univ and help transform careers. Explore exciting opportunities in engineering, marketing, operations, and academics. Build the future of education with us."
        keywords="skill univ careers, jobs at skill univ, edtech jobs bangalore, education jobs india, skill univ hiring"
      />
      
      {/* Hero */}
      <div className="bg-[#252422] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Badge className="bg-primary text-primary-foreground mb-6">We're Hiring!</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white">
            Build the Future of Education
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8">
            Join our mission to bridge the gap between education and employment. 
            We're looking for passionate people who want to make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:shyamjith@theskilluniv.com"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              shyamjith@theskilluniv.com
            </a>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Open Positions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our current openings and find the perfect role for you
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/careers/${job.slug}`} onClick={() => window.scrollTo(0, 0)}>
                <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">{job.department}</Badge>
                        <Badge variant="outline" className="text-xs">{job.type}</Badge>
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <span className="text-sm font-medium">View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Don't see a perfect fit?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a 
              href="mailto:shyamjith@theskilluniv.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Send your Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
