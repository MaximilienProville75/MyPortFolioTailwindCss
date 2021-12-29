import React from "react";

export default class SkillList extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-col mr-10">
          <div className="flex flex-col">
            <p className="text-4xl font-bold first-letter:text-purple-500 first-letter:text-5xl mb-14 ring-4 rounded-3xl ring-purple-500 ring-offset-4 ring-offset-gray-900 p-10 bg-gray-700/50  shadow-purple-300/80 shadow-xl text-center animate-pulse">
              {this.props.skills.title}
            </p>
          </div>
          <ul className="flex flex-col items-center">
            {this.props.skills.skills.map((skill) => {
              return (
                <li className="text-2xl  hover:bg-purple-500 hover:text-white ring-4 rounded-lg ring-purple-500 ring-offset-4 ring-offset-gray-900 p-4 bg-gray-700/50  shadow-purple-300/80 shadow-lg mb-6 w-full items-center ">
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
