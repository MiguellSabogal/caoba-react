import { useState } from 'react';

const productsData = [
  { id: 1, name: "Billetera Marron", category: "billeteras", price: 50000, img: "Imagenes/Billeteras/Marron.jpg" },
  { id: 2, name: "Billetera Azul Oscura", category: "billeteras", price: 50000, img: "Imagenes/Billeteras/AzulOs.jpg" },
  { id: 3, name: "Billetera Negra", category: "billeteras", price: 50000, img: "Imagenes/Billeteras/Negra.jpg" },
  { id: 4, name: "Billetera Roja", category: "billeteras", price: 50000, img: "Imagenes/Billeteras/Roja.jpg" },
  { id: 5, name: "Correa Aguamarina", category: "correas", price: 60000, img: "Imagenes/Correas/Aguamarina.jpg" },
  { id: 6, name: "Correa Amarilla-Azul", category: "correas", price: 60000, img: "Imagenes/Correas/AmarilloAzul.jpg" },
  { id: 7, name: "Correa Tonos Azules", category: "correas", price: 60000, img: "Imagenes/Correas/Azules.jpg" },
  { id: 8, name: "Correa Rosa & Verde", category: "correas", price: 60000, img: "Imagenes/Correas/AzulesRosaVerde.jpg" },
  { id: 9, name: "Correa Azul Oscura", category: "correas", price: 60000, img: "Imagenes/Correas/AzulOs.jpg" },
  { id: 10, name: "Correa Beige & Gris", category: "correas", price: 60000, img: "Imagenes/Correas/BeigeGris.jpg" },
  { id: 11, name: "Correa Beige & Rosa", category: "correas", price: 60000, img: "Imagenes/Correas/BeigeRosa.jpg" },
  { id: 12, name: "Correa Blanco & Azul", category: "correas", price: 60000, img: "Imagenes/Correas/BlancoAzulOs.jpg" },
  { id: 13, name: "Correa Blanco & Café", category: "correas", price: 60000, img: "Imagenes/Correas/BlancoCafe.jpg" },
  { id: 14, name: "Correa Blanco & Naranja", category: "correas", price: 60000, img: "Imagenes/Correas/BlancoNaranja.jpg" },
  { id: 15, name: "Correa Combinación de Cafés", category: "correas", price: 60000, img: "Imagenes/Correas/Cafes.jpg" },
  { id: 16, name: "Correa Marrón", category: "correas", price: 60000, img: "Imagenes/Correas/CafesOs.jpg" },
  { id: 17, name: "Correa Cookie", category: "correas", price: 60000, img: "Imagenes/Correas/Cookie.jpg" },
  { id: 18, name: "Correa Gris", category: "correas", price: 60000, img: "Imagenes/Correas/Gris.jpg" },
  { id: 19, name: "Correa Tonos Oscuros de Marrón", category: "correas", price: 60000, img: "Imagenes/Correas/Marron.jpg" },
  { id: 20, name: "Correa Naranja", category: "correas", price: 60000, img: "Imagenes/Correas/Naranja.jpg" },
  { id: 21, name: "Correa Naranja & Azul", category: "correas", price: 60000, img: "Imagenes/Correas/NaranjaAzulOs.jpg" },
  { id: 22, name: "Correa Negra", category: "correas", price: 60000, img: "Imagenes/Correas/Negra.jpg" },
  { id: 23, name: "Correa Negra & Beige", category: "correas", price: 60000, img: "Imagenes/Correas/NegroBeige.jpg" },
  { id: 24, name: "Correa Tonos Pasteles", category: "correas", price: 60000, img: "Imagenes/Correas/Pastel.jpg" },
  { id: 25, name: "Correa Azul Rey", category: "correas", price: 60000, img: "Imagenes/Correas/Rey.jpg" },
  { id: 26, name: "Correa Rosa & Azul", category: "correas", price: 60000, img: "Imagenes/Correas/RosaAzul.jpg" },
  { id: 27, name: "Correa Rosa & Celeste", category: "correas", price: 60000, img: "Imagenes/Correas/RosaCeleste.jpg" },
  { id: 28, name: "Correa Rosa & Gris", category: "correas", price: 60000, img: "Imagenes/Correas/RosaGris.jpg" },
  { id: 29, name: "Correa Rosa & Negra", category: "correas", price: 60000, img: "Imagenes/Correas/RosaNegro.jpg" },
  { id: 30, name: "Correa Rosas", category: "correas", price: 60000, img: "Imagenes/Correas/Rosas.jpg" },
  { id: 31, name: "Correa Verde & Beige", category: "correas", price: 60000, img: "Imagenes/Correas/VerdeBeige.jpg" },
  { id: 32, name: "Correa Verde & Negro", category: "correas", price: 60000, img: "Imagenes/Correas/VerdeNegro.jpg" },
  { id: 33, name: "Set Caballero", category: "kits", price: 90000, img: "Imagenes/ImagenCombo.png" },
  { id: 34, name: "Cartera Blanca", category: "carteras", price: 120000, img: "Imagenes/Carteras/Blanca.jpg" },
  { id: 35, name: "Cartera Negra", category: "carteras", price: 120000, img: "Imagenes/Carteras/Negra.jpg" },
  { id: 36, name: "Cartera Rosa", category: "carteras", price: 120000, img: "Imagenes/Carteras/Rosa.jpg" },
  { id: 37, name: "Cartera Roja", category: "carteras", price: 120000, img: "Imagenes/Carteras/Roja.jpg" },
  { id: 38, name: "Cartera Cafe", category: "carteras", price: 120000, img: "Imagenes/Carteras/Cafe.jpg" },
];

// --- SUB-COMPONENTE: TARJETA INDIVIDUAL ---
// Este componente tiene su propio estado "quantity" independiente de los demás
const ProductItem = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(prev => prev + 1);
  
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="product-card fade-in">
      <div className="product-image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <span className="price">${product.price.toLocaleString('es-CO')}</span>
        
        {/* CONTROL DE CANTIDAD */}
        <div className="quantity-selector">
            <button className="qty-btn" onClick={decrease}>-</button>
            <span className="qty-number">{quantity}</span>
            <button className="qty-btn" onClick={increase}>+</button>
        </div>

        {/* Enviamos el producto Y la cantidad seleccionada */}
        <button 
          className="btn-secondary"
          onClick={() => addToCart(product, quantity)}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};


// --- COMPONENTE PRINCIPAL ---
const Products = ({ addToCart }) => {
  const [filter, setFilter] = useState('todos');

  const filteredProducts = filter === 'todos' 
    ? productsData 
    : productsData.filter(p => p.category === filter);

  return (
    <section id="productos" className="section tab-content active-tab">
      <div className="container">
        <h2 className="section-title">Nuestra Colección</h2>

        <div className="filter-menu">
          {['todos', 'correas', 'billeteras', 'carteras', 'kits'].map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            // Llamamos al sub-componente
            <ProductItem 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;