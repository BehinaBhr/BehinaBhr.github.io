import "./Timeline.scss";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineElements from "./TimelineElements";
import { ReactComponent as WorkIcon } from "../../assets/images/work.svg";
import { ReactComponent as SchoolIcon } from "../../assets/images/school.svg";

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
            <h5 className="vertical-timeline-element-location">{element.location}</h5>
            <p className="vertical-timeline-element-description">{element.description}</p>
            {showButton && (
              <a
                className={buttonClass}
                href={element.buttonLink}
                // to open the linked document in a new tab
                target="_blank"
                rel="noopener noreferrer"
              >
                {element.buttonText}
              </a>
            )}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
