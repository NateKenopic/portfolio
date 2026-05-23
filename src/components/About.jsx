import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';

const highlights = [
  {
    title: 'Web & software',
    description:
      'End-to-end development — from UI and APIs to deployment and maintainable architecture.',
  },
  {
    title: 'Games & interactive',
    description:
      'Experience with Unreal Engine and interactive experiences alongside traditional app work.',
  },
  {
    title: 'Always learning',
    description:
      'I stay current with modern tooling and enjoy shipping projects that solve real problems.',
  },
];

export default function About() {
  return (
    <AnimatedSection name="about" id="about" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="01 — About"
          title="Building digital experiences with care"
          description="Thanks for stopping by. I'm a passionate developer who loves web, software, and game development."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 text-lg leading-relaxed text-muted"
          >
            <p>
              Hello! I&apos;m <span className="font-semibold text-foreground">Nathan Kenopic</span>.
              I&apos;m a young, driven programmer focused on creating products that feel great to use
              and hold up under the hood.
            </p>
            <p>
              My toolkit spans front-end frameworks, back-end services, databases, cloud platforms,
              and game engines. You&apos;ll find the full breakdown in the skills section below.
            </p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="space-y-4"
          >
            {highlights.map(({ title, description }) => (
              <motion.li
                key={title}
                variants={{
                  hidden: { opacity: 0, x: 24 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur transition-colors hover:border-accent/30 hover:bg-elevated/80"
              >
                <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
                <p className="text-muted">{description}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </AnimatedSection>
  );
}
