import "./About.scss";
import { DocumentTitle } from "../../utils/utils";
import Summary from "../../components/Summary/Summary";
import Intro from "../../components/Intro/Intro";

const About = () => {
  DocumentTitle("About Me");
  return (
    <div className="about">
      <div className="about__summary">
        <Summary />
      </div>
      <div className="about__spotllight">
        A diligent and quick lifelong learner, skilled in creating user-centric web applications, didicated to
        problem-solving and helping others through innovative solutions by leveraging a unique transferable skill set
        honed through a well-rounded career journey. <br />
        <span className="about__spotllight--bold"> My technical expertise </span> in JavaScript, React, Node.js, Python,
        and UX/UI design is complemented by my collaboration with diverse teams on extensive group projects and
        hackathons during BrainStation's 12-week SWE Bootcamp, as well as ongoing online learning that is further
        enriched through my academic studies as a part-time Computer Science student at TWU, has equipped me to be a
        valuable asset in any professional setting.
      </div>
      <div className="about__intro">
        <Intro />
      </div>
    </div>
  );
};

export default About;
