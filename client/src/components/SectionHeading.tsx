import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  alignment = "center",
  className = "" 
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[alignment];

  return (
    <div className={`flex flex-col mb-12 ${alignClass} ${className}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3 relative z-10">
          {title}
        </h2>
        {/* Subtle industrial underline accent */}
        <div className={`h-1.5 w-24 bg-accent mt-2 ${
          alignment === "center" ? "mx-auto" : 
          alignment === "right" ? "ml-auto" : ""
        }`} />
      </motion.div>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mt-4 max-w-2xl font-light text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
