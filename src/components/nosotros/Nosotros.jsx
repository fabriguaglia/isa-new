import React from 'react';
import './Nosotros.css';

// Importación de imágenes
import HeroBg from '../assets/images/nosotros/banner-sobre.png';

// Imágenes de la galería histórica
import Historia1 from '../assets/images/nosotros/nosotros-1.jpg';
import Historia2 from '../assets/images/nosotros/nosotros-2.jpg';
import Historia3 from '../assets/images/nosotros/nosotros-3.jpg';

// Imágenes de la sección 45 Años
import PatternBg from '../assets/images/nosotros/sobre-bg.png';
import FundadoresImg from '../assets/images/nosotros/sobre-1.png';
import Logo45Años from '../assets/images/nosotros/45años.png';

const Nosotros = () => {
  return (
    <div className="nosotros-page">
      {/* Sección Hero Estática */}
      <section className="nosotros-hero">
        <div 
          className="hero-static-bg" 
          style={{ backgroundImage: `url(${HeroBg})` }}
        >
          <div className="hero-overlay" />
          
          <div className="container hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Nuestra historia y valores</h1>
              <p className="hero-subtitle">
                Años de trayectoria dedicados a la formación integral, la innovación y el compromiso
              </p>
            </div>
          </div>
        </div>

        {/* Galería inferior superpuesta */}
        <div className="container hero-gallery-wrapper">
          <div className="row g-2 g-md-4 hero-gallery">
            <div className="col-4">
              <div className="gallery-card-nosotros">
                <img src={Historia1} alt="Historia Instituto Santa Ana 1" />
              </div>
            </div>
            <div className="col-4">
              <div className="gallery-card-nosotros">
                <img src={Historia2} alt="Historia Instituto Santa Ana 2" />
              </div>
            </div>
            <div className="col-4">
              <div className="gallery-card-nosotros">
                <img src={Historia3} alt="Historia Instituto Santa Ana 3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 45 Años (Adaptada de Educación del Futuro) */}
      <section 
        className="fundadores-section"
        style={{ '--tech-bg-img': `url(${PatternBg})` }}
      >
        <div className="container fundadores-container">
          
          {/* Encabezado de la sección */}
          <div className="fundadores-header">
            <h2 className="fundadores-main-title">
              <span className="fundadores-cursive">45 Años</span>
              <br />
              FORMANDO A FUTUROS PROFESIONALES
            </h2>
            <img src={Logo45Años} alt="45 Aniversario" className="fundadores-logo-45" />
          </div>

          {/* Contenido principal: Imagen/Video y Cita */}
          <div className="row align-items-center mt-5 mb-3">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <div className="tech-card">
                <img src={FundadoresImg} alt="Hablan los fundadores, Rosa Yomha Fermina y Aníbal Gauto" />
              </div>
            </div>
            
            <div className="col-12 col-md-6 px-md-5">
              <div className="quote-block">
                <h3 className="quote-title">“Nuestra vocación siempre fue ser un segundo hogar”</h3>
                <p className="quote-author">— Rosa Yomha Fermina</p>
                <p className="quote-text">
                  «Más que una institución académica, construimos un espacio de contención, 
                  crecimiento y valores que perduran a lo largo de los años.»
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Nosotros;