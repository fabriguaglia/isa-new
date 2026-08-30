import React, { useState } from 'react';
import './Convenios.css';

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
import ConvenioBg11 from '../assets/images/landing/convenios/bg-22.png';
import ConvenioLogo11 from '../assets/images/landing/convenios/logo-22.png';

const LISTA_CONVENIOS = [
  { 
    bg: ConvenioBg1, 
    logo: ConvenioLogo1, 
    alt: 'Convenio Municipio de Tigre', 
    titulo: 'Municipio de Tigre',
    descripcion: 'El Instituto Santa Ana mantiene una alianza estratégica con el **Municipio de Tigre**, generando un puente directo entre la institución educativa y la comunidad local.\n\nEste convenio posibilita el desarrollo de **visitas educativas** a espacios clave del partido, así como la implementación de **pasantías y prácticas profesionalizantes** en diversos sectores del municipio.\n\nDe esta manera, los estudiantes tienen la oportunidad de aplicar sus conocimientos en entornos reales, adquiriendo experiencia concreta que facilita su **inserción en el mundo laboral** y fortalece su compromiso con el entorno socio-productivo local.' 
  },  
  { 
    bg: ConvenioBg2, 
    logo: ConvenioLogo2, 
    alt: 'Convenio Universidad de Cambridge', 
    titulo: 'Universidad de Cambridge',
    descripcion: 'El Instituto Santa Ana cuenta con un programa de **enseñanza avanzada de inglés**, consolidado a través de nuestra vinculación con los prestigiosos **Exámenes de Cambridge** (Cambridge University).\n\nEste acuerdo permite que la institución funcione como sede para la **visita de examinadores oficiales**, quienes se acercan al colegio para tomar las evaluaciones internacionales a nuestros estudiantes.\n\nDe esta forma, los alumnos tienen la oportunidad de certificar su nivel de proficiencia lingüística obteniendo reconocimientos oficiales de gran prestigio global, como las **certificaciones First** y las instancias correspondientes a etapas anteriores, potenciando su futuro académico y profesional.' 
  },
  { 
    bg: ConvenioBg3, 
    logo: ConvenioLogo3, 
    alt: 'Convenio Modelo UNESCO', 
    titulo: 'Modelo UNESCO',
    descripcion: 'El Instituto Santa Ana fomenta la participación activa de sus estudiantes en los **Modelos UNESCO**, simulaciones académicas donde los jóvenes replican los debates y el funcionamiento de los organismos internacionales de las Naciones Unidas.\n\nA través de esta experiencia, los alumnos representan a diferentes países y defienden posturas geopolíticas globales, abordando temáticas fundamentales como los **derechos humanos**, la **educación sostenible**, la **ciencia** y la **cultura**.\n\nEsta iniciativa estimula el pensamiento crítico, la capacidad de **oratoria y negociación**, la empatía intercultural y el compromiso con la **cooperación internacional** y la resolución pacífica de conflictos.' 
  },  
  { 
    bg: ConvenioBg4, 
    logo: ConvenioLogo4, 
    alt: 'Convenio Global Studies', 
    titulo: 'Global Studies',
    descripcion: 'El Instituto Santa Ana promueve experiencias de **aprendizaje internacional** a través de su alianza con **Global Studies**, facilitando el acceso a programas educativos en el exterior.\n\nEste convenio impulsa vivencias de **inmersión cultural y lingüística**, como los viajes de estudio a destinos emblemáticos como **Inglaterra**, diseñados para que los estudiantes perfeccionen el dominio del idioma en un entorno nativo.\n\nDe este modo, los alumnos combinan la formación académica con **excursiones culturales**, el desarrollo de la autonomía personal y una perspectiva global fundamental para su **crecimiento integral y profesional**.' 
  },  
  { 
    bg: ConvenioBg5, 
    logo: ConvenioLogo5, 
    alt: 'Convenio Universidades Aliadas', 
    titulo: 'Universidad del Salvador',
    descripcion: 'El Instituto Santa Ana promueve diversas **acciones de articulación** con instituciones universitarias, con el propósito de acercar a nuestros estudiantes al **mundo académico y profesional**, acompañarlos en la construcción de su **proyecto de vida** y favorecer la continuidad de sus **estudios superiores**.\n\nEn este marco, se desarrollan convenios y propuestas con la **Universidad del Salvador (USAL)**, **Universidad de Flores**, **Universidad Austral**, **Universidad Torcuato Di Tella**, **Universidad de San Andrés**, **Universidad de Tres de Febrero (UNTREF)**, **Universidad Blas Pascal** y **Universidad Siglo 21**.\n\nLas propuestas incluyen **visitas a universidades**, **talleres de orientación vocacional**, actividades de acercamiento a la vida universitaria, competencias de alegatos, **Modelos de Naciones Unidas**, torneos deportivos y otras experiencias académicas y formativas.\n\nAsimismo, contamos con **programas de becas** para nuestros estudiantes junto con la **Universidad Torcuato Di Tella**, la **Universidad del Salvador** y la **Universidad Austral**, ampliando las oportunidades de acceso y continuidad.\n\nTambién se desarrollan instancias de **capacitación y actualización docente**, fortaleciendo el vínculo entre la escuela, la universidad y el mundo profesional.' 
  },
  { 
    bg: ConvenioBg6, 
    logo: ConvenioLogo6, 
    alt: 'Convenio Buco S.A.', 
    titulo: 'Buco S.A.',
    descripcion: 'El Instituto Santa Ana establece un importante vínculo con la reconocida empresa industrial **Buco S.A.**, orientada al desarrollo tecnológico y la fabricación de componentes para el sector agroindustrial.\n\nMediante esta alianza, la institución impulsa **pasantías y prácticas profesionalizantes** que permiten a los estudiantes sumergirse en el ámbito corporativo real, participando de diversas áreas operativas, de gestión y **administrativas**.\n\nEsta experiencia clave en el **mundo laboral** fomenta la aplicación práctica de los saberes teóricos, estimula el compromiso profesional y fortalece las capacidades de los jóvenes frente a las demandas del **entorno industrial y productivo actual**.' 
  },  
  { 
    bg: ConvenioBg7, 
    logo: ConvenioLogo7, 
    alt: 'Convenio Schneider Electric', 
    titulo: 'Schneider Electric',
    descripcion: 'El Instituto Santa Ana consolida una sólida alianza con **Schneider Electric**, líder global en la gestión de la energía y la automatización, integrando la innovación tecnológica directamente en la formación institucional.\n\nGracias a este vínculo, la empresa colabora activamente aportando **material tecnológico de vanguardia** para equipar los espacios de aprendizaje del colegio, permitiendo que los estudiantes practiquen con herramientas de última generación.\n\nAsimismo, el convenio habilita programas de **pasantías y prácticas profesionalizantes**, brindando a los alumnos la oportunidad de insertarse en entornos corporativos de alta exigencia y potenciar su desarrollo en el **ámbito técnico y profesional**.' 
  },  
  { 
    bg: ConvenioBg8, 
    logo: ConvenioLogo8, 
    alt: 'Convenio Cisco', 
    titulo: 'Cisco Networking Academy',
    descripcion: 'El Instituto Santa Ana integra a su propuesta educativa los cursos y certificaciones oficiales de **Cisco Networking Academy**. A través de este convenio, nuestros estudiantes acceden a formación especializada en áreas clave de la tecnología actual, como **redes informáticas**, **ciberseguridad**, **sistemas operativos** y **administración de servidores**.\n\nEsta alianza estratégica permite a los alumnos obtener **certificaciones con validez internacional**, brindando herramientas prácticas y conocimientos técnicos altamente demandados en el mercado laboral, y preparándolos para los desafíos del **mundo digital y profesional**.' 
  },  
  { 
    bg: ConvenioBg9, 
    logo: ConvenioLogo9, 
    alt: 'Convenio Alianzas Educativas', 
    titulo: 'Universidad Torcuato Di Tella',
    descripcion: 'El Instituto Santa Ana promueve diversas **acciones de articulación** con instituciones universitarias, con el propósito de acercar a nuestros estudiantes al **mundo académico y profesional**, acompañarlos en la construcción de su **proyecto de vida** y favorecer la continuidad de sus **estudios superiores**.\n\nEn este marco, se desarrollan convenios y propuestas con la **Universidad del Salvador (USAL)**, **Universidad de Flores**, **Universidad Austral**, **Universidad Torcuato Di Tella**, **Universidad de San Andrés**, **Universidad de Tres de Febrero (UNTREF)**, **Universidad Blas Pascal** y **Universidad Siglo 21**.\n\nLas propuestas incluyen **visitas a universidades**, **talleres de orientación vocacional**, actividades de acercamiento a la vida universitaria, competencias de alegatos, **Modelos de Naciones Unidas**, torneos deportivos y otras experiencias académicas y formativas.\n\nAsimismo, contamos con **programas de becas** para nuestros estudiantes junto con la **Universidad Torcuato Di Tella**, la **Universidad del Salvador** y la **Universidad Austral**, ampliando las oportunidades de acceso y continuidad.\n\nTambién se desarrollan instancias de **capacitación y actualización docente**, fortaleciendo el vínculo entre la escuela, la universidad y el mundo profesional.' 
  },
  { 
    bg: ConvenioBg10, 
    logo: ConvenioLogo10, 
    alt: 'Convenio Institucional', 
    titulo: 'Universidad Austral',
    descripcion: 'El Instituto Santa Ana promueve diversas **acciones de articulación** con instituciones universitarias, con el propósito de acercar a nuestros estudiantes al **mundo académico y profesional**, acompañarlos en la construcción de su **proyecto de vida** y favorecer la continuidad de sus **estudios superiores**.\n\nEn este marco, se desarrollan convenios y propuestas con la **Universidad del Salvador (USAL)**, **Universidad de Flores**, **Universidad Austral**, **Universidad Torcuato Di Tella**, **Universidad de San Andrés**, **Universidad de Tres de Febrero (UNTREF)**, **Universidad Blas Pascal** y **Universidad Siglo 21**.\n\nLas propuestas incluyen **visitas a universidades**, **talleres de orientación vocacional**, actividades de acercamiento a la vida universitaria, competencias de alegatos, **Modelos de Naciones Unidas**, torneos deportivos y otras experiencias académicas y formativas.\n\nAsimismo, contamos con **programas de becas** para nuestros estudiantes junto con la **Universidad Torcuato Di Tella**, la **Universidad del Salvador** y la **Universidad Austral**, ampliando las oportunidades de acceso y continuidad.\n\nTambién se desarrollan instancias de **capacitación y actualización docente**, fortaleciendo el vínculo entre la escuela, la universidad y el mundo profesional.' 
  },
  {
    bg: ConvenioBg11,
    logo: ConvenioLogo11,
    alt: 'Convenio Academica International Studies',
    titulo: 'Academica International Studies',
    descripcion: 'El Instituto Santa Ana ofrece a sus estudiantes la posibilidad de cursar el prestigioso programa de doble titulación **Dual Diploma** en alianza con **Academica International Studies**[cite: 11].\n\nEsta propuesta permite a los alumnos obtener simultáneamente el título de bachiller argentino y el estadounidense (**High School Diploma**), cursando materias de manera online con un enfoque global, bilingüe y flexible[cite: 11]. Al obtener el título secundario de Estados Unidos, los estudiantes quedan habilitados para postularse e ingresar directamente a las universidades de dicho país, facilitando su acceso a la educación superior internacional[cite: 11].\n\nComo parte de esta alianza institucional, las familias cuentan con un beneficio exclusivo de un **50% de descuento en la tarifa de admisión** para comenzar el programa[cite: 11].\n\nEste trayecto internacional fomenta la autonomía, el dominio avanzado del inglés y el desarrollo de competencias digitales, preparando a los estudiantes para los desafíos globales y un entorno profesional competitivo[cite: 11].'
  }
];

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

