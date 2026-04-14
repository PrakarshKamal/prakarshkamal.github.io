import React from "react";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import Profile_2 from "../../assets/profile-2.jpg";
import Resume from "../../assets/resume.pdf";
import Card from "../../components/Card";
import data from "./data";
import { PC_BUILD_ROUTE } from "../../utils/sitePaths";
import "./About.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait" data-aos="fade-right">
            <img src={Profile_2} alt="About" />
          </div>
        </div>
        <div className="about__right">
          <h2>About me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Hi, my name is Prakarsh Kamal. I’m a Software Developer with around
            2 years of professional experience. During my time at Vena
            Solutions, I focused on delivering production-ready enterprise
            applications. I’m also a recent Computer Science graduate from
            McMaster University, and a detail-oriented, resilient, and creative
            problem solver.
          </p>
          <div className="about__actions">
            <a
              href={Resume}
              download="Prakarsh_Kamal_Resume"
              className="button primary"
            >
              Download Resume
              <FiDownload />
            </a>
            <a href={PC_BUILD_ROUTE} className="button">
              Check out my custom PC build
              <FiArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
