import React from "react";
import { useState } from "react";
import { LangContext } from "../Lang/LangContext";

import About from "../components/About/About";
import Navbar from "../components/NavBar/NavBar";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import { TimeLine } from "../components/TimeLine/TimeLine";

import wave1 from "../assets/WaveSvg/layered-waves-haikei.svg";
import wave2 from "../assets/WaveSvg/layered-waves-haikei2.svg";
import wave4 from "../assets/WaveSvg/layered-waves-haikei-7.svg";

import { LangText } from "../Lang/LangText";

function App() {
  const { lang } = React.useContext(LangContext);
  const [aboutText, setAboutText] = useState("");
  const [projectText, setProjectText] = useState("");
  const [skillText, setSkillText] = useState("");
  const [timeLineText, setTimeLineText] = useState("");
  const [contactText, setContactText] = useState("");

  React.useEffect(() => {
    LangText.map((langs) => {
      if (langs.langs === lang) {
        setAboutText(langs.texts[0].text);
        setProjectText(langs.texts[1].text);
        setSkillText(langs.texts[2].text);
        setTimeLineText(langs.texts[3].text);
        setContactText(langs.texts[4].text);
      }
    });
  }, [lang]);

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-400 body-font sm:overflow-x-hidden">
      <Navbar />
      <About text={aboutText} />
      <img src={wave1} alt="wave1" className="w-screen z-9 relative -mt-20" />
      <Projects text={projectText} />
      <img src={wave2} alt="wave2" className="w-screen relative" />
      <Skills text={skillText} />
      <img src={wave4} alt="wave2" className="w-screen relative" />
      <TimeLine text={timeLineText} />
      <Contact text={contactText} />
    </main>
  );
}

export default App;
