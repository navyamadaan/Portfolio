const LANGUAGES = [
  { label: 'py', color: 'var(--teal)' },
  { label: 'js', color: 'var(--blue)' },
  { label: 'sql', color: 'var(--purple)' },
  { label: 'c', color: 'var(--teal)' },
  { label: 'java', color: 'var(--blue)' }
];

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function FloatingBubbles({ side = 'left', count = 6, seedOffset = 0 }) {
  const bubbles = Array.from({ length: count }).map((_, i) => {
    const seed = i + seedOffset;
    const lang = LANGUAGES[i % LANGUAGES.length];
    const top = 8 + seededRandom(seed * 4.1) * 78;
    const horizontal = 3 + seededRandom(seed * 1.7) * 14;
    const left = side === 'left' ? horizontal : 100 - horizontal;
    const size = 38 + seededRandom(seed * 2.3) * 14;
    const duration = 7 + seededRandom(seed * 6.7) * 5;
    const delay = seededRandom(seed * 3.9) * 3;
    const dx1 = 18 + seededRandom(seed * 8.1) * 22;
    const dx2 = -(18 + seededRandom(seed * 9.3) * 22);
    const dy1 = 20 + seededRandom(seed * 5.5) * 26;
    const dy2 = -(20 + seededRandom(seed * 6.1) * 26);
    return { ...lang, top, left, size, duration, delay, dx1, dx2, dy1, dy2, id: seed };
  });

  return (
    <div className="bubble-field" aria-hidden="true">
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="bubble"
          style={{
            top: `${b.top}%`,
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            fontSize: `${b.size * 0.3}px`,
            color: b.color,
            borderColor: b.color,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            '--dx1': `${b.dx1}px`,
            '--dx2': `${b.dx2}px`,
            '--dy1': `${b.dy1}px`,
            '--dy2': `${b.dy2}px`
          }}
        >
          {b.label}
        </span>
      ))}
    </div>
  );
}