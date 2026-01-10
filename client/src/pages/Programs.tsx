import { motion } from "framer-motion";
import { usePrograms } from "@/hooks/use-programs";
import { ProgramCard } from "@/components/ProgramCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function Programs() {
  const { data: programs, isLoading } = usePrograms();

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl text-white/70 max-w-2xl">
            Intensive, industry-aligned curriculums designed to take you from novice to professional.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 py-16">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex flex-col space-y-4">
                <Skeleton className="h-64 w-full rounded-2xl" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {programs?.map((program, idx) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <ProgramCard program={program} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
