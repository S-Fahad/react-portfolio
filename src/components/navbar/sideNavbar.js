export function SideNav(props) {
  return (
    <div className="side-nav">
      <div>
        <div>
          <button onClick={props.change}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
