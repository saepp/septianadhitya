import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
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
      {/* Navbar Button Small Screen */}
      <div className="saep__navbar-bottom">
        <div className="saep__navbar-bottom_logo">
          <div className="circle-logo" />
        </div>
        <div className="saep__navbar-bottom_email">
          <p>
            <a href="mailto:dsrisk911@gmail.com">
              <span className="wrap__email">
                <span className="email-icon">
                  <svg
                    width="14"
                    height="9"
                    viewBox="0 0 14 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.2501 7.875V1.125C13.2501 0.5025 12.7476 0 12.1251 0H1.61755C0.995054 0 0.492554 0.5025 0.492554 1.125V7.875C0.492554 8.4975 0.995054 9 1.61755 9H12.1251C12.7476 9 13.2501 8.4975 13.2501 7.875ZM12.2676 1.0425C12.5151 1.29 12.3801 1.545 12.2451 1.6725L9.20005 4.4625L12.1251 7.5075C12.2151 7.6125 12.2751 7.7775 12.1701 7.89C12.0726 8.01 11.8476 8.0025 11.7501 7.9275L8.47255 5.13L6.86755 6.5925L5.27005 5.13L1.99255 7.9275C1.89505 8.0025 1.67005 8.01 1.57255 7.89C1.46755 7.7775 1.52755 7.6125 1.61755 7.5075L4.54255 4.4625L1.49755 1.6725C1.36255 1.545 1.22755 1.29 1.47505 1.0425C1.72255 0.795 1.97755 0.915 2.18755 1.095L6.86755 4.875L11.5551 1.095C11.7651 0.915 12.0201 0.795 12.2676 1.0425Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
                <span className="email-icon-text">Email Me</span>
              </span>
            </a>
          </p>
        </div>
        <div className="saep__navbar-bottom_menu">
          <span className="wrap__hamburger">
            <span className="hamburger-icon">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.86607 1.67188H0.133929C0.0984085 1.67188 0.0643432 1.65706 0.0392268 1.63069C0.0141103 1.60431 0 1.56855 0 1.53125L0 0.96875C0 0.931454 0.0141103 0.895685 0.0392268 0.869313C0.0643432 0.842941 0.0984085 0.828125 0.133929 0.828125H9.86607C9.90159 0.828125 9.93566 0.842941 9.96077 0.869313C9.98589 0.895685 10 0.931454 10 0.96875V1.53125C10 1.56855 9.98589 1.60431 9.96077 1.63069C9.93566 1.65706 9.90159 1.67188 9.86607 1.67188ZM9.86607 5.42188H0.133929C0.0984085 5.42188 0.0643432 5.40706 0.0392268 5.38069C0.0141103 5.35431 0 5.31855 0 5.28125L0 4.71875C0 4.68145 0.0141103 4.64569 0.0392268 4.61931C0.0643432 4.59294 0.0984085 4.57812 0.133929 4.57812H9.86607C9.90159 4.57812 9.93566 4.59294 9.96077 4.61931C9.98589 4.64569 10 4.68145 10 4.71875V5.28125C10 5.31855 9.98589 5.35431 9.96077 5.38069C9.93566 5.40706 9.90159 5.42188 9.86607 5.42188ZM9.86607 9.17188H0.133929C0.0984085 9.17188 0.0643432 9.15706 0.0392268 9.13069C0.0141103 9.10431 0 9.06855 0 9.03125L0 8.46875C0 8.43145 0.0141103 8.39569 0.0392268 8.36931C0.0643432 8.34294 0.0984085 8.32812 0.133929 8.32812H9.86607C9.90159 8.32812 9.93566 8.34294 9.96077 8.36931C9.98589 8.39569 10 8.43145 10 8.46875V9.03125C10 9.06855 9.98589 9.10431 9.96077 9.13069C9.93566 9.15706 9.90159 9.17188 9.86607 9.17188Z"
                  fill="white"
                ></path>
              </svg>
            </span>
            <span className="hamburger-icon-text">Menu</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
