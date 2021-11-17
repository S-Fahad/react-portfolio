import "./navbar.css";
import { Component } from "react";
import { SideNav } from "./sideNavbar";

export default class Navbar extends Component {
  state = {
    show: true,
  };

  sideNav = () => this.setState({ show: false });
  changeState = () => this.setState({ show: true });
  render() {
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
              <a href="#portFolio">Portfolio</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="expandNavbar">
          {this.state.show === true ? (
            <button className="fas fa-bars" onClick={this.sideNav}></button>
          ) : (
            <div>
              <SideNav change={this.changeState} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
