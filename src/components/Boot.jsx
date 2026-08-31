import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  { html: '&gt; ./portfolio --init', delay: 300 },
  { html: '&gt; resolving modules ......... <span class="ok">ok</span>', delay: 550 },
  { html: '&gt; stdout: attaching to main()', delay: 550 }
];

export default function Boot({ onDone }) {
  const canvasRef = useRef(null);
  const [visibleLines, setVisibleLines] = useState(0);
  const [stage, setStage] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let t = 300;
    const timeouts = [];
    bootLines.forEach((line, i) => {
      timeouts.push(setTimeout(() => setVisibleLines(i + 1), t));
      t += line.delay;
    });
    timeouts.push(setTimeout(() => setStage(1), t + 300));
    timeouts.push(setTimeout(() => setStage(2), t + 1200));
    timeouts.push(setTimeout(() => setStage(3), t + 1900));
    timeouts.push(setTimeout(() => setStage(4), t + 2500));
    const finish = setTimeout(() => finishBoot(), t + 4500);
    timeouts.push(finish);

    function onKey() { finishBoot(); }
    window.addEventListener('keydown', onKey, { once: true });

    return () => {
      timeouts.forEach(clearTimeout);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  function finishBoot() {
    setDone(true);
    setTimeout(onDone, 700);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w, h, cols, drops, raf;
    const chars = 'アイウエオカキクケコサシスセソ01アイウエオ';

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      cols = Math.floor(w / 18);
      drops = new Array(cols).fill(0).map(() => Math.random() * -50);
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
      ctx.fillStyle = 'rgba(0,0,0,0.06)';
      ctx.fillRect(0, 0, w, h);
      ctx.font = '15px monospace';
      for (let i = 0; i < cols; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = Math.random() > 0.96 ? '#2dd4bf' : 'rgba(139,124,246,0.55)';
        ctx.fillText(char, i * 18, drops[i] * 18);
        if (drops[i] * 18 > h && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      raf = requestAnimationFrame(() => setTimeout(draw, 45));
    }
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          id="boot"
          onClick={finishBoot}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <canvas id="matrix-canvas" ref={canvasRef}></canvas>

          <div className="boot-terminal-corner">
            {bootLines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                dangerouslySetInnerHTML={{ __html: line.html }}
              />
            ))}
          </div>

          <div className="boot-center">
            {stage >= 1 && (
              <motion.div
                className="boot-name"
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                NAVYA
              </motion.div>
            )}

            {stage >= 2 && (
              <motion.div
                className="boot-diff"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="rm">- hello, world</span><br />
                <span className="add">+ navya</span>
              </motion.div>
            )}

            {stage >= 3 && (
              <motion.div
                className="boot-tag"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                CS · DATA ANALYTICS &nbsp;&middot;&nbsp; PORTFOLIO_2026
              </motion.div>
            )}
          </div>

          {stage >= 4 && (
            <motion.div
              className="boot-skip"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              press any key or click to skip
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}