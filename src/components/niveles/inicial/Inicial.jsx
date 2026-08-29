import React from 'react';
import './Inicial.css';

// Reutilizamos las mismas imágenes y rutas de maternal
import HeroInicialBg from '../../assets/images/maternal/banner-maternal.jpg'; 

// Imágenes para las tarjetas de pilares/galería
import Pilar1 from '../../assets/images/maternal/maternal-1.jpg';
import Pilar2 from '../../assets/images/maternal/maternal-2.jpg';
import Pilar3 from '../../assets/images/maternal/maternal-3.jpg';

// Imágenes de la sección de información
import PatternBg from '../../assets/images/nosotros/sobre-bg.png'; 
import InfoInicialImg from '../../assets/images/maternal/maternal-info.png';

const NivelInicial = () => {
  return (
    <div className="inicial-page-wrapper">
      {/* Sección Hero */}
      <section className="inicial-hero-section">
        <div 
          className="inicial-hero-bg" 
          style={{ backgroundImage: `url(${HeroInicialBg})` }}
        >
          <div className="inicial-hero-overlay" />
          
          <div className="container inicial-hero-container">
            <div className="inicial-hero-text text-start">
              <h1 className="inicial-hero-title">Nivel Inicial</h1>
              <p className="inicial-hero-subtitle">
                Estimulando la creatividad, el pensamiento crítico y la socialización en un espacio dinámico y feliz.
              </p>
              {/* Botón translúcido alineado a la izquierda */}
              <a href="/admisiones" className="inicial-btn inicial-btn-translucent mt-3">
                Admisiones
              </a>
            </div>
          </div>
        </div>

        {/* Tarjetas de pilares superpuestas */}
        <div className="container inicial-features-wrapper">
          <div className="row g-3 g-md-4 inicial-features-row">
            <div className="col-12 col-md-4">
              <div className="inicial-pilar-card">
                <div className="inicial-pilar-img-wrap">
                  <img src={Pilar1} alt="Aprendizaje Activo" />
                </div>
                <div className="inicial-pilar-content">
                  <h4>Aprendizaje Activo</h4>
                  <p>Propuestas pedagógicas basadas en proyectos, juego-trabajo y exploración constante.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="inicial-pilar-card">
                <div className="inicial-pilar-img-wrap">
                  <img src={Pilar2} alt="Comunidad y Valores" />
                </div>
                <div className="inicial-pilar-content">
                  <h4>Comunidad y Valores</h4>
                  <p>Fomento de la empatía, el respeto mutuo y la convivencia armónica entre pares.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="inicial-pilar-card">
                <div className="inicial-pilar-img-wrap">
                  <img src={Pilar3} alt="Expresión y Arte" />
                </div>
                <div className="inicial-pilar-content">
                  <h4>Expresión y Arte</h4>
                  <p>Espacios dedicados a la música, la plástica y la motricidad para potenciar su inventiva.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Información Detallada */}
      <section 
        className="inicial-info-container-sec"
        style={{ '--inicial-pattern-bg': `url(${PatternBg})` }}
      >
        <div className="container position-relative z-2">
          <div className="row align-items-center mt-4 mb-2">
            
            <div className="col-12 col-md-6 order-2 order-md-1 px-md-5 mt-4 mt-md-0">
              <div className="inicial-info-block text-start">
                <h3 className="inicial-section-title">Construyendo las bases para su futuro escolar</h3>
                <p className="inicial-text-desc mt-3">
                  En el Nivel Inicial acompañamos a los niños en su transición hacia un aprendizaje más estructurado, manteniendo el juego como el motor principal de su curiosidad e intelecto.
                </p>
                <p className="inicial-text-desc">
                  Nuestro equipo docente guía a cada alumno en la adquisición de hábitos, la resolución de problemas cotidianos y el fortalecimiento de su expresión oral y artística.
                </p>
                <ul className="inicial-custom-list mt-4 mb-4">
                  <li><i className="bi bi-check-circle-fill"></i> Iniciación a la lectoescritura y matemática lúdica</li>
                  <li><i className="bi bi-check-circle-fill"></i> Talleres especiales de arte y educación física</li>
                  <li><i className="bi bi-check-circle-fill"></i> Articulación continua con la escuela primaria</li>
                </ul>

                {/* Botón al final de la información alineado a la izquierda */}
                <div className="inicial-cta-wrapper text-start">
                  <a href="/admisiones" className="inicial-btn inicial-btn-solid">
                    Admisiones
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 order-1 order-md-2 mb-4 mb-md-0">
              <div className="inicial-img-box">
                <img src={InfoInicialImg} alt="Actividades en Nivel Inicial" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default NivelInicial;