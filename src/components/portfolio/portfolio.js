import "./portfolio.css";
import blog from "../../images/react-blog.PNG";
import clock from "../../images/digital-clock.PNG";
import todo3 from "../../images/todo-js.PNG";
import todo2 from "../../images/todo-ui-mobile.PNG";
import todo1 from "../../images/todo-ui-web.PNG";
import html from "../../images/basic-html.PNG";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>My Portfolio</h1>
      <div>
        <a href="" target="_blank">
          <img src={blog} alt="blog" />
        </a>
        <a href="https://s-fahad.github.io/digital-clock/" target="_blank">
          {" "}
          <img src={clock} alt="clock" />
        </a>
        <a href="https://s-fahad.github.io/todo-app-js/" target="_blank">
          {" "}
          <img src={todo3} alt="todo3" />
        </a>
      </div>
      <div>
        <a href="https://s-fahad.github.io/todo-app-ui-mobile/" target="_blank">
          <img src={todo2} alt="todo2" />
        </a>
        <a href="https://s-fahad.github.io/todo-app-ui-web/" target="_blank">
          {" "}
          <img src={todo1} alt="todo1" />
        </a>
        <a href="https://s-fahad.github.io/Basic-html-page" target="_blank">
          {" "}
          <img src={html} alt="html" />
        </a>
      </div>
    </div>
  );
}
