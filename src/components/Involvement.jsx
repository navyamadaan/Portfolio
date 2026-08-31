import Reveal from './Reveal.jsx';
import ExperienceCard from './ExperienceCard.jsx';
import { involvement } from '../data.js';

export default function Involvement() {
  return (
    <section id="involvement">
      <Reveal className="eyebrow">// 04 — involvement</Reveal>
      <Reveal delay={0.05}>
        <h2 className="title">
          Where I show <span className="accent">up.</span>
        </h2>
      </Reveal>

      <div className="involvement-grid">
        {involvement.map((item, i) => (
          <ExperienceCard item={item} index={i} key={item.role} compact />
        ))}
      </div>
    </section>
  );
}