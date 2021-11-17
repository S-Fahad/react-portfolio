import "./resume.css";
import profile from "../../images/profile-pic.PNG";

export default function Resume() {
  return (
    <div className="resume" >
      <h1 className="resumeHeading">Resume</h1>
      <div className="resumeBody">
        <div className="head-flex">
          <div>
            <h1>Shah Fahad</h1>
            <b>Front-end developer</b>
            <p>Seeking for an opportunity where I can utilize my skills</p>
          </div>
          <img src={profile} alt="" />
        </div>
        <hr />
        <div className="subHead">
          <table className="twoRow">
            <tbody>
              <tr>
                <td>
                  <p>
                    <i className="far fa-envelope"></i>
                    shahfahad9@outlook.com
                  </p>
                  <p>
                    <i className="fas fa-map-marker-alt"></i>
                    Srinagar, india
                  </p>
                  <p>
                    <i className="fab fa-linkedin"></i>
                    linkedin.com/in/shah-fahad-85165320a
                  </p>
                </td>
                <td>
                  <p>
                    <i className="fas fa-phone-alt"></i>
                    7006974039
                  </p>
                  <p>
                    <i className="far fa-calendar-alt"></i>
                    09 December, 1997
                  </p>
                  <p>
                    <i className="fab fa-github"></i>
                    github.com/S-Fahad?tab=repositories
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="singleRow">
            <tbody>
              <tr>
                <td>
                  <p>
                    <i className="far fa-envelope"></i>
                    shahfahad9@outlook.com
                  </p>
                  <p>
                    <i className="fas fa-map-marker-alt"></i>
                    Srinagar, india
                  </p>
                  <p>
                    <i className="fab fa-linkedin"></i>
                    linkedin.com/in/shah-fahad-85165320a
                  </p>
                  <p>
                    <i className="fas fa-phone-alt"></i>
                    7006974039
                  </p>
                  <p>
                    <i className="far fa-calendar-alt"></i>
                    09 December, 1997
                  </p>
                  <p>
                    <i className="fab fa-github"></i>
                    github.com/S-Fahad?tab=repositories
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <div className="main-flex">
          <div className="section1">
            <div>
              <h1>EDUCATION</h1>
              <b>B.E.</b>
              <p>University of Kashmir</p>
              <i>2016-2020</i>
              <i>CGPA:7.49</i>
            </div>
            <div>
              <b>Higher Secondary School</b>
              <p>Crescent Public School</p>
              <i>2013-2015</i>
              <i>68.20%</i>
            </div>
            <div>
              <b>Primary School</b>
              <p>Tiny Harts School</p>
              <i>2013-2015</i>
              <i>74.80%</i>
            </div>
          </div>
          <div className="section2">
            <div className="skill">
              <h1>SKILLS</h1>
              <div>HTML</div>
              <div>CSS</div>
              <div>JavaScript</div>
              <br />
              <div>React.js</div>
              <div>Git</div>
            </div>
            <div className="projects">
              <h1>PERSONAL PROJECTS</h1>
              <b>Portfolio (11/2021 - 11/2021)</b>
              <p>-This project is made using react.js</p>
              <b>Todo App JS (09/2021 - 09/2021)</b>
              <p>
                - This project is made using HTML, CSS, and JS. The UI of this
                project is dynamic so users can give input and change the look
                of the webpage.
              </p>
              <b>Digital Clock. (09/2021 - 09/2021)</b>
              <p>
                The project includes a digital clock and time slots based on
                what users can select a time range and change the UI of the
                webpage.
              </p>
              <b>Todo Mobile UI (08/2021 - 08/2021)</b>
              <p>
                This project is made using Html and CSS. The UI of this project
                is made responsive.
              </p>
              <b>Basic html page (08/2021 - 08/2021)</b>
              <p>This project is made using pure html tags.</p>
            </div>
            <div className="certificates">
              <h1>CERTIFICATES</h1>
              <p>
                <b>Full stack web development </b> (08/2021 - Present)
              </p>
              <i>Persuing it from PrepBytes</i>
              <p>
                <b> 6 weeks internship on Embedded Systems (Using AVR) </b>
                (01/2019 - 02/2019)
              </p>
              <p>
                <b>
                  Application and Analysis of 132/33 KV, 120 MVA Grid
                  Sub-Station{" "}
                </b>
                (12/2019 - 01/2020)
              </p>
            </div>
            <div className="language">
              <h1>LANGUAGES</h1>
              <table>
                <tbody>
                  <tr>
                    <th>English</th>
                    <th>Urdu</th>
                  </tr>
                  <tr>
                    <td>Full Professional Proficiency</td>
                    <td>Full Professional Proficiency</td>
                  </tr>
                  <tr>
                    <th>Kashmiri</th>
                    <th>Arabic</th>
                  </tr>
                  <tr>
                    <td>Full Professional Proficiency</td>
                    <td>Limited Working Proficiency</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="interests">
              <h1>INTERESTS</h1>
              <div>Web Development</div>
              <div>Travelling</div>
              <div>Camping</div>
              <div>Physical fitness</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
