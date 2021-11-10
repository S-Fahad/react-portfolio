import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <h1>Shah Fahad</h1>
      </div>
      <div>
        <ul className="sub-navbar">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className="expandNavbar">
            <i className="fas fa-bars"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
