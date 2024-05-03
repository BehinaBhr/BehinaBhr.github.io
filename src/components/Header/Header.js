import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <a href="https://www.fontspace.com/category/english">
            <img
              className="header__logo-image"
              src="https://see.fontimg.com/api/renderfont4/YaaO/eyJyIjoiZnMiLCJoIjoxMTUsInciOjEwMDAsImZzIjoxMTUsImZnYyI6IiMwMDAwMDAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/PCBCZWhpbmEgQmhyIC8-/aspire-demibold.png"
              alt="English fonts"
              loading="lazy"
            />
          </a>
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <Link to={"/"}>
            <li className="header__nav-item">About</li>
          </Link>
          <Link to={"/skill"}>
            <li className="header__nav-item">Skill</li>
          </Link>
          <Link to={"/experience"}>
            <li className="header__nav-item">Experience</li>
          </Link>
          <Link to={"/contact"}>
            <li className="header__nav-item">Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
