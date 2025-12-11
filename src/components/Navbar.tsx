import { useState } from 'react';
import logo from '/Imagenes/logoIn.png'; // Usando la ruta correcta de public

// Recibimos cartCount y toggleCart como "props"
const Navbar = ({ activeTab, setActiveTab, cartCount, toggleCart }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav id="navbar">
      <div className="logo">
        <img src={logo} alt="Logo Caoba" />
      </div>
      
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        {['inicio', 'productos', 'beneficios', 'contacto', 'como comprar'].map((tab) => (
          <li key={tab}>
            <a 
              href="#" 
              className={activeTab === tab ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleNavClick(tab); }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* ICONO DEL CARRITO */}
        <div className="cart-icon-container" onClick={toggleCart}>
          <i className="fas fa-shopping-bag"></i>
          <span id="cart-count">{cartCount}</span>
        </div>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;