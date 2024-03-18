import "./App.css";
import Title from "./components/Title";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return <>
    <Nav/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Title/>
  </>;
}

export default App;
