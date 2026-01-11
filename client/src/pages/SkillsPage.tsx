import { useSkills, useCertifications, useLanguages } from "@/hooks/use-portfolio";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillBadge } from "@/components/SkillBadge";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Globe, Hammer, Users, Cpu } from "lucide-react";

export default function SkillsPage() {
  const { data: skills, isLoading: loadingSkills } = useSkills();
  const { data: certs, isLoading: loadingCerts } = useCertifications();
  const { data: languages, isLoading: loadingLangs } = useLanguages();

  // Helper to get icon for category
  const getCategoryIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("technical")) return <Hammer className="w-5 h-5 text-accent" />;
    if (cat.includes("soft")) return <Users className="w-5 h-5 text-accent" />;
    if (cat.includes("digital") || cat.includes("software")) return <Cpu className="w-5 h-5 text-accent" />;
    return <Award className="w-5 h-5 text-accent" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Competencies & Qualifications" 
            subtitle="Comprehensive breakdown of technical capabilities, certifications, and languages."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {/* SKILLS COLUMN (Spans 2 cols) */}
            <div className="lg:col-span-2 space-y-8">
              <h3 className="text-2xl font-bold font-display uppercase border-b border-border pb-2 mb-6 text-foreground">
                Skill Sets
              </h3>
              
              {loadingSkills ? (
                <div className="space-y-4">
                  <Skeleton className="h-32 w-full" />
                  <Skeleton className="h-32 w-full" />
                </div>
              ) : (
                skills?.map((category) => (
                  <Card key={category.id} className="border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-3 pb-2">
                      {getCategoryIcon(category.category)}
                      <CardTitle className="text-lg font-bold uppercase tracking-wide">
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item, idx) => (
                          <SkillBadge key={idx} skill={item} index={idx} />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* SIDEBAR: CERTS & LANGUAGES */}
            <div className="space-y-8">
              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-bold font-display uppercase border-b border-border pb-2 mb-6 text-foreground">
                  Certifications
                </h3>
                <Card className="bg-secondary/20 border-none shadow-none">
                  <CardContent className="pt-6 space-y-4">
                    {loadingCerts ? (
                      <Skeleton className="h-24 w-full" />
                    ) : (
                      certs?.map((cert) => (
                        <div key={cert.id} className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <span className="font-medium text-foreground">{cert.name}</span>
                        </div>
                      ))
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-2xl font-bold font-display uppercase border-b border-border pb-2 mb-6 text-foreground">
                  Languages
                </h3>
                <Card className="bg-primary text-primary-foreground border-none shadow-lg">
                  <CardContent className="pt-6 space-y-4">
                    {loadingLangs ? (
                      <Skeleton className="h-20 w-full bg-white/10" />
                    ) : (
                      languages?.map((lang) => (
                        <div key={lang.id} className="flex items-center justify-between border-b border-white/10 last:border-0 pb-3 last:pb-0">
                          <div className="flex items-center gap-3">
                            <Globe className="w-4 h-4 text-accent" />
                            <span className="font-bold">{lang.language}</span>
                          </div>
                          <span className="text-sm opacity-80 bg-white/10 px-2 py-0.5 rounded text-xs uppercase">{lang.level}</span>
                        </div>
                      ))
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
