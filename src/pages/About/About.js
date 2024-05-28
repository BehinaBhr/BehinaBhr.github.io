import "./About.scss";
import { DocumentTitle } from "../../utils/utils";
import { useEffect } from "react";
import Summary from "../../components/Summary/Summary";
import Intro from "../../components/Intro/Intro";

const About = () => {
  DocumentTitle("About Me");
  return (
    <div className="about">
      <div className="about__summary">
        <Summary />
      </div>
      <div className="about__intro">
        <Intro />
      </div>
    </div>
  );
};

export default About;
