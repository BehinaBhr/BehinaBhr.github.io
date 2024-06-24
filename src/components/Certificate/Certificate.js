import "./Certificate.scss";
import CertificateSlider from "../CertificateSlider/CertificateSlider";
import CertificateElements from "../CertificateSlider/CertificateElements";

const Certificate = () => {
  return (
    <div className="certificate">
      <h2 className="certificate__title">Professional Certificates</h2>
      <ul className="certificate__list">
        <li>Google AI Essential - Coursera</li>
        <li>100 Days of Code: The Complete Python Pro Bootcamp - Udemy</li>
        <li>Crash Course on Python - Grow with Google on Coursera</li>
        <li>Python for Non-Programmers - LinkedIn</li>
        <li>The 7th Brain & Cognition School - Brain & Cognition Clinic</li>
        <li>
          The Spring School on Artificial Intelligence, Philosophy, Ethics & Society - Sharif University of Technology
        </li>
      </ul>
      <div className="certificate__slider">
        <CertificateSlider data={CertificateElements} />
      </div>
    </div>
  );
};

export default Certificate;
