import { Experience } from "@shared/schema";
import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Timeline line for mobile */}
      <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-border"></div>
      <div className="md:hidden absolute left-[-4px] top-6 w-2 h-2 rounded-full bg-accent"></div>

      <div className="group bg-card hover:bg-secondary/50 border border-border/50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-accent/30">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              {experience.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground font-medium">
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-accent" />
                {experience.company}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent" />
                {experience.location}
              </span>
            </div>
          </div>
          
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm font-semibold border border-border">
              <Calendar className="w-3.5 h-3.5" />
              {experience.startDate} — {experience.endDate || "Present"}
            </span>
          </div>
        </div>

        <ul className="space-y-2 mt-4">
          {experience.description.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-muted-foreground/90 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0 opacity-70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
