import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    "JavaScript ", "React.js", "Node.js", "Express",
    "MYSQL", "SQL", "HTML5/CSS3", "Git/GitHub", "REST APIs", "TailwindCSS"
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">À Propos de Moi</h2>

        <div className="about-grid">
          <div className="about-text glass-card">
            <p>
              Passionnée par le développement web, je crée des applications complètes,
              depuis la conception de l'expérience utilisateur jusqu'à l'architecture backend complexe.
            </p>
            <p>
              Mon approche allie une forte exigence technique à un sens aigu du design,
              assurant la création d'interfaces fluides et performantes. Je suis constamment
              en veille technologique pour offrir des solutions innovantes.
            </p>
          </div>

          <div className="about-skills">
            <h3 className="skills-title">Mes Compétences Techniques</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
