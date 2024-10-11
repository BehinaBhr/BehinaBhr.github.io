import "./About.scss";
import { DocumentTitle } from "../../utils/utils";
import baby from "../../assets/images/baby.png";

const About = () => {
  DocumentTitle("About Me");
  return (
    <div className="about">
      <h2 className="about__title">🙋🏻‍♀️ My Story</h2>
      <img className="about__slogan" src={baby} alt="baby girl" />
      <p className="about__content">
        I was born with a name meaning "the best" in Persian, yet my path has been one of conquering perfectionism,
        embracing continuous growth, and cherishing lifelong learning. My career exploration across robotics,
        psychology, human resources, customer service, and sales has equipped me with a unique blend of analytical
        thinking, leadership, and interpersonal communication skills. These transferable skillsets, honed through
        academic, fast-paced customer-facing, and collaborative teamwork settings, prepared me to effectively understand
        user needs and translate them into successful technical solutions. From deploying rescue robots to contributing
        to mental health research, and even developing the Procket, a productivity planning app for procrastinators, my
        passion for problem-solving and helping others has been the driving force behind my career. Leveraging my skills
        in the tech world driven by aspiring to blend psychology and tech in meaningful ways. Fueled by my drive for
        using technology to make a positive impact, I embarked on a self-directed journey into software development.
        Through a combination of online resources, immersive individual projects, collaborative teamwork projects, and
        hackathons at a bootcamp, I developed my programming skills and solidified my understanding of core coding
        practices, design principles, and development processes. This hands-on learning experience equipped me to write
        clean, efficient code and deliver functional projects within tight deadlines, making me a valuable asset to any
        software development team.
      </p>

      <section className="about__subsection">
        <details>
          <summary className="about__subsection-title"> Features</summary>
          <ul className="about__subsection-content">
            <li>Quick Learner</li>
            <li>Diligent & Detail-Oriented</li>
            <li>Organized & Strategic Thinker</li>
            <li>Synergistic Team Player</li>
            <li>Problem-Solver & Empathetic</li>
          </ul>
        </details>
        <details>
          <summary className="about__subsection-title"> Hobbies</summary>
          <ul className="about__subsection-content">
            <li>Singing & Guitar Playing</li>
            <li>Puzzle Solving</li>
            <li>Exploring New Places & Flavors</li>
            <li>Competitive Sports</li>
            <li>Devouring Stories - Books, Movies</li>
          </ul>
        </details>
      </section>
    </div>
  );
};

export default About;
