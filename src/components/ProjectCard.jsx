import React from "react";
import "../stylesheets/ProjectCard.css";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, tech, image, route }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="overlay">
        <h3>{title}</h3>
        <p>{tech}</p>
        <Link to={route} className="info-button">
          Información
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
