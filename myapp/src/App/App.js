import About from "../components/About/About";
import Navbar from "../components/NavBar/NavBar";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import { TimeLine } from "../components/TimeLine/TimeLine";

import wave1 from "../assets/WaveSvg/layered-waves-haikei.svg";
import wave2 from "../assets/WaveSvg/layered-waves-haikei2.svg";
import wave3 from "../assets/WaveSvg/layered-waves-haikei3.svg";
import wave4 from "../assets/WaveSvg/layered-waves-haikei-7.svg";
import wave5 from "../assets/WaveSvg/layered-waves-haikei-6.svg";

function App() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-400 body-font sm:overflow-x-hidden">
      <Navbar />
      <About />
      <img src={wave1} alt="wave1" className="w-screen z-9 relative -mt-20" />
      <Projects />
      <img src={wave2} alt="wave2" className="w-screen relative" />
      <Skills />
      <img src={wave4} alt="wave2" className="w-screen relative" />
      <TimeLine />
      <img src={wave5} alt="wave2" className="w-screen relative" />
      <img src={wave3} alt="wave3" className="w-screen relative" />
      <Contact />
    </main>
  );
}

export default App;
