import "./Resume.scss";
import resemeIcon from "../../assets/images/resume.svg";

function Resume() {
  const url = "https://drive.google.com/file/d/1ZOnyoUs3waClE3xGBOicOkmYP8tMT1dw/view?usp=sharing";
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
