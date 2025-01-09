import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Botão para abrir o menu */}
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>

      {/* Menu lateral */}
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className='container-buttons'>
          <button>Entrar</button>
          {/* colocar imagem do usuario */}
        </div>
        
        {/* <button className="close-button" onClick={toggleMenu}>
          ✖
        </button> */}
        <nav className="menu-links">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/contato" onClick={toggleMenu}>Contato</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
