import "./Cards.scss";
import skills from "../../assets/images/skills.png";
import experience from "../../assets/images/experience.png";
import projects from "../../assets/images/projects.png";
import { Link } from "react-router-dom";

function Cards() {
  const cards = [
    {
      id: 1,
      image: skills,
      title: "My Skill Set",
      link_to: "/skills",
    },
    {
      id: 2,
      image: experience,
      title: "My Experience",
      link_to: "/experience",
    },
    {
      id: 3,
      image: projects,
      title: "My Projects",
      link_to: "/projects",
    },
  ];

  return (
    <div className="cards">
      {cards.map((card) => (
        <Link to={card.link_to} key={card.id}>
          <div className="cards-item">
            <h3 className="cards-item__title">{card.title}</h3>
            <div className="cards-item__banner">
              <img src={card.image} alt={`card${card.id} banner`} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Cards;
