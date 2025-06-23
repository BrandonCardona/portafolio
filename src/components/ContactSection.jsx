import React from "react";
import "../stylesheets/ContactSection.css";
import Contact from "./Contact";
import Form from "./Form";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-contact-title">CONTACTAME</h2>
      <div className="contact-container">
        <Contact />
        <Form />
      </div>
    </section>
  );
};

export default ContactSection;
