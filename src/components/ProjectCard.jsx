import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function ProjectCard({ project }) {
  const [imgIndex, setImgIndex] = useState(0);
  const dirRef = useRef(1);

  useEffect(() => {
    const images = project.images;
    if (!images || images.length < 2) return;

    const id = setInterval(() => {
      setImgIndex((prev) => {
        let next = prev + dirRef.current;
        if (next >= images.length) {
          dirRef.current = -1;
          next = images.length - 2;
        } else if (next < 0) {
          dirRef.current = 1;
          next = 1;
        }
        return next;
      });
    }, 3000);

    return () => clearInterval(id);
  }, [project.images]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-40, 40], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-40, 40], [-6, 6]), { stiffness: 200, damping: 20 });

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="proj-card"
      style={{ rotateX, rotateY, transformPerspective: 800, display: 'block' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ y: -6 }}
    >
      <div className="proj-visual">
        <AnimatePresence mode="wait">
          <motion.img
            key={imgIndex}
            src={project.images[imgIndex]}
            alt={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="proj-img"
          />
        </AnimatePresence>
        <div className="proj-tag-overlay">{project.visual}</div>
      </div>
      <div className="proj-body">
        <div className="proj-title">{project.title}</div>
        <p>{project.desc}</p>
        <div className="tags" style={{ marginLeft: 0 }}>
          {project.tags.map((t, i) => (
            <span className="tag" key={i}>{t}</span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}