import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  return (
    <AnimatedSection
      name="skills"
      id="skills"
      className="section-padding bg-surface/50 border-y border-border"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="02 — Skills"
          title="Technologies I work with"
          description="Languages, frameworks, and tools I've used across personal and professional projects."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={gridVariants}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-5"
        >
          {skills.map(({ name, Icon }) => (
            <motion.div
              key={name}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group flex flex-col items-center rounded-2xl border border-border bg-elevated/80 p-5 backdrop-blur transition-colors hover:border-accent/40 hover:shadow-glow"
            >
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-xl border border-border/50 bg-canvas/50 transition-all duration-300 group-hover:scale-110 group-hover:border-accent/30 group-hover:bg-surface">
                <Icon
                  className="h-11 w-11 text-muted transition-colors duration-300 group-hover:text-accent"
                  aria-hidden
                />
              </div>
              <p className="text-center text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-accent">
                {name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
