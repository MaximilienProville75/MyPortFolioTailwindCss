import React from "react";
import Project from "./Project/Project.js";
import { projects } from "../../projectDataFile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <div className=" bg-purple-900 mb-0 pb-10" id="Projects">
      <div className="text-center pt-20">
        <FontAwesomeIcon icon={faCode} className="text-9xl text-center " />
        <p className="text-7xl text-center font-bold mt-5 ">
          Projects I've Built
        </p>
        <p className="text-lg mt-14 p-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>

      <div className="flex overflow-x-auto gap-10 snap-x snap-mandatory before:shrink-0 before:w-[1vw] after:shrink-0 after:w-[1vw] scrollbar-hide pb-10 sm:h-auto sm:overflow-y-hidden lg:snap-none lg:shrink lg:gap-5">
        {projects.map((project) => {
          return <Project project={project} />;
        })}
      </div>
    </div>
  );
}
