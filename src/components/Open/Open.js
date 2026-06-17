import "./Open.scss";
import { Link } from "react-router-dom";

const Open = () => {
  return (
    <div className="open">
      <div className="open__title">🤝🏼 Open to work</div>
      <p className="open__content">
        A well-rounded background, strengthened by continuous learning and a willingness to take on new challenges,
        positions me as a highly motivated contributor across Educational Technology, Youth STEM, Learning Inclusion
        Support, Robotics/Coding Instruction, Software/Digital Systems Support, Community Program Support,
        Administrative Coordination, and Customer Service Operations.
        <br />
        I'm open to opportunities in British Columbia, Canada 🇨🇦 or remote 🌎 roles where I can contribute through a mix
        of technology, education, community support, and operations. I would be happy to discuss how my qualifications
        and cross-disciplinary experience can support your team's success.
        <br />
        <Link className="open__content-button" to="/contact">
          <button> Let's connect!</button>
        </Link>
      </p>
    </div>
  );
};

export default Open;
