import "./Projects.scss";
import { DocumentTitle } from "../../utils/utils";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectElements from "./ProjectElements";

const Projects = () => {
  DocumentTitle("My Projects");

  return (
    <div className="projects">
      <h2 className="projects__title">🗂️ Projects in Action</h2>
      <div className="projects__elements" id="projects">
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
    </div>
    </div>
  );
};

export default Projects;
