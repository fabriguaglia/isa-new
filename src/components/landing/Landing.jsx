import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Landing.css';

// Imágenes para el carrusel
import Carrusel1 from '../assets/images/landing/carrusel/carrusel-1.jpg';
import Carrusel2 from '../assets/images/landing/carrusel/carrusel-2.jpg';
import Carrusel3 from '../assets/images/landing/carrusel/carrusel-3.jpg';
import Carrusel4 from '../assets/images/landing/carrusel/carrusel-4.jpg';
import Carrusel5 from '../assets/images/landing/carrusel/carrusel-5.jpg';

// Logo institucional
import AcademicaLogo from '../assets/images/landing/academica.png';

// Imágenes para la galería inferior
import Galeria1 from '../assets/images/landing/galeria/galeria-1.jpg';
import Galeria2 from '../assets/images/landing/galeria/galeria-2.jpg';
import Galeria3 from '../assets/images/landing/galeria/galeria-3.jpg';

// Imágenes para las tarjetas de niveles
import MaternalImg from '../assets/images/landing/niveles/maternal.png';
import InicialImg from '../assets/images/landing/niveles/inicial.png';
import PrimarioImg from '../assets/images/landing/niveles/primario.png';
import SecundarioImg from '../assets/images/landing/niveles/secundario.png';
import TerciarioImg from '../assets/images/landing/niveles/terciario.png';

// Imágenes para la sección tecnológica
import TechBg from '../assets/images/landing/tech/tech-bg.png';
import Tech1 from '../assets/images/landing/tech/tech-1.png';
import Tech2 from '../assets/images/landing/tech/tech-2.png';
import Tech3 from '../assets/images/landing/tech/tech-3.png';
import CiscoLogo from '../assets/images/landing/tech/cisco-logo.png';
import SchneiderLogo from '../assets/images/landing/tech/schneider-logo.png';

// Imágenes para la sección de Noticias / Experiencias institucionales
import Noticia1 from '../assets/images/landing/noticias/noticia-1.png';
import Noticia2 from '../assets/images/landing/noticias/noticia-2.png';
import Noticia3 from '../assets/images/landing/noticias/noticia-3.png';
import Noticia4 from '../assets/images/landing/noticias/noticia-4.png';

// ==========================================
// Imágenes y descripciones para Convenios
// ==========================================
import ConvenioBg1 from '../assets/images/landing/convenios/bg-1.png';
import ConvenioLogo1 from '../assets/images/landing/convenios/logo-1.png';
import ConvenioBg2 from '../assets/images/landing/convenios/bg-2.png';
import ConvenioLogo2 from '../assets/images/landing/convenios/logo-2.png';
import ConvenioBg3 from '../assets/images/landing/convenios/bg-3.png';
import ConvenioLogo3 from '../assets/images/landing/convenios/logo-3.png';
import ConvenioBg4 from '../assets/images/landing/convenios/bg-4.png';
import ConvenioLogo4 from '../assets/images/landing/convenios/logo-4.png';
import ConvenioBg5 from '../assets/images/landing/convenios/bg-5.png';
import ConvenioLogo5 from '../assets/images/landing/convenios/logo-5.png';
import ConvenioBg6 from '../assets/images/landing/convenios/bg-6.png';
import ConvenioLogo6 from '../assets/images/landing/convenios/logo-6.png';
import ConvenioBg7 from '../assets/images/landing/convenios/bg-7.png';
import ConvenioLogo7 from '../assets/images/landing/convenios/logo-7.png';
import ConvenioBg8 from '../assets/images/landing/convenios/bg-8.png';
import ConvenioLogo8 from '../assets/images/landing/convenios/logo-8.png';
import ConvenioBg9 from '../assets/images/landing/convenios/bg-9.png';
import ConvenioLogo9 from '../assets/images/landing/convenios/logo-9.png';
import ConvenioBg10 from '../assets/images/landing/convenios/bg-21.png';
import ConvenioLogo10 from '../assets/images/landing/convenios/logo-21.png';

