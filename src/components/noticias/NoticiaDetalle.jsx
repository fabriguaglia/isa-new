import React from 'react';
import { useParams, Link } from 'react-router-dom';
import noticiasData from '../../data/noticias.json';

// Imágenes principales (portada / tarjeta)
import Noticia1Img from '../assets/images/landing/noticias/noticia-1.png';
import Noticia2Img from '../assets/images/landing/noticias/noticia-2.png';
import Noticia3Img from '../assets/images/landing/noticias/noticia-3.png';
import Noticia4Img from '../assets/images/landing/noticias/noticia-4.png';

// Imágenes extra para el interior del texto
import Extra1Img from '../assets/images/landing/noticias/extra-1.png';
import Extra2Img from '../assets/images/landing/noticias/extra-2.png';
import Extra3Img from '../assets/images/landing/noticias/extra-3.png';
import Extra4Img from '../assets/images/landing/noticias/extra-4.png';

const imagenesMap = {
  noticia1: Noticia1Img,
  noticia2: Noticia2Img,
  noticia3: Noticia3Img,
  noticia4: Noticia4Img,
};

const imagenesExtraMap = {
  extra1: Extra1Img,
  extra2: Extra2Img,
  extra3: Extra3Img,
  extra4: Extra4Img,
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
  
  const noticia = noticiasData.find((n) => crearSlug(n.titulo) === slug);

  if (!noticia) {
    return (
      <div className="container my-5 text-center">
        <h3 className="text-secondary">Noticia no encontrada</h3>
        <Link to="/noticias" className="btn btn-primary mt-3" style={{ backgroundColor: '#334779', border: 'none' }}>
          Volver a noticias
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5" style={{ maxWidth: '800px' }}>
      <Link to="/noticias" className="btn btn-outline-secondary mb-4 btn-sm rounded-pill px-3">
        ← Volver a noticias
      </Link>

      <div className="mb-4">
        <span className="text-muted small">{noticia.fecha}</span>
        <h1 className="fw-bold display-6 mt-1" style={{ color: '#334779' }}>{noticia.titulo}</h1>
      </div>

      {/* Imagen Principal - Altura ampliada en PC (550px) */}
      <div className="mb-4 rounded-3 overflow-hidden shadow-sm noticia-img-detalle-pc">
        <img 
          src={imagenesMap[noticia.imagenKey]} 
          alt={noticia.titulo} 
          className="w-100 object-fit-cover" 
          style={{ height: '550px' }}
        />
      </div>

      {/* Recorrido de bloques de contenido */}
      <div className="cuerpo-noticia">
        {noticia.contenido.map((bloque, index) => {
          if (bloque.tipo === 'parrafo') {
            return (
              <p key={index} className="text-secondary mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                {bloque.texto}
              </p>
            );
          }

          if (bloque.tipo === 'imagen') {
            return (
              <figure key={index} className="my-5 text-center">
                <div className="rounded-3 overflow-hidden shadow-sm mb-2 noticia-img-detalle-pc">
                  <img 
                    src={imagenesExtraMap[bloque.url]} 
                    alt={bloque.caption || 'Imagen interior'} 
                    className="w-100 object-fit-cover" 
                    style={{ height: '500px' }}
                  />
                </div>
                {bloque.caption && (
                  <figcaption className="text-muted small fst-italic">
                    {bloque.caption}
                  </figcaption>
                )}
              </figure>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default NoticiaDetalle;