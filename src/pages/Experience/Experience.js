import "./Experience.scss";
import { DocumentTitle } from "../../utils/utils";
import Timeline from "../../components/Timeline/Timeline";

const Experience = () => {
  DocumentTitle(" My Experience");
  return (
    <div className="experience">
      <h2 className="experience__title">🧳 My Educational & Career Path</h2>
      <Timeline />
    </div>
  );
};
export default Experience;
