import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderPortrait from "../../assets/profile.jpg";
import data from "./data";
import "./Header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="header">
      <div className="container header__container">
        <div className="header__portrait" data-aos="zoom-in">
          <img src={HeaderPortrait} alt="" />
        </div>
        <h1 data-aos="fade-up">Prakarsh Kamal</h1>
        <h5 data-aos="fade-up">Software Developer | Student | Learner</h5>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="button primary">
            Contact Me
          </a>
          <a href="#portfolio" className="button light">
            My Portfolio
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