const Convenios = () => {
  const [convenioSeleccionado, setConvenioSeleccionado] = useState(null);

  return (
    <div className="convenios-page-container">
      {/* Cabecera de la página */}
      <section className="convenios-header-section text-center py-5">
        <div className="container">
          <h1 className="convenios-main-title fw-bold">Nuestros Convenios y Alianzas</h1>
          <p className="convenios-main-subtitle text-muted mx-auto mt-2">
            Construimos puentes estratégicos con instituciones educativas, organismos y empresas líderes para potenciar el futuro de nuestros estudiantes.
          </p>
        </div>
      </section>

      {/* Grilla de Tarjetas de Convenios */}
      <section className="convenios-grid-section pb-5">
        <div className="container">
          <div className="row g-4">
            {LISTA_CONVENIOS.map((item, index) => (
              <div className="col-12 col-sm-6 col-lg-4" key={index}>
                <div 
                  className="convenios-page-card"
                  onClick={() => setConvenioSeleccionado(item)}
                >
                  <div className="convenios-page-card-bg-wrap">
                    <img src={item.bg} alt={item.alt} className="convenios-page-card-bg" />
                    <div className="convenios-page-card-overlay" />
                  </div>
                  <div className="convenios-page-card-content">
                    <div className="convenios-page-logo-wrap">
                      <img src={item.logo} alt={item.alt} className="convenios-page-logo" />
                    </div>
                    <h3 className="convenios-page-title">{item.titulo}</h3>
                    <span className="convenios-page-action-link">
                      Conocer más <i className="bi bi-arrow-right">→</i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Detalle del Convenio */}
      {convenioSeleccionado && (
        <div className="modal fade show d-block convenios-modal-backdrop" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content p-4 shadow-lg border-0">
              <div className="modal-header border-0 pb-0">
                <h4 className="modal-title fw-bold text-dark">{convenioSeleccionado.titulo}</h4>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setConvenioSeleccionado(null)}
                  aria-label="Cerrar"
                />
              </div>
              <div className="modal-body">
                <div className="modal-convenio-preview mb-4">
                  <img src={convenioSeleccionado.bg} alt="Fondo convenio" className="convenio-modal-bg" />
                  <div className="convenio-modal-overlay" />
                  <img src={convenioSeleccionado.logo} alt={convenioSeleccionado.alt} className="convenio-modal-logo" />
                </div>
                
                <div className="text-muted modal-descripcion px-2">
                  {renderConNegritas(convenioSeleccionado.descripcion)}
                </div>
              </div>
              <div className="modal-footer border-0 pt-0 justify-content-center">
                <button 
                  type="button" 
                  className="btn btn-dark px-5 py-2 fw-semibold" 
                  onClick={() => setConvenioSeleccionado(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Convenios;