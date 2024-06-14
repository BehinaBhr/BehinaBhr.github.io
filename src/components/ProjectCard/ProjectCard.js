import "./ProjectCard.scss";

const ProjectCard = ({ icon, title, demoLink, description }) => {

  return (
    <div className="project-card">
      <img className="project-card__icon" src={icon} alt="project icon" />
      <h3 className="project-card__title">{title}</h3>
      <a href={demoLink} className="project-card__demoLink" target="_blank" rel="noopener noreferrer">
        Demo
      </a>
      <details className="project-card__description">
        <summary className="project-card__description-title">Description</summary>
        <ul className="project-card__description-content">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default ProjectCard;
