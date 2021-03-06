import React from "react";
import coderImg from "./coderImg.png";

export default function About(text) {
  return (
    <>
      <div className="relative  mb-20 sm:-mb-[450px] sm:m-auto text-center pt-10">
        <div className="p-5 flex items-center justify-center sm:m-auto sm:flex-col ">
          <div className="">
            {/* Text Desc */}
            <div className="max-w-5xl flex flex-col justify-center mb-14 sm:max-w-none ">
              <h1 className="text-7xl font-bold text-center first-letter:text-slate-600 dark:first-letter:text-purple-500 first-letter:text-9xl text-purple-500 dark:text-gray-400">
                HI, I'm Max
                <br />
                Junior Front-End Developer
              </h1>
              <p className="mt-10 text-lg text-center text-slate-600 dark:text-gray-400">
                {text.text.main}
              </p>
            </div>
            {/* Button */}
            <div className="flex flex-row justify-evenly  place-content-center sm:h-56 sm:m-auto">
              <div className="ButtonsProjects">
                <a
                  href="#Projects"
                  className="text-2xl ring-4 p-2 rounded-md ring-purple-500 bg-gray-700 text-gray-300 font-bold hover:bg-gray-600  shadow-purple-300/80 shadow-lg hover:scale-150 sm:text-sm"
                >
                  {text.text.button1}
                </a>
              </div>
              <div className="">
                <a
                  href="#Contact"
                  className="text-2xl ring-4 p-2 rounded-md ring-purple-500 bg-gray-700 text-gray-300 font-bold hover:bg-gray-600 hover:scale-150  animate-pulse shadow-purple-300/80 shadow-lg
                  bg-gradient-to-r from-purple-700 to-purple-400  sm:text-sm"
                >
                  {text.text.button2}
                </a>
              </div>
            </div>
          </div>

          <div className="flex  justify-center sm:invisible">
            <img className="w-10/12 h-full fade" alt="Hero" src={coderImg} />
          </div>
        </div>
      </div>
    </>
  );
}
