import React from "react";

export default class Project extends React.Component {
  render() {
    return (
      <div className="Project">
        <div className="ProjectImg"></div>
        <div className="ProjectDescription">
          <div className="ProjectTitle">{this.props.project.title}</div>
          <div className="ProjectDesc">{this.props.project.description}</div>
          <ul className="Technology">
            {this.props.project.technology.map((tech) => {
              return <li>{tech}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
