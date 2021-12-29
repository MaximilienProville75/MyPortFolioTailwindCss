import { projects } from "./projectDataFile";

import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

import wave1 from "./layered-waves-haikei.svg";
import wave2 from "./layered-waves-haikei2.svg";
import wave3 from "./layered-waves-haikei3.svg";

function App() {
  console.log(projects);
  return (
    <main className="bg-gray-900 text-gray-400 body-font ">
      <Navbar />
      <About />
      <img src={wave1} alt="bla" className="w-screen z-9 relative -mt-20" />
      <Projects />
      <img src={wave2} alt="bla" className="w-screen relative" />
      <Skills />
      <img src={wave3} alt="bla" className="w-screen relative" />
      <Contact />
    </main>
  );
}

export default App;
