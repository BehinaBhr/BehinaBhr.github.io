import "./Home.scss";
import { DocumentTitle } from "../../utils/utils";
import Summary from "../../components/Summary/Summary";
import Open from "../../components/Open/Open";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  DocumentTitle("Behina Bhr");
  return (
    <div className="home">
      <div className="home__summary">
        <Summary />
      </div>
      <div>
        <section className="home__section">
          <h2 className="home__section-title">🔦 Spotlight</h2>
          <div className="home__section-content--highlight">
            A diligent and quick lifelong learner, skilled in creating user-centric web applications, didicated to
            problem-solving and helping others through innovative solutions by leveraging a unique transferable skill
            set honed through a well-rounded career journey.
            <button> More About Me</button>
          </div>
        </section>

        <section className="home__section">
          <h2 className="home__section-title">💁🏻‍♀️ Expertise</h2>
          <div className="home__section-content">
            My technical expertise in JavaScript, React, Node.js, Python, and UX/UI design is complemented by my
            collaboration with diverse teams on extensive group projects and hackathons during BrainStation's 12-week
            SWE Bootcamp, as well as ongoing online learning that is further enriched through my academic studies as a
            part-time Computer Science student at TWU, has equipped me to be a valuable asset in any professional
            setting.
          </div>
          <Cards />
        </section>
      </div>

      <Open />
    </div>
  );
};

export default Home;
