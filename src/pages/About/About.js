import "./About.scss";
import { DocumentTitle } from "../../utils/utils";
import { useEffect } from "react";
import Summary from "../../components/Summary/Summary";
import Intro from "../../components/Intro/Intro";

const About = () => {
  DocumentTitle("About Me");
  // Target element ID for scrolling
  const scrollToTarget = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Call scrollToTarget on component mount for automatic scrolling
  useEffect(() => {
    scrollToTarget(); // Uncomment to enable automatic scrolling on load
  }, []);

  return (
    <div className="about" id="about">
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
