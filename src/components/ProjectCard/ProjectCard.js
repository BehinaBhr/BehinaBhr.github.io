import "./ProjectCard.scss";
import { useState } from "react";

const ProjectCard = ({ id, icon, title, demoLink, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={`project-card ${expanded ? "project-card--expanded" : ""}`}>
      <section className="project-card__section">
        <img className="project-card__icon" src={icon} alt="project icon" />
        <h3 className="project-card__title">{title}</h3>
        <a href={demoLink} className="project-card__demoLink" target="_blank" rel="noopener noreferrer">
          Demo
        </a>
        <button className="project-card__details" onClick={toggleExpand}>
        {expanded ? "View Less" : "View Details"}
      </button>
      </section>
      
      {expanded && (
        <ul className="project-card__description">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectCard;
