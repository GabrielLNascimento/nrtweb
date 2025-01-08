import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contato from './pages/Contato';
import "./App.css"
import './components/Navbar.css'; // Importa o estilo do menu

const App = () => {
  return (
    <>
      <div className='imagem-back'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </>
  );
};

export default App