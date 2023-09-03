import RockPaperAndScissorImg from "images/RockPaperAndScissor.png";
import PortfolioImg from "images/portfolio.png";
import WindbnbImg from "images/Windbnb.png";
import WeatherAppImg from "images/WeatherApp.png";
import ImageUploaderImg from "images/ImageUploader.png";
import MetaversusImg from "images/Metaversus.png";
import ThulloImg from "images/Thullo.png";

import "./style.scss";

function ProjectSection() {
    const projects = [
        {
            id: "01",
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
            codeUrl: "https://github.com/vishwa-akshat/thullo",
            projectUrl: "https://thullo-three.vercel.app/",
        },
        {
            id: "02",
            name: "Metaversus",
            img: MetaversusImg,
            stackArr: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
            codeUrl: "https://github.com/vishwa-akshat/metaversus",
            projectUrl: "https://metaversus-lake.vercel.app/",
        },
        {
            id: "03",
            name: "Weather App",
            img: WeatherAppImg,
            stackArr: ["Vite", "React", "SASS", "Zustand", "Openweather API"],
            codeUrl: "https://github.com/vishwa-akshat/weather-app",
            projectUrl: "https://weather-app-red-one.vercel.app/",
        },
        {
            id: "04",
            name: "Rock Paper and Scissor",
            img: RockPaperAndScissorImg,
            stackArr: ["React", "sass"],
            codeUrl: "https://github.com/vishwa-akshat/rock-paper-scissors",
            projectUrl:
                "https://rock-paper-scissors-i2z0nwylr-vishwa-akshat.vercel.app/",
        },
        {
            id: "05",
            name: "Image Uploader",
            img: ImageUploaderImg,
            stackArr: [
                "Vite",
                "React",
                "Typescript",
                "SASS",
                "Zustand",
                "Firebase",
            ],
            codeUrl: "https://github.com/vishwa-akshat/image-uploader",
            projectUrl: "https://image-uploader-smoky.vercel.app/",
        },
        {
            id: "06",
            name: "Portfolio",
            img: PortfolioImg,
            stackArr: ["React", "SASS", "Hashnode API"],
            codeUrl: "https://github.com/vishwa-akshat/portfolio",
            projectUrl: "https://akshat-dev.vercel.app/",
        },
        {
            id: "07",
            name: "Windbnb",
            img: WindbnbImg,
            stackArr: ["Vite", "React", "SASS", "Zustand"],
            codeUrl: "https://github.com/vishwa-akshat/windbnb",
            projectUrl: "https://windbnb-7xzt4n3ln-vishwa-akshat.vercel.app/",
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
