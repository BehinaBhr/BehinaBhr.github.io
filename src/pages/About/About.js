import "./About.scss";
import { DocumentTitle } from "../../utils/utils";
import baby from "../../assets/images/baby.png";
import Intro from "../../components/Intro/Intro";

const About = () => {
  DocumentTitle("About Me");
  return (
    <div className="about">
      <div className="about__slogan">
      <img src={baby} alt="baby girl" />
      </div>
      <div className="about__intro">
        <Intro />
      </div>
    </div>
  );
};

export default About;
