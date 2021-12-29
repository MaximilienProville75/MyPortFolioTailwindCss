import React from "react";

export default class SkillList extends React.Component {
  render() {
    return (
      <>
        <ul className="ring-4 rounded-3xl ring-purple-500 ring-offset-4 ring-offset-gray-900 p-10 bg-gray-700/50  shadow-purple-300/80 shadow-xl animate-fade-in-down">
          <div className="flex flex-col">
            <p className="text-4xl font-bold first-letter:text-purple-500 first-letter:text-5xl mb-14 ">
              {this.props.skills.title}
            </p>
          </div>
          {this.props.skills.skills.map((skill) => {
            return (
              <li className="text-2xl mb-2 hover:text-purple-500">{skill}</li>
            );
          })}
        </ul>
      </>
    );
  }
}
