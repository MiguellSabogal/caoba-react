import { useState, useEffect } from 'react';

// CORRECCIÓN 1: Rutas de imágenes (Quitamos "/public")
// Asegúrate de que en tu carpeta física exista: proyecto/public/Imagenes/SlidePrincipal.png
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
    title: "Correas de Autor",
    desc: "Detalles hechos a mano para un ajuste perfecto.",
    bg: "/Imagenes/SlideCorrea.png",
    btnText: "Ver Correas",
    target: "productos"
  },
  {
    id: 3,
    title: "Billeteras",
    desc: "Diseños compactos y funcionales.",
    bg: "/Imagenes/SlideBilleteras.png",
    btnText: "Ver Billeteras",
    target: "productos"
  },
  {
    id: 4,
    title: "Carteras",
    desc: "Espacio y estilo en cada detalle.",
    bg: "/Imagenes/SlideCarteras.png",
    btnText: "Ver Carteras",
    target: "productos"
  },
];

const Hero = ({ setActiveTab }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Funciones para las flechas manuales
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    // Si es el primero (0), vamos al último. Si no, restamos 1.
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Timer automático
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    // Limpiamos el timer si el componente se desmonta o cambia el slide manualmente
    return () => clearInterval(timer);
  }, [currentSlide]); // Agregamos currentSlide aquí para reiniciar el contador si tocas una flecha

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
      
      {/* CORRECCIÓN 2: Botones de Flechas agregados */}
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