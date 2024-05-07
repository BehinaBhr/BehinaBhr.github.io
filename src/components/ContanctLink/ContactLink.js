import "./ContactLinks.scss";
import instagramLogo from "../../assets/images/instagram.svg";
import linkedinLogo from "../../assets/images/linkedin.svg";
import githubLogo from "../../assets/images/github.svg";
import gmailLogo from "../../assets/images/gmail.svg";

function ContactLinks() {
  const contactLinks = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/behinabahramsari/",
      logo: linkedinLogo,
    },
    {
      name: "Gmail",
      link: "mailto:mail@jayrajroshan1@gmail.com",
      logo: gmailLogo,
    },
    {
      name: "GitHub",
      link: "https://github.com/BehinaBhr",
      logo: githubLogo,
    },

    {
      name: "Instagram",
      link: "https://www.instagram.com/be_bhr/",
      logo: instagramLogo,
    },
  ];

  return (
    <div className="contact-links">
      {contactLinks.map((contact) => (
        <div className="contact-links__item">
          <a
            key={contact.name}
            href={contact.link}
            target="_blank"
            rel="noreferrer noopener"
            className="contact-links__link"
          >
            <img src={contact.logo} alt={`${contact.name} Logo`} />
          </a>
        </div>
      ))}
    </div>
  );
}
export default ContactLinks;
