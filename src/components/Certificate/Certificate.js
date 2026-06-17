import "./Certificate.scss";
import CertificateSlider from "../CertificateSlider/CertificateSlider";
import CertificateElements from "../CertificateSlider/CertificateElements";

const Certificate = () => {
  return (
    <div className="certificate">
      <h2 className="certificate__title">🪪 Professional Certificates</h2>
      <section className="certificate__slider">
        <CertificateSlider data={CertificateElements} />
      </section>
      <a
        className="certificate__linkedin"
        href="https://www.linkedin.com/in/behinabhr/details/certifications/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View More Certificates
      </a>
      <ul className="certificate__list">
        <li>Class 5 Driver’s Licence</li>
        <li>Standard First Aid & CPR Level C</li>
        <li>Responsive Adult</li>
        <li>Willing to Obtain Additional Role-Required Certifications</li>
      </ul>
    </div>
  );
};

export default Certificate;
