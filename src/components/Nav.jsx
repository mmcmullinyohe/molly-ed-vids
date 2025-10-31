import React from "react";
import logo from "../assets/MM_logo_simple.png";
import './Nav.css'

function Nav() {
  return (
    <nav className="navbar">
      <img src={logo} alt="MM Logo" className="nav_logo" />
      <ul className="nav_links">
        <li className="nav__link"><a href="/">Home</a></li>
        <li><a href="/videos">Videos</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
