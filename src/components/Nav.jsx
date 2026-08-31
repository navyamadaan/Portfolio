import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../data.js';
import ThemeToggle from './ThemeToggle.jsx';

export default function Nav() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="logo">~/navya-madaan</div>
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'active' : ''}
              >
                {link.label}
                {active === link.id && (
                  <motion.div className="nav-underline" layoutId="nav-underline" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeToggle />
    </motion.header>
  );
}
