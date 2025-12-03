import { useState } from 'react';

const productsData = [
  { id: 1, name: "Billetera Red Velvet", category: "billeteras", price: 50000, img: "Imagenes/ImagenBilletera.jpg" },
  { id: 2, name: "Correa Executive", category: "correas", price: 60000, img: "Imagenes/ImagenPrueba.jpg" },
  { id: 3, name: "Set Caballero", category: "kits", price: 90000, img: "Imagenes/ImagenCombo.png" },
  { id: 4, name: "Cartera Luxury", category: "carteras", price: 120000, img: "Imagenes/ImagenBilletera.jpg" },
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