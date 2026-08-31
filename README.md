# Navya Madaan — Portfolio (React + Framer Motion)

Vite + React build of the portfolio, animated with Framer Motion.

## Run it

```
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build a static production bundle:

```
npm run build
npm run preview
```

## Structure

```
src/
  main.jsx           entry point
  App.jsx             assembles all sections
  data.js              content — stack, experience, projects, involvement
  index.css            design tokens + all styling
  components/
    Boot.jsx            matrix-rain intro + typed terminal lines + name reveal
    ProgressBar.jsx      scroll progress bar (top of page)
    Nav.jsx              nav with animated shared-layout underline
    Hero.jsx             staggered entrance + parallax grid background
    Marquee.jsx          scrolling tech-stack ticker
    Reveal.jsx           reusable scroll-into-view animation wrapper
    About.jsx            staggered paragraphs + typed terminal panel
    ExperienceCard.jsx   shared card with animated SVG checkmark draw-in
    Experience.jsx
    Involvement.jsx
    ProjectCard.jsx      mouse-tilt hover effect + glowing preview
    Projects.jsx
    Contact.jsx          staggered pop-in buttons
    Footer.jsx
```

## Animations added on top of the original

- Scroll progress bar tied to page scroll
- Nav active-link underline slides between links (shared layout animation)
- Hero content staggers in on load; background grid parallaxes as you scroll
- Every section's heading/eyebrow fades up into view the first time it's scrolled to
- About: paragraphs stagger in one by one; the terminal panel types its lines in sequence
- Experience/involvement cards slide in from alternating left/right, with the checkbox check-mark drawing itself in as an animated SVG path
- Project cards tilt toward the cursor on hover (subtle 3D effect) and have a slow-pulsing glow
- Contact buttons pop in with a staggered scale, and scale up slightly on hover

## Before publishing

Update the placeholder contact links in `src/components/Contact.jsx` with your real email, LinkedIn, and GitHub URLs.
