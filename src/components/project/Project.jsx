import React from "react";
import { BsLink45Deg, BsGithub } from "react-icons/bs";
import "./project.css";

const Project = ({ project, name, link, github }) => {
  return (
    <div className="saep__project">
      <div className="saep__project-image">
        <img src={project} alt="project" />
      </div>
      <div className="saep__project-name">
        <p>{name}</p>
      </div>
      <div className="saep__project-links">
        <div className="saep__project-links_visit">
          <p>
            <a href={link}>
              <div className="wrap__visit">
                <span className="link-icon">
                  <BsLink45Deg size={20} color="#fff" />
                </span>
                <span className="link-icon-text">Visit Website</span>
              </div>
            </a>
          </p>
        </div>
        <div className="saep__project-links_github">
          <p>
            <a href={github}>
              <div className="wrap__github">
                <span className="github-icon">
                  <BsGithub color="#fff" />
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
