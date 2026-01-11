import { useState, useMemo, useEffect } from "react";
import { useSearch, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { usePrograms } from "@/hooks/use-programs";
import { ProgramCard } from "@/components/ProgramCard";
import { ProgramCardSkeleton } from "@/components/ProgramCardSkeleton";
import { SEO } from "@/components/SEO";

export default function Programs() {
  const { data: programs, isLoading } = usePrograms();
  const searchString = useSearch();
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Read category from URL on mount and when URL changes
  useEffect(() => {
    const params = new URLSearchParams(searchString);
    const categoryFromUrl = params.get("category");
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    } else {
      setSelectedCategory("All");
    }
  }, [searchString]);

  // Update URL when category changes (but not on initial load from URL)
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setLocation("/programs");
    } else {
      setLocation(`/programs?category=${encodeURIComponent(category)}`);
    }
  };

  // Extract unique categories from programs
  const categories = useMemo(() => {
    if (!programs) return ["All"];
    const uniqueCategories = [...new Set(programs.map((p) => p.category))];
    return ["All", ...uniqueCategories];
  }, [programs]);

  // Filter programs based on selected category and search query
  const filteredPrograms = useMemo(() => {
    if (!programs) return [];
    
    let filtered = programs;
    
    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((p) => 
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.idealFor.toLowerCase().includes(query) ||
        p.outcomes?.some(o => o.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  }, [programs, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Programs & Courses"
        canonicalUrl="/programs"
        description="Explore Skill Univ's comprehensive programs: Full Stack Development, Digital Marketing, Data Analytics, Accounting, HR, Language Training & more. Industry-aligned curriculum with placement support."
        keywords="professional courses bangalore, full stack developer course, digital marketing course, data analytics training, accounting course, HR training, language courses, skill development programs, career courses india"
      />
      
      {/* Header */}
      <div className="bg-[#252422] text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white">Our Programs</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-6 md:mb-8">
            Intensive, industry-aligned curriculums designed to take you from novice to professional.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search programs by name, skills, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 rounded-xl bg-white dark:bg-card text-foreground placeholder:text-muted-foreground border-0 focus:outline-none focus:ring-2 focus:ring-primary text-base"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-3 justify-start md:justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ProgramCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <>
            <p className="text-muted-foreground mb-6">
              Showing {filteredPrograms.length} program{filteredPrograms.length !== 1 ? "s" : ""}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
            
            {filteredPrograms.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground mb-4">No programs found</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                  className="text-primary hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
            <motion.div 
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredPrograms.map((program, idx) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <ProgramCard program={program} />
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
