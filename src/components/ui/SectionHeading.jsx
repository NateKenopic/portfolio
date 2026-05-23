import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, description }) {
  return (
    <div className="mb-14 max-w-2xl">
      <motion.p
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-3 font-mono text-sm font-medium uppercase tracking-widest text-accent"
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg leading-relaxed text-muted"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
