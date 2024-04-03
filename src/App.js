import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ParticleRing from "./components/ParticleRing";

function App() {
  return (
    <>
      <Nav />
      <ParticleRing />
      <About />
      <Projects />
      <Skills />
      {/* <Contact /> */}
    </>
  );
}

export default App;
