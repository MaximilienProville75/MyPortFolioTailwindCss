import React from "react";
import { LangContext } from "./LangContext";
import FrFlag from "./LangIcon/la-france.png";
import UkFlag from "./LangIcon/united-kingdom.png";

const LangToggle = () => {
  const { lang, setLang } = React.useContext(LangContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full mt-1 sm:text-sm">
      {lang === "En" ? (
        <img
          src={FrFlag}
          alt=""
          onClick={() => setLang(lang === "En" ? "Fr" : "En")}
          className="text-gray-400 dark:text-purple-500 text-2xl cursor-pointer sm:h-4"
        />
      ) : (
        <img
          src={UkFlag}
          alt=""
          onClick={() => setLang(lang === "En" ? "Fr" : "En")}
          className="text-gray-400 dark:text-purple-500 text-2xl cursor-pointer sm:h-4"
        />
      )}
    </div>
  );
};

export default LangToggle;
