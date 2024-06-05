import "./Certificate.scss";
import certificateIcon from "../../assets/images/certificate-wide.svg";
import CertificateSlider from "../CertificateSlider/CertificateSlider";
import CertificateElements from "../CertificateSlider/CertificateElements";

const Certificate = () => {
  return (
    <div className="certificate">
      <div className="certificate__header">
        <img className="certificate__header-icon" src={certificateIcon} alt="Certificate icon" />
        <h2 className="certificate__header-title">Professional Certificates</h2>
      </div>
      <ul className="certificate__list">
        <li>100 Days of Code: The Complete Python Pro Bootcamp - Udemy</li>
        <li>Crash Course on Python - Grow with Google on Coursera</li>
        <li>Python for Non-Programmers - LinkedIn</li>
        <li>The 7th brain & cognition school - Brain & Cognition Clinic (Bacogc)</li>
        <li>
          The spring school on Artificial intelligence, philosophy, ethics & society - Sharif University of Technology
        </li>
      </ul>
      <div className="certificate__slider">
        <CertificateSlider data={CertificateElements} />
      </div>
    </div>
  );
};

export default Certificate;
