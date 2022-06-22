import React from "react";
import { BsLink45Deg, BsGithub } from "react-icons/bs";
import "./project.css";

const Project = ({ project, name, link, github }) => {
  return (
    <div className="saep__project">
      <div className="saep__project-image">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={project} alt="project" />
        </a>
      </div>
      <div className="saep__project-name">
        <p>{name}</p>
      </div>
      <div className="saep__project-links">
        <div className="saep__project-links_visit">
          <p>
            <a href={link} target="_blank" rel="noreferrer">
              <div className="wrap__visit">
                <span className="link-icon">
                  <BsLink45Deg size={17} color="#fff" />
                </span>
                <span className="link-icon-text">Visit Website</span>
              </div>
            </a>
          </p>
        </div>
        <div className="saep__project-links_github">
          <p>
            <a href={github} target="_blank" rel="noreferrer">
              <div className="wrap__github">
                <span className="github-icon">
                  <BsGithub size={17} color="#fff" />
                </span>
                <span className="github-icon-text">Link Github</span>
              </div>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
