import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Landing.css';

// Imágenes para el carrusel
import Carrusel1 from '../assets/images/landing/carrusel-1.jpg';
import Carrusel2 from '../assets/images/landing/carrusel-2.jpg';
import Carrusel3 from '../assets/images/landing/carrusel-3.jpg';
import Carrusel4 from '../assets/images/landing/carrusel-4.jpg';
import Carrusel5 from '../assets/images/landing/carrusel-5.jpg';

// Logo institucional
import AcademicaLogo from '../assets/images/landing/academica.png';

// Imágenes para la galería inferior
import Galeria1 from '../assets/images/landing/galeria-1.jpg';
import Galeria2 from '../assets/images/landing/galeria-2.jpg';
import Galeria3 from '../assets/images/landing/galeria-3.jpg';

// Imágenes para las tarjetas de niveles
import MaternalImg from '../assets/images/landing/maternal.png';
import InicialImg from '../assets/images/landing/inicial.png';
import PrimarioImg from '../assets/images/landing/primario.png';
import SecundarioImg from '../assets/images/landing/secundario.png';
import TerciarioImg from '../assets/images/landing/terciario.png';

// Imágenes para la sección tecnológica
import TechBg from '../assets/images/landing/tech-bg.png';
import Tech1 from '../assets/images/landing/tech-1.png';
import Tech2 from '../assets/images/landing/tech-2.png';
import Tech3 from '../assets/images/landing/tech-3.png';
import CiscoLogo from '../assets/images/landing/cisco-logo.png';
import SchneiderLogo from '../assets/images/landing/schneider-logo.png';

const SLIDES = [
  {
    image: Carrusel1,
    titulo: 'Innovar hoy para liderar el mañana',
    subtitulo: 'La era digital empieza en nuestras aulas',
    link: '#nosotros',
  },
  {
    image: Carrusel2,
    titulo: 'Aprender explorando',
    subtitulo: 'Transformamos cada destino en conocimiento real e inolvidable',
    link: '#link2',
  },
  {
    image: Carrusel3,
    titulo: 'Competencias escolares',
    subtitulo: 'Fomentamos el trabajo en equipo, la disciplina y el respeto dentro y fuera de la cancha.',
    link: '#link3',
  },
  {
    image: Carrusel4,
    titulo: 'Charlas con especialistas',
    subtitulo: 'Profesionales y referentes de distintos rubros visitan el colegio para compartir su experiencia',
    link: '#link4',
  },
  {
    image: Carrusel5,
    titulo: 'Pasantías y prácticas profesionales',
    subtitulo: 'Primeras experiencias laborales que conectan a los estudiantes con el mundo del trabajo',
    link: '#link5',
  },
];

const GALERIA = [
  { foto: Galeria1, texto: 'Desde los primeros pasos' },
  { foto: Galeria2, texto: 'Formación y trabajo en equipo' },
  { foto: Galeria3, texto: 'Espacios de expresión' },
];

const NIVELES = [
  {
    titulo: 'Maternal',
    foto: MaternalImg,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="4"/>
        <path d="M5.5 21a8.38 8.38 0 0 1 13 0"/>
      </svg>
    ),
  },
  {
    titulo: 'Inicial',
    foto: InicialImg,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z"/>
      </svg>
    ),
  },
  {
    titulo: 'Primario',
    foto: PrimarioImg,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
  },
  {
    titulo: 'Secundario',
    foto: SecundarioImg,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    titulo: 'Terciario',
    foto: TerciarioImg,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
];

const AUTOPLAY_MS = 6000;

