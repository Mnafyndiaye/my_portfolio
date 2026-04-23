import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Me Contacter</h2>

        <div className="contact-card glass-card">
          <div className="contact-info">
            <h3>Discutons de votre prochain projet !</h3>
            <p>
              Je suis toujours ouvert aux nouvelles opportunités, que ce soit pour des projets freelance,
              des collaborations ou simplement pour échanger autour du développement.
            </p>
            <div className="contact-links">
              <a href="mailto:mamannafyndiaye@gmail.com" className="contact-link">
                <span className="icon">✉</span> mamannafyndiaye@gmail.com
              </a>
              <a href="https://github.com/Mnafyndiaye" target="_blank" rel="noreferrer" className="contact-link">
                <span className="icon">⌨</span> GitHub
              </a>
              <a href="https://www.linkedin.com/in/maman-nafy-ndiaye-56871a256/" target="_blank" rel="noreferrer" className="contact-link">
                <span className="icon">💼</span> LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Votre Nom" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Votre Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Votre Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
