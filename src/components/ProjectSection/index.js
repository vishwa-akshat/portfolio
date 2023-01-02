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
    },
    {
      id: "02",
      name: "Portfolio",
      img: PortfolioImg,
      stackArr: ["React", "sass"],
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
              </div>
              <h3 className="name">{project.name}</h3>
              <p className="stack-wrapper">
                {project.stackArr.map((stack) => (
                  <span className="stack">{stack}</span>
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
