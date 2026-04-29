import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "MediConnect",
      description: "Plateforme dédiée aux professionnels de santé pour la gestion des dossiers médicaux, consultations, et imagerie médicale (DICOM via Orthanc).",
      image: "/project_mediconnect.png",
      tech: ["React.js", "Node.js", "Express", "PostgreSQL", "DICOM/Orthanc"],
      link: "https://github.com/Mnafyndiaye/hopital-Connecter"
    },
    {
      id: 2,
      title: "WayConnect",
      description: "Plateforme web de covoiturage avec gestion des utilisateurs, publication d'offres de trajets et système de réservation.",
      image: "/project_wayconnect.png",
      tech: ["Node.js", "Express", "MySQL"],
      link: "https://github.com/Mnafyndiaye/WayConnect"
    },
    {
      id: 3,
      title: "Annuaire Senegal Business",
      description: "Une plateforme Full-Stack moderne conçue pour digitaliser et centraliser la visibilité des petites entreprises et artisans locaux au Sénégal.",
      image: "/project_annuaireSN.png",
      tech: ["React", "Node.js", "Express", "MySQL"],
      link: "https://github.com/Mnafyndiaye/Annuaires"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Expériences & Projets</h2>

        <div className="projects-grid">
          {projectList.map(project => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <a href={project.link} className="btn btn-primary">Voir le Projet</a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
