import "./Experience.scss";
import { DocumentTitle } from "../../utils/utils";
import Timeline from "../../components/Timeline/Timeline";

const Experience = () => {
  DocumentTitle(" My Experience");
  return (
    <div className="experience">
      <Timeline />;
    </div>
  );
};

export default Experience;
