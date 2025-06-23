import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import "../stylesheets/Main.css";

function Main() {
  return (
    <section id="inicio" className="main-container">
      <h1 className="main-title">
        Hola, soy <span className="highlighted-name">Brandon</span>
      </h1>
      <h2 className="subtitle">desarrollador web</h2>
      <p className="description">
        Estoy centrado en la creación de aplicaciones web front-end receptivas
        que integran tecnologías de back-end.
      </p>

      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/brandonscardona"
          target="_blank"
          className="icon-circle"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/BrandonCardona"
          target="_blank"
          className="icon-circle"
        >
          <FaGithub />
        </a>
        <a href="#contact" className="icon-circle">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}

export default Main;
