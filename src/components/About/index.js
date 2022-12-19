import "./style.scss";

function About() {
  const skills = [
    "html",
    "css",
    "sass/less",
    "javascript",
    "react",
    "next.js",
    "redux/redux-saga",
    "material-ui",
    "ant-design",
    "storybook",
  ];

  return (
    <div id="about-section" className="about-section">
      <h1 className="heading">About</h1>
      <p className="info">
        I'm Akshat Vishwakarma, currently working as a software developer at Two
        point one. It's always satisfactory to build applications that makes a
        positive impact on people lives.
        <br />
        <br />
        As per my experience, I'm a Frontend developer with expertise in react,
        Redux and multiple libraries, frameworks, and tools related to frontend.
        I also love to write and maintain clean scalable code. I'm always
        looking forward to learn new things.
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
    </div>
  );
}

export default About;
