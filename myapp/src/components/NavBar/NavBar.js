import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Toggle from "../../Theme/ThemeToggle";
import LangToggle from "../../Lang/LangToggle";

export default function Navbar() {
  return (
    <div className="bg-gray-800 sticky top-0 z-10 ">
      <div className="Logo"></div>
      <div className="flex flex-row p-5 justify-between text-2xl font-bold sm:text-sm sm:p-3">
        <nav className=" flex justify-between w-3/12 sm:w-auto sm:gap-2">
          <a className="text-white font-extrabold ">PROVILLE Maximilien</a>
          <a className="hover:text-white " href="#Projects">
            Past Work
          </a>
          <a className="hover:text-white " href="#Skills">
            Skills
          </a>
        </nav>
        <div className=" flex flex-row gap-10">
          <div>
            <LangToggle />
            <Toggle />
          </div>
          <a href="#Contact" className="hover:text-purple-500 sm:text-white">
            Hire-Me <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
    </div>
  );
}
