import React, { useState } from "react";
import "../stylesheets/Header.css";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (targetId) => {
    setMenuAbierto(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(targetId);
      }, 100);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <nav className="nav-container">
        {!menuAbierto && (
          <button
            className="menu-toggle"
            onClick={() => setMenuAbierto(true)}
            aria-label="Abrir menú"
          >
            ☰
          </button>
        )}

        <ul className={`nav-list ${menuAbierto ? "open" : ""}`}>
          <li className="close-button-mobile">
            <button
              onClick={() => setMenuAbierto(false)}
              aria-label="Cerrar menú"
            >
              ✖
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick("inicio")}>INICIO</button>
          </li>
          <li>
            <button onClick={() => handleNavClick("about")}>CONÓCEME</button>
          </li>
          <li>
            <button onClick={() => handleNavClick("skills")}>
              HABILIDADES
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick("projects")}>
              PROYECTOS
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick("contact")}>CONTACTO</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