const SLIDES = [
  {
    image: Carrusel1,
    titulo: 'Innovar hoy para liderar el mañana',
    subtitulo: 'La era digital empieza en nuestras aulas',
    link: '#futuro',
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

const NOTICIAS = [
  {
    titulo: 'Salidas Educativas',
    descripcion: 'Experiencias en campo y visitas que llevan el aprendizaje más allá del aula.',
    imagen: Noticia1,
    link: '#salidas',
  },
  {
    titulo: 'Competencias Escolares',
    descripcion: 'Desafíos académicos y torneos que potencian la superación.',
    imagen: Noticia2,
    link: '#competencias',
  },
  {
    titulo: 'Puentes al Futuro',
    descripcion: 'Red de instituciones de educación superior que acompañan a nuestros egresados.',
    imagen: Noticia4,
    link: '#puentes',
  },
  {
    titulo: 'Propuesta Multilingüe',
    descripcion: 'Enseñanza oficial en español junto con el aprendizaje de varios idiomas.',
    imagen: Noticia3,
    link: '#multilingue',
  },
];

const CONVENIOS = [
  { 
    bg: ConvenioBg1, 
    logo: ConvenioLogo1, 
    alt: 'Convenio Municipio de Tigre', 
    descripcion: 'El Instituto Santa Ana mantiene una alianza estratégica con el **Municipio de Tigre**, generando un puente directo entre la institución educativa y la comunidad local.\n\nEste convenio posibilita el desarrollo de **visitas educativas** a espacios clave del partido, así como la implementación de **pasantías y prácticas profesionalizantes** en diversos sectores del municipio.\n\nDe esta manera, los estudiantes tienen la oportunidad de aplicar sus conocimientos en entornos reales, adquiriendo experiencia concreta que facilita su **inserción en el mundo laboral** y fortalece su compromiso con el entorno socio-productivo local.' 
  },  
  { 
    bg: ConvenioBg2, 
    logo: ConvenioLogo2, 
    alt: 'Convenio Universidad de Cambridge', 
    descripcion: 'El Instituto Santa Ana cuenta con un programa de **enseñanza avanzada de inglés**, consolidado a través de nuestra vinculación con los prestigiosos **Exámenes de Cambridge** (Cambridge University).\n\nEste acuerdo permite que la institución funcione como sede para la **visita de examinadores oficiales**, quienes se acercan al colegio para tomar las evaluaciones internacionales a nuestros estudiantes.\n\nDe esta forma, los alumnos tienen la oportunidad de certificar su nivel de proficiencia lingüística obteniendo reconocimientos oficiales de gran prestigio global, como las **certificaciones First** y las instancias correspondientes a etapas anteriores, potenciando su futuro académico y profesional.' 
  },
  { 
    bg: ConvenioBg3, 
    logo: ConvenioLogo3, 
    alt: 'Convenio Modelo UNESCO', 
    descripcion: 'El Instituto Santa Ana fomenta la participación activa de sus estudiantes en los **Modelos UNESCO**, simulaciones académicas donde los jóvenes replican los debates y el funcionamiento de los organismos internacionales de las Naciones Unidas.\n\nA través de esta experiencia, los alumnos representan a diferentes países y defienden posturas geopolíticas globales, abordando temáticas fundamentales como los **derechos humanos**, la **educación sostenible**, la **ciencia** y la **cultura**.\n\nEsta iniciativa estimula el pensamiento crítico, la capacidad de **oratoria y negociación**, la empatía intercultural y el compromiso con la **cooperación internacional** y la resolución pacífica de conflictos.' 
  },  
  { 
    bg: ConvenioBg4, 
    logo: ConvenioLogo4, 
    alt: 'Convenio Global Studies', 
    descripcion: 'El Instituto Santa Ana promueve experiencias de **aprendizaje internacional** a través de su alianza con **Global Studies**, facilitando el acceso a programas educativos en el exterior.\n\nEste convenio impulsa vivencias de **inmersión cultural y lingüística**, como los viajes de estudio a destinos emblemáticos como **Inglaterra**, diseñados para que los estudiantes perfeccionen el dominio del idioma en un entorno nativo.\n\nDe este modo, los alumnos combinan la formación académica con **excursiones culturales**, el desarrollo de la autonomía personal y una perspectiva global fundamental para su **crecimiento integral y profesional**.' 
  },  
  { 
    bg: ConvenioBg5, 
    logo: ConvenioLogo5, 
    alt: 'Convenio 5', 
    descripcion: 'El Instituto Santa Ana promueve diversas **acciones de articulación** con instituciones universitarias, con el propósito de acercar a nuestros estudiantes al **mundo académico y profesional**, acompañarlos en la construcción de su **proyecto de vida** y favorecer la continuidad de sus **estudios superiores**.\n\nEn este marco, se desarrollan convenios y propuestas con la **Universidad del Salvador (USAL)**, **Universidad de Flores**, **Universidad Austral**, **Universidad Torcuato Di Tella**, **Universidad de San Andrés**, **Universidad de Tres de Febrero (UNTREF)**, **Universidad Blas Pascal** y **Universidad Siglo 21**.\n\nLas propuestas incluyen **visitas a universidades**, **talleres de orientación vocacional**, actividades de acercamiento a la vida universitaria, competencias de alegatos, **Modelos de Naciones Unidas**, torneos deportivos y otras experiencias académicas y formativas.\n\nAsimismo, contamos con **programas de becas** para nuestros estudiantes junto con la **Universidad Torcuato Di Tella**, la **Universidad del Salvador** y la **Universidad Austral**, ampliando las oportunidades de acceso y continuidad.\n\nTambién se desarrollan instancias de **capacitación y actualización docente**, fortaleciendo el vínculo entre la escuela, la universidad y el mundo profesional.' 
  },
  { 
    bg: ConvenioBg6, 
    logo: ConvenioLogo6, 
    alt: 'Convenio Buco S.A.', 
    descripcion: 'El Instituto Santa Ana establece un importante vínculo con la reconocida empresa industrial **Buco S.A.**, orientada al desarrollo tecnológico y la fabricación de componentes para el sector agroindustrial.\n\nMediante esta alianza, la institución impulsa **pasantías y prácticas profesionalizantes** que permiten a los estudiantes sumergirse en el ámbito corporativo real, participando de diversas áreas operativas, de gestión y **administrativas**.\n\nEsta experiencia clave en el **mundo laboral** fomenta la aplicación práctica de los saberes teóricos, estimula el compromiso profesional y fortalece las capacidades de los jóvenes frente a las demandas del **entorno industrial y productivo actual**.' 
  },  
  { 
    bg: ConvenioBg7, 
    logo: ConvenioLogo7, 
    alt: 'Convenio Schneider Electric', 
    descripcion: 'El Instituto Santa Ana consolida una sólida alianza con **Schneider Electric**, líder global en la gestión de la energía y la automatización, integrando la innovación tecnológica directamente en la formación institucional.\n\nGracias a este vínculo, la empresa colabora activamente aportando **material tecnológico de vanguardia** para equipar los espacios de aprendizaje del colegio, permitiendo que los estudiantes practiquen con herramientas de última generación.\n\nAsimismo, el convenio habilita programas de **pasantías y prácticas profesionalizantes**, brindando a los alumnos la oportunidad de insertarse en entornos corporativos de alta exigencia y potenciar su desarrollo en el **ámbito técnico y profesional**.' 
  },  
  { 
    bg: ConvenioBg8, 
    logo: ConvenioLogo8, 
    alt: 'Convenio Cisco', 
    descripcion: 'El Instituto Santa Ana integra a su propuesta educativa los cursos y certificaciones oficiales de **Cisco Networking Academy**. A través de este convenio, nuestros estudiantes acceden a formación especializada en áreas clave de la tecnología actual, como **redes informáticas**, **ciberseguridad**, **sistemas operativos** y **administración de servidores**.\n\nEsta alianza estratégica permite a los alumnos obtener **certificaciones con validez internacional**, brindando herramientas prácticas y conocimientos técnicos altamente demandados en el mercado laboral, y preparándolos para los desafíos del **mundo digital y profesional**.' 
  },  
  { 
    bg: ConvenioBg9, 
    logo: ConvenioLogo9, 
    alt: 'Convenio 9', 
    descripcion: 'El Instituto Santa Ana promueve diversas **acciones de articulación** con instituciones universitarias, con el propósito de acercar a nuestros estudiantes al **mundo académico y profesional**, acompañarlos en la construcción de su **proyecto de vida** y favorecer la continuidad de sus **estudios superiores**.\n\nEn este marco, se desarrollan convenios y propuestas con la **Universidad del Salvador (USAL)**, **Universidad de Flores**, **Universidad Austral**, **Universidad Torcuato Di Tella**, **Universidad de San Andrés**, **Universidad de Tres de Febrero (UNTREF)**, **Universidad Blas Pascal** y **Universidad Siglo 21**.\n\nLas propuestas incluyen **visitas a universidades**, **talleres de orientación vocacional**, actividades de acercamiento a la vida universitaria, competencias de alegatos, **Modelos de Naciones Unidas**, torneos deportivos y otras experiencias académicas y formativas.\n\nAsimismo, contamos con **programas de becas** para nuestros estudiantes junto con la **Universidad Torcuato Di Tella**, la **Universidad del Salvador** y la **Universidad Austral**, ampliando las oportunidades de acceso y continuidad.\n\nTambién se desarrollan instancias de **capacitación y actualización docente**, fortaleciendo el vínculo entre la escuela, la universidad y el mundo profesional.' 
  },
  { 
    bg: ConvenioBg10, 
    logo: ConvenioLogo10, 
    alt: 'Convenio 10', 
    descripcion: 'El Instituto Santa Ana promueve diversas **acciones de articulación** con instituciones universitarias, con el propósito de acercar a nuestros estudiantes al **mundo académico y profesional**, acompañarlos en la construcción de su **proyecto de vida** y favorecer la continuidad de sus **estudios superiores**.\n\nEn este marco, se desarrollan convenios y propuestas con la **Universidad del Salvador (USAL)**, **Universidad de Flores**, **Universidad Austral**, **Universidad Torcuato Di Tella**, **Universidad de San Andrés**, **Universidad de Tres de Febrero (UNTREF)**, **Universidad Blas Pascal** y **Universidad Siglo 21**.\n\nLas propuestas incluyen **visitas a universidades**, **talleres de orientación vocacional**, actividades de acercamiento a la vida universitaria, competencias de alegatos, **Modelos de Naciones Unidas**, torneos deportivos y otras experiencias académicas y formativas.\n\nAsimismo, contamos con **programas de becas** para nuestros estudiantes junto con la **Universidad Torcuato Di Tella**, la **Universidad del Salvador** y la **Universidad Austral**, ampliando las oportunidades de acceso y continuidad.\n\nTambién se desarrollan instancias de **capacitación y actualización docente**, fortaleciendo el vínculo entre la escuela, la universidad y el mundo profesional.' 
  },
];

const AUTOPLAY_MS = 6000;

// Función auxiliar para parsear **negrita** de forma limpia
const renderConNegritas = (texto) => {
  return texto.split('\n\n').map((parrafo, i) => {
    const partes = parrafo.split(/\*\*(.*?)\*\*/g);
    return (
      <p key={i} className="mb-3">
        {partes.map((parte, j) => (
          j % 2 === 1 ? <strong key={j}>{parte}</strong> : parte
        ))}
      </p>
    );
  });
};

const Landing = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [convenioSeleccionado, setConvenioSeleccionado] = useState(null);
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
        <div id="niveles" className="container hero-gallery-wrapper">
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
                  <h3 id="futuro" className="nivel-title">{nivel.titulo}</h3>
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

      {/* ---------- Sección de Noticias / Experiencias Institucionales ---------- */}
      <section className="noticias-section py-5">
        <div className="container">
          <div className="noticias-grid">
            {NOTICIAS.map((item, index) => (
              <div className="noticia-card" key={index}>
                <div className="noticia-card-bg">
                  <img src={item.imagen} alt={item.titulo} className="noticia-card-img" />
                  <div className="noticia-card-fade" />
                </div>
                <div className="noticia-card-content">
                  <div>
                    <h3 className="noticia-title">{item.titulo}</h3>
                    <p className="noticia-desc">{item.descripcion}</p>
                  </div>
                  <a href={item.link} className="btn noticia-btn">
                    Conocé más
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Banner Rotatorio de Convenios ---------- */}
      <section className="convenios-section">
        <div className="convenios-slider">
          <div className="convenios-track">
            {[...CONVENIOS, ...CONVENIOS].map((item, index) => (
              <div 
                className="convenio-card" 
                key={index}
                onClick={() => setConvenioSeleccionado(item)}
                style={{ cursor: 'pointer' }}
              >
                <img src={item.bg} alt="Fondo convenio" className="convenio-bg" />
                <div className="convenio-overlay" />
                <img src={item.logo} alt={item.alt} className="convenio-logo" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Modal / Cartel con el BG, Overlay y Texto Justificado ---------- */}
      {convenioSeleccionado && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-3">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">Detalle del Convenio</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setConvenioSeleccionado(null)}
                  aria-label="Cerrar"
                />
              </div>
              <div className="modal-body text-center">
                <div className="modal-convenio-preview mb-3">
                  <img src={convenioSeleccionado.bg} alt="Fondo convenio" className="convenio-bg" />
                  <div className="convenio-overlay" />
                  <img src={convenioSeleccionado.logo} alt={convenioSeleccionado.alt} className="convenio-logo" />
                </div>
                
                {/* Texto procesado con justificación y negritas */}
                <div className="text-muted modal-descripcion">
                  {renderConNegritas(convenioSeleccionado.descripcion)}
                </div>
              </div>
              <div className="modal-footer border-0 justify-content-center">
                <button 
                  type="button" 
                  className="btn btn-secondary btn-sm px-4" 
                  onClick={() => setConvenioSeleccionado(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Landing;