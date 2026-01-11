import { useEducation } from "@/hooks/use-portfolio";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Skeleton } from "@/components/ui/skeleton";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function EducationPage() {
  const { data: education, isLoading } = useEducation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Academic Background" 
            subtitle="Formal education and degrees obtained."
          />

          <div className="max-w-3xl mx-auto mt-16 grid gap-8">
            {isLoading ? (
              <Skeleton className="h-40 w-full" />
            ) : (
              education?.map((edu, idx) => (
                <motion.div 
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card border border-border p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent-foreground rounded text-sm font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.year}
                      </span>
                    </div>
                    
                    <h4 className="text-lg text-primary font-medium mb-4">{edu.school}</h4>
                    
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 mr-1.5" />
                      {edu.location}
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