const Landing = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  const goTo = useCallback((index) => {
    const total = SLIDES.length;
    setActiveIndex(((index % total) + total) % total);
  }, []);

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    timeoutRef.current = setTimeout(goNext, AUTOPLAY_MS);
    return () => clearTimeout(timeoutRef.current);
  }, [activeIndex, goNext]);

  return (
    <>
      <section className="landing-hero">
        {/* ---------- Carrusel principal ---------- */}
        <div className="hero-carousel">
          {SLIDES.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === activeIndex ? 'is-active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
              aria-hidden={index !== activeIndex}
            >
              <div className="container hero-content">
                <div className="hero-text">
                  <h1 className="hero-title">{slide.titulo}</h1>
                  <p className="hero-subtitle">{slide.subtitulo}</p>
                  <a href={slide.link} className="btn hero-btn">
                    Conocé más
                  </a>

                  <div className="hero-dots">
                    {SLIDES.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        type="button"
                        className={`hero-dot ${dotIndex === activeIndex ? 'is-active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          goTo(dotIndex);
                        }}
                        aria-label={`Ir al slide ${dotIndex + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="hero-overlay" />

          <button
            type="button"
            className="hero-arrow hero-arrow-prev"
            onClick={goPrev}
            aria-label="Slide anterior"
          >
            <svg width="14" height="24" viewBox="0 0 14 24" fill="none">
              <path d="M12 2L2 12L12 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            className="hero-arrow hero-arrow-next"
            onClick={goNext}
            aria-label="Slide siguiente"
          >
            <svg width="14" height="24" viewBox="0 0 14 24" fill="none">
              <path d="M2 2L12 12L2 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Logo en esquina inferior derecha */}
          <div className="hero-brand-logo">
            <img src={AcademicaLogo} alt="Academica International Studies" />
          </div>
        </div>

        {/* ---------- Galería inferior superpuesta ---------- */}
        <div className="container hero-gallery-wrapper">
          <div className="row g-2 g-md-4 hero-gallery">
            {GALERIA.map((item, index) => (
              <div className="col-4" key={index}>
                <div className="gallery-card">
                  <img src={item.foto} alt={`Vida institucional ${index + 1}`} />
                  <div className="gallery-card-overlay">
                    <span className="gallery-card-text">{item.texto}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Sección de Niveles Educativos ---------- */}
      <section className="niveles-section">
        <div className="container">
          <div className="niveles-grid">
            {NIVELES.map((nivel, index) => (
              <div className="nivel-card" key={index}>
                <div className="nivel-card-bg">
                  <img src={nivel.foto} alt={nivel.titulo} className="nivel-card-img" />
                  <div className="nivel-card-fade" />
                </div>
                <div className="nivel-card-content">
                  <div className="nivel-icon-circle">
                    {nivel.icon}
                  </div>
                  <h3 className="nivel-title">{nivel.titulo}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Sección Educación del Futuro ---------- */}
      <section 
        className="tech-section"
        style={{ '--tech-bg-img': `url(${TechBg})` }}
      >
        <div className="container text-center tech-container">
          <h2 className="tech-main-title">
            La educación del futuro
            <span className="tech-code-line">&lt;llegó a nuestras aulas/&gt;</span>
          </h2>

          <div className="row g-3 justify-content-center my-3">
            <div className="col-12 col-md-4">
              <div className="tech-card">
                <img src={Tech1} alt="Robótica y programación" />
                <span className="tech-card-caption">Robótica y programación</span>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="tech-card">
                <img src={Tech2} alt="Aulas digitales" />
                <span className="tech-card-caption">Aulas digitales</span>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="tech-card">
                <img src={Tech3} alt="Proyectos escolares" />
                <span className="tech-card-caption">Proyectos escolares</span>
              </div>
            </div>
          </div>

          <p className="tech-description">
            Integramos tecnología de vanguardia, creatividad y excelencia&nbsp;
            <br className="d-none d-md-inline" /> 
            académica para formar a las mentes del mañana.
          </p>

          <a href="#link-tech" className="btn tech-btn mt-2">
            Conocé más
          </a>

          <div className="tech-brand-logos">
            <img src={CiscoLogo} alt="Cisco" className="tech-brand-img" />
            <img src={SchneiderLogo} alt="Schneider Electric" className="tech-brand-img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;