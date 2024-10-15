import "./Home.scss";
import { DocumentTitle } from "../../utils/utils";
import Summary from "../../components/Summary/Summary";
import Open from "../../components/Open/Open";
import Cards from "../../components/Cards/Cards";
import { Link } from "react-router-dom";

const Home = () => {
  DocumentTitle("Behina Bhr");
  return (
    <div className="home">
      <Summary />

      <section className="home__section">
        <h2 className="home__section-title">🔦 Spotlight</h2>
        <div className="home__section-content home__section-content--spotlight">
          A diligent and quick lifelong learner, skilled in creating user-centric web applications, dedicated to
          problem-solving and helping others through innovative solutions by leveraging a unique transferable skill set
          honed through a well-rounded career journey.
          <Link className="home__section-content-button" to="/about">
            <button> More About Me</button>
          </Link>
        </div>
      </section>

      <section className="home__section">
        <h2 className="home__section-title">💁🏻‍♀️ Expertise</h2>
        <div className="home__section-content home__section-content--expertise">
          My technical expertise in <span className="home__section-content--bold">JavaScript</span>,{" "}
          <span className="home__section-content--bold">React</span>,{" "}
          <span className="home__section-content--bold">Node.js</span>,{" "}
          <span className="home__section-content--bold">Python</span>,{" "}
          <span className="home__section-content--bold">SQL</span> and{" "}
          <span className="home__section-content--bold">UX/UI design</span> is complemented by my collaboration with
          diverse teams on extensive group projects and hackathons during BrainStation's 12-week SWE Bootcamp, as well
          as ongoing online learning that is further enriched through my academic studies as a part-time Computer
          Science student at TWU, has equipped me to be a valuable asset in any professional setting.
        </div>
        <Cards />
      </section>

      <Open />
    </div>
  );
};

export default Home;
