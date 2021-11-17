import html from "../../images/htmlLogo.png";
import css from "../../images/CSS3Logo.png";
import js from "../../images/jsLogo.png";
import bootstrap from "../../images/BootstrapLogo.png";
import react from "../../images/reactLogo.png";
import github from "../../images/githubLogo.png";

export default function Skills() {
  return (
    <div className="skills">
      <h3>Languages/Library/Technology</h3>
      <div>
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={js} alt="js" />
        <img src={bootstrap} alt="bootstrap" />
        <img src={react} alt="react" />
        <img src={github} alt="github" />
      </div>
      <p id="portFolio"></p>
    </div>
  );
}
