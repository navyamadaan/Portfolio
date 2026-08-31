import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.svg
            key="moon" width="16" height="16" viewBox="0 0 24 24" fill="none"
            initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.3 }}
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </motion.svg>
        ) : (
          <motion.svg
            key="sun" width="16" height="16" viewBox="0 0 24 24" fill="none"
            initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.3 }}
          >
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
}