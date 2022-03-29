import React from "react";
import Project from "./Project/Project.js";
import { projects } from "../../projectDataFile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Projects(text) {
  return (
    <div className=" bg-purple-900 pb-28 " id="Projects">
      <div className="text-center pt-20">
        <FontAwesomeIcon icon={faCode} className="text-9xl text-center " />
        <p className="text-7xl text-center font-bold mt-5 ">{text.text}</p>
      </div>

      <div className="flex overflow-x-auto gap-10 snap-x snap-mandatory before:shrink-0 before:w-[1vw] after:shrink-0 after:w-[1vw] scrollbar-hide pb-10 sm:h-auto sm:overflow-y-hidden lg:snap-none lg:shrink lg:gap-5">
        {projects.map((project, i) => {
          return <Project project={project} key={i} />;
        })}
      </div>
    </div>
  );
}
