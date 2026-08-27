import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Landing from "./components/landing/Landing.jsx";
import NoticiasList from "./components/noticias/NoticiasList.jsx";
import NoticiaDetalle from "./components/noticias/NoticiaDetalle.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Landing />} />
        
        {/* Página 1 de noticias (URL limpia y estética: /noticias) */}
        <Route path="/noticias" element={<NoticiasList />} />
        
        {/* Páginas siguientes (Ejemplo: /noticias/2) */}
        <Route path="/noticias/:page" element={<NoticiasList />} />
        
        {/* Detalle individual de cada noticia */}
        <Route path="/noticias/detalle/:slug" element={<NoticiaDetalle />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;