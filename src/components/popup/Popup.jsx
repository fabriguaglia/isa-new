import React, { useState, useEffect } from 'react';
import './Popup.css';

// Reemplaza con la ruta de tu imagen de anuncio
import ImagenAnuncio from '../assets/images/popup.png'; 

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
          {/* Usamos un SVG vectorial limpio y garantizado para que la cruz se dibuje siempre */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="popup-image-container">
          <img src={ImagenAnuncio} alt="Anuncio importante" className="popup-img" />
        </div>
      </div>
    </div>
  );
};

export default PopupAnuncio;