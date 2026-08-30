import React from 'react';
import './Secundario.css';

// Importación de imágenes generales para Nivel Secundario
import HeroSecundarioBg from '../../assets/images/secundario/banner-secundario.jpg'; 
import Pilar1 from '../../assets/images/secundario/secundario-1.jpg';
import Pilar2 from '../../assets/images/secundario/secundario-2.jpg';
import Pilar3 from '../../assets/images/secundario/secundario-3.jpg';
import PatternBg from '../../assets/images/nosotros/sobre-bg.png'; 
import InfoSecundarioImg from '../../assets/images/secundario/secundario-info.jpg';

// Imágenes específicas para las 3 modalidades (2 por cada una)
import ModProg1 from '../../assets/images/secundario/mod-prog-1.jpg';
import ModProg2 from '../../assets/images/secundario/mod-prog-2.jpg';
import ModCom1 from '../../assets/images/secundario/mod-com-1.png';
import ModCom2 from '../../assets/images/secundario/mod-com-2.jpg';
import ModTur1 from '../../assets/images/secundario/mod-tur-1.jpg';
import ModTur2 from '../../assets/images/secundario/mod-tur-2.jpg';

const NivelSecundario = () => {
  return (
    <div className="secundario-page-wrapper">
      {/* Sección Hero */}
      <section className="secundario-hero-section">
        <div 
          className="secundario-hero-bg" 
          style={{ backgroundImage: `url(${HeroSecundarioBg})` }}
        >
          <div className="secundario-hero-overlay" />
          
          <div className="container secundario-hero-container">
            <div className="secundario-hero-text text-start">
              <h1 className="secundario-hero-title">Nivel Secundario</h1>
              <p className="secundario-hero-subtitle">
                Preparando a los jóvenes para la educación superior y el mundo profesional con trayectorias orientadas.
              </p>
              {/* Botón translúcido alineado a la izquierda */}
              <a href="/admisiones" className="secundario-btn secundario-btn-translucent mt-3">
                Admisiones
              </a>
            </div>
          </div>
        </div>

        {/* Tarjetas de pilares superpuestas */}
        <div className="container secundario-features-wrapper">
          <div className="row g-3 g-md-4 secundario-features-row">
            <div className="col-12 col-md-4">
              <div className="secundario-pilar-card">
                <div className="secundario-pilar-img-wrap">
                  <img src={Pilar1} alt="Pensamiento Crítico" />
                </div>
                <div className="secundario-pilar-content">
                  <h4>Pensamiento Crítico</h4>
                  <p>Desarrollo de argumentos sólidos, análisis de contextos sociohistóricos y resolución de problemas.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="secundario-pilar-card">
                <div className="secundario-pilar-img-wrap">
                  <img src={Pilar2} alt="Orientación Vocacional" />
                </div>
                <div className="secundario-pilar-content">
                  <h4>Orientación Vocacional</h4>
                  <p>Acompañamiento personalizado en la elección de su futuro universitario y laboral.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="secundario-pilar-card">
                <div className="secundario-pilar-img-wrap">
                  <img src={Pilar3} alt="Tecnología y Idiomas" />
                </div>
                <div className="secundario-pilar-content">
                  <h4>Tecnología y Idiomas</h4>
                  <p>Certificaciones, lenguajes informáticos avanzados e idiomas extranjeros intensivos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Modalidades Especiales (Técnico, Comunicación, Turismo) */}
      <section className="secundario-modalidades-sec py-5">
        <div className="container">
          <div className="text-start mb-5">
            <h2 className="secundario-section-title">Nuestras Modalidades</h2>
            <p className="secundario-text-desc mt-2">
              Conoce las orientaciones especializadas que ofrece nuestra institución para potenciar las capacidades de cada estudiante.
            </p>
          </div>

          <div className="row g-4">
            
            {/* 1. Técnico en Programación */}
            <div className="col-12">
              <div className="secundario-mod-card">
                <div className="row align-items-center g-0">
                  <div className="col-12 col-lg-5">
                    <div className="secundario-mod-imgs-grid">
                      <img src={ModProg1} alt="Técnico en Programación 1" className="secundario-mod-img" />
                      <img src={ModProg2} alt="Técnico en Programación 2" className="secundario-mod-img" />
                    </div>
                  </div>
                  <div className="col-12 col-lg-7 p-4 p-md-5">
                    <div className="secundario-mod-content text-start">
                      <span className="secundario-badge">4° a 7° Año</span>
                      <h3 className="secundario-mod-title mt-2">Tecnicatura en Programación</h3>
                      <p className="secundario-text-desc mt-3">
                        Una formación técnica de vanguardia orientada al desarrollo de software, infraestructura y seguridad informática para dar respuesta al mercado tecnológico actual.
                      </p>
                      <ul className="secundario-custom-list mt-3">
                        <li><i className="bi bi-code-slash"></i> <strong>Hardware y Programación:</strong> Desarrollo y mantenimiento integral de sistemas.</li>
                        <li><i className="bi bi-shield-lock"></i> <strong>Redes y Ciberseguridad:</strong> Configuración avanzada de redes Cisco y protección de datos.</li>
                        <li><i className="bi bi-cpu"></i> <strong>Robótica:</strong> Integración de sistemas lógicos y hardware físico.</li>
                        <li><i className="bi bi-translate"></i> <strong>Idiomas:</strong> Inglés técnico reforzado e introducción al Chino.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Bachiller en Comunicaciones */}
            <div className="col-12">
              <div className="secundario-mod-card">
                <div className="row align-items-center g-0">
                  <div className="col-12 col-lg-5 order-lg-2">
                    <div className="secundario-mod-imgs-grid">
                      <img src={ModCom1} alt="Bachiller en Comunicaciones 1" className="secundario-mod-img" />
                      <img src={ModCom2} alt="Bachiller en Comunicaciones 2" className="secundario-mod-img" />
                    </div>
                  </div>
                  <div className="col-12 col-lg-7 order-lg-1 p-4 p-md-5">
                    <div className="secundario-mod-content text-start">
                      <span className="secundario-badge">4° a 6° Año</span>
                      <h3 className="secundario-mod-title mt-2">Bachillerato en Comunicaciones</h3>
                    <p className="secundario-text-desc mt-3">
                        Enfoque integral sobre los medios masivos, la producción de contenidos, la investigación periodística y la comunicación institucional digital.
                      </p>
                      <ul className="secundario-custom-list mt-3">
                        <li><i className="bi bi-mic"></i> <strong>Producción Multimedial:</strong> Creación de contenidos para radio, gráfica, televisión y entornos web.</li>
                        <li><i className="bi bi-search"></i> <strong>Investigación de Información:</strong> Análisis crítico de fuentes, redacción periodística y ética de la comunicación.</li>
                        <li><i className="bi bi-megaphone"></i> <strong>Gestión de Medios:</strong> Estrategias comunicacionales y oratoria avanzada.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Turismo */}
            <div className="col-12">
              <div className="secundario-mod-card">
                <div className="row align-items-center g-0">
                  <div className="col-12 col-lg-5">
                    <div className="secundario-mod-imgs-grid">
                      <img src={ModTur1} alt="Turismo 1" className="secundario-mod-img" />
                      <img src={ModTur2} alt="Turismo 2" className="secundario-mod-img" />
                    </div>
                  </div>
                  <div className="col-12 col-lg-7 p-4 p-md-5">
                    <div className="secundario-mod-content text-start">
                      <span className="secundario-badge">1° a 6° Año</span>
                      <h3 className="secundario-mod-title mt-2">Turismo</h3>
                      <p className="secundario-text-desc mt-3">
                        Capacitación orientada al conocimiento del patrimonio cultural, la gestión de destinos turísticos y la atención global con fuerte énfasis plurilingüe.
                      </p>
                      <ul className="secundario-custom-list mt-3">
                        <li><i className="bi bi-globe-americas"></i> <strong>Idiomas Múltiples:</strong> Inglés avanzado, Portugués e Italiano fluido desde los primeros años.</li>
                        <li><i className="bi bi-geo-alt"></i> <strong>Patrimonio y Geografía:</strong> Estudio de circuitos turísticos regionales e internacionales.</li>
                        <li><i className="bi bi-briefcase"></i> <strong>Gestión y Hospitalidad:</strong> Organización de eventos, administración hotelera y atención al cliente.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sección de Información Detallada General */}
      <section 
        className="secundario-info-container-sec"
        style={{ '--secundario-pattern-bg': `url(${PatternBg})` }}
      >
        <div className="container position-relative z-2">
          <div className="row align-items-center mt-4 mb-2">
            
            <div className="col-12 col-md-6 order-2 order-md-1 px-md-5 mt-4 mt-md-0">
              <div className="secundario-info-block text-start">
                <h3 className="secundario-section-title">Formación integral con proyección de futuro</h3>
                <p className="secundario-text-desc mt-3">
                  El Nivel Secundario consolida el paso definitivo hacia la madurez académica y ciudadana. Brindamos herramientas pedagógicas avanzadas para que cada alumno descubra su potencial único.
                </p>
                <p className="secundario-text-desc">
                  Promovemos la participación en certámenes, ferias de ciencias, intercambios culturales y proyectos comunitarios que fortalecen el liderazgo positivo.
                </p>
                <ul className="secundario-custom-list mt-4 mb-4">
                  <li><i className="bi bi-check-circle-fill"></i> Gabinete de orientación y tutorías constantes</li>
                  <li><i className="bi bi-check-circle-fill"></i> Articulación directa con universidades</li>
                  <li><i className="bi bi-check-circle-fill"></i> Actividades deportivas y culturales intercolegiales</li>
                </ul>

                {/* Botón al final de la información alineado a la izquierda */}
                <div className="secundario-cta-wrapper text-start">
                  <a href="/admisiones" className="secundario-btn secundario-btn-solid">
                    Admisiones
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 order-1 order-md-2 mb-4 mb-md-0">
              <div className="secundario-img-box">
                <img src={InfoSecundarioImg} alt="Actividades en Nivel Secundario" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default NivelSecundario;