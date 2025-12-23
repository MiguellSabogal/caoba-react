import { useState } from 'react';

const productsData = [
  { id: 1, name: "Billetera en cuero color Miel", category: "billeteras", price: 45900, img: "Imagenes/Billeteras/Marron.jpg", images: ["Imagenes/Billeteras/Marron.jpg", "Imagenes/Billeteras/InteriorMarron.jpg"] },
  { id: 2, name: "Billetera en cuero color Azul Oscura", category: "billeteras", price: 45900, img: "Imagenes/Billeteras/AzulOs.jpg", images: ["Imagenes/Billeteras/AzulOs.jpg", "Imagenes/Billeteras/InteriorAzulOs.jpg"] },
  { id: 3, name: "Billetera en cuero color Negro", category: "billeteras", price: 45900, img: "Imagenes/Billeteras/Negra.jpg", images: ["Imagenes/Billeteras/Negra.jpg", "Imagenes/Billeteras/InteriorNegra.jpg"] },
  { id: 4, name: "Billetera en cuero color Rojo", category: "billeteras", price: 45900, img: "Imagenes/Billeteras/Roja.jpg", images: ["Imagenes/Billeteras/Roja.jpg", "Imagenes/Billeteras/InteriorRoja.jpg"] },

  { id: 5, name: "Cinturón Aguamarina", category: "cinturones", price: 59900, img: "Imagenes/Correas/Aguamarina.jpg" },
  { id: 6, name: "Cinturón Amarillo-Azul", category: "cinturones", price: 59900, img: "Imagenes/Correas/AmarilloAzul.jpg" },
  { id: 7, name: "Cinturón Tonos Azules", category: "cinturones", price: 59900, img: "Imagenes/Correas/Azules.jpg" },
  { id: 8, name: "Cinturón Rosa & Verde", category: "cinturones", price: 59900, img: "Imagenes/Correas/AzulesRosaVerde.jpg" },
  { id: 9, name: "Cinturón Azul Oscuro", category: "cinturones", price: 59900, img: "Imagenes/Correas/AzulOs.jpg" },
  { id: 10, name: "Cinturón Beige & Gris", category: "cinturones", price: 59900, img: "Imagenes/Correas/BeigeGris.jpg" },
  { id: 11, name: "Cinturón Beige & Rosa", category: "cinturones", price: 59900, img: "Imagenes/Correas/BeigeRosa.jpg" },
  { id: 12, name: "Cinturón Blanco & Azul", category: "cinturones", price: 59900, img: "Imagenes/Correas/BlancoAzulOs.jpg" },
  { id: 13, name: "Cinturón Blanco & Café", category: "cinturones", price: 59900, img: "Imagenes/Correas/BlancoCafe.jpg" },
  { id: 14, name: "Cinturón Blanco & Naranja", category: "cinturones", price: 59900, img: "Imagenes/Correas/BlancoNaranja.jpg" },
  { id: 15, name: "Cinturón Combinación Cafés", category: "cinturones", price: 59900, img: "Imagenes/Correas/Cafes.jpg" },
  { id: 16, name: "Cinturón Marrón", category: "cinturones", price: 59900, img: "Imagenes/Correas/CafesOs.jpg" },
  { id: 17, name: "Cinturón Cookie", category: "cinturones", price: 59900, img: "Imagenes/Correas/Cookie.jpg" },
  { id: 18, name: "Cinturón Gris", category: "cinturones", price: 59900, img: "Imagenes/Correas/Gris.jpg" },
  { id: 19, name: "Cinturón Tonos Marrón", category: "cinturones", price: 59900, img: "Imagenes/Correas/Marron.jpg" },
  { id: 20, name: "Cinturón Naranja", category: "cinturones", price: 59900, img: "Imagenes/Correas/Naranja.jpg" },
  { id: 21, name: "Cinturón Naranja & Azul", category: "cinturones", price: 59900, img: "Imagenes/Correas/NaranjaAzulOs.jpg" },
  { id: 22, name: "Cinturón Negro", category: "cinturones", price: 59900, img: "Imagenes/Correas/Negra.jpg" },
  { id: 23, name: "Cinturón Negro & Beige", category: "cinturones", price: 59900, img: "Imagenes/Correas/NegroBeige.jpg" },
  { id: 24, name: "Cinturón Tonos Pasteles", category: "cinturones", price: 59900, img: "Imagenes/Correas/Pastel.jpg" },
  { id: 25, name: "Cinturón Azul Rey", category: "cinturones", price: 59900, img: "Imagenes/Correas/Rey.jpg" },
  { id: 26, name: "Cinturón Rosa & Azul", category: "cinturones", price: 59900, img: "Imagenes/Correas/RosaAzul.jpg" },
  { id: 27, name: "Cinturón Rosa & Celeste", category: "cinturones", price: 59900, img: "Imagenes/Correas/RosaCeleste.jpg" },
  { id: 28, name: "Cinturón Rosa & Gris", category: "cinturones", price: 59900, img: "Imagenes/Correas/RosaGris.jpg" },
  { id: 29, name: "Cinturón Rosa & Negro", category: "cinturones", price: 59900, img: "Imagenes/Correas/RosaNegro.jpg" },
  { id: 30, name: "Cinturón Rosas", category: "cinturones", price: 59900, img: "Imagenes/Correas/Rosas.jpg" },
  { id: 31, name: "Cinturón Verde & Beige", category: "cinturones", price: 59900, img: "Imagenes/Correas/VerdeBeige.jpg" },
  { id: 32, name: "Cinturón Verde & Negro", category: "cinturones", price: 59900, img: "Imagenes/Correas/VerdeNegro.jpg" },
  
  // --- COMBOS ---
  { id: 33, name: "Combo Especial", category: "combos", price: 69900, img: "Imagenes/ImagenCombo.png", description:"Incluye un cinturón y una billetera de cuero a elección" },
  
  { id: 34, name: "Portadocumentos Azul Cielo", category: "portadocumentos", price: 19900, img: "Imagenes/Carteras/Blanca.jpg" },
  { id: 35, name: "Portadocumentos Negro Mate", category: "portadocumentos", price: 19900, img: "Imagenes/Carteras/Negra.jpg" },
  { id: 36, name: "Portadocumentos Lila", category: "portadocumentos", price: 19900, img: "Imagenes/Carteras/Rosa.jpg" },
  { id: 37, name: "Portadocumentos Beige", category: "portadocumentos", price: 19900, img: "Imagenes/Carteras/Roja.jpg" },
  { id: 38, name: "Portadocumentos Palo De Rosa", category: "portadocumentos", price: 19900, img: "Imagenes/Carteras/Cafe.jpg" },
  { id: 39, name: "Billetera en cuero color Coña", category: "billeteras", price: 45900, img: "Imagenes/Billeteras/Conia.jpg", images: ["Imagenes/Billeteras/Conia.jpg", "Imagenes/Billeteras/InteriorMarron.jpg"] },
  { id: 40, name: "Billetera en cuero color Café Oscuro", category: "billeteras", price: 45900, img: "Imagenes/Billeteras/Cafe oscuro.jpg", images: ["Imagenes/Billeteras/Cafe oscuro.jpg", "Imagenes/Billeteras/InteriorCafeOscuro.jpg"] },
  { id: 41, name: "Billetera en cuero color Hoja Seca", category: "billeteras", price: 45900, img: "Imagenes/Billeteras/HojaSeca.jpg", images: ["Imagenes/Billeteras/HojaSeca.jpg", "Imagenes/Billeteras/InteriorMarron.jpg"] },
  { id: 42, name: "Combo dupla", category: "combos", price: 79900, img: "Imagenes/Combos/DosCorreas.jpg", description:"Incluye dos cinturones a elección", images: ["Imagenes/Combos/Combo1.jpeg", "Imagenes/Combos/Combo1_1.jpeg", "Imagenes/Combos/Combo1_2.jpeg"]},
  { id: 43, name: "Combo Pareja", category: "combos", price: 99900, img: "Imagenes/Combos/Pareja.jpg", description:"Incluye dos cinturones y una billetera de cuero a elección", images: ["Imagenes/Combos/Combo2.jpeg", "Imagenes/Combos/Combo2_1.jpeg", "Imagenes/Combos/Combo2_2.jpeg", "Imagenes/Combos/Combo2_3.jpeg", "Imagenes/Combos/Combo2_4.jpeg", "Imagenes/Combos/Combo2_5.jpeg"]},
  { id: 44, name: "Combo trio", category: "combos", price: 109900, img: "Imagenes/Combos/Trio.jpg", description:"Incluye tres cinturones a elección", images: ["Imagenes/Combos/Combo3.jpeg", "Imagenes/Combos/Combo3_1.jpeg", "Imagenes/Combos/Combo3_2.jpeg"]},
  { id: 45, name: "Combo seguro", category: "combos", price: 55900, img: "Imagenes/Combos/Seguro.jpg", description:"Incluye una billetera de cuero y un portadocumentos de cuero a elección", images: ["Imagenes/Combos/Combo4.jpeg", "Imagenes/Combos/Combo4_1.jpeg", "Imagenes/Combos/Combo4_2.jpeg", "Imagenes/Combos/Combo4_3.jpeg", "Imagenes/Combos/Combo4_4.jpeg", "Imagenes/Combos/Combo4_5.jpeg"]},
  { id: 46, name: "Combo perfecto", category: "combos", price: 65900, img: "Imagenes/Combos/Perfecto.jpg", description:"Incluye un cinturón y un portadocumentos a elección", images: ["Imagenes/Combos/Combo5.jpeg", "Imagenes/Combos/Combo5_1.jpeg", "Imagenes/Combos/Combo5_2.jpeg", "Imagenes/Combos/Combo5_3.jpeg", "Imagenes/Combos/Combo5_4.jpeg", "Imagenes/Combos/Combo5_5.jpeg"]},
  { id: 47, name: "Combo para regalar", category: "combos", price: 89900, img: "Imagenes/Combos/Regalar.jpg", description:"Incluye un cinturón, una billetera de cuero y un portadocumentos a elección", images: ["Imagenes/Combos/Combo6.jpeg", "Imagenes/Combos/Combo6_1.jpeg", "Imagenes/Combos/Combo6_2.jpeg", "Imagenes/Combos/Combo6_3.jpeg", "Imagenes/Combos/Combo6_4.jpeg"]},
  { id: 48, name: "Combo X3", category: "combos", price: 49900, img: "Imagenes/Combos/Portadocumentos.jpg", description:"Incluye tres portadocumentos a elección", images: ["Imagenes/Combos/Combo7.jpeg", "Imagenes/Combos/Combo7_1.jpeg", "Imagenes/Combos/Combo7_2.jpeg", "Imagenes/Combos/Combo7_3.jpeg"]},
  { id: 49, name: "Combo X5", category: "combos", price: 69900, img: "Imagenes/Combos/Portadocumentos.jpg", description:"Incluye cinco portadocumentos a elección", images: ["Imagenes/Combos/Combo7.jpeg", "Imagenes/Combos/Combo7_1.jpeg", "Imagenes/Combos/Combo7_2.jpeg"] },
  { id: 50, name: "Cinturón Blanco", category: "cinturones", price: 59900, img: "Imagenes/Correas/Blanca.jpeg" },
  { id: 51, name: "Cinturón Azul Elegante", category: "cinturones", price: 59900, img: "Imagenes/Correas/AzulElegante.jpeg"},
  { id: 52, name: "Cinturón Blanco y Negro", category: "cinturones", price: 59900, img: "Imagenes/Correas/Neutros.jpeg"},
];

