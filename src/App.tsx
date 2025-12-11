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

  // --- LÓGICA DEL CARRITO ---
  
  // 1. Inicializar estado cargando desde LocalStorage si existe
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error al cargar el carrito", error);
      return [];
    }
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 2. Guardar en LocalStorage cada vez que el carrito cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // 3. Función addToCart optimizada (Agrupa por ID)
  const addToCart = (productToAdd, quantityToAdd) => {
    setCart((prevCart) => {
      // Verificamos si el producto ya existe en el carrito
      const itemExists = prevCart.find((item) => item.id === productToAdd.id);

      if (itemExists) {
        // Si existe, actualizamos solo la cantidad
        return prevCart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      } else {
        // Si no existe, lo agregamos con la cantidad seleccionada
        return [...prevCart, { ...productToAdd, quantity: quantityToAdd }];
      }
    });

    // Abrimos el carrito automáticamente para dar feedback
    setIsCartOpen(true);
  };

  // 4. Función removeFromCart (Ahora elimina por ID)
  const removeFromCart = (idToRemove) => {
    setCart(cart.filter((item) => item.id !== idToRemove));
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  // Calcular cantidad total de ITEMS (no solo filas) para la burbuja del navbar
  const totalItemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app-container">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        cartCount={totalItemsInCart} // Muestra el total real de productos
        toggleCart={toggleCart} 
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
      
      <a href="https://wa.me/573001855009" className="btn-whatsapp" target="_blank" rel="noreferrer">
        <i className="fas fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default App;