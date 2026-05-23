import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';

const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nathankenopic/',
    description: 'Connect professionally',
    icon: FaLinkedin,
    accent: 'from-blue-500/20 to-blue-500/5',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/NateKenopic',
    description: 'See my repositories',
    icon: FaGithub,
    accent: 'from-violet-500/20 to-violet-500/5',
  },
];

export default function Contact() {
  return (
    <AnimatedSection name="contact" id="contact" className="section-padding pb-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="04 — Contact"
          title="Let's work together"
          description="Have a project in mind or just want to say hi? Reach out through any channel below."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {links.map(({ label, href, description, icon: Icon, accent }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -4 }}
              className={`group flex flex-col rounded-2xl border border-border bg-gradient-to-br ${accent} p-6 backdrop-blur transition-colors hover:border-accent/40`}
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-elevated text-xl text-accent transition-colors group-hover:bg-accent group-hover:text-on-accent">
                <Icon />
              </span>
              <span className="text-lg font-semibold text-foreground">{label}</span>
              <span className="mt-1 text-sm text-muted">{description}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
