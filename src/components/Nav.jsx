import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/MM_logo_simple.png";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <img src={logo} alt="MM Logo" className="nav_logo" />
      <ul className="nav_links">
        <li className="nav__link">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/booking">Schedule Now</Link>
        </li>
        <li>
          <Link to="/videos">Videos</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="mailto:mmcmullinyohe@gmail.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

