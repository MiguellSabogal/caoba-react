import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartModal from './components/CartModal';

function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  
  // --- ESTADO PARA NOTIFICACIONES (Adiós Alerts) ---
  const [notification, setNotification] = useState({ show: false, msg: '', type: '' });

  const showNotification = (msg, type = 'success') => {
    setNotification({ show: true, msg, type });
    // Se oculta sola a los 3 segundos
    setTimeout(() => {
      setNotification({ show: false, msg: '', type: '' });
    }, 3000);
  };

  // --- LÓGICA DEL CARRITO ---
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      return [];
    }
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productToAdd, quantityToAdd) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === productToAdd.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      } else {
        return [...prevCart, { ...productToAdd, quantity: quantityToAdd }];
      }
    });
    
    // Opcional: Mostrar notificación al agregar
    // showNotification(`Agregado: ${productToAdd.name}`, 'success'); 
    setIsCartOpen(true);
  };

  const removeFromCart = (idToRemove) => {
    setCart(cart.filter((item) => item.id !== idToRemove));
    showNotification("Producto eliminado", "error"); // Feedback visual
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const totalItemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app-container">
      
      {/* COMPONENTE VISUAL DE LA NOTIFICACIÓN */}
      <div className={`notification-toast ${notification.show ? 'show' : ''} ${notification.type}`}>
        {notification.type === 'success' && <i className="fas fa-check-circle"></i>}
        {notification.type === 'error' && <i className="fas fa-exclamation-circle"></i>}
        {notification.msg}
      </div>

      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        cartCount={totalItemsInCart} 
        toggleCart={toggleCart} 
      />

      {/* Pasamos showNotification al Modal */}
      <CartModal 
        isOpen={isCartOpen} 
        toggleCart={toggleCart} 
        cart={cart} 
        removeFromCart={removeFromCart}
        showNotification={showNotification} 
      />

      <main>
        {activeTab === 'inicio' && <Hero setActiveTab={setActiveTab} />}
        {activeTab === 'productos' && <Products addToCart={addToCart} />}
        {activeTab === 'beneficios' && <Benefits />}
        
        {/* Pasamos showNotification a Contacto */}
        {activeTab === 'contacto' && <Contact showNotification={showNotification} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;