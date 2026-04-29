import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#hero" className="logo">
          Boni<span className="text-pink">dev.</span>
        </a>
        
        <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#hero" className="nav-link" onClick={() => setIsMenuOpen(false)}>Accueil</a>
          <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>À Propos</a>
          <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projets</a>
          <a href="#contact" className="btn btn-outline nav-btn" onClick={() => setIsMenuOpen(false)}>Me Contacter</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
