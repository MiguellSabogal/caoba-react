import { useState, useEffect } from 'react';

// Lista de Ciudades (Puedes agregar más si lo necesitas)
const cities = [
  "Bogotá", "Medellín", "Cali", "Barranquilla", 
  "Bucaramanga", "Cartagena", "Pereira", "Otras Ciudades"
];

const CartModal = ({ isOpen, toggleCart, cart, removeFromCart, showNotification }) => {
  // --- ESTADOS ---
  // Control de pasos (1: Lista Productos, 2: Formulario Datos)
  const [step, setStep] = useState(1);
  
  // Datos del Cliente
  const [name, setName] = useState("");
  const [selectedCity, setSelectedCity] = useState("Bogotá");
  const [fullAddress, setFullAddress] = useState("");

  // Reiniciar al paso 1 cada vez que se abre el modal
  useEffect(() => {
    if (isOpen) setStep(1);
  }, [isOpen]);

  if (!isOpen) return null;

  // Cálculos
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // --- FUNCIONES ---

  // Ir al Paso 2
  const goToCheckout = () => {
    if (cart.length === 0) {
      showNotification("El carrito está vacío", "error");
      return;
    }
    setStep(2);
  };

  // Finalizar Compra
  const handleFinalSubmit = () => {
    // Validación simple
    if (!name.trim() || !fullAddress.trim()) {
      showNotification("Por favor completa tu Nombre y Dirección", "error");
      return;
    }

    // Construcción del Mensaje
    let text = "Hola Caoba & Cuero, me gustaría realizar el siguiente pedido:\n\n";
    
    cart.forEach(item => {
      const subtotal = item.price * item.quantity;
      text += `- ${item.name} (x${item.quantity}) - $${subtotal.toLocaleString('es-CO')}\n`;
    });
    
    text += `\n*Total a pagar: $${total.toLocaleString('es-CO')}*`;
    
    text += `\n\n------------------------------`;
    text += `\n*Datos de Envío:*`;
    text += `\n👤 Nombre: ${name}`;
    text += `\n📍 Ciudad: ${selectedCity}`;
    text += `\n🏠 Dirección: ${fullAddress}`;

    const encodedMessage = encodeURIComponent(text);
    // TU NÚMERO DE TELÉFONO AQUÍ
    const phoneNumber = "573001855009"; 

    // Abrir WhatsApp
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
    
    // Opcional: Cerrar el carrito después de enviar
    // toggleCart();
  };

  return (
    <div className="cart-modal">
      <div className="cart-content">
        
        {/* --- HEADER DINÁMICO --- */}
        <div className="cart-header">
          {step === 1 ? (
            <h3>Tu Carrito <small>({totalItems} items)</small></h3>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i 
                className="fas fa-arrow-left" 
                style={{ cursor: 'pointer', color: '#333' }} 
                onClick={() => setStep(1)} // Botón para volver atrás
                title="Volver a los productos"
              ></i>
              <h3>Datos de Envío</h3>
            </div>
          )}
          <span className="close-cart" onClick={toggleCart}>&times;</span>
        </div>
        
        {/* --- CUERPO DEL MODAL --- */}
        <div className="cart-body" style={{ flex: 1, overflowY: 'auto', marginBottom: '15px' }}>
          
          {/* PASO 1: LISTA DE PRODUCTOS */}
          {step === 1 && (
            <div className="cart-items">
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px 0', color: '#888' }}>
                  <i className="fas fa-shopping-basket" style={{ fontSize: '3rem', marginBottom: '10px', opacity: 0.5 }}></i>
                  <p>Tu carrito está vacío.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div>
                      <h4>{item.name} <small>(x{item.quantity})</small></h4>
                      <p>${(item.price * item.quantity).toLocaleString('es-CO')}</p>
                    </div>
                    <i 
                      className="fas fa-trash-alt btn-remove" 
                      onClick={() => removeFromCart(item.id)}
                    ></i>
                  </div>
                ))
              )}
            </div>
          )}

          {/* PASO 2: FORMULARIO + MICRO-TUTORIAL */}
          {step === 2 && (
            <div className="checkout-form fade-in">
              
              {/* Resumen pequeño */}
              <div style={{ background: '#1a1a1a', padding: '10px', borderRadius: '5px', marginBottom: '20px', fontSize: '0.9rem', border: '1px solid #eee' }}>
                <strong>Resumen:</strong> {totalItems} productos por <strong style={{color: '#767676ff'}}>${total.toLocaleString('es-CO')}</strong>
              </div>

              <label style={labelStyle}>Nombre Completo</label>
              <input 
                type="text" 
                placeholder="Ej: Juan Pérez" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
                autoFocus
              />

              <label style={labelStyle}>Ciudad de Destino</label>
              <select 
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                style={inputStyle}
              >
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>

              <label style={labelStyle}>Dirección de Entrega</label>
              <textarea 
                placeholder="Ej: Calle 123 #45-67, Torre 2, Apto 505, Barrio El Prado" 
                value={fullAddress}
                onChange={(e) => setFullAddress(e.target.value)}
                rows="3"
                style={{...inputStyle, resize: 'none', height: 'auto'}}
              ></textarea>
              <p style={{fontSize: '0.75rem', color: '#888', marginTop: '-5px', marginBottom: '15px'}}>
                * Incluye barrio, conjunto o detalles adicionales aquí.
              </p>

              {/* --- CAJA DE CONFIANZA (MICRO-TUTORIAL) --- */}
              <div style={infoBoxStyle}>
                <i className="fab fa-whatsapp" style={{ color: '#25D366', fontSize: '1.4rem' }}></i>
                <div>
                  <small style={{ display: 'block', fontWeight: 'bold', marginBottom: '3px', color: '#333' }}>
                    ¿Qué pasa al confirmar?
                  </small>
                  <small style={{ color: '#555', lineHeight: '1.4' }}>
                    Serás redirigido al chat de WhatsApp con tu pedido listo. Allí coordinaremos el pago y el despacho de forma segura.
                  </small>
                </div>
              </div>
              {/* ------------------------------------------- */}

            </div>
          )}
        </div>

        {/* --- FOOTER: BOTONES --- */}
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span>${total.toLocaleString('es-CO')}</span>
          </div>

          {step === 1 ? (
            <button className="btn-primary" onClick={goToCheckout}>
              Continuar Compra
            </button>
          ) : (
            <button className="btn-whatsapp-confirm" onClick={handleFinalSubmit}>
              <i className="fab fa-whatsapp"></i> Confirmar Pedido
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// --- ESTILOS INLINE (Para evitar tocar CSS externo) ---

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '15px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: '15px',
  backgroundColor: '#fff',
  fontFamily: 'inherit'
};

const labelStyle = {
  display: 'block',
  marginBottom: '6px',
  fontSize: '0.9rem',
  fontWeight: '600',
  color: '#444'
};

const infoBoxStyle = {
  display: 'flex',
  gap: '15px',
  backgroundColor: '#eefcf3',
  border: '1px solid #c8e6d2',
  padding: '15px',
  borderRadius: '8px',
  marginTop: '10px',
  marginBottom: '10px',
  alignItems: 'start'
};

export default CartModal;