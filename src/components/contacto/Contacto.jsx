import React, { useEffect } from 'react';
import './Contacto.css';

const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="seccion-contacto py-5">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="text-center mb-5">
          <h1 className="fw-bold display-6" style={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)', }}>Contacto y Atención</h1>
          <p
            className="text-muted mt-2"
            style={{
              color: '#ffffff',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.9), 0 4px 12px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 0, 0, 0.5);',
            }}
          >
            Comunicate con nosotros o visitanos en nuestras instalaciones. Estamos a tu disposición.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Tarjeta de WhatsApp Clickeable */}
          <div className="col-md-4">
            <a 
              href="https://wa.me/5491176523596" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-decoration-none h-100 d-block"
            >
              <div className="card h-100 border-0 shadow-sm p-4 text-center rounded-3 tarjeta-contacto">
                <div className="mb-3 text-primary-custom">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <h3 className="h5 fw-bold" style={{ color: '#ffffff' }}>WhatsApp</h3>
                <p className="text-muted small mb-3">Mensajes directos y consultas rápidas</p>
                <span className="fw-semibold fs-6" style={{ color: '#ffffff' }}>
                  Enviar mensaje
                </span>
              </div>
            </a>
          </div>

          {/* Tarjeta de Teléfono Clickeable */}
          <div className="col-md-4">
            <a href="tel:1176523596" className="text-decoration-none h-100 d-block">
              <div className="card h-100 border-0 shadow-sm p-4 text-center rounded-3 tarjeta-contacto">
                <div className="mb-3 text-primary-custom">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3 className="h5 fw-bold" style={{ color: '#ffffff' }}>Teléfono</h3>
                <p className="text-muted small mb-3">Línea directa institucional</p>
                <span className="fw-semibold fs-6" style={{ color: '#ffffff' }}>
                  11 7652-3596
                </span>
              </div>
            </a>
          </div>

          {/* Tarjeta de Horarios */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4 text-center rounded-3 tarjeta-contacto">
              <div className="mb-3 text-primary-custom">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="h5 fw-bold" style={{ color: '#ffffff' }}>Horarios</h3>
              <p className="text-muted small mb-2">Secretaría y Administración</p>
              <p className="text-white mb-0 fw-medium small" style={{ color: '#ffffff' }}>
                Lunes a Viernes<br />
                <span className="fw-bold" style={{ color: '#ffffff' }}>08:00 a 17:00 hs</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;