import React from "react";
import { useInView } from "react-intersection-observer";
import { FaUniversity } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import { FaList } from "react-icons/fa";

export const TimeLine = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="w-full bg-purple-900">
      <div className="text-center pt-20">
        <FaList className="text-9xl m-auto " />
        <p className="text-7xl text-center font-bold  mt-5">
          What I've Been Up To
        </p>
        {/* <p className="text-lg mt-14 p-10 text-slate-600 dark:text-gray-400"></p> */}
      </div>
      <div class="max-w-7xl mx-auto w-full grid grid-cols-9 px-2 py-20">
        <div class="col-span-4 w-full h-full ">
          <div class="w-full h-full bg-gray-800/50 rounded-3xl ring-4 ring-purple-500  p-2 md:pl-4 ring-offset-gray-900 shadow-purple-500/80 shadow-xl">
            <h1 class="text-gray-100 text-2xl font-medium py-2 first-letter:text-purple-500 first-letter:text-4xl">
              Computer Science, Bachelor's degree
            </h1>
            <h2 className="-mt-2 mb-2 text-xl text-gray-300">April 2022</h2>
            <p class="text-gray-400 sm:text-sm  text-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
              quas omnis vero totam ullam, reprehenderit ratione pariatur
              accusamus suscipit odit nostrum?
            </p>
          </div>
        </div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
          <div class="h-full w-1 bg-purple-300 rounded-t-full"></div>
          <div class="absolute w-8 h-8 rounded-full bg-purple-400 z-9 text-white text-center text-xl p-1.5">
            <FaUniversity />
          </div>
        </div>
        <div class="col-span-4 w-full h-full"></div>

        <div class="col-span-4 w-full h-full"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
          <div class="h-full w-1 bg-purple-300"></div>
          <div class="absolute w-8 h-8 rounded-full bg-purple-400 z-9 text-white text-center text-xl p-1.5">
            <FaGraduationCap />
          </div>
        </div>
        <div class="col-span-4 w-full h-full ">
          <div class="w-full h-full rounded-3xl ring-4 ring-purple-500 p-2 md:pl-4 ring-offset-gray-900 shadow-purple-500/80 shadow-xl bg-gray-800/50">
            <h1 class="text-gray-100 text-2xl font-medium py-2 first-letter:text-purple-500 first-letter:text-4xl">
              Business Administration and Management, Bachelor's degree.
            </h1>
            <h2 className="-mt-2 mb-2 text-xl text-gray-300">July 2021</h2>
            <p class="text-gray-400 sm:text-sm  text-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
              quas omnis vero totam ullam, reprehenderit ratione pariatur
              accusamus suscipit odit nostrum?
            </p>
          </div>
        </div>
        <div class="col-span-4 w-full h-full ">
          <div class="w-full h-full rounded-3xl ring-4 ring-purple-500 p-2 md:pl-4 ring-offset-gray-900 shadow-purple-500/80 shadow-xl bg-gray-800/50">
            <h1 class="text-gray-100 text-2xl font-medium py-2 first-letter:text-purple-500 first-letter:text-4xl">
              Intensive Language Study
            </h1>
            <h2 className="-mt-2 mb-2 text-xl text-gray-300">July 2017</h2>
            <p class="text-gray-400 sm:text-sm  text-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
              quas omnis vero totam ullam, reprehenderit ratione pariatur
              accusamus suscipit odit nostrum?
            </p>
          </div>
        </div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
          <div class="h-full w-1 bg-purple-300"></div>
          <div class="absolute w-8 h-8 rounded-full bg-purple-400 z-9 text-white text-center text-xl p-1.5">
            <FaLanguage />
          </div>
        </div>
        <div class="col-span-4 w-full h-full"></div>
        <div class="col-span-4 w-full h-full"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
          <div class="h-full w-1 bg-purple-300 rounded-b-full  "></div>
          <div class="absolute w-8 h-8 rounded-full bg-purple-400 z-9 text-white text-center text-xl p-1.5 ">
            <FaSchool />
          </div>
        </div>
        <div class="col-span-4 w-full h-full ">
          <div class="w-full h-full rounded-3xl ring-4 ring-purple-500 p-2 md:pl-4 ring-offset-gray-900 shadow-purple-500/80 shadow-xl bg-gray-800/50">
            <h1 class="text-gray-100 text-2xl font-medium py-2 first-letter:text-purple-500 first-letter:text-4xl">
              Baccalauréat économique et social
            </h1>
            <h2 className="-mt-2 mb-2 text-xl text-gray-300">July 2016</h2>
            <p class="text-gray-400 sm:text-sm text-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
              quas omnis vero totam ullam, reprehenderit ratione pariatur
              accusamus suscipit odit nostrum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
