import "./portfolio.css";
import blog from "../../images/react-blog.PNG";
import clock from "../../images/digital-clock.PNG";
import todo3 from "../../images/todo-js.PNG";
import todo2 from "../../images/todo-ui-mobile.PNG";
import todo1 from "../../images/todo-ui-web.PNG";
import html from "../../images/basic-html.PNG";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1 className="heading">My Portfolio</h1>
      <div>
        <a href="https://s-fahad.github.io/digital-clock/">
          <img src={blog} alt="blog" className="p-img" />
        </a>
        <a href="https://s-fahad.github.io/digital-clock/">
          {" "}
          <img src={clock} alt="clock" />
        </a>
        <a href="https://s-fahad.github.io/todo-app-js/">
          {" "}
          <img src={todo3} alt="todo3" />
        </a>
        <a href="https://s-fahad.github.io/todo-app-ui-mobile/">
          <img src={todo2} alt="todo2" />
        </a>
        <a href="https://s-fahad.github.io/todo-app-ui-web/">
          {" "}
          <img src={todo1} alt="todo1" />
        </a>
        <a href="https://s-fahad.github.io/Basic-html-page">
          {" "}
          <img src={html} alt="html" />
        </a>
      </div>
    </div>
  );
}
