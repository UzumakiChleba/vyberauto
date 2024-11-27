import React, { useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom'; 
import '../CSSstyly/Navbar.css';
import VyberAutoLogo from '../assets/images/VyberAutoLogo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className='container'>
        <nav>
          <div className="logo">
            <img src={VyberAutoLogo} alt="Logo" />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Hledat..." />
            <button type="submit" className="search-btn">🔍</button>
          </div>
          <ul className={`nav-Link ${isMenuOpen ? "active" : ""}`}>
            <li>
              <Link to="/login">Přihlásit se</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
