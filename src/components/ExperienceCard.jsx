import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';

export default function ExperienceCard({ item, index, compact }) {
  const direction = index % 2 === 0 ? 'left' : 'right';

  return (
    <Reveal
      direction={direction}
      delay={0.05}
      className={`card ${compact ? 'card-compact' : ''}`}
      whileHover={{ y: -4 }}
    >
      <div className="card-row">
        <div className="card-main">
          <div className="card-head">
            <div className="check">
              <motion.svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', top: -1, left: -1 }}>
                <motion.path
                  d="M4 9.5L7.5 13L14 5.5"
                  fill="none" stroke="var(--teal)" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
              </motion.svg>
            </div>
            <div className="card-role">
              {item.role} <span className="co">@ {item.company}</span>
            </div>
          </div>
          {item.meta && <div className="card-meta">{item.meta}</div>}
          <ul>
            {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <div className="tags">
            {item.tags.map((t, i) => <span className="tag" key={i}>{t}</span>)}
          </div>
        </div>

        {item.logo && (
          <div className="card-logo">
            <img src={item.logo} alt={`${item.company} logo`} />
          </div>
        )}
      </div>
    </Reveal>
  );
}