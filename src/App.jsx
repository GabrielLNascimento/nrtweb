<<<<<<< HEAD
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contato from './pages/Contato';

import './components/Navbar.css'; // Importa o estilo do menu

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  );
};
=======
import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar se o menu está aberto ou fechado

  // Função para abrir o menu
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  // Função para fechar o menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      <div className="background">
        <div className="content">
          {/* Título à esquerda */}
          <div className="title">
            <h1>Primeira linha do título!</h1>
            <h2>Segunda linha do título!</h2>
          </div>

          {/* Imagem à direita */}
          <div className="image-right">
            <img src="/imagem-direita.jpg" alt="Imagem à direita" />
          </div>
        </div>

        {/* Botão para abrir o menu */}
        <button className="menu-btn" onClick={openMenu}>
          ☰
        </button>

        {/* Componente Menu */}
        <Menu isOpen={isMenuOpen} closeMenu={closeMenu} />
      </div>
    </div>
  );
}
>>>>>>> 4a1a667d70d40abb40e1d8f502d6e5d7435c85cf

export default App;
