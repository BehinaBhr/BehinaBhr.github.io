import "./Summary.scss";
import ContactLink from "../ContanctLink/ContactLink";
import Resume from "../Resume/Resume";
import developer from "../../assets/images/developer.jpeg";

const Summary = () => {
  return (
    <div className="summary">
      <div className="summary__content-wrapper">
        <div className="summary__info">
          <div className="summary__info-starter">"Hello, World!"</div>
          <div className="summary__info-main">
            I'm Behina <span className="summary__info-main-expand">Bahramasari</span>
          </div>
          <div className="summary__info-extra">
            Educational Technology, Youth STEM, Software & Community Support Professional
            <br />
          </div>
        </div>
        <div className="summary__resume">
          <Resume />
        </div>
        <div className="summary__contact">
          <ContactLink />
        </div>
      </div>
      <div className="summary__slogan">
        <img src={developer} alt="developer girl" />
      </div>
    </div>
  );
};

export default Summary;
