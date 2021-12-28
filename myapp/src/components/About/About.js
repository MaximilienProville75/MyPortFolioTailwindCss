import React from "react";
import coderImg from "./coderImg.png";

export default function About() {
  return (
    <>
      <div className="relative">
        <div className="p-5 flex  items-center max-w-full">
          <div className="PresentationImg">
            <div className="-mt-24 max-w-5xl flex flex-col justify-center">
              <h1 className="text-5xl font-bold text-center">
                Hi, I'm Max
                <br />
                Junior Front-End Developer
              </h1>
              <p className="mt-10 text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>

          <div className="flex justify-center ">
            <img className="w-10/12 h-full" alt="Hero" src={coderImg} />
          </div>
        </div>
        <div className="flex flex-row justify-between max-w-xs p-5">
          <div className="ButtonsContact">
            <a
              href="#Contact"
              className="text-2xl ring-4 p-2 rounded-md ring-purple-500 bg-gray-700 text-gray-300 font-bold hover:bg-gray-600 hover:drop-shadow-2xl hover:transition absolute bottom-1/4 "
            >
              Work With Me
            </a>
          </div>
          <div className="ButtonsProjects">
            <a
              href="#Projects"
              className="text-2xl ring-4 p-2 rounded-md ring-purple-500 bg-gray-700 text-gray-300 font-bold hover:bg-gray-600 absolute bottom-1/4"
            >
              See Past Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
