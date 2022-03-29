import React from "react";
import { SkillList } from "./Skill/SkillList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { skills } from "../../skillsDataFile";

export default function Skills(text) {
  return (
    <div className="m-auto" id="Skills">
      <div className="text-center pt-20">
        <FontAwesomeIcon
          icon={faBrain}
          className="text-9xl text-center text-purple-500"
        />
        <p className="text-7xl text-center font-bold text-purple-500 mt-5">
          {text.text.main}
        </p>
      </div>

      <div className="mt-12 flex justify-center ">
        <div className="flex flex-col flex-wrap justify-center align-center w-5/6 m-auto  sm:flex-col">
          {skills.map((skill) => {
            return <SkillList skills={skill} text={text.text} />;
          })}
        </div>
      </div>
    </div>
  );
}
