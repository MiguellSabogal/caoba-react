import { useState, useEffect } from 'react';

// Actualizamos Títulos y Botones en el array de slides
const slides = [
  {
    id: 1,
    title: "Elegancia Atemporal",
    desc: "El cuero genuino que define tu carácter.",
    bg: "/Imagenes/SlidePrincipal.png", 
    btnText: "Ver Colección",
    target: "productos"
  },
  {
    id: 2,
    title: "Cinturones Tejidos", // CAMBIO: Correas -> Cinturones
    desc: "Detalles hechos a mano para un ajuste perfecto.",
    bg: "/Imagenes/SlideCorrea.png",
    btnText: "Ver Cinturones",   // CAMBIO
    target: "productos"
  },
  {
    id: 3,
    title: "Billeteras para hombre",
    desc: "Diseños compactos y funcionales.",
    bg: "/Imagenes/SlideBilleteras.png",
    btnText: "Ver Billeteras",
    target: "productos"
  },
  {
    id: 4,
    title: "Portadocumentos",    // CAMBIO: Carteras -> Portadocumentos
    desc: "Espacio y estilo en cada detalle.",
    bg: "/Imagenes/SlideCarteras.png",
    btnText: "Ver Portadocumentos", // CAMBIO
    target: "productos"
  },
];

const Hero = ({ setActiveTab }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <header id="hero-slider">
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ 
            background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="hero-content fade-in">
            <h1>{slide.title}</h1>
            <p>{slide.desc}</p>
            <button 
              className="btn-primary" 
              onClick={() => setActiveTab(slide.target)}
            >
              {slide.btnText}
            </button>
          </div>
        </div>
      ))}
      
      <button className="slider-btn prev-btn" onClick={prevSlide}>
        <i className="fas fa-chevron-left"></i>
      </button>
      
      <button className="slider-btn next-btn" onClick={nextSlide}>
        <i className="fas fa-chevron-right"></i>
      </button>

    </header>
  );
};

export default Hero;