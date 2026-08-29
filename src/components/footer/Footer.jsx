import React from 'react';
import './Footer.css';
import Logo from '../assets/images/logo-blanco.png';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-social-bar">
        <div className="container footer-social-container">
          <div className="footer-social-titles">
            <h3 className="footer-social-title">Seguínos en nuestras redes!</h3>
            <p className="footer-social-subtitle">No te pierdas de las últimas novedades</p>
          </div>
          
          <div className="footer-social-items">

            {/* WhatsApp */}
            <a href="https://wa.me/5491176523596" target="_blank" rel="noopener noreferrer" className="footer-social-item">
              <div className="footer-icon-circle">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <span className="footer-icon-label">WHATSAPP</span>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/InstitutoSantaAnaPacheco" target="_blank" rel="noopener noreferrer" className="footer-social-item">
              <div className="footer-icon-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </div>
              <span className="footer-icon-label">FACEBOOK</span>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/cole.santaana/" target="_blank" rel="noopener noreferrer" className="footer-social-item">
              <div className="footer-icon-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <span className="footer-icon-label">INSTAGRAM</span>
            </a>

            {/* YouTube */}
            <a href="https://www.youtube.com/@institutosantaana3534/" target="_blank" rel="noopener noreferrer" className="footer-social-item">
              <div className="footer-icon-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#D1D5D6"/>
                </svg>
              </div>
              <span className="footer-icon-label">YOUTUBE</span>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/isapacheco/" target="_blank" rel="noopener noreferrer" className="footer-social-item">
              <div className="footer-icon-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <span className="footer-icon-label">LINKEDIN</span>
            </a>

          </div>
        </div>
      </div>

      {/* ---------- Bloque Principal del Footer (#1d1d1d) ---------- */}
      <div className="footer-main-content">
        <div className="container">
          <div className="row g-4 justify-content-between">
            
            {/* Columna 1: Logo, Información y Contacto */}
            <div className="col-12 col-md-3 footer-col-brand">
              <img src={Logo} alt="Instituto Santa Ana" className="footer-logo" />
              <p className="footer-brand-desc">
                Formando con excelencia, tecnología e innovación para construir las bases del futuro.
              </p>

              <div className="footer-contact-info">
                <p className="footer-contact-item">
                  <strong>Teléfono:</strong> <a href="tel:+5491176523596">+54 9 11 7652-3596</a>
                </p>
                <p className="footer-contact-item">
                  <strong>Dirección: </strong>
                  <a href="https://share.google/HyYY9QDVjAscz0b7P" target="_blank" rel="noopener noreferrer">
                    Comodoro Rivadavia 1385<br />
                    General Pacheco C.P. 1617, Buenos Aires
                  </a>
                </p>
              </div>

              {/* Mapa visible solo en Teléfonos (debajo de la dirección) */}
              <div className="footer-map-container d-block d-md-none">
                <iframe 
                  title="Mapa Instituto Santa Ana Mòvil" 
                  width="100%" 
                  height="200" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1644.87042491206!2d-58.6442606020544!3d-34.45872574825269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x92ad8f398517174e!2sInstituto+Santa+Ana!5e0!3m2!1ses!2sar!4v1474979722594">
                </iframe>
              </div>
            </div>

            {/* Columna extra para el Mapa: Visible solo en Computadoras (entre col 1 y col 2) */}
            <div className="col-12 col-md-3 d-none d-md-block footer-col-map">
              <div className="footer-map-container">
                <iframe 
                  title="Mapa Instituto Santa Ana Desktop" 
                  width="100%" 
                  height="210" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1644.87042491206!2d-58.6442606020544!3d-34.45872574825269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x92ad8f398517174e!2sInstituto+Santa+Ana!5e0!3m2!1ses!2sar!4v1474979722594">
                </iframe>
              </div>
            </div>

            {/* Columna 2: Niveles educativos */}
            <div className="col-6 col-md-2 footer-col-links">
              <h4 className="footer-heading">Niveles</h4>
              <ul className="footer-links-list">
                <li><a href="#niveles">Maternal</a></li>
                <li><a href="#niveles">Inicial</a></li>
                <li><a href="#niveles">Primario</a></li>
                <li><a href="#niveles">Secundario</a></li>
                <li><a href="#niveles">Terciario</a></li>
              </ul>
            </div>

            {/* Columna 3: Secciones Principales */}
            <div className="col-6 col-md-2 footer-col-links">
              <h4 className="footer-heading">Propuesta</h4>
              <ul className="footer-links-list">
                <li><a href="/nosotros">Sobre Nosotros</a></li>
                <li><a href="/noticias/salidas-educativas">Salidas Educativas</a></li>
                <li><a href="/noticias/competencias-escolares">Competencias Escolares</a></li>
                <li><a href="/noticias/puentes-al-futuro">Puentes al Futuro</a></li>
                <li><a href="/noticias/propuesta-multilingue">Propuesta Multilingüe</a></li>
              </ul>
            </div>

            {/* Columna 4: Contacto / Accesos */}
            <div className="col-12 col-md-2 footer-col-links">
              <h4 className="footer-heading">Institucional</h4>
              <ul className="footer-links-list">
                <li><a href="/contacto">Contacto</a></li>
                <li><a href="/admisiones">Admisiones</a></li>
                <li><a href="/convenios">Convenios</a></li>
                <li><a href="/noticias">Noticias y Novedades</a></li>
              </ul>
            </div>
          </div>

          {/* Línea divisoria y Copyright */}
          <div className="footer-bottom">
            <p className="footer-copy">
              Instituto Santa Ana &copy; {new Date().getFullYear()}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;