import React from 'react';
import './Menu.css';

function Menu({ isOpen, closeMenu }) {
  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={closeMenu}>X</button>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </div>
  );
}

export default Menu;
