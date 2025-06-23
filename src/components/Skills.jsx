import React from "react";
import "../stylesheets/Skills.css";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiJavascript, SiPhp, SiMysql, SiPython } from "react-icons/si";

const skills = [
  {
    icon: <SiJavascript className="icon" color="#F0DB4F" />,
    label: "JavaScript",
  },
  { icon: <FaReact className="icon" color="#61DBFB" />, label: "React" },
  {
    icon: <SiPython className="icon" color="#3776AB" />,
    label: "Python",
  },
  { icon: <SiPhp className="icon" color="#8892BF" />, label: "PHP" },
  { icon: <SiMysql className="icon" color="#00758F" />, label: "MySQL" },
  { icon: <FaGithub className="icon" color="#000000" />, label: "Github" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h3 className="skills-subtitle">HABILIDADES</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill.icon}
            <span>{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
