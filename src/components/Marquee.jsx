import { stack } from '../data.js';

export default function Marquee() {
  const items = [...stack, ...stack];
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  );
}
