import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
  { src: `${import.meta.env.BASE_URL}photos/photo1.jpg`, caption: '// main()' },
  { src: `${import.meta.env.BASE_URL}photos/photo2.jpg`, caption: '// travelling.exe' },
  { src: `${import.meta.env.BASE_URL}photos/photo3.jpg`, caption: '// off_duty()' }
];

export default function PhotoCarousel() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  function go(newIndex) {
    setDir(newIndex > index ? 1 : -1);
    setIndex(((newIndex % photos.length) + photos.length) % photos.length);
  }

  function goManual(newIndex) {
    go(newIndex);
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timerRef.current);
    startTimer();
  }

  function startTimer() {
    timerRef.current = setInterval(() => {
      setDir(1);
      setIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
  }

  useEffect(() => {
    if (!paused) startTimer();
    return () => clearInterval(timerRef.current);
  }, [paused]);

  return (
    <div
      className="photo-panel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="photo-frame">
        <AnimatePresence initial={false} custom={dir} mode="wait">
          <motion.img
            key={index}
            src={photos[index].src}
            alt=""
            custom={dir}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -dir * 40 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="photo-img"
          />
        </AnimatePresence>

        <button className="photo-nav prev" onClick={() => goManual(index - 1)} aria-label="Previous photo">‹</button>
        <button className="photo-nav next" onClick={() => goManual(index + 1)} aria-label="Next photo">›</button>

        <div className="photo-caption">{photos[index].caption}</div>
      </div>

      <div className="photo-dots">
        {photos.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => goManual(i)}
          />
        ))}
      </div>
    </div>
  );
}