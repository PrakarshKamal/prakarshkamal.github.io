import React from "react";
import { links, socials } from "./data";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <ul className="nav__menu">
          {links.map((footerLink) => (
            <li key={footerLink.id}>
              <a href={footerLink.link}>{footerLink.title}</a>
            </li>
          ))}
        </ul>
        <div className="footer__socials">
          {socials.map((socialLink) => (
            <a
              key={socialLink.id}
              href={socialLink.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialLink.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__text">
        {/* <small>Made with &#10084;&#65039; by Prakarsh</small> */}
        {/* <h5>Made with &#10084;&#65039; by Prakarsh</h5> */}
        <p>Made with &nbsp;&#10084;&#65039; &nbsp; by Prakarsh</p>
      </div>
    </footer>
  );
};

export default Footer;
