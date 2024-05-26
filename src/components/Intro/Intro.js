import "./Intro.scss";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__section">
        <div className="intro__section-title">🙋🏻‍♀️ My Story</div>
        <p className="intro__section-content">
          I was born with a name meaning "the best" in Persian, yet my path has been one of conquering perfectionism,
          embracing continuous growth, and cherishing lifelong learning. My career exploration across robotics,
          psychology, human resources, customer service, and sales has equipped me with a unique blend of analytical
          thinking, leadership, and interpersonal communication skills. These transferable skillsets, honed through
          academic, fast-paced customer-facing, and collaborative teamwork settings, prepared me to effectively
          understand user needs and translate them into successful technical solutions. From deploying rescue robots to
          contributing to mental health research, and even developing the Procket, a productivity planning app for
          procrastinators, my passion for problem-solving and helping others has been the driving force behind my
          career. Leveraging my skills in the tech world driven by aspiring to blend psychology and tech in meaningful
          ways. Fueled by my drive for using technology to make a positive impact, I embarked on a self-directed journey
          into software development. Through a combination of online resources, immersive individual projects,
          collaborative teamwork projects, and hackathons at a bootcamp, I developed my programming skills and
          solidified my understanding of core coding practices, design principles, and development processes. This
          hands-on learning experience equipped me to write clean, efficient code and deliver functional projects within
          tight deadlines, making me a valuable asset to any software development team.
        </p>

        <div className="intro__char">
          <details>
            <summary className="intro__char-title">Features:</summary>
            <ul className="intro__char-content">
              <li>Quick Learner</li>
              <li>Diligent & Detail-Oriented</li>
              <li>Organized & Strategic Thinker</li>
              <li>Synergistic Team Player</li>
              <li>Problem-Solver & Empathetic</li>
            </ul>
          </details>
          <details>
            <summary className="intro__char-title">Hobbies:</summary>
            <ul className="intro__char-content">
              <li>Singing & Guitar Playing</li>
              <li>Puzzle Solving</li>
              <li>Competitive Sports</li>
              <li>Exploring New Places & Flavors</li>
            </ul>
          </details>
        </div>
      </div>
      <div className="intro__section">
        <div className="intro__section-title">🤝🏼 Open to work</div>
        <p className="intro__section-content">
          A well-rounded background, driven by a passion for continuous learning and a drive to tackle new challenges,
          positions me as a highly motivated developer eager to contribute to user-centered software solutions. I'm open
          to opportunities in <span className="intro__section-content--bold">British Columbia, Canada </span> or{" "}
          <span className="intro__section-content--bold">Remotely</span>. I'm eager to discuss how my qualifications can
          contribute to your project's success. Let's connect!
        </p>
      </div>
    </div>
  );
};

export default Intro;
