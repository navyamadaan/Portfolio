import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { stack, projects, experience } from '../data.js';

const HELP_TEXT = [
  'available commands:',
  '  whoami        — who I am',
  '  skills        — tech stack',
  '  projects      — things I\'ve built',
  '  experience    — where I\'ve worked',
  '  contact       — how to reach me',
  '  sudo hire-me  — ???',
  '  clear         — clear the terminal'
];

const QUICK_COMMANDS = ['whoami', 'skills', 'projects', 'experience', 'contact'];

function runCommand(cmd) {
  const c = cmd.trim().toLowerCase();
  switch (c) {
    case 'help':
      return HELP_TEXT;
    case 'whoami':
      return [
        'navya_madaan',
        'CS (Data Analytics) student · Sheridan College',
        'building AI/ML systems that turn data into decisions'
      ];
    case 'skills':
      return [stack.join(', ')];
    case 'projects':
      return projects.map((p) => `→ ${p.title}`);
    case 'experience':
      return experience.map((e) => `→ ${e.role} @ ${e.company}`);
    case 'contact':
      return [
        'email: navyamadaan21@gmail.com',
        'linkedin: www.linkedin.com/in/navya-madaan-659611326',
        'github: github.com/navyamadaan'
      ];
    case 'sudo hire-me':
      return [
        '[sudo] password for recruiter: ********',
        'permission granted.',
        'achievement unlocked: found the easter egg'
      ];
    case '':
      return [];
    case 'clear':
      return '__CLEAR__';
    default:
      return [`command not found: ${cmd}`, 'type "help" to see available commands'];
  }
}

let lineId = 0;

export default function InteractiveTerminal() {
  const [lines, setLines] = useState([{ id: lineId++, type: 'sys', text: 'type "help" or tap a command below' }]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [lines]);

  function execute(cmd) {
    if (busy) return;
    const result = runCommand(cmd);

    if (result === '__CLEAR__') {
      setLines([]);
      return;
    }

    setLines((prev) => [...prev, { id: lineId++, type: 'cmd', text: cmd }]);

    if (result.length === 0) return;

    setBusy(true);
    result.forEach((text, i) => {
      setTimeout(() => {
        setLines((prev) => [...prev, { id: lineId++, type: 'out', text }]);
        if (i === result.length - 1) setBusy(false);
      }, (i + 1) * 220);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim() || busy) return;
    execute(input);
    setInput('');
  }

  function handleChipClick(cmd) {
    if (busy) return;
    execute(cmd);
    inputRef.current?.focus();
  }

  return (
    <motion.div
      className="term-panel interactive-terminal"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="term-bar">
        <span></span><span></span><span></span>
        <span className="term-bar-label">guest@navya-madaan: ~</span>
      </div>

      <div className="term-body interactive-term-body" onClick={() => inputRef.current?.focus()}>
        <AnimatePresence initial={false}>
          {lines.map((l) => (
            <motion.div
              key={l.id}
              className={`term-line term-${l.type}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {l.type === 'cmd' ? <><span className="p">$</span> {l.text}</> : l.text}
            </motion.div>
          ))}
        </AnimatePresence>

        {busy && (
          <motion.div
            className="term-typing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span></span><span></span><span></span>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="term-input-row">
          <span className="p">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="term-input"
            autoComplete="off"
            spellCheck="false"
            disabled={busy}
            aria-label="Terminal command input"
          />
          <span className="term-cursor" />
        </form>
        <div ref={bottomRef} />
      </div>

      <div className="term-chips">
        {QUICK_COMMANDS.map((cmd) => (
          <button key={cmd} className="term-chip" onClick={() => handleChipClick(cmd)} disabled={busy}>
            {cmd}
          </button>
        ))}
      </div>
    </motion.div>
  );
}