import "./Certificate.scss";
import CertificateSlider from "../CertificateSlider/CertificateSlider";
import CertificateElements from "../CertificateSlider/CertificateElements";

const Certificate = () => {
  return (
    <div className="certificate">
      <section className="certificate__list">
        <ul>
          <li>100 Days of Code: The Complete Python Pro Bootcamp - Udemy</li>
          <li>Crash Course on Python - Grow with Google on Coursera</li>
          <li>Python for Non-Programmers - LinkedIn</li>
          <li>The 7th brain & cognition school - Brain & Cognition Clinic (Bacogc)</li>
          <li>
            The spring school on Artificial intelligence, philosophy, ethics & society - Sharif University of Technology
          </li>
        </ul>
      </section>
      <CertificateSlider data={CertificateElements} />
    </div>
  );
};

export default Certificate;
