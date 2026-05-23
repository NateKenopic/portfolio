import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../data/projects';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function ProjectCard({ name, image, github, live }) {
  return (
    <motion.article
      variants={cardVariants}
      className="group relative overflow-hidden rounded-2xl border border-border bg-elevated shadow-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/40 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="text-xl font-bold text-foreground">{name}</h3>
          <div className="mt-4 flex flex-wrap gap-2 opacity-100 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground/10 px-4 py-2 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-accent hover:text-on-accent"
              >
                <FiGithub />
                Code
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-on-accent transition-colors hover:bg-accent/90"
              >
                <FiExternalLink />
                Live demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <AnimatedSection name="work" id="work" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="03 — Projects"
          title="Selected work"
          description="A sample of apps, games, and services I've built — hover a card for links."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={gridVariants}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
