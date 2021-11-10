import "./home.css";
// import coverPic from "../../images/cover_pic-removebg-preview.png";

export default function Home() {
  return (
    <div className="home" id="home">
      <div>
        <h1>Hi, I am Shah Fahad</h1>
        <h2>A Front-end Developer</h2>
        <p>Get ready to turn ideas into reality</p>
        <button className="btn-hire">
          {" "}
          <a href="#contact">Hire me</a>
        </button>
        <button className="btn-resume">Get Resume</button>
      </div>
      {/* <img src={coverPic} alt="cv" className="coverPic" /> */}
    </div>
  );
}
