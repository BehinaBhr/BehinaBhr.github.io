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
        <li>AWS Essential Training for Developers - LinkedIn</li>
        <li>Bootstrap 5 Essential Training - LinkedIn</li>
        <li>Building Web APIs with ASP.NET Core in .NET - LinkedIn</li>
        <li>ChatGPT for Web Developers - LinkedIn</li>
        <li>Designing RESTful APIs - LinkedIn</li>
        <li>DevOps Foundations: Continuous Delivery/Continuous Integration - LinkedIn</li>
        <li>Learning Amazon Web Services (AWS) for Developers - LinkedIn</li>
        <li>Learning Next.js - LinkedIn</li>
        <li>Learning TypeScript - LinkedIn</li>
        <li>Node.js: Web Servers, Tests, and Deployment - LinkedIn</li>
        <li>React: Creating and Hosting a Full-Stack Site - LinkedIn</li>
        <li>React: Design Patterns - LinkedIn</li>
        <li>SQL Essential Training - LinkedIn</li>
        <li>Test Automation Foundations - LinkedIn</li>
        <li>TypeScript Essential Training - LinkedIn</li>
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
