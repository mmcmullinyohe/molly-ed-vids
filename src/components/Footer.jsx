import React from "react";
import { Link } from "react-router-dom";   // ⬅️ Add this import
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer__container">
        <ul className="footer__links">
          <li className="footer__link">
            <Link to="/">Home</Link>
          </li>
          <li className="footer__link">
            <Link to="/booking">Schedule Now</Link>
          </li>
          <li className="footer__link">
            <Link to="/videos">Videos</Link>
          </li>
          <li className="footer__link">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
