import React from "react";

export default class SkillList extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-col mr-10  w-2/4 center  sm:w-full  sm:mb-24 sm:mr-0">
          <div className="flex flex-col ">
            <p className="text-4xl font-bold first-letter:text-purple-500 first-letter:text-5xl mb-14 ring-4 rounded-3xl ring-purple-500 ring-offset-4 ring-offset-gray-900 p-10 bg-purple-700 dark:bg-gray-700/50  shadow-purple-300/80 shadow-xl text-center animate-pulse ">
              {this.props.skills.title}
            </p>
          </div>
          <ul className="flex flex-col items-center">
            {this.props.skills.skills.map((skill) => {
              return (
                <li className="text-2xl  dark:hover:bg-gradient-to-r dark:hover:from-purple-700 to-purple-400  hover:text-white ring-4 rounded-lg ring-purple-500 ring-offset-4 ring-offset-gray-900 p-4 bg-gray-700/50 hover:bg-gradient-to-r hover:from-slate-700 to-slate-400 shadow-purple-300/80 shadow-lg mb-6 w-full items-center text-purple-800 font-bold dark:text-purple-500 dark:hover:text-white">
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
