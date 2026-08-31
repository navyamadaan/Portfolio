import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';

const links = [
  { label: './email', href: 'mailto:navyamadaan21@gmail.com' },
  { label: './linkedin', href: 'https://www.linkedin.com/in/navya-madaan-659611326' },
  { label: './github', href: 'https://github.com/navyamadaan' }
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};
const item = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function Contact() {
  return (
    <section id="contact" className="contact-sec">
      <Reveal className="eyebrow">// 05 — contact</Reveal>
      <Reveal delay={0.05}>
        <h2 className="title">
          Let's <span className="accent">connect.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="contact-sub">
        <span className="p">$</span> open to new opportunities, cool projects, or
        just a good conversation.
      </Reveal>

      <motion.div
        className="contact-btns"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        {links.map((l) => (
          <motion.a
            key={l.label}
            href={l.href}
            className="btn btn-outline"
            variants={item}
            whileHover={{ scale: 1.05, borderColor: '#fff' }}
            whileTap={{ scale: 0.97 }}
          >
            {l.label}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
