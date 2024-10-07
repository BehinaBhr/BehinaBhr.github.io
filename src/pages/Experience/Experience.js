import "./Experience.scss";
import { DocumentTitle } from "../../utils/utils";
import Timeline from "../../components/Timeline/Timeline";
import Project from "../../components/Project/Project";

const Experience = () => {
  DocumentTitle(" My Experience");
  return (
    <div className="experience">
      <section className="experience__section">
        <h2 className="experience__section-title">🧳 My Educational & Career Path</h2>
        <Timeline />
      </section>
      <section className="experience__section">
        <h2 className="experience__section-title">🗂️ Projects in Action</h2>
        <Project />
      </section>
    </div>
  );
};
export default Experience;
