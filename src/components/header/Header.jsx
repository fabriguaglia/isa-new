import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import Logo from '../assets/images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Cierra el menú desplegable si se hace clic fuera de él en escritorio
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
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
              <a href="nosotros" className="nav-link" onClick={handleLinkClick}>
                Sobre nosotros
              </a>
            </li>

            {/* Dropdown de Niveles */}
            <li className={`nav-item nav-dropdown ${isDropdownOpen ? 'is-open' : ''}`} ref={dropdownRef}>
              <a href="#niveles" className="nav-link dropdown-toggle" onClick={toggleDropdown}>
                Niveles
              </a>
              <ul className="dropdown-menu-custom">
                <li>
                  <a href="/maternal" className="dropdown-link" onClick={handleLinkClick}>
                    Maternal
                  </a>
                </li>
                <li>
                  <a href="/inicial" className="dropdown-link" onClick={handleLinkClick}>
                    Inicial
                  </a>
                </li>
                <li>
                  <a href="/primario" className="dropdown-link" onClick={handleLinkClick}>
                    Primario
                  </a>
                </li>
                <li>
                  <a href="/secundario" className="dropdown-link" onClick={handleLinkClick}>
                    Secundario
                  </a>
                </li>
                <li>
                  <a href="/terciario" className="dropdown-link" onClick={handleLinkClick}>
                    Terciario
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a href="/noticias" className="nav-link" onClick={handleLinkClick}>
                Noticias
              </a>
            </li>
            <li className="nav-item">
              <a href="/contacto" className="nav-link" onClick={handleLinkClick}>
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a href="/admisiones" className="nav-link nav-link-highlight" onClick={handleLinkClick}>
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