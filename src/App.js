import "./App.css";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Welcome from "./components/welcome";
import Work from "./components/work";
import ThreeScene from "./effects/scene";
import Skills from "./components/skills";
import Certifications from "./components/certifications";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app-container">
      <ThreeScene />
      <div className="content-container">
        <Navbar />
        <section id="home">
          <Welcome />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="work-education">
          <Work />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
