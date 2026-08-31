import { useState, useEffect } from 'react';
import Boot from './components/Boot.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Involvement from './components/Involvement.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('locked', !booted);
  }, [booted]);

  return (
    <>
      <Boot onDone={() => setBooted(true)} />
      <ProgressBar />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Involvement />
      <Contact />
      <Footer />
    </>
  );
}
