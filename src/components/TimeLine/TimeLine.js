import React from "react";
import { FaUniversity } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import { FaList } from "react-icons/fa";

export const TimeLine = (text) => {
  return (
    <div className="w-full bg-purple-900">
      <div className="text-center pt-20">
        <FaList className="text-9xl m-auto " />
        <p className="text-7xl text-center font-bold  mt-5">{text.text.main}</p>
      </div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2 py-20">
        <div className="col-span-4 w-full h-full ">
          <div className="w-full h-full bg-gray-800/50 rounded-3xl ring-4 ring-purple-500  p-2 md:pl-4 ring-offset-gray-900 shadow-purple-500/80 shadow-xl">
            <h1 className="text-gray-100 text-2xl font-medium py-2 first-letter:text-purple-500 first-letter:text-4xl">
              {text.text.title1}
            </h1>
            <h2 className="-mt-2 mb-2 text-xl text-gray-300">
              {text.text.time1}
            </h2>
            <p className="text-gray-400 sm:text-sm  text-md">
              {text.text.text1}
            </p>
          </div>
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-purple-300 rounded-t-full"></div>
          <div className="absolute w-8 h-8 rounded-full bg-purple-400 z-9 text-white text-center text-xl p-1.5">
            <FaUniversity />
          </div>
        </div>
        <div className="col-span-4 w-full h-full"></div>

        <div className="col-span-4 w-full h-full"></div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-purple-300"></div>
          <div className="absolute w-8 h-8 rounded-full bg-purple-400 z-9 text-white text-center text-xl p-1.5">
            <FaGraduationCap />
          </div>
        </div>
        <div className="col-span-4 w-full h-full ">
          <div className="w-full h-full rounded-3xl ring-4 ring-purple-500 p-2 md:pl-4 ring-offset-gray-900 shadow-purple-500/80 shadow-xl bg-gray-800/50">
            <h1 className="text-gray-100 text-2xl font-medium py-2 first-letter:text-purple-500 first-letter:text-4xl">
              {text.text.title2}
            </h1>
            <h2 className="-mt-2 mb-2 text-xl text-gray-300">
              {text.text.time2}
            </h2>
            <p className="text-gray-400 sm:text-sm  text-md">
              {text.text.text2}
            </p>
          </div>
        </div>
        <div className="col-span-4 w-full h-full ">
          <div className="w-full h-full rounded-3xl ring-4 ring-purple-500 p-2 md:pl-4 ring-offset-gray-900 shadow-purple-500/80 shadow-xl bg-gray-800/50">
            <h1 className="text-gray-100 text-2xl font-medium py-2 first-letter:text-purple-500 first-letter:text-4xl">
              {text.text.title3}
            </h1>
            <h2 className="-mt-2 mb-2 text-xl text-gray-300">
              {text.text.time3}
            </h2>
            <p className="text-gray-400 sm:text-sm  text-md">
              {text.text.text3}
            </p>
          </div>
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-purple-300"></div>
          <div className="absolute w-8 h-8 rounded-full bg-purple-400 z-9 text-white text-center text-xl p-1.5">
            <FaLanguage />
          </div>
        </div>
        <div className="col-span-4 w-full h-full"></div>
        <div className="col-span-4 w-full h-full"></div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-purple-300 rounded-b-full  "></div>
          <div className="absolute w-8 h-8 rounded-full bg-purple-400 z-9 text-white text-center text-xl p-1.5 ">
            <FaSchool />
          </div>
        </div>
        <div className="col-span-4 w-full h-full ">
          <div className="w-full h-full rounded-3xl ring-4 ring-purple-500 p-2 md:pl-4 ring-offset-gray-900 shadow-purple-500/80 shadow-xl bg-gray-800/50">
            <h1 className="text-gray-100 text-2xl font-medium py-2 first-letter:text-purple-500 first-letter:text-4xl">
              {text.text.title4}
            </h1>
            <h2 className="-mt-2 mb-2 text-xl text-gray-300">
              {text.text.time4}
            </h2>
            <p className="text-gray-400 sm:text-sm text-md">
              {text.text.text4}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
