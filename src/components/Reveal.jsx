import { motion } from 'framer-motion';

const dirs = {
  up: { y: 32, x: 0 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
  scale: { x: 0, y: 0, scale: 0.94 }
};

export default function Reveal({ children, direction = 'up', delay = 0, className, once = true, ...rest }) {
  const offset = dirs[direction] || dirs.up;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 1, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
