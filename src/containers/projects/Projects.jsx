import React from "react";
import Project from "../../components/project/Project";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import "./projects.css";

const Projects = () => {
  return (
    <div className="saep__projects section__padding" id="projects">
      <div className="saep__projects-heading">
        <h4>Related Projects</h4>
      </div>
      <div className="saep__projects-project">
        <Project
          project={project1}
          name="cekrs"
          link="https://cekrs-com.vercel.app"
          github="https://github.com/saepp/cekrs.com"
        />
        <Project
          project={project2}
          name="Flip Book"
          link="https://flip-book-delta.vercel.app"
          github="https://github.com/saepp/flip-book"
        />
      </div>
    </div>
  );
};

export default Projects;
