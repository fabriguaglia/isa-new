import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import noticiasData from '../../data/noticias.json';
import './NoticiasList.css';

import Noticia1Img from '../assets/images/landing/noticias/noticia-1.png';
import Noticia2Img from '../assets/images/landing/noticias/noticia-2.png';
import Noticia3Img from '../assets/images/landing/noticias/noticia-3.png';
import Noticia4Img from '../assets/images/landing/noticias/noticia-4.png';

const imagenesMap = {
  noticia1: Noticia1Img,
  noticia2: Noticia2Img,
  noticia3: Noticia3Img,
  noticia4: Noticia4Img,
};

const crearSlug = (texto) => {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

const ITEMS_PER_PAGE = 4;

const NoticiasList = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  
  const currentPage = parseInt(page, 10) || 1;
  const totalPages = Math.ceil(noticiasData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNoticias = noticiasData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="container my-5 noticias-container">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6" style={{ color: '#334779' }}>Noticias Institucionales</h2>
        <p className="text-muted">Conocé las últimas novedades, eventos y experiencias de nuestra comunidad.</p>
        <hr className="w-25 mx-auto mt-3" style={{ backgroundColor: '#334779', height: '3px', opacity: 1 }} />
      </div>

      <div className="d-flex flex-column flex-lg-row gap-4 justify-content-center align-items-stretch overflow-auto pb-3">
        {currentNoticias.map((noticia) => {
          const slug = crearSlug(noticia.titulo);
          return (
            <div className="card shadow-sm border-0 overflow-hidden rounded-3 noticia-card-item" key={noticia.id}>
              <div className="card-body-wrapper d-flex flex-column flex-lg-column h-100">
                <div className="noticia-img-container">
                  <img src={imagenesMap[noticia.imagenKey]} alt={noticia.titulo} />
                </div>
                <div className="noticia-content-container card-body d-flex flex-column p-4 flex-grow-1">
                  <div>
                    <div className="d-flex align-items-center text-muted small mb-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-1">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span style={{ fontSize: '0.8rem' }}>{noticia.fecha}</span>
                    </div>
                    <h3 className="fw-bold mb-2" style={{ color: '#2c3e50', fontSize: '1rem', lineHeight: '1.3' }}>{noticia.titulo}</h3>
                    <p className="text-muted mb-4 flex-grow-1" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>{noticia.resumen}</p>
                  </div>
                  <div>
                    <Link 
                      to={`/noticias/${slug}`} 
                      className="btn btn-sm px-3 py-2 text-white fw-semibold shadow-sm w-100 text-center"
                      style={{ backgroundColor: '#334779', borderRadius: '6px', border: 'none', fontSize: '0.8rem' }}
                    >
                      Leer más
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <nav className="d-flex justify-content-center mt-5">
          <ul className="pagination shadow-sm rounded-pill p-1 bg-white border">
            <li className={`page-item ${currentPage <= 1 ? 'disabled' : ''}`}>
              <button className="page-link border-0 rounded-pill px-3 text-secondary" onClick={() => navigate(`/noticias/pagina/${currentPage - 1}`)}>
                Anterior
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => {
              const pageNum = i + 1;
              return (
                <li key={pageNum} className="page-item mx-1">
                  <Link 
                    className={`page-link border-0 rounded-circle d-flex align-items-center justify-content-center ${pageNum === currentPage ? 'text-white fw-bold' : 'text-secondary'}`}
                    style={{ width: '36px', height: '36px', backgroundColor: pageNum === currentPage ? '#334779' : 'transparent' }}
                    to={`/noticias/pagina/${pageNum}`}
                  >
                    {pageNum}
                  </Link>
                </li>
              );
            })}
            <li className={`page-item ${currentPage >= totalPages ? 'disabled' : ''}`}>
              <button className="page-link border-0 rounded-pill px-3 text-secondary" onClick={() => navigate(`/noticias/pagina/${currentPage + 1}`)}>
                Siguiente
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default NoticiasList;