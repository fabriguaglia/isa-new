import React from 'react';
import './Primario.css';

// Importación de imágenes para Nivel Primario
import HeroPrimarioBg from '../../assets/images/primario/banner-primario.webp'; 

// Imágenes para las tarjetas de pilares/galería
import Pilar1 from '../../assets/images/primario/primario-1.webp';
import Pilar2 from '../../assets/images/primario/primario-2.webp';
import Pilar3 from '../../assets/images/primario/primario-3.webp';

// Imágenes de la sección de información
import PatternBg from '../../assets/images/nosotros/sobre-bg.webp'; 
import InfoPrimarioImg from '../../assets/images/primario/primario-info.webp';

const NivelPrimario = () => {
  return (
    <div className="primario-page-wrapper">
      {/* Sección Hero */}
      <section className="primario-hero-section">
        <div 
          className="primario-hero-bg" 
          style={{ backgroundImage: `url(${HeroPrimarioBg})` }}
        >
          <div className="primario-hero-overlay" />
          
          <div className="container primario-hero-container">
            <div className="primario-hero-text text-start">
              <h1 className="primario-hero-title">Nivel Primario</h1>
              <p className="primario-hero-subtitle">
                Formando estudiantes críticos, autónomos y preparados para los desafíos del mundo moderno.
              </p>
              {/* Botón translúcido alineado a la izquierda */}
              <a href="/contacto" className="primario-btn primario-btn-translucent mt-3">
                Admisiones
              </a>
            </div>
          </div>
        </div>

        {/* Tarjetas de pilares superpuestas */}
        <div className="container primario-features-wrapper">
          <div className="row g-3 g-md-4 primario-features-row">
            <div className="col-12 col-md-4">
              <div className="primario-pilar-card">
                <div className="primario-pilar-img-wrap">
                  <img src={Pilar1} alt="Excelencia Académica" />
                </div>
                <div className="primario-pilar-content">
                  <h4>Excelencia Académica</h4>
                  <p>Diseño curricular sólido que potencia las habilidades científicas, matemáticas y lingüísticas.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="primario-pilar-card">
                <div className="primario-pilar-img-wrap">
                  <img src={Pilar2} alt="Innovación y Tecnología" />
                </div>
                <div className="primario-pilar-content">
                  <h4>Innovación y Tecnología</h4>
                  <p>Incorporación de herramientas digitales y pensamiento computacional desde los primeros grados.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="primario-pilar-card">
                <div className="primario-pilar-img-wrap">
                  <img src={Pilar3} alt="Desarrollo Integral" />
                </div>
                <div className="primario-pilar-content">
                  <h4>Desarrollo Integral</h4>
                  <p>Actividades deportivas, artísticas y proyectos solidarios que afianzan los valores humanos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Información Detallada */}
      <section 
        className="primario-info-container-sec"
        style={{ '--primario-pattern-bg': `url(${PatternBg})` }}
      >
        <div className="container position-relative z-2">
          <div className="row align-items-center mt-4 mb-2">
            
            <div className="col-12 col-md-6 order-2 order-md-1 px-md-5 mt-4 mt-md-0">
              <div className="primario-info-block text-start">
                <h3 className="primario-section-title">Un espacio para consolidar saberes y proyectos de vida</h3>
                <p className="primario-text-desc mt-3">
                  En el Nivel Primario fomentamos la curiosidad intelectual y el razonamiento lógico, guiando a los alumnos para que descubran sus verdaderas pasiones y talentos en un ambiente seguro.
                </p>
                <p className="primario-text-desc">
                  Promovemos el trabajo en equipo, la resiliencia ante los retos académicos y el ejercicio responsable de la ciudadanía escolar.
                </p>
                <ul className="primario-custom-list mt-4 mb-4">
                  <li><i className="bi bi-check-circle-fill"></i> Inglés intensivo con certificación internacional</li>
                  <li><i className="bi bi-check-circle-fill"></i> Laboratorios de informática y ciencias naturales</li>
                  <li><i className="bi bi-check-circle-fill"></i> Acompañamiento pedagógico personalizado</li>
                </ul>

                {/* Botón al final de la información alineado a la izquierda */}
                <div className="primario-cta-wrapper text-start">
                  <a href="/contacto" className="primario-btn primario-btn-solid">
                    Admisiones
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 order-1 order-md-2 mb-4 mb-md-0">
              <div className="primario-img-box">
                <img src={InfoPrimarioImg} alt="Actividades en Nivel Primario" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default NivelPrimario;