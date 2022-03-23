import React from "react";
import SkillList from "./Skill/SkillList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { skills } from "../../skillsDataFile";

export default function Skills() {
  return (
    <div className=" " id="Skills">
      <div className="text-center pt-20">
        <FontAwesomeIcon
          icon={faBrain}
          className="text-9xl text-center text-purple-500"
        />
        <p className="text-7xl text-center font-bold text-purple-500 mt-5">
          Skills & Technology
        </p>
        <p className="text-lg mt-14 p-10 text-slate-600 dark:text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>

      <div className="mt-24 flex flex-center ">
        <div className="flex justify-center align-center w-5/6 m-auto  sm:flex-col">
          {skills.map((skill) => {
            return <SkillList skills={skill} />;
          })}
        </div>
      </div>
    </div>
  );
}
