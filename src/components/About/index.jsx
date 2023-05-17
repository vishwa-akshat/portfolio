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
        "next.js",
        "redux/redux-saga",
        "material-ui",
        "ant-design",
        "storybook",
        "firebase",
    ];

    return (
        <div id="about-section" className="about-section">
            <h1 className="heading">About</h1>
            <p className="info">
                I'm Akshat Vishwakarma, a software developer with a focus on
                Frontend Development. My passion lies in crafting exceptional
                digital experiences and bringing designs to life. With a keen
                eye for detail and a deep understanding of these technologies, I
                strive to create seamless and engaging user interfaces.
                <br />
                <br />
                I thoroughly enjoy the process of making projects, as it allows
                me to turn ideas into reality. Whether it's developing dynamic
                e-commerce platforms, designing interactive dashboards, or
                building responsive mobile applications, I embrace challenges
                with an open mindset. I'm constantly learning and staying
                up-to-date with the latest industry trends to ensure I deliver
                cutting-edge solutions.
                <br />
                <br />
                Collaboration is key, and I'm excited to work with individuals
                or teams who share a passion for innovation. If you're looking
                for a dedicated software developer who can create exceptional
                web experiences, I'm here to bring your ideas to life. Let's
                connect and embark on an exciting journey together!
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
