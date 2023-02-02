import React, { useState } from "react";
import data from "./data";
import ProjectCategories from "./ProjectCategories";
import Projects from "./Projects";
import "./Portfolio.css";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  const categories = data.map((item) => item.category);
  const uniqueCategories = ["All", ...new Set(categories)];

  const handleFilterProjects = (category) => {
    if (category === "All") {
      setProjects(data);
      return;
    }

    const filterProjects = data.filter(
      (project) => project.category === category
    );

    setProjects(filterProjects);
  };

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>Some of the projects I have worked on!</p>
      <div className="container portfolio__container">
        <ProjectCategories
          categories={uniqueCategories}
          onFilterProjects={handleFilterProjects}
        />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
