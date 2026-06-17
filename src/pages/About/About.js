import "./About.scss";
import { DocumentTitle } from "../../utils/utils";
import baby from "../../assets/images/baby.png";

const About = () => {
  DocumentTitle("About Me");

  return (
    <div className="about">
      <h2 className="about__title">🙋🏻‍♀️ My Story</h2>
      <div className="about__content">
        <img className="about__slogan" src={baby} alt="baby girl" />
        <div className="about__story">
          <p>
            I was born with a name meaning "the best" in Persian, yet my path has been less about perfection and more
            about continuous growth, curiosity, and lifelong learning. My career exploration across robotics,
            psychology, community programs, learning inclusion support, software development, human resources, customer
            service, and sales has equipped me with a unique blend of analytical thinking, empathy, leadership, and
            interpersonal communication skills.
          </p>
          <p>
            These transferable skill sets, honed through academic studies, fast-paced people-centred roles,
            collaborative teamwork, and hands-on technical projects, prepared me to effectively understand people's
            needs and translate them into clear, supportive, and practical solutions. From participating in rescue
            robotics competitions, to contributing to psychology-informed family support, to developing Procket, a
            productivity planning app for procrastinators, my passion for problem-solving, learning, and helping others
            has been the driving force behind my career.
          </p>
          <p>
            Fueled by my drive to use technology to make a positive impact, I embarked on a self-directed learning
            journey in software development, aspiring to blend psychology, education, and digital tools in meaningful
            ways. Through a combination of online resources, immersive individual coding practice, collaborative
            teamwork projects, and bootcamp hackathons, I developed my programming skills and strengthened my
            understanding of core software development practices and user-centred design principles.
          </p>
          <p>
            This hands-on learning experience equipped me to write clean, efficient code and deliver functional projects
            within tight deadlines. Today, I continue to build on that foundation through Youth STEM education, robotics
            and coding instruction, digital systems support, and community-focused work.
          </p>
          <p>
            This well-rounded journey allows me to contribute in roles where technology, learning, communication, and
            care intersect--whether supporting students, users, families, clients, or teams through organized,
            inclusive, and people-centred solutions.
          </p>
        </div>
      </div>

      <section className="about__subsection">
        <details>
          <summary className="about__subsection-title">Attributes</summary>
          <ul className="about__subsection-content">
            <li>Quick Learner</li>
            <li>Diligent & Detail-Oriented</li>
            <li>Organized & Strategic Thinker</li>
            <li>People-Centred Problem Solver</li>
            <li>Clear Communicator</li>
            <li>Inclusive & Empathetic Supporter</li>
            <li>Collaborative Team Player</li>
            <li>Program Facilitation & Coordination Mindset</li>
          </ul>
        </details>
        <details>
          <summary className="about__subsection-title"> Hobbies</summary>
          <ul className="about__subsection-content">
            <li>Singing & Guitar Playing</li>
            <li>Puzzle Solving</li>
            <li>Exploring New Places & Flavors</li>
            <li>Exercising</li>
            <li>Cultural Exchange & Language Learning</li>
            <li>Hosting Friendly Gatherings</li>
            <li>Chess & Board Games</li>
            <li>Devouring Stories - Books, Movies</li>
          </ul>
        </details>
      </section>
    </div>
  );
};

export default About;
