import PortfolioImg from "images/portfolio.png";
import HirerhinosImg from "images/hirerhinos.png";
import RivallyticsImg from "images/rivallytics.png";

import ThulloImg from "images/Thullo.png";
import PinnacleImg from "images/pinnacle.png";

import "./style.scss";

function ProjectSection() {
    const projects = [
        {
            id: "01",
            name: "Pinnacle Doodle",
            img: PinnacleImg,
            stackArr: ["Vite", "React", "Styled-Component", "Konva.js"],
        },
        {
            id: "02",
            name: "Hirerhinos",
            img: HirerhinosImg,
            stackArr: [
                "Next.js",
                "Zustand",
                "swr",
                "Node.js",
                "Express.js",
                "Mongodb",
                "Websockets",
                "Chakra UI",
                "React Lottie",
            ],
        },
        {
            id: "03",
            name: "Rivallytics",
            img: RivallyticsImg,
            stackArr: ["Next.js", "Redux", "Chakra UI", "Nivo.js"],
        },
        {
            id: "04",
            name: "Thullo",
            img: ThulloImg,
            stackArr: [
                "Next.js",
                "React",
                "SASS",
                "Zustand",
                "Unsplash API",
                "Firebase",
                "DnD Kit",
            ],
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
                                {project.stackArr.map((stack, index) => (
                                    <p key={index} className="stack">
                                        {stack}
                                    </p>
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
