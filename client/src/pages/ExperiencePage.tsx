import { useExperience } from "@/hooks/use-portfolio";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Briefcase } from "lucide-react";

export default function ExperiencePage() {
  const { data: experience, isLoading } = useExperience();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Professional History" 
            subtitle="A detailed timeline of roles, responsibilities, and achievements across the industrial sector."
          />

          <div className="max-w-4xl mx-auto mt-16 relative">
            {/* Vertical timeline line for desktop */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-border/50 bg-gradient-to-b from-primary/50 to-transparent"></div>

            {isLoading ? (
              <div className="space-y-8 pl-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-3">
                    <Skeleton className="h-8 w-1/3" />
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-24 w-full" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-12">
                {experience?.map((exp, idx) => (
                  <div key={exp.id} className="relative">
                    {/* Desktop timeline dot */}
                    <div className="hidden md:flex absolute -left-[19px] top-6 w-10 h-10 rounded-full bg-background border-4 border-primary items-center justify-center z-10">
                      <Briefcase className="w-4 h-4 text-primary" />
                    </div>
                    
                    <div className="md:pl-12">
                      <ExperienceCard experience={exp} index={idx} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
