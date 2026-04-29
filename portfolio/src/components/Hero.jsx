import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Bonjour, je suis Maman Nafy Ndiaye</p>
          <h1 className="hero-title">
            Développeuse <br />
            <span className="text-gradient">Full Stack</span>
          </h1>
          <p className="hero-description">
            Je conçois et développe des applications web et mobiles modernes,
            performantes et esthétiquement plaisantes. Je transforme vos idées
            en expériences digitales premium.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">Voir mes projets</a>
            <a href="#about" className="btn btn-outline">En savoir plus</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glow-circle"></div>
          <div className="glass-card main-card">
            <div className="code-line"><span style={{ color: '#ff2a85' }}>const</span> portfolio = <span style={{ color: '#82aaff' }}>(</span><span style={{ color: '#c792ea' }}>idea</span><span style={{ color: '#82aaff' }}>)</span> =&gt; {'{'} </div>
            <div className="code-line indent">return <span style={{ color: '#addb67' }}>"Amazing Reality"</span>;</div>
            <div className="code-line">{'}'};</div>
          </div>
          <div className="glass-card small-card floating">
            React.js, Node.js, UI/UX
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
