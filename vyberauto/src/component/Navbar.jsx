import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient'; // Import Supabase klienta
import '../CSSstyly/Navbar.css'; // Import stylů
import logo from "../assets/images/logo.png"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Stav pro menu
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user); // Uložíme uživatele do stavu
    };

    fetchUser();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Přepnutí stavu menu
  };

  const handleLogout = async () => {
    await supabase.auth.signOut(); // Odhlášení uživatele
    setUser(null); // Reset stavu uživatele
    setIsMenuOpen(false); // Zavřít menu
  };

  return (
    <header>
      <div className="container">
        <nav>
          {/* Logo */}
          <div className="logo">
            <Link to="/"><img src={logo}alt="Logo" className="logo" /></Link> 
          </div>

          {/* Search Bar */}
          <div className="search-bar">
            <input type="text" placeholder="Hledat auta..." className="search-bar" />
            <button className="search-btn">Hledat</button>
          </div>

          {/* Přihlášení nebo uživatel */}
          <div className="nav-Link">
            <ul>
              {user ? (
                <li>
                  {/* Zobrazení emailu jako tlačítka */}
                  <button className="email-button" onClick={toggleMenu}>
                    {user.email}
                  </button>
                  {/* Menu při kliknutí na email */}
                  {isMenuOpen && (
                    <div className="dropdown-menu">
                      <ul>
                        <li><Link to="/profile">Profil</Link></li>
                        <li><Link to="/favorites">Oblíbené</Link></li>
                        <li><button onClick={handleLogout}>Odhlásit se</button></li>
                      </ul>
                    </div>
                  )}
                </li>
              ) : (
                <li><Link to="/login">Přihlásit se</Link></li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
