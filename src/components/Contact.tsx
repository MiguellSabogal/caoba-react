import { useState } from 'react';

const Contact = () => {
  // Estados para manejar el botón y el envío
  const [btnText, setBtnText] = useState("Enviar Mensaje");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el recargo de página
    setIsSubmitting(true);
    setBtnText("Enviando...");

    const formData = new FormData(e.target);

    try {

      await fetch("https://formsubmit.co/ajax/caobaycuero1@gmail.com", {
        method: "POST",
        body: formData
      });
      
      alert("¡Gracias! Tu mensaje ha sido enviado con éxito.");
      e.target.reset(); // Limpia los campos
      setBtnText("Mensaje Enviado");

    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al enviar. Intenta nuevamente.");
      setBtnText("Reintentar");
    } finally {
      setIsSubmitting(false);
      // Regresa el botón a la normalidad después de 3 segundos
      setTimeout(() => setBtnText("Enviar Mensaje"), 3000);
    }
  };

  return (
    <section id="contacto" className="section tab-content active-tab">
      <div className="container">
        <h2 className="section-title">Contáctanos</h2>
        <div className="contact-wrapper">
          
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Los 'name' son obligatorios para que FormSubmit sepa qué es qué */}
            <input type="text" name="nombre" placeholder="Nombre" required />
            <input type="email" name="email" placeholder="Correo Electrónico" required />
            <textarea name="mensaje" placeholder="Mensaje" rows="5" required></textarea>
            
            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {btnText}
            </button>
          </form>

          <div className="contact-info">
            <h3>Visítanos</h3>
            <p>Bogotá Distrito Capital, CP 111000</p>
            <p>caobaycuero1@gmail.com</p>
            <p>+57 300 1855009</p>
            
            <div className="social-icons">
              <a href="https://www.instagram.com/caobaycuerooficial?igsh=MW1vODRubTlyaTNlOA=="><i className="fab fa-instagram"></i></a>
              <a href="https://wa.me/573001855009?text=Quisiera%20saber%20m%C3%A1s%20de%20tus%20productos!!%20%F0%9F%8E%8A"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;