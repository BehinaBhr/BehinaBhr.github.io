import "./Resume.scss";
import resemeIcon from "../../assets/images/resume.svg";

function Resume() {
  const url = "https://drive.google.com/file/d/117jxPfHQ3WohnuhKKF0tjPeacG1er836/view?usp=sharing";
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button className="resume">
        <img className="resume__img" src={resemeIcon} alt="reseme icon" />
        My Resume
      </button>
    </a>
  );
}

export default Resume;
