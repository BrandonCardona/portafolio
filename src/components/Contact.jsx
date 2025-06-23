import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import imgContacto from "../assets/contacto.png";
import "../stylesheets/Contact.css";

function Contact() {
  return (
    <div className="contact-info">
      <img src={imgContacto} alt="Brandon Cardona" className="profile-image" />
      <h3>Brandon Cardona</h3>
      <p className="contact-job-title">Desarrollador</p>
      <p className="contact-description">
        Estoy disponible para freelance o puestos de tiempo completo. Contáctame
        y hablemos.
      </p>

      <h4>CONECTEMOS</h4>
      <div className="contact-social-icons">
        <a
          href="https://www.linkedin.com/in/brandonscardona"
          target="_blank"
          className="contact-icon-circle"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/BrandonCardona"
          target="_blank"
          className="contact-icon-circle"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Contact;
