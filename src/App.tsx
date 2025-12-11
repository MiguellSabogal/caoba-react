import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartModal from './components/CartModal'; // Importamos el carrito

function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  
  // --- LÓGICA DEL CARRITO ---
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // --- Modificar esta función dentro de App.jsx ---
  
  const addToCart = (product, quantity) => {
    // Creamos un array con el producto repetido "quantity" veces
    // Ejemplo: Si quantity es 3, crea [producto, producto, producto]
    const newItems = Array.from({ length: quantity }, () => product);
    
    setCart([...cart, ...newItems]);
    
    alert(`Se agregaron ${quantity} unidades de ${product.name}`);
    setIsCartOpen(true); 
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  // ---------------------------

  return (
    <div className="app-container">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        cartCount={cart.length} // Pasamos el número de items
        toggleCart={toggleCart} // Pasamos la función para abrir
      />

      <CartModal 
        isOpen={isCartOpen} 
        toggleCart={toggleCart} 
        cart={cart} 
        removeFromCart={removeFromCart}
      />

      <main>
        {activeTab === 'inicio' && <Hero setActiveTab={setActiveTab} />}
        {/* Pasamos la función addToCart a los productos */}
        {activeTab === 'productos' && <Products addToCart={addToCart} />}
        {activeTab === 'beneficios' && <Benefits />}
        {activeTab === 'contacto' && <Contact />}
      </main>

      <Footer />
      
      <a href="https://wa.me/573001234567" className="btn-whatsapp" target="_blank" rel="noreferrer">
        <i className="fas fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default App;