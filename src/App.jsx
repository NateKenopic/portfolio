import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="theme-canvas relative min-h-screen overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 bg-grid-pattern opacity-50"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 bg-hero-gradient"
        aria-hidden
      />

      <NavigationBar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        <p>
          © {new Date().getFullYear()} Nathan Kenopic. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  );
}

export default App;
