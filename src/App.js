import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Landing from "./components/landing/Landing.jsx";
import NoticiasList from "./components/noticias/NoticiasList.jsx";
import NoticiaDetalle from "./components/noticias/NoticiaDetalle.jsx";
import Contacto from "./components/contacto/Contacto.jsx";
import Nosotros from "./components/nosotros/Nosotros.jsx";
import Inicial from "./components/niveles/inicial/Inicial.jsx";

import Maternal from "./components/niveles/maternal/Maternal.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Landing />} />
        
        <Route path="/noticias" element={<NoticiasList />} />
        <Route path="/noticias/:slug" element={<NoticiaDetalle />} />
        <Route path="/noticias/pagina/:page" element={<NoticiasList />} />

        <Route path="/nosotros" element={<Nosotros />} />

        <Route path="/contacto" element={<Contacto />} />

        <Route path="/maternal" element={<Maternal />} />
        <Route path="/inicial" element={<Inicial />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;