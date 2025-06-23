import React from "react";
import "../stylesheets/Form.css";

function Form() {
  return (
    <form className="contact-form">
      <div className="form-group">
        <label>NOMBRE</label>
        <input type="text" placeholder="Tu nombre" />
      </div>
      <div className="form-group">
        <label>TELEFONO</label>
        <input type="text" placeholder="Tu teléfono" />
      </div>
      <div className="form-group">
        <label>CORREO</label>
        <input type="email" placeholder="Tu correo electrónico" />
      </div>
      <div className="form-group">
        <label>ASUNTO</label>
        <input type="text" placeholder="Asunto del mensaje" />
      </div>
      <div className="form-group">
        <label>MENSAJE</label>
        <textarea placeholder="Tu mensaje" rows="6"></textarea>
      </div>
      <button type="submit" className="submit-button">
        ENVIAR MENSAJE
      </button>
    </form>
  );
}

export default Form;
