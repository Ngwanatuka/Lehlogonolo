import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo">Ngwanatuka Molepo</div>
      <ul className="nav-links">
        <li><a href="#profile">Profile</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div id="hamburger-nav" className="hamburger-menu">
        <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`menu-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#profile" onClick={toggleMenu}>Profile</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
