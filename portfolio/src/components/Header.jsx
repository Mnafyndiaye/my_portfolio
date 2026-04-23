import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#hero" className="logo">
          Boni<span className="text-pink">dev.</span>
        </a>
        <nav className="nav-links">
          <a href="#hero" className="nav-link">Accueil</a>
          <a href="#about" className="nav-link">À Propos</a>
          <a href="#projects" className="nav-link">Projets</a>
          <a href="#contact" className="btn btn-outline nav-btn">Me Contacter</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
