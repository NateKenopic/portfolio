import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from '../assets/logo.png';
import ThemeToggle from './ui/ThemeToggle';

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'work', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

const scrollProps = { smooth: true, duration: 500, offset: -72, spy: true };

export default function NavigationBar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [navOpen]);

  const closeMenu = () => setNavOpen(false);

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled ? 'glass shadow-card py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-8">
        <Link to="home" {...scrollProps} className="group flex items-center gap-2">
          <img
            src={Logo}
            alt="Nathan Kenopic"
            className="h-10 w-10 rounded-lg object-contain transition-transform group-hover:scale-105"
          />
          <span className="hidden font-semibold text-foreground sm:inline">NK</span>
        </Link>

        <div className="flex items-center gap-3">
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  {...scrollProps}
                  activeClass="!text-accent"
                  className="cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setNavOpen((open) => !open)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-foreground/10 md:hidden"
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={navOpen}
          >
            {navOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-40 bg-canvas/95 backdrop-blur-xl md:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07 } },
              }}
              className="flex h-full flex-col items-center justify-center gap-2"
            >
              {navLinks.map(({ to, label }) => (
                <motion.li
                  key={to}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    to={to}
                    {...scrollProps}
                    onClick={closeMenu}
                    className="block cursor-pointer px-6 py-3 text-2xl font-semibold text-foreground transition-colors hover:text-accent"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
