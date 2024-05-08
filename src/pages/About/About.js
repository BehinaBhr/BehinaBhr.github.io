import "./About.scss";
import { DocumentTitle } from "../../utils/utils";
import ContactLink from "../../components/ContanctLink/ContactLink";
import Resume from "../../components/Resume/Resume";
import developer from "../../assets/images/developer.jpeg";

const About = () => {
  DocumentTitle("About Page");
  return (
    <div className="about">
      <div className="about__content-wrapper">
        <div className="about__info">
          <div className="about__info-starter">"Hello, World!"</div>
          <div className="about__info-main">
            I'm Behina <span className="about__info-main-expand">Bahramasari</span>
          </div>
          <div className="about__info-extra">
            A <span className="about__info-extra-bold">Full-Stack</span>
            <span className="about__info-extra-expand"> Software</span> Developer
          </div>
        </div>
        <div className="about__resume">
          <Resume />
        </div>
        <div className="about__contact">
          <ContactLink />
        </div>
      </div>
      <div className="about__slogan">
        <img src={developer} alt="developer girl" />
      </div>
    </div>
  );
};

export default About;








