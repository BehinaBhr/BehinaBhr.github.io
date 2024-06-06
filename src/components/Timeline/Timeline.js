import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.scss";
import TimelineElements from "./TimelineElements";
import { ReactComponent as WorkIcon } from "../../assets/images/work.svg";
import { ReactComponent as SchoolIcon } from "../../assets/images/school.svg";
import certificateIcon from "../../assets/images/certificate.svg";

const Timeline = () => {
  return (
    <VerticalTimeline>
      {TimelineElements.map((element) => {
        let isWorkIcon = element.icon === "work";
        let iconClass = isWorkIcon ? "__work" : "__school";
        let showButton = !!element.buttonText;
        let buttonClass = `vertical-timeline-element-button ${
          isWorkIcon ? "vertical-timeline-element-button__work" : "vertical-timeline-element-button__school"
        }`;
        let elementClass = isWorkIcon ? "__work" : "__school";

        return (
          <VerticalTimelineElement
            key={element.id}
            iconClassName={`vertical-timeline-element-icon${iconClass}`}
            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            date={element.date}
            className={`vertical-timeline-element${elementClass}`}
          >
            <h3 className="vertical-timeline-element-title">{element.title}</h3>

            {isWorkIcon && (
              <a
                href={element.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="vertical-timeline-element-location__linked"
              >
                {element.location}
              </a>
            )}
            {!isWorkIcon && <h5 className="vertical-timeline-element-location">{element.location}</h5>}
            {element.description && <p className="vertical-timeline-element-description">{element.description}</p>}
            {showButton && (
              <a className={buttonClass} href={element.buttonLink} target="_blank" rel="noopener noreferrer">
                <span>{element.buttonText}</span>
                <img className="vertical-timeline-element-button__icon" src={certificateIcon} alt="Certificate Icon" />
              </a>
            )}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
