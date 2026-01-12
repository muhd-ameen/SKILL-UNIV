import { Link } from "wouter";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Mail } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";

// Job listings data
export const jobs = [
  {
    id: 1,
    title: "Full Stack Developer",
    slug: "full-stack-developer",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "2-4 years",
    description: "We're looking for a passionate Full Stack Developer to join our engineering team and help build the future of skill-based education.",
    responsibilities: [
      "Develop and maintain web applications using React, Node.js, and modern frameworks",
      "Collaborate with design and product teams to implement new features",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and mentor junior developers",
      "Optimize applications for maximum speed and scalability"
    ],
    requirements: [
      "2-4 years of experience in full stack development",
      "Proficiency in React, TypeScript, Node.js, and SQL/NoSQL databases",
      "Experience with RESTful APIs and microservices architecture",
      "Strong problem-solving skills and attention to detail",
      "Excellent communication and teamwork abilities"
    ],
    benefits: [
      "Competitive salary and equity options",
      "Health insurance for you and your family",
      "Flexible working hours and remote work options",
      "Learning and development budget",
      "Free access to all Skill Univ courses"
    ]
  },
  {
    id: 2,
    title: "Digital Marketing Manager",
    slug: "digital-marketing-manager",
    department: "Marketing",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "3-5 years",
    description: "Join our marketing team to drive growth and build brand awareness for Skill Univ across digital channels.",
    responsibilities: [
      "Develop and execute digital marketing strategies across SEO, SEM, and social media",
      "Manage paid advertising campaigns and optimize for ROI",
      "Create compelling content for various marketing channels",
      "Analyze campaign performance and provide actionable insights",
      "Collaborate with sales team to generate qualified leads"
    ],
    requirements: [
      "3-5 years of experience in digital marketing",
      "Proven track record in SEO, Google Ads, and social media marketing",
      "Experience with marketing analytics tools (Google Analytics, etc.)",
      "Strong copywriting and content creation skills",
      "EdTech or education industry experience is a plus"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Health insurance for you and your family",
      "Flexible working hours and remote work options",
      "Learning and development budget",
      "Free access to all Skill Univ courses"
    ]
  },
  {
    id: 3,
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
      "Conduct regular check-ins and gather feedback",
      "Coordinate with instructors to address student concerns",
      "Assist with placement support and career counseling"
    ],
    requirements: [
      "1-3 years of experience in customer success or student support",
      "Excellent communication and interpersonal skills",
      "Empathetic and patient with strong problem-solving abilities",
      "Experience with CRM tools and data analysis",
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
    id: 4,
    title: "Content Writer",
    slug: "content-writer",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    experience: "1-2 years",
    description: "Create engaging content that educates, inspires, and converts our audience into learners.",
    responsibilities: [
      "Write blog posts, articles, and educational content",
      "Create copy for landing pages, emails, and social media",
      "Research industry trends and create relevant content",
      "Collaborate with SEO team to optimize content",
      "Edit and proofread content for quality and accuracy"
    ],
    requirements: [
      "1-2 years of content writing experience",
      "Excellent writing and editing skills in English",
      "Understanding of SEO best practices",
      "Ability to simplify complex topics",
      "Portfolio showcasing writing samples"
    ],
    benefits: [
      "Competitive salary",
      "Work from anywhere",
      "Flexible hours",
      "Learning opportunities",
      "Free access to all Skill Univ courses"
    ]
  },
  {
    id: 5,
    title: "Instructor - Data Analytics",
    slug: "instructor-data-analytics",
    department: "Academics",
    location: "Bangalore, India / Remote",
    type: "Part-time / Contract",
    experience: "5+ years",
    description: "Share your expertise and shape the next generation of data professionals as an instructor at Skill Univ.",
    responsibilities: [
      "Deliver engaging live sessions on data analytics topics",
      "Create and update course curriculum and materials",
      "Mentor students and provide feedback on assignments",
      "Stay updated with industry trends and best practices",
      "Participate in curriculum development meetings"
    ],
    requirements: [
      "5+ years of industry experience in data analytics",
      "Proficiency in SQL, Python, Excel, and BI tools",
      "Previous teaching or mentoring experience preferred",
      "Excellent communication and presentation skills",
      "Passion for education and knowledge sharing"
    ],
    benefits: [
      "Competitive hourly rate",
      "Flexible schedule",
      "Work from home options",
      "Be part of shaping future professionals",
      "Access to Skill Univ network and resources"
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
              href="mailto:career@skilluniv.in"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              career@skilluniv.in
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
              href="mailto:career@skilluniv.in"
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
