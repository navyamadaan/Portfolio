import Reveal from './Reveal.jsx';
import ExperienceCard from './ExperienceCard.jsx';
import { experience } from '../data.js';

export default function Experience() {
  return (
    <section id="experience">
      <Reveal className="eyebrow">// 02 — experience</Reveal>
      <Reveal delay={0.05}>
        <h2 className="title">
          Where I've <span className="accent">worked.</span>
        </h2>
      </Reveal>

      {experience.map((item, i) => (
        <ExperienceCard item={item} index={i} key={item.role} />
      ))}
    </section>
  );
}
