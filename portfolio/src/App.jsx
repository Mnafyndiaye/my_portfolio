import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', background: '#0a0a0a', borderTop: '1px solid #1a1a1a', color: '#d4cbbd' }}>
        <p>© {new Date().getFullYear()} Bonitadev. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
