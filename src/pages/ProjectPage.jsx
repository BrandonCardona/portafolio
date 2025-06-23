import React from "react";
import ProjectCard from "../components/ProjectCard";
import imgGameStore from "../assets/storegame.png";
import imgTolibird from "../assets/tolibird.png";
import imgEcommerce from "../assets/ecommerce.png";
import imgGestorinventario from "../assets/gestorinventario.png";
import imgPracticas from "../assets/practica.png";
import "../stylesheets/ProjectPage.css";

const ProjectsPage = () => {
  return (
    <div id="projects" className="projects-container">
      <h2 className="projects-title">PROYECTOS</h2>
      <div className="projects-grid">
        <ProjectCard
          title="Game Store"
          tech="React JS"
          image={imgGameStore}
          route="/proyecto/gamestore"
        />
        <ProjectCard
          title="ToliBird AI"
          tech="Python"
          image={imgTolibird}
          route="/proyecto/tolibird"
        />
        <ProjectCard
          title="Ecommerce Food"
          tech="React JS"
          image={imgEcommerce}
          route="/proyecto/ecommerce"
        />
        <ProjectCard
          title="Gestor de Inventario"
          tech="PHP"
          image={imgGestorinventario}
          route="/proyecto/gestor-inventario"
        />
        <ProjectCard
          title="Gestor de PACS"
          tech="React JS"
          image={imgPracticas}
          route="/proyecto/gestor-pacs"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
