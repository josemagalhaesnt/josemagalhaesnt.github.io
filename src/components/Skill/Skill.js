import React from "react";
import "./Skill.scss";

const Skill = props => {
  const profMaxValue = 100;

  return (
    <div className="Skill">
      <strong className="Skill__name">{props.name}</strong>
      <progress
        className="Skill__proficiency"
        value={props.proficiency}
        max={profMaxValue}
      ></progress>
      <strong>{props.proficiency + "%"}</strong>
    </div>
  );
};

export default Skill;
