import React from 'react';
import './Footer.css';
import Logo from '../assets/images/logo-blanco.png';

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* ---------- Barra superior de Redes Sociales (#D1D5D6) ---------- */}
      <div className="footer-social-bar">
        <div className="container footer-social-container">
          <div className="footer-social-titles">
            <h3 className="footer-social-title">Seguínos en nuestras redes!</h3>
            <p className="footer-social-subtitle">No te pierdas de las últimas novedades</p>
          </div>
          
          <div className="footer-social-items">

            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-item">
              <div className="footer-icon-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </div>
              <span className="footer-icon-label">FACEBOOK</span>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-item">
              <div className="footer-icon-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <span className="footer-icon-label">LINKEDIN</span>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-item">
              <div className="footer-icon-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <span className="footer-icon-label">INSTAGRAM</span>
            </a>

            {/* X */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-item">
              <div className="footer-icon-circle">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <span className="footer-icon-label">X</span>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-item">
              <div className="footer-icon-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#D1D5D6"/>
                </svg>
              </div>
              <span className="footer-icon-label">YOUTUBE</span>
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Bloque Principal del Footer (#1d1d1d) ---------- */}
      <div className="footer-main-content">
        <div className="container">
          <div className="row g-4 justify-content-between">
            {/* Columna 1: Logo e información */}
            <div className="col-12 col-md-4 footer-col-brand">
              <img src={Logo} alt="Instituto Santa Ana" className="footer-logo" />
              <p className="footer-brand-desc">
                Formando con excelencia, tecnología e innovación para construir las bases del futuro.
              </p>
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
            <div className="col-6 col-md-3 footer-col-links">
              <h4 className="footer-heading">Propuesta</h4>
              <ul className="footer-links-list">
                <li><a href="#futuro">Educación del Futuro</a></li>
                <li><a href="#salidas">Salidas Educativas</a></li>
                <li><a href="#competencias">Competencias Escolares</a></li>
                <li><a href="#puentes">Puentes al Futuro</a></li>
                <li><a href="#multilingue">Propuesta Multilingüe</a></li>
              </ul>
            </div>

            {/* Columna 4: Contacto / Accesos */}
            <div className="col-12 col-md-3 footer-col-links">
              <h4 className="footer-heading">Institucional</h4>
              <ul className="footer-links-list">
                <li><a href="#contacto">Contacto</a></li>
                <li><a href="#inscripciones">Inscripciones</a></li>
                <li><a href="#convenios">Convenios</a></li>
                <li><a href="#noticias">Noticias y Novedades</a></li>
              </ul>
            </div>
          </div>

          {/* Línea divisoria y Copyright */}
          <div className="footer-bottom">
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Instituto Santa Ana. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;