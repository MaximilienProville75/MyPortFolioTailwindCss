import { projects } from "./projectDataFile";

import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  console.log(projects);
  return (
    <main className="bg-gray-900 text-gray-400 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
