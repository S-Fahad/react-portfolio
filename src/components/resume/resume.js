import "./resume.css";

export default function Resume() {
  return (
    <div className="resume" id="resume">
      <div className="resumeHeading">Resume</div>
      <div className="resumeBody">
        <div className="head">
          <h1>Shah Fahad</h1>
          <p>Front-end developer</p>
          <p>Seeking for an opportunity where I can utilize my skills</p>
        </div>
        <hr />
        <div className="subhead"></div>
        <div className="main">
          <div className="section1">
            <div>
              <h1>Education</h1>
              <b>B.E.</b>
              <p>University of Kashmir</p>
              <i>2016-2020</i>
            </div>
            <div>
              <b>Higher Secondary School</b>
              <p>Crescent Public School</p>
              <i>2013-2015</i>
            </div>
            <div>
              <b>Primary School</b>
              <p>Tiny Harts School</p>
              <i>2013-2015</i>
            </div>
          </div>
          <div className="section2">
            <h1>Skills</h1>
            <span>html</span>
            <span>css</span>
            <span>js</span>
            <span>react</span>
          </div>
        </div>
      </div>
    </div>
  );
}
