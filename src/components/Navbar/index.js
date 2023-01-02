import Logo from "components/Logo";
import "./style.scss";

function Navbar() {
  return (
    <div className="navbar">
      <Logo />
      <div className="cta-wrapper">
        <a className="link" href="#about-section">
          <span>ABOUT</span>
        </a>
        <a className="link" href="#contact-section">
          <span>CONTACT</span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
