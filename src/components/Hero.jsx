import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import InteractiveTerminal from './InteractiveTerminal.jsx';
import FloatingBubbles from './FloatingBubbles.jsx';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className="hero" ref={ref} style={{ maxWidth: '100%', padding: '140px 24px 60px' }}>
      <motion.div className="hero-grid" style={{ y: gridY }} />
      <FloatingBubbles side="left" count={6} seedOffset={0} />
      <FloatingBubbles side="right" count={6} seedOffset={50} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ opacity: fade, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <motion.div className="status-pill" variants={item}>
          <span className="status-dot"></span>STATUS: OPEN TO SUMMER 2027 INTERNSHIPS
        </motion.div>

        <motion.h1 variants={item}>
          Hey, I'm <span className="accent">Navya</span>
        </motion.h1>

        <motion.p className="hero-sub" variants={item}>
          <strong>
            CS student @ Sheridan College, building AI/ML systems
            that turn data into decisions.
          </strong>
        </motion.p>

        <motion.div variants={item} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <InteractiveTerminal />
        </motion.div>

        <motion.div className="hero-ctas" variants={item}>
          <a href="#projects" className="btn btn-solid">./projects</a>
          <a href="#contact" className="btn btn-outline">./contact</a>
        </motion.div>

        <motion.div className="scroll-cue" variants={item}>
          <span>SCROLL</span>
          <span className="arrow">&#8964;</span>
        </motion.div>
      </motion.div>
    </section>
  );
}