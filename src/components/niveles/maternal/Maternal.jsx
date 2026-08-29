import React from 'react';
import './Maternal.css';

// Importación de imágenes (ajusta las rutas y nombres según tus assets)
import HeroMaternalBg from '../../assets/images/maternal/banner-maternal.jpg'; 

// Imágenes para las tarjetas de pilares/galería
import Pilar1 from '../../assets/images/maternal/maternal-1.jpg';
import Pilar2 from '../../assets/images/maternal/maternal-2.jpg';
import Pilar3 from '../../assets/images/maternal/maternal-3.jpg';

// Imágenes de la sección de información
import PatternBg from '../../assets/images/nosotros/sobre-bg.png'; 
import InfoMaternalImg from '../../assets/images/maternal/maternal-info.png';

const NivelMaternal = () => {
  return (
    <div className="maternal-page-wrapper">
      {/* Sección Hero */}
      <section className="maternal-hero-section">
        <div 
          className="maternal-hero-bg" 
          style={{ backgroundImage: `url(${HeroMaternalBg})` }}
        >
          <div className="maternal-hero-overlay" />
          
          <div className="container maternal-hero-container">
            <div className="maternal-hero-text text-start">
              <h1 className="maternal-hero-title">Nivel Maternal</h1>
              <p className="maternal-hero-subtitle">
                El primer paso en el viaje del aprendizaje, en un entorno seguro, cálido y lleno de amor.
              </p>
              {/* Botón translúcido alineado a la izquierda */}
              <a href="#admisiones" className="maternal-btn maternal-btn-translucent mt-3">
                Admisiones
              </a>
            </div>
          </div>
        </div>

        {/* Tarjetas de pilares superpuestas */}
        <div className="container maternal-features-wrapper">
          <div className="row g-3 g-md-4 maternal-features-row">
            <div className="col-12 col-md-4">
              <div className="maternal-pilar-card">
                <div className="maternal-pilar-img-wrap">
                  <img src={Pilar1} alt="Cuidado con amor" />
                </div>
                <div className="maternal-pilar-content">
                  <h4>Cuidado con Amor</h4>
                  <p>Acompañamiento afectivo y personalizado en cada etapa de su desarrollo temprano.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="maternal-pilar-card">
                <div className="maternal-pilar-img-wrap">
                  <img src={Pilar2} alt="Espacios Seguros" />
                </div>
                <div className="maternal-pilar-content">
                  <h4>Espacios Seguros</h4>
                  <p>Instalaciones diseñadas especialmente para la exploración y seguridad de la primera infancia.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="maternal-pilar-card">
                <div className="maternal-pilar-img-wrap">
                  <img src={Pilar3} alt="Estimulación Temprana" />
                </div>
                <div className="maternal-pilar-content">
                  <h4>Estimulación Temprana</h4>
                  <p>Actividades lúdicas enfocadas en el desarrollo motriz, cognitivo y socioemocional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Información Detallada */}
      <section 
        className="maternal-info-container-sec"
        style={{ '--maternal-pattern-bg': `url(${PatternBg})` }}
      >
        <div className="container position-relative z-2">
          <div className="row align-items-center mt-4 mb-2">
            
            <div className="col-12 col-md-6 order-2 order-md-1 px-md-5 mt-4 mt-md-0">
              <div className="maternal-info-block text-start">
                <h3 className="maternal-section-title">Un ambiente pensado para los más pequeños</h3>
                <p className="maternal-text-desc mt-3">
                  Entendemos que los primeros años son fundamentales para construir la confianza y la curiosidad de los niños. Nuestro nivel maternal funciona como una extensión del hogar familiar.
                </p>
                <p className="maternal-text-desc">
                  A través del juego, la música y el arte, nuestro equipo docente especializado guía a los niños para que descubran el mundo a su propio ritmo, respetando sus tiempos y fomentando su autonomía desde el primer día.
                </p>
                <ul className="maternal-custom-list mt-4 mb-4">
                  <li><i className="bi bi-check-circle-fill"></i> Salas adaptadas por edades</li>
                  <li><i className="bi bi-check-circle-fill"></i> Comunicación diaria con las familias</li>
                  <li><i className="bi bi-check-circle-fill"></i> Profesionales especializados en primera infancia</li>
                </ul>

                {/* Botón al final de la información alineado a la izquierda */}
                <div className="maternal-cta-wrapper text-start">
                  <a href="/admisiones" className="maternal-btn maternal-btn-solid">
                    Admisiones
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 order-1 order-md-2 mb-4 mb-md-0">
              <div className="maternal-img-box">
                <img src={InfoMaternalImg} alt="Actividades en Nivel Maternal" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default NivelMaternal;