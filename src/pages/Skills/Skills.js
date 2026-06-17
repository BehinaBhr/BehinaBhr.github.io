import "./Skills.scss";
import { Link } from "react-router-dom";
import { DocumentTitle } from "../../utils/utils";
import Certificate from "../../components/Certificate/Certificate";

const transferableSkills = [
  "Youth STEM Instruction",
  "Robotics & Coding Instruction",
  "Learning Inclusion Support",
  "Inclusive Learning Environments",
  "Program Facilitation",
  "Classroom & Activity Management",
  "Behaviour Support",
  "Parent & Family Communication",
  "User-Centred Digital Support",
  "Responsive Web Design",
  "Digital Systems Support",
  "Content Management",
  "Technical Communication",
  "Requirement Gathering",
  "Process Documentation",
  "Basic Troubleshooting",
  "Community Program Support",
  "Customer Service Operations",
  "Administrative Coordination",
  "Scheduling & Attendance Tracking",
  "Documentation & Records Management",
  "Payment & Transaction Support",
  "Stakeholder Communication",
  "Service Coordination",
  "Psychology-Informed Communication",
  "People-Centred Problem Solving",
  "Clear Cross-Audience Communication",
  "Team Collaboration",
  "Conflict Resolution",
  "Organization & Attention to Detail",
  "Adaptability in Fast-Paced Environments",
  "Program Coordination & Leadership",
];

const techStack = [
  ["JavaScript", "F7DF1E", "javascript", "000000"],
  ["TypeScript", "3178C6", "typescript", "ffffff"],
  ["Python", "3776AB", "python", "ffffff"],
  ["Java", "ED8B00", "openjdk", "ffffff"],
  ["C", "A8B9CC", "c", "000000"],
  ["C++", "00599C", "cplusplus", "ffffff"],
  ["HTML5", "E34F26", "html5", "ffffff"],
  ["CSS3", "1572B6", "css3", "ffffff"],
  ["Sass", "CC6699", "sass", "ffffff"],
  ["Flexbox", "8BC500", "css3", "ffffff"],
  ["CSS Animations", "404D59", "css3", "ffffff"],
  ["Responsive Web Design", "4A90E2", "googlechrome", "ffffff"],
  ["UX/UI Design", "4A90E2", "figma", "ffffff"],
  ["React.js", "282C34", "react", "61DAFB"],
  ["React Router", "CA4245", "reactrouter", "ffffff"],
  ["React Google Charts", "8AB4ED", "google", "ffffff"],
  ["Next.js", "000000", "nextdotjs", "ffffff"],
  ["Angular", "DD0031", "angular", "ffffff"],
  ["Bootstrap", "7952B3", "bootstrap", "ffffff"],
  ["Vite", "646CFF", "vite", "ffffff"],
  ["Node.js", "339933", "nodedotjs", "ffffff"],
  ["Express.js", "404D59", "express", "ffffff"],
  ["Knex.js", "FF5733", "knexdotjs", "ffffff"],
  ["REST API Development", "4CAF50", "swagger", "ffffff"],
  ["ASP.NET Core Web APIs", "512BD4", "dotnet", "ffffff"],
  ["Object-Oriented Programming", "44CC11", "codecademy", "ffffff"],
  ["JWT", "4A90E2", "jsonwebtokens", "ffffff"],
  ["Authentication & Authorization", "A450D2", "auth0", "ffffff"],
  ["SQL", "4479A1", "postgresql", "ffffff"],
  ["MySQL", "F29111", "mysql", "ffffff"],
  ["MongoDB", "47A248", "mongodb", "ffffff"],
  ["Supabase", "000000", "supabase", "ffffff"],
  ["Browser Storage", "4A90E2", "googlechrome", "ffffff"],
  ["Data Science Fundamentals", "3F75A2", "jupyter", "ffffff"],
  ["Data Handling & Analysis", "150458", "pandas", "ffffff"],
  ["Data Visualization", "E97627", "plotly", "ffffff"],
  ["React Testing Library", "E33332", "testinglibrary", "ffffff"],
  ["Jest", "C21325", "jest", "ffffff"],
  ["Postman", "FF6C37", "postman", "ffffff"],
  ["Prettier", "F7B93E", "prettier", "ffffff"],
  ["npm", "CB3837", "npm", "ffffff"],
  ["Git", "F05032", "git", "ffffff"],
  ["Git Flow", "00AEEF", "git", "ffffff"],
  ["GitHub", "181717", "github", "ffffff"],
  ["Terminal / Command Line", "217346", "gnubash", "ffffff"],
  ["Netlify", "00C7B7", "netlify", "ffffff"],
  ["Vercel", "FFFFFF", "vercel", "000000"],
  ["Heroku", "6762A6", "heroku", "ffffff"],
  ["AWS", "FF9900", "amazonwebservices", "ffffff"],
  ["Unity", "000000", "unity", "ffffff"],
  ["Scratch", "F9A83A", "scratch", "ffffff"],
  ["Block-Based Coding", "8E44AD", "codeblocks", "ffffff"],
  ["VEX Robotics", "D71920", "probot", "ffffff"],
  ["LEGO SPIKE Robotics", "E3000B", "lego", "ffffff"],
  ["Autonomous Robotics Fundamentals", "455A64", "ros", "ffffff"],
  ["Microelectronics", "00979D", "arduino", "ffffff"],
  ["3D Printing", "FF6F00", "printables", "ffffff"],
  ["Tinkercad", "1477D4", "autodesk", "ffffff"],
  ["Figma", "F24E1E", "figma", "ffffff"],
  ["Excalidraw", "000000", "excalidraw", "ffffff"],
  ["Jira", "0A83DC", "jira", "ffffff"],
  ["Trello", "6047A0", "trello", "ffffff"],
  ["Loom", "823EB1", "loom", "ffffff"],
  ["Agile Teamwork", "4CAF50", "jira", "ffffff"],
  ["Markdown", "000000", "markdown", "ffffff"],
  ["LaTeX", "008080", "latex", "ffffff"],
  ["Overleaf", "42A48E", "overleaf", "ffffff"],
  ["IBM SPSS", "0070BA", "ibm", "ffffff"],
  ["Microsoft Office Suite", "E74C3C", "microsoft", "ffffff"],
  ["AI Tools / ChatGPT", "6EBD9D", "openai", "ffffff"],
  ["AI-Assisted Development", "7B61FF", "openai", "ffffff"],
  ["AI Coding Tools", "5C2D91", "githubcopilot", "ffffff"],
  ["Codex", "10A37F", "openai", "ffffff"],
  ["OpenClaw", "D95F59", "robotframework", "ffffff"],
  ["Workflow Automation", "FF6D5A", "n8n", "ffffff"],
  ["VS Code", "007ACC", "visualstudiocode", "ffffff"],
  ["PyCharm", "000000", "pycharm", "ffffff"],
  ["Replit", "6CADD0", "replit", "ffffff"],
];

