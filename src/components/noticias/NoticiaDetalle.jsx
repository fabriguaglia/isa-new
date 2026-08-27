import React from 'react';
import { useParams, Link } from 'react-router-dom';

import Noticia1 from '../assets/images/landing/noticias/noticia-1.png';
import Noticia2 from '../assets/images/landing/noticias/noticia-2.png';
import Noticia3 from '../assets/images/landing/noticias/noticia-3.png';
import Noticia4 from '../assets/images/landing/noticias/noticia-4.png';

import noticiasData from '../../data/noticias.json';

const imagenesNoticiasMap = {
  noticia1: Noticia1,
  noticia2: Noticia2,
  noticia3: Noticia3,
  noticia4: Noticia4,
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

const NoticiaDetalle = () => {
  const { slug } = useParams();
  
  const noticia = noticiasData.find((item) => crearSlug(item.titulo) === slug);

  if (!noticia) {
    return (
      <div className="container py-5 text-center">
        <h2>No se encontró la noticia solicitada</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Volver al inicio
        </Link>
      </div>
    );
  }

  const imagenSrc = imagenesNoticiasMap[noticia.imagenKey];

  return (
    <div className="container py-5 my-4">
      <div className="mb-4">
        <Link to="/noticias" className="btn btn-outline-secondary btn-sm">
          &larr; Volver a noticias
        </Link>
      </div>

      <div className="row align-items-center g-5">
        {imagenSrc && (
          <div className="col-lg-6 text-center">
            <div className="p-2 bg-light rounded shadow-sm border">
              <img 
                src={imagenSrc} 
                alt={noticia.titulo} 
                className="img-fluid rounded" 
                style={{ maxHeight: '500px', width: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>
        )}

        <div className={`col-lg-${imagenSrc ? '6' : '12'}`}>
          <h1 className="fw-bold mb-4 text-dark">{noticia.titulo}</h1>
          
          <div className="noticia-contenido text-muted fs-6 lh-lg">
            <p className="fw-semibold fs-5 text-dark mb-3">{noticia.resumen}</p>
            {noticia.contenido && <p>{noticia.contenido}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticiaDetalle;