import "./Project.scss";
import ProjectCard from "../ProjectCard/ProjectCard.js";
import ProjectElements from "./ProjectElements.js";

const Project = () => {
  return (
    <section className="projects" id="projects">
      {ProjectElements.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          icon={project.icon}
          title={project.title}
          demoLink={project.demoLink}
          description={project.description}
        />
      ))}
    </section>
  );
};

export default Project;
