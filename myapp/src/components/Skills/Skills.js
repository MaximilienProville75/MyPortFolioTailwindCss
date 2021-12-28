import React from "react";
import SkillList from "./Skill/SkillList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { skills } from "../../skillsDataFile";

export default function Skills() {
  return (
    <div className="SkillsDescription" id="Skills">
      <div className="SkillsOverview">
        <FontAwesomeIcon icon={faBrain} />
        <div className="SkillsText"></div>
      </div>

      <div className="SkillsList">
        <div className="TechSkills">
          {skills.map((skill) => {
            return <SkillList skills={skill} />;
          })}
        </div>
        <div className="PersoSkills"></div>
      </div>
    </div>
  );
}
