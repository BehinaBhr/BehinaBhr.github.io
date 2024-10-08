import "./Open.scss";
import { Link } from "react-router-dom";

const Open = () => {
  return (
    <div className="open">
      <div className="open__title">🤝🏼 Open to work</div>
      <p className="open__content">
        A well-rounded background, driven by a passion for continuous learning and a drive to tackle new challenges,
        positions me as a highly motivated developer eager to contribute to user-centered software solutions. I'm open
        to opportunities in <span className="open__content--bold">British Columbia, Canada 🇨🇦 </span> or
        <span className="open__content--bold"> Remotely 🌎</span>. I'm eager to discuss how my qualifications can
        contribute to your project's success.<br />
        <Link to="/contact">
          <button className="open__content-button"> Let's connect!</button>
        </Link>
      </p>
    </div>
  );
};

export default Open;
