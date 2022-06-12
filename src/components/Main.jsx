import SkillItem from "./SkillItem";
import WorkItem from "./WorkItem";

export default function Main() {
  return (
    <div className="main">
      <div className="main__container">
        <h3 className="main__subtitle">Pohribniak</h3>
        <h1 className="main__title">Roman</h1>
        <div className="main__tile">Front-end Developer</div>
        <br />
        <h4 className="main__profile--header">Profile</h4>
        <p className="main__profile">
          I am 17 years old student in process of searching of my first work
          after 2 years learning front-end,hope to see your answer!
        </p>
        <h4 className="main__works--header">Works</h4>
        <ul className="main__works">
          <WorkItem
            id={1}
            links={[
              "https://github.com/PohribniakRoman/Portfolio",
              "https://pohribniakroman.github.io/Portfolio/",
            ]}
          />
          <WorkItem
            id={2}
            links={[
              "https://github.com/PohribniakRoman/Travel-Agancy",
              "https://pohribniakroman.github.io/Travel-Agancy/",
            ]}
          />
          <WorkItem
            id={3}
            links={[
              "https://github.com/PohribniakRoman/Blog",
              "https://pohribniakroman.github.io/Blog/",
            ]}
          />
          <WorkItem
            id={4}
            links={[
              "https://github.com/PohribniakRoman/Nature",
              "https://pohribniakroman.github.io/Nature/",
            ]}
          />
        </ul>
      </div>
      <div className="main__container">
        <h4 className="main__skills--header" style={{ marginTop: "50px" }}>
          Skills
        </h4>
        <ul className="main__skills">
          <SkillItem skill="HTML" precent={99} />
          <SkillItem skill="CSS/SASS" precent={99} />
          <SkillItem skill="ReactJS" precent={56} />
          <SkillItem skill="JavasScript" precent={85} />
          <SkillItem skill="Git" precent={70} />
          <SkillItem skill="NodeJS" precent={70} />
          <SkillItem skill="Express" precent={80} />
          <SkillItem skill="NestJS" precent={35} />
          <SkillItem skill="Webpack" precent={90} />
          <SkillItem skill="Ps/Figma" precent={90} />
        </ul>
        <h4 className="main__knowledges--header" style={{ marginTop: "30px" }}>
          Knowledges
        </h4>
        <h3 className="main__knowledges--subtitle" style={{marginBottom:"10px"}}>
          I know how to work with such services/tech as:
        </h3>
        <ul className="main__knowledges">
          <li className="main__knowledges--item">Contentful(CMS)</li>
          <li className="main__knowledges--item">MongoDB</li>
          <li className="main__knowledges--item">Bootstrap/React-Bootstrap</li>
          <li className="main__knowledges--item">MaterialUI</li>
          <li className="main__knowledges--item">BEM/flexbox/grid</li>
          <li className="main__knowledges--item">jQuery</li>
          <li className="main__knowledges--item">Swiper/AOS</li>
          <li className="main__knowledges--item">GitBash</li>
          <li className="main__knowledges--item">Responsive/Adaptive design</li>
        </ul>
        <h4 className="main__references--header" style={{ marginTop: "30px" }}>
          References
        </h4>
        <p>
          GitHub:
          <a href="https://github.com/PohribniakRoman">
            https://github.com/PohribniakRoman
          </a>
        </p>
      </div>
    </div>
  );
}
