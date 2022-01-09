import React from "react";
import coderImg from "./coderImg.png";

export default function About() {
  return (
    <>
      <div className="relative mb-20">
        <div className="p-5 flex  items-center max-w-full">
          <div className="PresentationImg">
            {/* Text Desc */}
            <div className=" max-w-5xl flex flex-col justify-center mb-14 ">
              <h1 className="text-7xl font-bold text-center first-letter:text-purple-500 first-letter:text-9xl">
                HI, I'm Max
                <br />
                Junior Front-End Developer
              </h1>
              <p className="mt-10 text-lg mv text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            {/* Button */}
            <div className="flex flex-row justify-evenly  place-content-center ">
              <div className="ButtonsProjects">
                <a
                  href="#Projects"
                  className="text-2xl ring-4 p-2 rounded-md ring-purple-500 bg-gray-700 text-gray-300 font-bold hover:bg-gray-600  shadow-purple-300/80 shadow-lg hover:scale-150 "
                >
                  See Past Project
                </a>
              </div>
              <div className="">
                <a
                  href="#Contact"
                  className="text-2xl ring-4 p-2 rounded-md ring-purple-500 bg-gray-700 text-gray-300 font-bold hover:bg-gray-600 hover:scale-150  animate-pulse shadow-purple-300/80 shadow-lg
                  bg-gradient-to-r from-purple-700 to-purple-400 "
                >
                  Work With Me
                </a>
              </div>
            </div>
          </div>

          <div className="flex  justify-center ">
            <img className="w-10/12 h-full" alt="Hero" src={coderImg} />
          </div>
        </div>
      </div>
    </>
  );
}
