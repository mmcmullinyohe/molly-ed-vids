import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer__container">
          <ul className="footer__links">
            <li className="footer__link">
              <a href="/">Home</a>
            </li>
            <li><a href="/booking">Schedule Now</a></li>
            <li>
              <a href="/videos">Videos</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Footer;
