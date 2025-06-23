import React from "react";
import "../stylesheets/About.css";
import aboutImage from "../assets/about.png";

function About() {
  return (
    <section id="about" className="about-container">
      <div className="about-text">
        <p className="section-label">CONOCEME</p>
        <h2 className="section-title">¿Quién soy yo?</h2>
        <p className="paragraph">
          Soy un desarrollador con experiencia en el uso del framework ReactJS
          enfocado en crear soluciones eficientes y bien estructuradas. Me
          especializo en el desarrollo de aplicaciones back-end, donde me siento
          más cómodo trabajando con Java, PHP y sus respectivos ecosistemas.
          También tengo un fuerte dominio en el manejo de bases de datos
          relacionales (SQL), diseñando estructuras limpias y optimizadas que se
          adaptan a las necesidades de cada proyecto.
        </p>
        <p className="paragraph">
          Soy una persona curiosa y apasionada por la tecnología. Me encanta
          aprender nuevas herramientas, entender cómo funcionan y aplicarlas de
          manera estratégica. Para mí, ser un buen desarrollador no es dominar
          un solo lenguaje, sino saber elegir la mejor tecnología para cada
          reto.
        </p>
        <a href="#projects" className="projects-link">
          Mira algunos de mis últimos proyectos.
        </a>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="Persona programando en una Laptop" />
      </div>
    </section>
  );
}

export default About;
