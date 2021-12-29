import React from "react";
import Project from "./Project/Project.js";
import { projects } from "../../projectDataFile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <div className="relative bg-purple-900 mb-0" id="Projects">
      <div className="ProjectsOverview">
        <FontAwesomeIcon icon={faCode} />
        <div className="ProjectText"></div>
      </div>

      <div className="ProjectList">
        {projects.map((project) => {
          return <Project project={project} />;
        })}
      </div>
    </div>
  );
}
