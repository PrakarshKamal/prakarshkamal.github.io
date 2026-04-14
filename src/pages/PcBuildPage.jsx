import React, { useEffect } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiCpu,
  FiTool,
} from "react-icons/fi";
import {
  pcBuildGallery,
  pcBuildHighlights,
  pcBuildMedia,
  pcBuildParts,
  pcBuildStats,
  pcBuildTimeline,
} from "./pcBuildData";
import { HOME_ROUTE } from "../utils/sitePaths";
import "./PcBuildPage.css";

const PcBuildPage = () => {
  useEffect(() => {
    document.title = "Custom PC Build | Prakarsh Kamal";
  }, []);

  return (
    <div className="pc-build-page">
      <header className="pc-build-hero">
        <div className="container pc-build-hero__container">
          <div className="pc-build-hero__copy">
            <div className="pc-build-hero__meta">
              <a href={HOME_ROUTE} className="pc-build__back-link">
                <FiArrowLeft />
                Back to portfolio
              </a>
              <span className="pc-build__eyebrow">
                Hands-on hardware project
              </span>
            </div>
            <h1>Custom PC Build</h1>
            <p className="pc-build-hero__lead">
              I sourced the parts, assembled the system myself, documented the
              build stage by stage, and treated it as a practical exercise in
              PC architecture, validation, and troubleshooting discipline.
            </p>
            <div className="pc-build-hero__actions">
              <a href="#build-gallery" className="button primary">
                View Build Log
                <FiArrowRight />
              </a>
              <a href={`${HOME_ROUTE}#contact`} className="button">
                Contact Me
              </a>
            </div>
            <div className="pc-build-hero__stats">
              {pcBuildStats.map((item) => (
                <div key={item.label} className="pc-build-stat">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="pc-build-hero__media">
            <div className="pc-build-hero__frame">
              <img
                src={pcBuildMedia.hero}
                alt="Completed custom PC build"
                loading="eager"
              />
            </div>
            <div className="pc-build-specs">
              <div className="pc-build-specs__title">
                <FiCpu />
                <h2>Build Stack</h2>
              </div>
              <div className="pc-build-specs__list">
                {pcBuildParts.map((part) => (
                  <div key={part.label} className="pc-build-spec">
                    <span>{part.label}</span>
                    <strong>{part.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="pc-build-section">
        <div className="container">
          <div className="pc-build-section__header">
            <span className="pc-build__eyebrow">Why this matters</span>
            <h2>Built to show more than just a finished PC</h2>
            <p>
              I wanted this project to reflect how I approach systems work:
              understand the architecture, assemble carefully, validate at each
              checkpoint, and stay methodical when something needs attention.
            </p>
          </div>

          <div className="pc-build-highlights">
            {pcBuildHighlights.map((item, index) => (
              <article key={item.title} className="pc-build-card">
                <span className="pc-build-card__icon">
                  {index === 0 ? <FiCpu /> : index === 1 ? <FiTool /> : <FiCheckCircle />}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pc-build-section pc-build-section--muted">
        <div className="container">
          <div className="pc-build-section__header">
            <span className="pc-build__eyebrow">Build flow</span>
            <h2>How the system came together</h2>
            <p>
              From sourcing to final fit-and-finish, each phase reinforced the
              fundamentals behind system validation and hardware troubleshooting.
            </p>
          </div>

          <div className="pc-build-timeline">
            {pcBuildTimeline.map((item, index) => (
              <article key={item.title} className="pc-build-timeline__item">
                <span className="pc-build-timeline__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pc-build-section" id="build-gallery">
        <div className="container">
          <div className="pc-build-section__header">
            <span className="pc-build__eyebrow">Visual log</span>
            <h2>Step-by-step build gallery</h2>
            <p>
              Each screenshot captures a checkpoint in the process, from parts
              sourcing and board prep to cable routing and the final completed
              system.
            </p>
          </div>

          <div className="pc-build-gallery">
            {pcBuildGallery.map((item) => (
              <figure key={item.id} className="pc-build-gallery__item">
                <img src={item.image} alt={item.title} loading="lazy" />
                <figcaption>
                  <span>Step {String(item.id).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="pc-build-section pc-build-section--accent">
        <div className="container pc-build-video">
          <div className="pc-build-video__copy">
            <span className="pc-build__eyebrow">Walkthrough</span>
            <h2>Final build clip</h2>
            <p>
              A short video of the assembled system to round out the photo log
              and show the final presentation of the build.
            </p>
          </div>
          <div className="pc-build-video__frame">
            <video controls preload="metadata">
              <source src={pcBuildMedia.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PcBuildPage;
