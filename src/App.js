import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Resume from "./components/resume/resume";
import AboutMe from "./components/sayingAboutme/aboutMe";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
