import ResumeImg from "images/resume.svg";
import Resume from "file/akshat-resume.pdf";

import "./style.scss";

function About() {
    const skills = [
        "html",
        "css",
        "sass/less",
        "styles-components",
        "javascript",
        "typescript",
        "react",
        "node.js",
        "express.js",
        "chakra-ui",
        "styled-components",
        "mongodb",
        "postgres",
        "grapghql",
        "pwa",
        "jest",
        "next.js",
        "redux/redux-saga",
        "material-ui",
        "ant-design",
        "storybook",
        "firebase",
        "tailwind CSS",
        "framer motion",
    ];

    return (
        <div id="about-section" className="about-section">
            <h1 className="heading">About</h1>
            <p className="info">
                Hi, I’m Akshat Vishwakarma, a freelance web developer and
                software engineer based in India. I have over two years of
                experience in building modern, responsive, and user-friendly web
                applications using technologies such as Next.js, React.js,
                Node.js, and more.
            </p>
            <p className="info">
                I have worked with clients from various domains, delivering
                high-quality solutions that meet their needs and expectations. I
                am really passionate about web development and technology in
                general, and I enjoy learning new skills, exploring new
                challenges, and collaborating with other developers. I have a
                strong interest in UI/UX design, performance optimization, and
                web accessibility.
            </p>
            <p className="info">
                I also like to share my knowledge and experience through my
                Twitter, Linkedin, Portfolio, Github, and blog. You can connect
                with me on LinkedIn and Twitter. I look forward to hearing from
                you and working with you on your next project. 😊
            </p>
            <h2 className="sub-heading">Skills</h2>
            <div className="skill-wrapper">
                {skills.map((skill, index) => {
                    return (
                        <p key={index} className="skill">
                            {skill}
                        </p>
                    );
                })}
            </div>
            <div className="resume-wrapper">
                <div className="img-wrapper">
                    <img src={ResumeImg} alt="resume" className="resume-img" />
                </div>
                <a
                    href={Resume}
                    className="download"
                    target="_blank"
                    rel="noreferrer"
                >
                    Download Resume
                </a>
            </div>
        </div>
    );
}

export default About;
