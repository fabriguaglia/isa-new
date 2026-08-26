import React, { useState } from 'react';
import './header.css';
import Logo from '../assets/images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Logo */}
        <a href="/" className="header-logo-link">
          <img src={Logo} alt="Instituto Santa Ana" className="header-logo" />
        </a>

        {/* Botón hamburguesa para dispositivos móviles */}
        <button
          type="button"
          className={`header-burger ${isMenuOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menú de navegación"
        >
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </button>

        {/* Navegación principal */}
        <nav className={`header-nav ${isMenuOpen ? 'is-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#sobre-nosotros" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Sobre nosotros
              </a>
            </li>
            <li className="nav-item">
              <a href="#niveles" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Niveles
              </a>
            </li>
            <li className="nav-item">
              <a href="#noticias" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Noticias
              </a>
            </li>
            <li className="nav-item">
              <a href="#contacto" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a href="#admisiones" className="nav-link nav-link-highlight" onClick={() => setIsMenuOpen(false)}>
                Admisiones
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;