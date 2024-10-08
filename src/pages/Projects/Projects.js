import "./Projects.scss";
import { DocumentTitle } from "../../utils/utils";
import Project from "../../components/Project/Project";

const Projects = () => {
  DocumentTitle("My Projects");

  return (
    <div className="projects">
     <section className="projects__section">
        <h2 className="projects__section-title">🗂️ Projects in Action</h2>
        <Project />
      </section>
    </div>
  );
};

export default Projects;
