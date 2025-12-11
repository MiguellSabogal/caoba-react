import React from 'react';

const CartModal = ({ isOpen, toggleCart, cart, removeFromCart }) => {
  if (!isOpen) return null;

  // 1. Calcular total (Precio * Cantidad)
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
        alert("El carrito está vacío. Agrega productos primero.");
        return;
    }

    let text = "Hola Caoba & Cuero, me gustaría realizar el siguiente pedido:\n\n";
    
    // 2. Mensaje de WhatsApp detallado
    cart.forEach(item => {
      const subtotal = item.price * item.quantity;
      text += `- ${item.name} (x${item.quantity}) - $${subtotal.toLocaleString('es-CO')}\n`;
    });
    
    text += `\n*Total a pagar: $${total.toLocaleString('es-CO')}*`;

    const encodedMessage = encodeURIComponent(text);
    // Asegúrate de poner tu número real aquí
    const phoneNumber = "573001855009"; 

    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
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
            cart.map((item) => (
              // Usamos item.id como key
              <div key={item.id} className="cart-item">
                <div>
                  <h4>
                    {item.name} <small>(x{item.quantity})</small>
                  </h4>
                  {/* Mostramos el subtotal de este item */}
                  <p>${(item.price * item.quantity).toLocaleString('es-CO')}</p>
                </div>
                <i 
                  className="fas fa-trash-alt btn-remove" 
                  // 3. Importante: Pasamos el ID para eliminar
                  onClick={() => removeFromCart(item.id)}
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