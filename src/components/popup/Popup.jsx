import React, { useState, useEffect } from 'react';
import './Popup.css';

// Importa aquí tus dos imágenes distintas
import ImagenDesktop from '../assets/images/popup.png'; // Imagen para PC / Tablets grandes
import ImagenMobile from '../assets/images/popup2.png';  // Imagen exclusiva para Celulares

const PopupAnuncio = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  const cerrarPopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="popup-overlay" onClick={cerrarPopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="popup-close-btn" 
          onClick={cerrarPopup}
          aria-label="Cerrar"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="popup-image-container">
          {/* Usamos picture para alternar la imagen de forma nativa según el ancho de pantalla */}
          <picture className="popup-picture">
            <source media="(max-width: 768px)" srcSet={ImagenMobile} />
            <img src={ImagenDesktop} alt="Anuncio importante" className="popup-img" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default PopupAnuncio;