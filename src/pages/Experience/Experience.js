import "./Experience.scss";
import { DocumentTitle } from "../../utils/utils";
import experienceIcon from "../../assets/images/experience.svg";
import Timeline from "../../components/Timeline/Timeline";
import Certificate from "../../components/Certificate/Certificate";

const Experience = () => {
  DocumentTitle(" My Experience");
  return (
    <div className="experience">
      <div className="experience__header">
        <img className="experience__header-icon" src={experienceIcon} alt="experience icon" />
        <h2 className="experience__header-title">My Educational & Career Path</h2>
      </div>
      <section className="experience__section">
      <Timeline />
      </section>
      <section className="experience__section">
      <Certificate />
      </section>
    </div>
  );
};
export default Experience;
