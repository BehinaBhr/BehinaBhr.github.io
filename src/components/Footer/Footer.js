import "./Footer.scss";
import profilePic from "../../assets/images/Profile.png";
import ContactLink from "../../components/ContanctLink/ContactLink";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <footer className="footer">
      <section className="footer__wrapper">
        {!isContactPage && (
          <div className="footer__contact">
            <Link to="/contact">
              <img
                className="footer__contact-title"
                src="https://see.fontimg.com/api/renderfont4/yw5qq/eyJyIjoiZnMiLCJoIjoxMTUsInciOjEwMDAsImZzIjoxMTUsImZnYyI6IiMwMDAwMDAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/R2V0IGluVG91Y2goKTo/senja-santuy.png"
                alt="Handwriting fonts"
                loading="lazy"
              />
            </Link>
            <ContactLink />
          </div>
        )}

        <img className="footer__profile" src={profilePic} alt="Personal Profile" />
      </section>
      <p className="footer__rights">Designed & Built by Behina Bahramsari 2024</p>
    </footer>
  );
};

export default Footer;
