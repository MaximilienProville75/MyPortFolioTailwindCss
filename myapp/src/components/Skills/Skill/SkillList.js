import React from "react";

export const SkillList = (skills, text) => {
  const data1 = skills.skills.skills;
  console.log(text.textList);
  return (
    <>
      <div className=" m-auto center  sm:w-full  sm:mb-24 sm:mr-0 fade-left-init animate-fade-left [animation-delay:1200ms">
        <div className="flex flex-col w-2/4 m-auto ">
          <p
            className="text-2xl font-bold first-letter:text-purple-500 
            p-4 first-letter:text-5xl mb-5 text-center underline"
          >
            {text.text}
          </p>
        </div>
        <ul className="flex flex-row flex-wrap items-center gap-5 w-4/5 mb-10 m-auto justify-center">
          {data1.map((skill) => {
            console.log(skill);
            return (
              <div className="flex flex-row justify-between  dark:hover:bg-gradient-to-r dark:hover:from-purple-700 to-purple-400  hover:text-white ring-4 rounded-lg ring-purple-500 ring-offset-4 ring-offset-gray-900 p-4 bg-gray-700/50 hover:bg-gradient-to-r hover:from-slate-700 to-slate-400 shadow-purple-300/80 shadow-lg mb-6 items-center text-purple-800 font-bold dark:text-purple-500 dark:hover:text-white w-60">
                <li>{skill.name}</li>
                <img src={skill.img} alt={skill.name} className="h-12 w-12" />
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
