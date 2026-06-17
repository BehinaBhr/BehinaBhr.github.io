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
          A diligent and quick lifelong learner with a background in Software Engineering, Psychology, Youth STEM
          Education, and Community Support, skilled in creating people-centred digital solutions, supporting inclusive
          learning experiences, and solving practical problems by leveraging a unique transferable skill set honed across
          a well-rounded career journey.
          <Link className="home__section-content-button" to="/about">
            <button>More About Me</button>
          </Link>
        </div>
      </section>

      <section className="home__section">
        <h2 className="home__section-title">💁🏻‍♀️ Expertise</h2>
        <div className="home__section-content home__section-content--expertise">
          My interdisciplinary expertise in psychology-informed problem-solving, programming fundamentals, and
          user-centred digital support is complemented by hands-on experience across diverse service-focused roles,
          including freelance web development and design, Youth STEM education, community program support, customer
          service, and administrative coordination. Through ongoing learning and academic studies, I have developed a
          well-rounded ability to communicate clearly with people across different ages and technical backgrounds,
          support inclusive learning environments, and contribute effectively in fast-paced teams, equipping me to be a
          valuable asset in a wide range of professional settings.
        </div>
        <Cards />
      </section>

      <Open />
    </div>
  );
};

export default Home;
