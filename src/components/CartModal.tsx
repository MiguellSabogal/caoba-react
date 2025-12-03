import React from 'react';

const CartModal = ({ isOpen, toggleCart, cart, removeFromCart }) => {
  if (!isOpen) return null; // Si está cerrado, no renderiza nada

  // Calcular total
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return alert("El carrito está vacío");

    let message = "Hola Caoba & Cuero, quiero realizar el siguiente pedido:%0A%0A";
    cart.forEach(item => {
      message += `- ${item.name} ($${item.price.toLocaleString('es-CO')})%0A`;
    });
    message += `%0A*Total a pagar: $${total.toLocaleString('es-CO')}*`;

    // REEMPLAZA CON TU NÚMERO
    window.open(`https://wa.me/573001234567?text=${message}`, '_blank');
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