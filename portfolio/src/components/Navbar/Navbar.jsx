import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li>
          <a href="#profile">Profile</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="hamburger-menu">
        <div className="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="menu-links">
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
