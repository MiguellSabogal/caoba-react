const Benefits = () => {
  return (
    <section id="beneficios" className="section dark-bg tab-content active-tab">
      <div className="container">
        <h2 className="section-title">¿Por qué elegirnos?</h2>
        <div className="benefits-grid">
          
          <div className="benefit-item">
            <i className="fas fa-gem"></i>
            <h3>Calidad Premium</h3>
            <p>Seleccionamos el mejor cuero de grano completo para garantizar durabilidad y belleza.</p>
          </div>

          <div className="benefit-item">
            <i className="fas fa-hand-holding-heart"></i>
            <h3>Hecho a Mano</h3>
            <p>Cada pieza es ensamblada y cosida a mano por medio de conocimiento y años de experiencia.</p>
          </div>

          <div className="benefit-item">
            <i className="fas fa-shipping-fast"></i>
            <h3>Envío Seguro</h3>
            <p>Tu pedido llega en un empaque de lujo, protegido y listo para un regalo.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;