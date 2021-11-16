import "./navbar.css";
import { Component } from "react";
import { SideNav } from "./sideNavbar";

export default class Navbar extends Component {
  state = {
    show: true,
  };

  render() {
    const sideNav = () => this.setState({ show: false });
    const changeState = () => this.setState({ show: true });
    return (
      <div className="navbar">
        <div>
          <h1>Shah Fahad</h1>
        </div>
        <div>
          <ul className="sub-navbar">
            <li>
              <a href="#home" className="hide">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hide">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hide">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#resume" className="hide">
                Resume
              </a>
            </li>
            <li>
              <a href="#contact" className="hide">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="expandNavbar" onClick={sideNav}>
          {this.state.show === true ? (
            <button className="fas fa-bars"></button>
          ) : (
            <div>
              <SideNav change={changeState} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
