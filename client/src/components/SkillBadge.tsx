import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  index: number;
}

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="
        inline-block px-4 py-2 bg-white border border-border rounded shadow-sm text-sm font-medium text-foreground
        hover:border-accent hover:text-accent-foreground hover:bg-accent hover:shadow-md
        transition-all duration-200 cursor-default select-none
      "
    >
      {skill}
    </motion.span>
  );
}
