import Logo from "components/Logo";
import GithubLogo from "images/github-sign.svg";
import LinkedinLogo from "images/linkedin.svg";
import EmailLogo from "images/email.svg";

import "./style.scss";

export default function Footer() {
  return (
    <div id="contact-section" className="footer-wrapper">
      <Logo />
      <h2 className="heading">Contact me</h2>
      <div className="socials-wrapper">
        <a
          href="https://github.com/vishwa-akshat"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={GithubLogo} alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/akshat-vishwakarma-dev/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={LinkedinLogo} alt="Linkedin" />
        </a>
        <a href="mailto:akvs0707@gmail.com" target="_blank" rel="noreferrer">
          <img className="social" src={EmailLogo} alt="Email" />
        </a>
      </div>
    </div>
  );
}
