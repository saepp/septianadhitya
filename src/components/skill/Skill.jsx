import React from "react";
import "./skill.css";

const Skill = ({ img }) => {
  return (
    <div className="saep__skill">
      <div className="saep__skill-image">
        <img src={img} alt="skill" />
      </div>
    </div>
  );
};

export default Skill;
