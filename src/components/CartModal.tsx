import React from 'react';

const CartModal = ({ isOpen, toggleCart, cart, removeFromCart }) => {
  if (!isOpen) return null; // Si está cerrado, no renderiza nada

  // Calcular total
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    // 1. Validación de seguridad
    if (cart.length === 0) {
        alert("El carrito está vacío. Agrega productos primero.");
        return;
    }

    // 2. Construcción del mensaje profesional
    // Usamos \n para saltos de línea que luego codificaremos
    let text = "Hola Caoba & Cuero, me gustaría realizar el siguiente pedido:\n\n";
    
    cart.forEach(item => {
      text += `- ${item.name} ($${item.price.toLocaleString('es-CO')})\n`;
    });
    
    text += `\n*Total a pagar: $${total.toLocaleString('es-CO')}*`;

    // 3. Codificación de URL (La parte mágica para que no falle)
    const encodedMessage = encodeURIComponent(text);
    
    // 4. Tu número de teléfono (CÁMBIALO AQUÍ)
    // Formato: Código de país (57) + Número. SIN espacios ni el símbolo +
    const phoneNumber = "573001234567"; 

    // 5. Abrir WhatsApp
    window.open(`https://api.whatsapp.com/send?phone=573001855009&text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="cart-modal" style={{ display: 'flex' }}>
      <div className="cart-content">
        <div className="cart-header">
          <h3>Tu Carrito</h3>
          <span className="close-cart" onClick={toggleCart}>&times;</span>
        </div>
        
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-msg">Tu carrito está vacío.</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div>
                  <h4>{item.name}</h4>
                  <p>${item.price.toLocaleString('es-CO')}</p>
                </div>
                <i 
                  className="fas fa-trash-alt btn-remove" 
                  onClick={() => removeFromCart(index)}
                ></i>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span>${total.toLocaleString('es-CO')}</span>
          </div>
          <button className="btn-primary" onClick={handleCheckout}>
            Pedir por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;