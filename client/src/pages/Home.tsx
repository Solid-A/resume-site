import { useProfile, useSkills, useExperience } from "@/hooks/use-portfolio";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillBadge } from "@/components/SkillBadge";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Download, ChevronDown, Wrench, Factory, Flame } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { data: profile, isLoading: loadingProfile } = useProfile();
  const { data: skills } = useSkills();
  const { data: experience } = useExperience();

  // Get top skills for hero/summary
  const featuredSkills = skills?.flatMap(cat => cat.items).slice(0, 5) || [];
  // Get latest 2 roles
  const recentExperience = experience?.slice(0, 2) || [];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Abstract Industrial Background */}
        <div className="absolute inset-0 z-0 bg-secondary/30">
          {/* Industrial pattern or image overlay */}
          <div className="absolute inset-0 opacity-10" 
               style={{ 
                 backgroundImage: "radial-gradient(#1e3a8a 1px, transparent 1px)", 
                 backgroundSize: "30px 30px" 
               }}>
          </div>
          {/* Subtle heavy machinery imagery placeholder */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-12 transform translate-x-20"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-accent font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-accent"></span>
                Senior Furnace Operator & Technician
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary mb-6 leading-none">
                AHMED <br/>
                <span className="text-foreground">FAROUK</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 leading-relaxed font-light">
                {loadingProfile ? "Loading profile..." : profile?.summary}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 rounded-none border-l-4 border-accent">
                    Contact Me <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-2 border-primary text-primary hover:bg-primary/5 rounded-none">
                  Download Resume <Download className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Icons for Industrial Theme */}
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[10%] top-[20%] text-primary/5 z-0"
        >
          <Factory className="w-64 h-64" />
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* STATS / HIGHLIGHTS BAR */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="p-4">
              <div className="flex justify-center mb-4 text-accent"><Flame className="w-10 h-10" /></div>
              <div className="text-4xl font-bold font-display mb-1">18+</div>
              <div className="text-sm uppercase tracking-wider text-white/70">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="flex justify-center mb-4 text-accent"><Wrench className="w-10 h-10" /></div>
              <div className="text-4xl font-bold font-display mb-1">DRY & DRI</div>
              <div className="text-sm uppercase tracking-wider text-white/70">Technical Specialization</div>
            </div>
            <div className="p-4">
              <div className="flex justify-center mb-4 text-accent"><Factory className="w-10 h-10" /></div>
              <div className="text-4xl font-bold font-display mb-1">Safety First</div>
              <div className="text-sm uppercase tracking-wider text-white/70">Operational Standard</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EXPERIENCE */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Recent Experience" 
            subtitle="A track record of reliability and technical expertise in industrial operations."
          />
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {recentExperience.map((exp, idx) => (
              <ExperienceCard key={exp.id} experience={exp} index={idx} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/experience">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-wider font-semibold">
                View Full Career History
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SKILLS SNAPSHOT */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Technical Expertise" 
                subtitle="Proficiencies developed over nearly two decades of hands-on industrial work."
                alignment="left"
              />
              <p className="text-lg text-muted-foreground mb-8">
                My skillset bridges the gap between mechanical operation and safety protocol adherence. 
                I specialize in high-temperature furnace operations, reforming processes, and comprehensive plant maintenance.
              </p>
              <div className="flex flex-wrap gap-3">
                {featuredSkills.map((skill, idx) => (
                  <SkillBadge key={idx} skill={skill} index={idx} />
                ))}
              </div>
              <div className="mt-8">
                <Link href="/skills">
                  <Button className="bg-primary text-white">Explore All Skills</Button>
                </Link>
              </div>
            </div>
            
            <div className="relative h-[400px] bg-card rounded-lg shadow-2xl border border-border overflow-hidden p-8 flex flex-col justify-center">
              {/* Decorative industrial elements */}
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Wrench className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-6 text-foreground">Core Competencies</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary font-bold">01</div>
                  <div>
                    <h4 className="font-bold">Furnace Operation</h4>
                    <p className="text-sm text-muted-foreground">Reformer & startup/shutdown procedures</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary font-bold">02</div>
                  <div>
                    <h4 className="font-bold">Plant Safety</h4>
                    <p className="text-sm text-muted-foreground">HSE compliance, isolation, and permits</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary font-bold">03</div>
                  <div>
                    <h4 className="font-bold">Maintenance</h4>
                    <p className="text-sm text-muted-foreground">Field troubleshooting and commissioning</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10">
          {/* Unsplash image: Industrial machinery/factory background */}
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            I am currently open to new opportunities in industrial operations and technical supervision.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-16 px-10 text-xl bg-accent hover:bg-accent/90 text-white border-none shadow-xl">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
