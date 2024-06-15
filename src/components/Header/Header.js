import "./Header.scss";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            className="header__logo-image"
            src="https://see.fontimg.com/api/renderfont4/YaaO/eyJyIjoiZnMiLCJoIjoxMTUsInciOjEwMDAsImZzIjoxMTUsImZnYyI6IiMwMDAwMDAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/PCBCZWhpbmEgQmhyIC8-/aspire-demibold.png"
            alt="English fonts"
            loading="lazy"
          />
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <Link to={"/"}>
            <li className={`header__nav-item ${location.pathname === "/" ? "active" : ""}`}>About</li>
          </Link>
          <Link to={"/skill"}>
            <li className={`header__nav-item ${location.pathname === "/skill" ? "active" : ""}`}>SkillSet</li>
          </Link>
          <Link to={"/experience"}>
            <li className={`header__nav-item ${location.pathname === "/experience" ? "active" : ""}`}>Experience</li>
          </Link>
          <Link to={"/contact"}>
            <li className={`header__nav-item ${location.pathname === "/contact" ? "active" : ""}`}>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
