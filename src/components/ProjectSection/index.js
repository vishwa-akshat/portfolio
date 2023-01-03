import RockPaperAndScissorImg from "images/RockPaperAndScissor.png";
import PortfolioImg from "images/portfolio.png";

import "./style.scss";

function ProjectSection() {
  const projects = [
    {
      id: "01",
      name: "Rock Paper and Scissor",
      img: RockPaperAndScissorImg,
      stackArr: ["React", "sass"],
      codeUrl: "https://github.com/vishwa-akshat/rock-paper-scissors",
      projectUrl:
        "https://rock-paper-scissors-i2z0nwylr-vishwa-akshat.vercel.app/",
    },
    {
      id: "02",
      name: "Portfolio",
      img: PortfolioImg,
      stackArr: ["React", "sass"],
      codeUrl: "https://github.com/vishwa-akshat/portfolio",
      projectUrl: "https://akshat-dev.vercel.app/",
    },
  ];

  return (
    <div className="projects-section">
      <h1 className="heading">Projects</h1>
      <div className="projects-wrapper">
        {projects.map((project, index) => {
          return (
            <div key={index} className="wrapper">
              <div className="project-number">{project.id}</div>
              <div className="project-img-wrapper">
                <img
                  src={project.img}
                  className="project-img"
                  alt={project.name}
                />
                <div className="backdrop">
                  <a
                    className="links"
                    href={project.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                  <a
                    className="links"
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
              <h3 className="name">{project.name}</h3>
              <p className="stack-wrapper">
                {project.stackArr.map((stack, index) => (
                  <span key={index} className="stack">
                    {stack}
                  </span>
                ))}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectSection;
