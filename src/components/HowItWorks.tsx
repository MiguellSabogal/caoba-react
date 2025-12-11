const HowItWorks = ({ setActiveTab }) => {
  return (
    <section className="section" style={{ backgroundColor: '#1a1a1a', padding: '60px 0' }}>
      <div className="container">
        <h2 className="section-title">¿Cómo comprar?</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
          Es muy fácil. Sin registros largos ni tarjetas de crédito en la web.
        </p>

        <div className="steps-grid">
          
          {/* PASO 1 */}
          <div className="step-card">
            <div className="step-icon">
              <i className="fas fa-search"></i>
              <span className="step-number">1</span>
            </div>
            <h3>Elige tu Estilo</h3>
            <p>Navega por nuestra colección y agrega tus productos favoritos al carrito.</p>
          </div>

          {/* PASO 2 */}
          <div className="step-card">
            <div className="step-icon">
              <i className="fas fa-clipboard-list"></i>
              <span className="step-number">2</span>
            </div>
            <h3>Revisa tu Pedido</h3>
            <p>Ve al carrito, verifica tus productos e ingresa tus datos de envío.</p>
          </div>

          {/* PASO 3 */}
          <div className="step-card">
            <div className="step-icon">
              <i className="fab fa-whatsapp"></i>
              <span className="step-number">3</span>
            </div>
            <h3>Finaliza en WhatsApp</h3>
            <p>Te enviaremos al chat oficial para confirmar el pago y coordinar el despacho.</p>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button className="btn-primary" onClick={() => setActiveTab('productos')}>
            Empezar a Comprar
          </button>
        </div>

      </div>

      {/* ESTILOS INLINE (Para copiar rápido) */}
      <style>{`
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          text-align: center;
        }
        .step-card {
          padding: 20px;
          transition: transform 0.3s ease;
        }
        .step-card:hover {
          transform: translateY(-5px);
        }
        .step-icon {
          position: relative;
          width: 80px;
          height: 80px;
          background: #eee; /* Color suave de fondo */
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 2rem;
          color: #333;
        }
        .step-number {
          position: absolute;
          top: -5px;
          right: -5px;
          background: #333; /* Color de acento */
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
        .step-card h3 {
          margin-bottom: 10px;
          font-size: 1.2rem;
        }
        .step-card p {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;