const badgeUrl = ([name, color, logo, logoColor]) =>
  `https://img.shields.io/badge/${encodeURIComponent(name)}-${color}?style=flat-square&logo=${logo}&logoColor=${logoColor}`;

const Skills = () => {
  DocumentTitle("My Skill Set");

  return (
    <div className="skills">
      <section className="skills__section">
        <h2 className="skills__section-title">🌱 Transferable Applied Skill Set</h2>
        <ul className="skills__applied-field">
          {transferableSkills.map((skill) => (
            <li key={skill}>
              <span aria-hidden="true">✦</span>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="skills__section">
        <h2 className="skills__section-title">🛠️ My Tech Stack</h2>
        <div className="skills__section-content">
          <div className="skills__section-content-badges">
            {techStack.map((technology) => (
              <img src={badgeUrl(technology)} alt={technology[0]} key={technology[0]} />
            ))}
          </div>
        </div>
      </section>

      <section className="skills__section">
        <h2 className="skills__section-subtitle">🦾 Continuously Learning</h2>
        <div className="skills__section-content">
          <div className="skills__section-content-slogan">
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHN6cjU0NzM0ZWlnYTJlbnh4dWp1c3U3bXhjaHk1ODV1N2xhMDl5YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SeacrMeHvQA58QkckE/giphy.gif"
              alt="a girl with books on top of her head, always learning"
            />
          </div>
          <div className="skills__section-content-info">
            <p>
              <span className="skills__section-content-info--bold">Learning new things gives my life meaning</span>,
              whether through feedback from others, self-study, academic studies, or hands-on problem-solving
              experiences. I am continuously expanding my skills across software development, educational technology,
              AI tools, digital systems support, and people-centred service. Feel free to reach out — I’d love to hear
              from you and grow alongside you.
            </p>
            <Link className="skills__section-content-button" to="/contact">
              <button>Let's connect!</button>
            </Link>
          </div>
        </div>
      </section>

      <Certificate />
    </div>
  );
};

export default Skills;
