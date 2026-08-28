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
        
        <Route path="/noticias" element={<NoticiasList />} />
        <Route path="/noticias/:slug" element={<NoticiaDetalle />} />
        <Route path="/noticias/pagina/:page" element={<NoticiasList />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;