import React from 'react';
import './Terciario.css';

// Importación de imágenes para Nivel Terciario
import HeroTerciarioBg from '../../assets/images/terciario/banner-terciario.webp'; 

// Imágenes para las tarjetas de pilares/galería
import Pilar1 from '../../assets/images/terciario/terciario-1.webp';
import Pilar2 from '../../assets/images/terciario/terciario-2.webp';
import Pilar3 from '../../assets/images/terciario/terciario-3.webp';

// Imágenes de la sección de información
import PatternBg from '../../assets/images/nosotros/sobre-bg.webp'; 
import InfoTerciarioImg from '../../assets/images/terciario/terciario-info.webp';

const NivelTerciario = () => {
  return (
    <div className="terciario-page-wrapper">
      {/* Sección Hero */}
      <section className="terciario-hero-section">
        <div 
          className="terciario-hero-bg" 
          style={{ backgroundImage: `url(${HeroTerciarioBg})` }}
        >
          <div className="terciario-hero-overlay" />
          
          <div className="container terciario-hero-container">
            <div className="terciario-hero-text text-start">
              <h1 className="terciario-hero-title">Nivel Terciario</h1>
              <p className="terciario-hero-subtitle">
                Carreras superiores y tecnicaturas orientadas a la inserción laboral inmediata y la especialización profesional.
              </p>
              {/* Botón translúcido alineado a la izquierda */}
              <a href="/contacto" className="terciario-btn terciario-btn-translucent mt-3">
                Admisiones
              </a>
            </div>
          </div>
        </div>

        {/* Tarjetas de pilares superpuestas */}
        <div className="container terciario-features-wrapper">
          <div className="row g-3 g-md-4 terciario-features-row">
            <div className="col-12 col-md-4">
              <div className="terciario-pilar-card">
                <div className="terciario-pilar-img-wrap">
                  <img src={Pilar1} alt="Formación Profesional" />
                </div>
                <div className="terciario-pilar-content">
                  <h4>Formación Profesional</h4>
                  <p>Planes de estudio actualizados y adaptados a las demandas reales del mercado laboral actual.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="terciario-pilar-card">
                <div className="terciario-pilar-img-wrap">
                  <img src={Pilar2} alt="Prácticas y Convenios" />
                </div>
                <div className="terciario-pilar-content">
                  <h4>Prácticas y Convenios</h4>
                  <p>Articulación directa con empresas e instituciones para pasantías y experiencias de campo.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="terciario-pilar-card">
                <div className="terciario-pilar-img-wrap">
                  <img src={Pilar3} alt="Inserción Laboral" />
                </div>
                <div className="terciario-pilar-content">
                  <h4>Inserción Laboral</h4>
                  <p>Herramientas de gestión, liderazgo y especialización técnica para un crecimiento sostenido.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Información Detallada */}
      <section 
        className="terciario-info-container-sec"
        style={{ '--terciario-pattern-bg': `url(${PatternBg})` }}
      >
        <div className="container position-relative z-2">
          <div className="row align-items-center mt-4 mb-2">
            
            <div className="col-12 col-md-6 order-2 order-md-1 px-md-5 mt-4 mt-md-0">
              <div className="terciario-info-block text-start">
                <h3 className="terciario-section-title">Impulsá tu futuro profesional con títulos oficiales</h3>
                <p className="terciario-text-desc mt-3">
                  Nuestras carreras terciarias y tecnicaturas están diseñadas para dotar a los estudiantes de competencias prácticas y teóricas de alto rendimiento, preparándolos para liderar proyectos en entornos competitivos.
                </p>
                <p className="terciario-text-desc">
                  Contamos con un cuerpo docente activo en el ámbito profesional y laboratorios equipados para garantizar un aprendizaje dinámico y enfocado en la resolución de problemas reales.
                </p>
                <ul className="terciario-custom-list mt-4 mb-4">
                  <li><i className="bi bi-check-circle-fill"></i> Títulos con validez oficial nacional</li>
                  <li><i className="bi bi-check-circle-fill"></i> Cursadas con modalidades flexibles</li>
                  <li><i className="bi bi-check-circle-fill"></i> Bolsa de empleo y mentorías profesionales</li>
                </ul>

                {/* Botón al final de la información alineado a la izquierda */}
                <div className="terciario-cta-wrapper text-start">
                  <a href="/contacto" className="terciario-btn terciario-btn-solid">
                    Admisiones
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 order-1 order-md-2 mb-4 mb-md-0">
              <div className="terciario-img-box">
                <img src={InfoTerciarioImg} alt="Actividades en Nivel Terciario" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default NivelTerciario;