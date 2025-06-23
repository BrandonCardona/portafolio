import React from "react";
import { useEffect } from "react";
import "../stylesheets/ProjectDetail.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetail = ({
  backgroundImage,
  title,
  subtitle,
  description,
  technologies,
  repoLink,
  demoLink,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-detail">
      <div
        className="project-banner"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="project-banner-overlay">
          <h1 className="project-title">{title}</h1>
          <p className="project-subtitle">{subtitle}</p>
        </div>
      </div>

      <div className="project-content">
        <div className="project-description">
          <p>{description}</p>
          <div className="project-buttons">
            {repoLink ? (
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="enabled-link"
              >
                <FaGithub className="icon" />
                Repositorio
              </a>
            ) : (
              <span className="disabled-link" title="Repositorio no disponible">
                <FaGithub className="icon" />
                Repositorio
              </span>
            )}
            {demoLink ? (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="enabled-link"
              >
                <FaExternalLinkAlt className="icon" />
                Demo
              </a>
            ) : (
              <span className="disabled-link" title="Demo no disponible">
                <FaExternalLinkAlt className="icon" />
                Demo
              </span>
            )}
          </div>
          <a href="/" className="project-back-link">
            Volver
          </a>
        </div>

        <div className="project-technologies">
          <h3>Tecnologías</h3>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>• {tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
