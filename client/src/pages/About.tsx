import { motion } from "framer-motion";
import { Target, Lightbulb, Heart } from "lucide-react";
import { SEO } from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes Skill Univ different from other training institutes?",
    answer: "We focus on employability, not just education. Our curriculum is designed with input from hiring managers at top companies, ensuring you learn skills that are actually in demand. Plus, we provide dedicated placement support and career coaching."
  },
  {
    question: "Do I need prior experience to enroll in your programs?",
    answer: "No prior experience is required for most of our programs. We have courses designed for complete beginners as well as advanced programs for professionals looking to upskill. Our advisors can help you choose the right program based on your background."
  },
  {
    question: "What is the duration of your programs?",
    answer: "Program durations vary from 4 weeks to 6 months depending on the course. Most of our comprehensive programs are 3-4 months long, with flexible weekend and evening batches available for working professionals."
  },
  {
    question: "Do you provide placement assistance?",
    answer: "Yes! We have a dedicated placement cell that works with 50+ hiring partners. We provide resume building, interview preparation, mock interviews, and direct referrals to companies. Our placement rate is over 92%."
  },
  {
    question: "What are the payment options available?",
    answer: "We offer flexible payment options including one-time payment, EMI plans (0% interest for select programs), and income share agreements for eligible candidates. Contact our advisors for detailed pricing."
  },
  {
    question: "Is the training online or offline?",
    answer: "We offer both online and offline (Bangalore campus) options. Our online programs include live sessions, not just recorded videos. You get the same interactive experience and mentor support regardless of the mode you choose."
  },
  {
    question: "Will I get a certificate after completing the program?",
    answer: "Yes, upon successful completion of the program and projects, you will receive an industry-recognized certificate from Skill Univ. Many of our programs also include additional certifications from technology partners."
  },
  {
    question: "How do I get started?",
    answer: "Simply click on 'Talk to an Advisor' or fill out the enquiry form. Our counselors will understand your goals, recommend the right program, and guide you through the enrollment process. You can also attend a free demo session before deciding."
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="About Us"
        canonicalUrl="/about"
        description="Learn about Skill Univ's mission to bridge the gap between education and employment. We're not EdTech, we're EmployTech. Industry veterans focused on practical skills and career outcomes."
        keywords="about skill univ, skill university bangalore, education mission, employtech, career training institute, skill development organization india"
      />
      
      {/* Hero */}
      <div className="bg-[#252422] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 text-white">Reinventing Education for the Modern Era</h1>
          <p className="text-lg md:text-xl text-white/70">
            We exist to close the skills gap and empower individuals to build meaningful careers in technology.
          </p>
        </div>
      </div>

      {/* Mission Vision */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
              <Target size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
            <p className="text-muted-foreground">
              To provide accessible, high-quality, and industry-relevant education that leads to tangible career outcomes.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
              <Lightbulb size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h2>
            <p className="text-muted-foreground">
              A world where anyone with the drive to learn has the opportunity to succeed in the digital economy.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
              <Heart size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Our Values</h2>
            <p className="text-muted-foreground">
              We believe in practical skills over theory, mentorship over lectures, and community over competition.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Image Section */}
      <div className="bg-muted/30 dark:bg-muted/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
             <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-foreground">Not EdTech. EmployTech.</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Most education platforms focus on content consumption. We focus on capability building.
                </p>
                <p>
                  Skill Univ was founded by industry veterans who saw a disconnect between what universities teach and what companies need. We decided to fix it.
                </p>
              </div>
             </div>
             <div className="rounded-3xl overflow-hidden shadow-2xl order-1 md:order-2">
               {/* Office working environment */}
               <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaborating" 
                className="w-full h-auto"
              />
             </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Got questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
