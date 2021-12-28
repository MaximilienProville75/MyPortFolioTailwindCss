import React from "react";

export default class SkillList extends React.Component {
  render() {
    return (
      <>
        <div className="SkillList">
          <p>{this.props.skills.title}</p>
        </div>
        <ul>
          {this.props.skills.skills.map((skill) => {
            return <li>{skill}</li>;
          })}
        </ul>
      </>
    );
  }
}
