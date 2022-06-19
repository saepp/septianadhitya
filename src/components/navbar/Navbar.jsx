import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="saep__navbar">
      <div className="saep__navbar-links">
        <div className="saep__navbar-links_logo">
          <p>Septianadhitya</p>
        </div>
        <div className="saep__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#projects">Projects</a>
          </p>
          <p>
            <a href="#whyHireMe">Why Hire Me?</a>
          </p>
          <p>
            <a href="#skills">Skills</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
