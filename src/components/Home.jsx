import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  return (
    <section
      name="home"
      id="home"
      className="relative flex min-h-screen items-center section-padding pt-28"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-accent/20 blur-[100px] animate-float"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-violet-500/15 blur-[90px] animate-float-delayed"
        aria-hidden
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={item}
          className="mb-4 font-mono text-sm text-accent md:text-base"
        >
          Hello — my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Nathan Kenopic
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-2 text-3xl font-bold tracking-tight text-muted sm:text-5xl lg:text-6xl"
        >
          <span className="text-gradient">Full Stack</span> & Software Developer
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          I build responsive web apps, games, and full-stack products — from polished
          interfaces to reliable backends.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <Link
            to="work"
            smooth
            duration={500}
            offset={-72}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-on-accent shadow-glow transition-all hover:bg-accent/90 hover:shadow-lg"
          >
            View my work
            <HiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-72}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-accent/50 hover:bg-elevated"
          >
            Get in touch
          </Link>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 flex items-center gap-6 font-mono text-xs text-muted"
        >
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span className="hidden sm:inline">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
