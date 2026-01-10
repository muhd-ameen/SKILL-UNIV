import { motion } from "framer-motion";
import { Target, Lightbulb, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-secondary text-white py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Reinventing Education for the Modern Era</h1>
          <p className="text-xl text-white/70">
            We exist to close the skills gap and empower individuals to build meaningful careers in technology.
          </p>
        </div>
      </div>

      {/* Mission Vision */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6">
              <Target size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
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
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6">
              <Lightbulb size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
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
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6">
              <Heart size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground">
              We believe in practical skills over theory, mentorship over lectures, and community over competition.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Image Section */}
      <div className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Not EdTech. EmployTech.</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Most education platforms focus on content consumption. We focus on capability building.
                </p>
                <p>
                  Skill Univ was founded by industry veterans who saw a disconnect between what universities teach and what companies need. We decided to fix it.
                </p>
              </div>
             </div>
             <div className="rounded-3xl overflow-hidden shadow-2xl">
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
    </div>
  );
}
