import "./aboutMe.css";
import Review1 from "./review1";
import Review2 from "./review2";
import Review3 from "./review3";

export default function AboutMe() {
  return (
    <div className="aboutMe" id="aboutME">
      <h1 className="heading">What People say about me</h1>

      <div className="aboutMeContent">
        <Review1 />
        <Review2 />
        <Review3 />
      </div>
      <div className="footer-aboutMe">
        <h3 id="contact">View more testimonials</h3>
      </div>
    </div>
  );
}
