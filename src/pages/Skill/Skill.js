import "./Skill.scss";
import { DocumentTitle } from "../../utils/utils";
import Project from "../../components/Project/Project";

const Skill = () => {
  DocumentTitle("My Skills");

  return (
    <div className="skill">
      <section className="skill__section">
        <h2 className="skill__section-title">🛠️ My Tech Stack</h2>
        <div className="skill__section-content">
          <div className="skill__section-content-badges">
            <img
              src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat-square&logo=html5&logoColor=ffffff"
              alt="HTML5"
            />
            <img
              src="https://img.shields.io/badge/-CSS3-%231572B6?style=flat-square&logo=css3&logoColor=ffffff"
              alt="CSS3"
            />
            <img
              src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat-square&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A"
              alt="JavaScript"
            />
            <img src="https://img.shields.io/badge/-React.js-%23282C34?style=flat-square&logo=react" alt="React.js" />
            <img
              src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat-square&logo=sass&logoColor=ffffff"
              alt="Sass"
            />
            <img
              src="https://img.shields.io/badge/Flexbox-%238BC500?style=flat-square&logo=css3&logoColor=white"
              alt="Flexbox"
            />
            <img
              src="https://img.shields.io/badge/CSS_Animations-%23404d59?style=flat-square&logo=css3&logoColor=white"
              alt="CSS Animations"
            />
            <img
              src="https://img.shields.io/badge/-Prettier-%23F7B93E?style=flat-square&logo=prettier&logoColor=ffffff"
              alt="Prettier"
            />
            <img
              src="https://img.shields.io/badge/GitFlow-%2300AEEF?style=flat-square&logo=git&logoColor=white"
              alt="GitFlow"
            />
            <img src="https://img.shields.io/badge/GitHub-%23181717?style=flat-square&logo=github" alt="GitHub" />
            <img
              src="https://img.shields.io/badge/Node.js-%23339933?style=flat-square&logo=node.js&logoColor=white"
              alt="Node.js"
            />
            <img
              src="https://img.shields.io/badge/Knex.js-%23FF5733?style=flat-square&logo=knex&logoColor=white"
              alt="Knex.js"
            />
            <img
              src="https://img.shields.io/badge/Express.js-%23404d59?style=flat-square&logo=express"
              alt="Express.js"
            />
            <img
              src="https://img.shields.io/badge/React_Router-%23FF0000?style=flat-square&logo=react-router&logoColor=black"
              alt="React Router"
            />
            <img
              src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white"
              alt="Postman"
            />
            <img
              src="https://img.shields.io/badge/Command_Prompt-%23217346?style=flat-square&logo=windows%20terminal&logoColor=white"
              alt="Command Prompt"
            />
            <img
              src="https://img.shields.io/badge/OOP-%2344cc11?style=flat-square&logo=python&logoColor=white"
              alt="OOP"
            />
            <img
              src="https://img.shields.io/badge/React_Google_Charts-%238AB4ED?style=flat-square&logo=google&logoColor=white"
              alt="React Google Charts"
            />
            <img
              src="https://img.shields.io/badge/npm-%23CB3837?style=flat-square&logo=npm&logoColor=white"
              alt="npm"
            />
            <img
              src="https://img.shields.io/badge/MySQL-%234479A1?style=flat-square&logo=mysql&logoColor=white"
              alt="MySQL"
            />
            <img
              src="https://img.shields.io/badge/-VSCode-%23007ACC?style=flat-square&logo=visual-studio-code"
              alt="VS Code"
            />
            <img
              src="https://img.shields.io/badge/-Netlify-%2300C7B7?style=flat-square&logo=netlify&logoColor=ffffff"
              alt="Netlify"
            />
            <img
              src="https://img.shields.io/badge/Heroku-6762A6?style=flat-square&logo=heroku&logoColor=white"
              alt="Deployed on Heroku"
            />
            <img
              src="https://img.shields.io/badge/Supabase-%23000000?style=flat-square&logo=supabase&logoColor=white"
              alt="Supabase"
            />
            <img
              src="https://img.shields.io/badge/Python-%233776AB?style=flat-square&logo=python&logoColor=white"
              alt="Python"
            />
            <img
              src="https://img.shields.io/badge/PyCharm-%23000000?style=flat-square&logo=pycharm&logoColor=white"
              alt="PyCharm"
            />
            <img
              src="https://img.shields.io/badge/Replit-%236CADD0?style=flat-square&logo=replit&logoColor=white"
              alt="Replit"
            />
            <img
              src="https://img.shields.io/badge/Figma-%23F24E1E?style=flat-square&logo=figma&logoColor=white"
              alt="Figma"
            />
            <img
              src="https://img.shields.io/badge/ChatGPT-%236EBD9D?style=flat-square&logo=chatbot&logoColor=white"
              alt="ChatGPT"
            />
            <img
              src="https://img.shields.io/badge/Bootstrap-%23563D7C?style=flat-square&logo=bootstrap&logoColor=white"
              alt="Bootstrap"
            />
            <img
              src="https://img.shields.io/badge/Excalidraw-%23000000?style=flat-square&logo=excalidraw"
              alt="Excalidraw"
            />
            <img src="https://img.shields.io/badge/Jira-%230A83DC?style=flat-square&logo=jira" alt="Jira" />
            <img
              src="https://img.shields.io/badge/Trello-%236047A0?style=flat-square&logo=trello&logoColor=white"
              alt="Trello"
            />
            <img
              src="https://img.shields.io/badge/Loom-%23823eb1?style=flat-square&logo=loom&logoColor=white"
              alt="Loom"
            />
            <img
              src="https://img.shields.io/badge/Markdown-%23000000?style=flat-square&logo=markdown&logoColor=white"
              alt="Markdown"
            />
            <img
              src="https://img.shields.io/badge/LaTeX-%23008080?style=flat-square&logo=latex&logoColor=white"
              alt="LaTeX"
            />
            <img
              src="https://img.shields.io/badge/Overleaf-%2342A48E?style=flat-square&logo=overleaf&logoColor=white"
              alt="Overleaf"
            />
            <img
              src="https://img.shields.io/badge/IBM_SPSS-%230070BA?style=flat-square&logo=ibm&logoColor=white"
              alt="IBM SPSS"
            />
            <img
              src="https://img.shields.io/badge/Microsoft_Office_Suite-%230078D4?style=flat-square&logo=microsoft&logoColor=white"
              alt="Microsoft Office Suite"
            />
          </div>
        </div>
      </section>
      <section className="skill__section">
        <h2 className="skill__section-title">🦾 Continuously Learning</h2>
        <div className="skill__section-content">
          <div className="skill__section-content-slogan">
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHN6cjU0NzM0ZWlnYTJlbnh4dWp1c3U3bXhjaHk1ODV1N2xhMDl5YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SeacrMeHvQA58QkckE/giphy.gif"
              alt="a girl with books on top of her head, always learning"
            />
          </div>
          <div className="skill__section-content-info">
            <p>
              <span className="skill__section-content-info--bold">Learning new things gives my life meaning</span>,
              whether through
              <span className="skill__section-content-info--bold"> feedback from others or self-studying</span>. Feel
              free to reach out to me; I'd love to hear from you and grow alongside you.
            </p>
            <div className="skill__section-content-badges">
              <img
                src="https://img.shields.io/badge/React_Testing_Library-%23E33332?style=flat-square&logo=testing-library&logoColor=white"
                alt="React Testing Library"
              />
              <img
                src="https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white"
                alt="Vite"
              />
              <img
                src="https://img.shields.io/badge/-Next.js-%23000000?style=flat-square&logo=nextdotjs&logoColor=ffffff"
                alt="Next.js"
              />
              <img
                src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=ffffff"
                alt="TypeScript"
              />
              <img
                src="https://img.shields.io/badge/Jest-%23C21325?style=flat-square&logo=jest&logoColor=ffffff"
                alt="Jest"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="skill__section">
        <h2 className="skill__section-title"> 🗂️ My projects</h2>
        <div className="skill__section-content">
          <Project />
        </div>
      </section>
    </div>
  );
};

export default Skill;
