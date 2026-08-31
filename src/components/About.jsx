import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import PhotoCarousel from './PhotoCarousel.jsx';


const paraContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};
const paraItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function About() {
  return (
    <section id="about">
      <Reveal className="eyebrow">// 01 — about</Reveal>
      <Reveal delay={0.05}>
        <h2 className="title">
          Building things that <br /> <span className="accent">matter.</span>
        </h2>
      </Reveal>

      <div className="about-grid">
        <motion.div
          variants={paraContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={paraItem}>
            <strong>
              I'm an Honours Bachelor of Computer Science (Data Analytics){' '}
              student at Sheridan College, currently holding a 3.7 GPA —
              what started as casually dipping my toes into programming turned into a
              steady dive into learning, building, and figuring things out with code.
            </strong>
          </motion.p>
          <motion.p variants={paraItem}>
            <strong>
              When I'm not debugging, you'll find me planning my next trip; turns out
              both coding and travel come down to the same thing — charting a route,
              hitting a few wrong turns, and finding your way through anyway.
            </strong>
          </motion.p>
          <motion.p variants={paraItem}>
            <strong>
              Outside of coursework, I serve as VP of Academics &amp; Equity{' '}
              at the Sheridan Student Union, supervise a team as a{' '}
              Guest Services Supervisor in retail, and stay active in a
              few clubs on campus.
            </strong>
          </motion.p>
        </motion.div>

        <div className="term-wrap">
          <Reveal direction="scale" delay={0.1} className="term-panel">
            <PhotoCarousel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}