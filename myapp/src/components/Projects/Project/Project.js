import React from "react";

export default class Project extends React.Component {
  render() {
    const imgSrc = this.props.project.picture;

    return (
      <div className="Project shrink-0 w-6/12 mt-20 snap-center relative ">
        <div className="h-5/6 w-100 ">
          <img
            src={require(`./img/${imgSrc}`)}
            alt={`${this.props.project.title} doesnt load`}
            className="h-96 w-fit rounded-3xl ring-4 ring-purple-500 ring-offset-4 ring-offset-gray-900 shadow-purple-300/80 shadow-xl"
          />
          <div className="opacity-0 hover:opacity-100 absolute inset-0 rounded-3xl hover:bg-purple-900/80">
            <div className="ProjectTitle">{this.props.project.title}</div>
            <div className="ProjectDesc">{this.props.project.description}</div>
            <ul className="Technology">
              {this.props.project.technology.map((tech) => {
                return <li>{tech}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
