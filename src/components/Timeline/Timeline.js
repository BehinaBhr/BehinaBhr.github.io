import "./Timeline.scss";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "../../assets/images/school.svg";
import WorkIcon from "../../assets/images/work.svg";


const WorkTimelineElement = ({ date, title, subtitle, description }) => (
  <VerticalTimelineElement className="timeline-element timeline-element--work" date={date} icon={<img src={WorkIcon} alt="Work Icon" />}>
    <h3 className="timeline-element-title">{title}</h3>
    <h4 className="timeline-element-subtitle">{subtitle}</h4>
    <p>{description}</p>
  </VerticalTimelineElement>
);

const EducationTimelineElement = ({ date, title, subtitle, description }) => (
  <VerticalTimelineElement className="timeline-element timeline-element--education" date={date} icon={<img src={SchoolIcon} alt="School Icon" />}>
    <h3 className="timeline-element-title">{title}</h3>
    <h4 className="timeline-element-subtitle">{subtitle}</h4>
    <p>{description}</p>
  </VerticalTimelineElement>
);

const Timeline = () => {
  return (
    <div className="timeline">
      <VerticalTimeline>
        <WorkTimelineElement
          date="Jan 2023 - Nov 2023"
          title="Customer Service Sales Specialist"
          subtitle="Sobeys"
          description="Consulted HR/I-O Psychology insights to optimize high-volume requests, fostering collaboration and personalized client relations, boosting satisfaction and sales. Founded a customer-centric atmosphere with organized displays, resolved upset customers' issues, and ensured precision in online support, improving overall service quality."
        />
        <WorkTimelineElement
          date="Mar 2021 - Apr 2022"
          title="Human Resources Assistant"
          subtitle="The Shining Sun - Banquet Hall and Restaurant"
          description="Led end-to-end recruitment processes, optimizing personnel actions and fostering a positive work environment by leveraging I-O Psychology. Managed HR operations, streamlining administrative tasks, maintaining office organization, and drafting documents using Microsoft Office. Achieved increased sales and brand awareness through enhanced social media communication with clients."
        />
        <WorkTimelineElement
          date="May 2019 - May 2021"
          title="Sales and Customer Service Specialist"
          subtitle="Peyk Saba - Travel Company"
          description="Consulted and welcomed customers with a positive first impression, offering personalized plans with product suggestions and special promotions by analyzing their financial goals and preferences to foster long-term client relationships while implementing pandemic safety protocols thereby preventing a decrease in sales and achieving company targets. Led the successful transition to online sales during the COVID-19 pandemic by adeptly guiding customers, offering multilingual support (English and Persian) across various channels, and promptly addressing inquiries and feedback to prioritize customer satisfaction and significantly increase e-commerce sales."
        />
        <WorkTimelineElement
          date="Apr 2019 - Apr 2021"
          title="Volunteer Assistant Psychologist"
          subtitle="Mahak - International Society for Children with Cancer"
          description="Provided guided psychological services with tailored interventions for children and families, demonstrating empathetic communication in high-pressure situations."
        />
        <WorkTimelineElement
          date="Sep 2013 - Dec 2014"
          title="Co-op Robotic Rescue Team"
          subtitle="Farzanegan 1 Highschool"
          description="Led a team in integrating robotics and programming C++ expertise to develop simulators and create intelligent robots for navigating intricate mazes and avoiding obstacles. Won 1st Place and 3rd Place in the Junior Robotic Competitions."
        />
        <EducationTimelineElement
          date="Jan 2024 - Apr 2024"
          title="GradDip, Software Engineering"
          subtitle="BrainStation"
          description='<a href="https://drive.google.com/file/d/1fqzRC7oBGoGvTlqTCSbTU84DUgbZ9m4b/view?usp=sharing" target="_blank">View Certificate</a>'
        />
        <EducationTimelineElement
          date="Sep 2017 - Apr 2021"
          title="BSc, Psychology"
          subtitle="Bu-Ali Sina University"
          description='<a href="https://drive.google.com/file/d/1az-R3H1IA4Lc4EIm0DZKJZszNQFECUEc/view?usp=sharing" target="_blank">View Certificate</a>'
        />
        <EducationTimelineElement
          date="Sep 2012 - Jan 2017"
          title="Dip, Experimental Science"
          subtitle="National Organization for Development of Exceptional Talents"
          description='<a href="https://drive.google.com/file/d/16zyLz2RPhp_ohtxOUpEYtNFw0OWqqNNo/view?usp=sharing" target="_blank">View Certificate</a>'
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
