import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../assets/MM_logo_simple.png";


function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav__left">
        <img src={logo} alt="123Learn Logo" className="nav_logo" />
      </div>

      {/* Hamburger button (only visible on mobile via CSS) */}
      <button
        className="nav_toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="nav_toggle_bar"></span>
        <span className="nav_toggle_bar"></span>
        <span className="nav_toggle_bar"></span>
      </button>

      {/* Links */}
      <ul className={`nav_links ${isOpen ? "nav_links--open" : ""}`}>
        <li className="nav__link">
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/booking" onClick={closeMenu}>Schedule Now</Link>
        </li>
        <li>
          <Link to="/videos" onClick={closeMenu}>Videos</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <a href="mailto:mmcmullinyohe@gmail.com" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
