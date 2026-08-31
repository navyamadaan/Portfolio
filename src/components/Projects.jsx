import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal.jsx';
import ProjectCard from './ProjectCard.jsx';
import { projects, projectCategories } from '../data.js';

export default function Projects() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects">
      <Reveal className="eyebrow">// 03 — projects</Reveal>
      <Reveal delay={0.05}>
        <h2 className="title">
          Things I've <span className="accent">built.</span>
        </h2>
      </Reveal>

      <div className="tabs-wrap">
        <div className="tabs">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              className={`tab ${active === cat.id ? 'active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              {active === cat.id && (
                <motion.div
                  className="tab-pill"
                  layoutId="tab-pill"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="tab-label">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div className="proj-grid" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.35, delay: i * 0.05, ease: 'easeOut' }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}