import Skills from "./skills";
import "./about.css";

export default function About() {
  return (
    <div className="about">
      <div className="abt">
        <h1>About Me</h1>
        <div className="desc">
          <p>
            I'm a front-end web developer with good good hold on html, css,
            javascript and react
          </p>
          <p>
            I enjoy turning complex problems into simple. beautiful and
            intuitive designs. When I'm not pushing pixels, you'll find me
            cooking, reading or working out in the gym
          </p>
        </div>
      </div>

      <Skills />
    </div>
  );
}
