import "./style.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-wrapper">AV</div>
      <div className="cta-wrapper">
        <span className="link">ABOUT</span>
        <span className="link">CONTACT</span>
      </div>
    </div>
  );
}

export default Navbar;
