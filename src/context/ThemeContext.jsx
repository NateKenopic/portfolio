import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);
const STORAGE_KEY = 'theme';

function applyTheme(theme) {
  const root = document.documentElement;
  const isDark = theme === 'dark';

  root.setAttribute('data-theme', theme);
  root.classList.toggle('dark', isDark);
  root.style.colorScheme = theme;

  document.body.style.backgroundColor = '';
  document.body.style.color = '';

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute('content', isDark ? '#030712' : '#f1f5f9');
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') === 'dark' ||
        document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
