import React from "react";
import Skill from "../../components/skill/Skill";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import next from "../../assets/next.png";
import figma from "../../assets/figma.png";
import "./skills.css";

const Skills = () => {
  return (
    <div className="saep__skills">
      <div className="saep__skills-container">
        <div className="saep__skills-heading">
          <h1>My Skills</h1>
        </div>
        <div className="saep__skills-skill">
          <Skill img={html} />
          <Skill img={css} />
          <Skill img={js} />
          <Skill img={react} />
          <Skill img={next} />
          <Skill img={figma} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