// --- MINI COMPONENTE: SLIDER DE IMÁGENES ---
const ProductImageSlider = ({ images, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Si no hay imágenes o el array está vacío, no mostramos nada (seguridad)
  if (!images || images.length === 0) return null;

  const nextSlide = (e) => {
    e.preventDefault(); // Evita comportamientos raros
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="product-image-slider-container">
      {/* La imagen actual */}
      <img 
        src={images[currentIndex]} 
        alt={`${altText} - Vista ${currentIndex + 1}`} 
        className="product-slider-img"
      />

      {/* Solo mostramos flechas y puntos si hay MÁS de una imagen */}
      {images.length > 1 && (
        <>
          {/* Flechas de navegación */}
          <button className="mini-slider-arrow left" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="mini-slider-arrow right" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Puntos indicadores abajo */}
          <div className="slider-dots-container">
            {images.map((_, idx) => (
              <span 
                key={idx} 
                className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)} // Clic en el punto para ir a esa foto
              ></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ProductItem = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className="product-card fade-in">
      <div className="product-image">
        {product.images && product.images.length > 1 ? (
          // Opción A: Tiene múltiples imágenes, usamos el slider
          <ProductImageSlider images={product.images} altText={product.name} />
        ) : (
          // Opción B: Solo tiene una imagen, usamos la normal
          <img src={product.img} alt={product.name} />
        )}
      </div>
      
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <span className="price">${product.price.toLocaleString('es-CO')}</span>
        
        <div className="quantity-selector">
            <button className="qty-btn" onClick={decrease}>-</button>
            <span className="qty-number">{quantity}</span>
            <button className="qty-btn" onClick={increase}>+</button>
        </div>

        <button 
          className="btn-secondary"
          onClick={() => addToCart(product, quantity)}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

const Products = ({ addToCart }) => {
  const [filter, setFilter] = useState('todos');
  
  // MEJORA: Nuevo estado para la búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Lógica de filtrado combinada (Categoría + Búsqueda)
  const filteredProducts = productsData.filter(product => {
    // 1. Cumple categoría?
    const matchesCategory = filter === 'todos' ? true : product.category === filter;
    // 2. Cumple búsqueda? (Convertimos todo a minúsculas para que no importen mayúsculas)
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { key: 'todos', label: 'Todos' },
    { key: 'cinturones', label: 'Cinturones' },
    { key: 'billeteras', label: 'Billeteras' },
    { key: 'portadocumentos', label: 'Portadocumentos' }, 
    { key: 'combos', label: 'Combos' } 
  ];

  return (
    <section id="productos" className="section tab-content active-tab">
      <div className="container">
        <h2 className="section-title">Nuestra Colección</h2>

        {/* MEJORA: Barra de Búsqueda y Filtros juntos */}
        <div className="controls-container" style={{ marginBottom: '30px' }}>
          
          {/* Input de Búsqueda */}
          <div className="search-bar" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <input 
              type="text" 
              placeholder="🔍 Buscar producto..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: '10px 15px',
                width: '100%',
                maxWidth: '400px',
                borderRadius: '25px',
                border: '1px solid #ddd',
                fontSize: '1rem'
              }}
            />
          </div>

          <div className="filter-menu">
            {categories.map(cat => (
              <button 
                key={cat.key}
                className={`filter-btn ${filter === cat.key ? 'active' : ''}`}
                onClick={() => setFilter(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mensaje si no hay resultados */}
        {filteredProducts.length === 0 ? (
           <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
             <i className="fas fa-search" style={{ fontSize: '2rem', marginBottom: '10px', opacity: 0.5 }}></i>
             <p>No encontramos productos que coincidan con tu búsqueda.</p>
           </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductItem 
                key={product.id} 
                product={product} 
                addToCart={addToCart} 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;