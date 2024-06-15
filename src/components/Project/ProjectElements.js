import procketIcon from "../../assets/images/procket.svg";
import instockIcon from "../../assets/images/instock.svg";
import brainflixIcon from "../../assets/images/brainflix.svg";
import bandsiteIcon from "../../assets/images/bandsite.svg";
import travelsiteIcon from "../../assets/images/travelsite.svg";
import coffeeshopIcon from "../../assets/images/coffeeshop.svg";
import pokemonIcon from "../../assets/images/pokemon.svg";

let ProjectElements = [
  {
    id: 1,
    icon: procketIcon,
    title: "Procket",
    demoLink: "https://www.youtube.com/watch?v=Dn2GVzKBy1E",
    description: [
      "Developed a responsive single-page application productivity planning tool for procrastinators in just 3 weeks, leveraging strong UI/UX design skills and modern tech stacks like React.js, Node.js, Express.js, Knex.js, and MySQL.",
      "Integrated gamified visual rewards, such as rocket launches and collections, upon task completion, enhancing user experience and boosting engagement and motivation.",
      "Presented user-friendly task management features allowing easy creation, deletion, and postponement of tasks with built-in validation, empowering users to take control of their time and boosting productivity through intuitive design and data-driven insights.",
      "Launched evidence-based analytics using Google Charts, empowering users to identify and address procrastination patterns of habits, ultimately optimizing their workflow and making informed decisions about their productivity.",
      "Constructed a clean and scalable codebase with DRY principles, ensuring maintainability and adaptability as user needs evolve.",
      "Currently implementing robust user authentication to enhance security and safeguard user data.",
    ],
  },
  {
    id: 2,
    title: "InStock",
    icon: instockIcon,
    demoLink: "https://youtu.be/-TLMEiNhQmA?si=YJJCnFKx7M7YGWnf",
    description: [
      "Scrum Lead development of a responsive collaborative warehouse inventory management web app for a Fortune 500 client leveraging React front-end and robust Express back-end development with a 90% grade that significantly enhanced efficiency by streamlining warehouse operations through seamless inventory addition, editing, and multi-location tracking.",
      "Coordinated pair programming and PRs code reviews to resolve merge conflicts, enhance debugging, respect diverse methods, and reduce unnecessary rewrites.",
      "Managed task planning using Jira Scrum boards and facilitated daily stand-up meetings to ensure team alignment and progress tracking.",
      "Collaborated as an Agile team with diverse team members under a tight 3-day deadline utilizing effective written and verbal communication, Figma interface, Jira, and Git Flow to estimate projects and enhance team coding proficiency, upholding rigorous standards and ultimately contributing to the timely delivery of a scalable solution.",
    ],
  },
  {
    id: 3,
    title: "BrainFlix",
    icon: brainflixIcon,
    demoLink: "https://youtu.be/IaM8pWO_Y9k",
    description: [
      "Constructed a feature-rich, interactive, and responsive video streaming prototype, boasting granular playback control (play/pause, scrub bar, fullscreen, volume) and a dynamic sidebar featuring upcoming videos with smooth transitions between content and removing the currently playing one ensuring optimal engaging viewing experiences, facilitating user interaction with smooth transitions between content.",
      "Implemented a user-generated comments section, fostering community engagement and interaction through a comments section.",
      "Leveraged React's best practices (create-react-app, functional components, react-router-dom) and strong front-end design skills (SASS, Flexbox) to construct a visually captivating, user-centric, and dynamic UI that seamlessly responds to user interactions and API data.",
      "Established a connection between the front-end application and a mock API for initial data, then constructed a robust REST API from scratch to handle video data retrieval, creation, and user-liking functionalities.",
      "Implemented a like button, facilitating server-side and client-side updates to video likes, and integrated custom poster image uploads during video upload, enhancing personalization of content and showcasing proficiency in user interaction and data manipulation.",
    ],
  },
  {
    id: 4,
    title: "Band Site",
    icon: bandsiteIcon,
    demoLink: "https://youtu.be/bdSojuz_Qbg",
    description: [
      "Developed a responsive multi-page e-commerce website for a rising Music Band, utilizing UI/UX and modern web development best practices: mobile-first approach perfectly aligns with the provided mockups and style guides, Sass for streamlined CSS pre-processing, BEM for consistent class naming conventions, Flexbox for flexible layout control, and JavaScript for interactive elements to ensure an optimal user experience for the band's fans.",
      "Enhanced user engagement and fostered deeper fan relationships with interactive features, such as a dynamic comments section powered by real-time API calls, allowing fans to leave messages and connect with the band directly.",
      "Also, a live show listings page fetching data from a server-side API automatically updates with the latest show information, keeping fans informed about upcoming performances and increasing concert attendance by design.",
      "Streamlined development workflow and API integration facilitated the seamless retrieval of live data using Axios for both the comments section and show listings page, demonstrating proficiency in working with external APIs to elevate website functionality and enrich users' experience by providing dynamic and up-to-date content.",
    ],
  },
  {
    id: 5,
    title: "Travel Site",
    icon: travelsiteIcon,
    demoLink: "https://youtu.be/KffVy8Re9fg",
    description: [
      "Developed a responsive, multi-page travel website for a travel agency leveraging HTML and CSS and component-based architecture to showcase popular destinations.",
      "Translated design mockups into a user-friendly, functional multi-page website with clear intuitive navigation for seamless user flow while an engaging hero section with interactive dynamic destination cards enhanced user exploration.",
    ],
  },
  {
    id: 6,
    title: "Coffee Shop",
    icon: coffeeshopIcon,
    demoLink: "https://youtu.be/2bbG-DtitBM",
    description: [
      "Constructed a responsive, user-friendly, multi-page website for a new local coffee shop launch leveraging HTML, CSS, BEM, Box Model principles, and contemporary web development best practices to ensure optimal display across various devices with a clean, maintainable code structure promoting future modifications.",
      "Implemented a comprehensive user-centric navigation system linking key website sections (separate Landing Page and Menu section) and external social media platforms to enhance user experience and promote brand awareness.",
      "The visually captivating landing page showcases the company with a hero image, a navigation bar, and a targeted discount offer as a clear call to action to attract customers.",
      "The informative menu section provides detailed product representation through a comprehensive Menu showcasing coffee drinks, pastries, and detailed descriptions fostering customer engagement.",
    ],
  },
  {
    id: 7,
    title: "Guess Pokemon",
    icon: pokemonIcon,
    demoLink: "https://drive.google.com/file/d/1F9-blBgJcaKI2xp7DYeB7ZqroYvV6U_K/view?usp=sharing",
    description: [
      "Conceptualized and co-developed a web-based trivia game within a 24-hour Hackathon alongside 3 teammates employing agile development methodologies to manage project flow, resolve bugs efficiently using VsCode Live Share, and ensure a cohesive final product.",
      "Designed a visually appealing user interface using modern HTML and SCSS frameworks to facilitate user identification of Pokemon based on visual clues or partial descriptions, fostering a fun and engaging competitive environment.",
      "Spearheaded the integration of an external Pokemon API, establishing a robust data retrieval system to dynamically generate game questions, track player progress and ensure a vast pool of Pokémon for players to encounter, enhancing the game's replayability and long-term appeal.",
    ],
  },
];

export default ProjectElements;
