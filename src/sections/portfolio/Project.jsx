import React from "react";
import Card from "../../components/Card";

export const Project = ({ project }) => {
  const demoTarget = project.demo?.startsWith("/") ? "_self" : "_blank";
  const demoRel =
    demoTarget === "_blank" ? "noopener noreferrer" : undefined;
  const githubTarget = project.github?.startsWith("/") ? "_self" : "_blank";
  const githubRel =
    githubTarget === "_blank" ? "noopener noreferrer" : undefined;

  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt="project img" />
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className="portfolio__project-cta">
        <a
          href={project.demo}
          className="button sm"
          target={demoTarget}
          rel={demoRel}
        >
          {project.demoLabel || "Demo"}
        </a>
        {project.github && (
          <a
            href={project.github}
            className="button sm primary"
            target={githubTarget}
            rel={githubRel}
          >
            {project.githubLabel || "Github"}
          </a>
        )}
      </div>
    </Card>
  );
};
