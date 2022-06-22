import React from "react";
import { HiDownload } from "react-icons/hi";
import ellips4 from "../../assets/ellips5.png";
import "./card.css";

const Card = () => {
  return (
    <div className="saep__card">
      <div className="saep__card-container">
        <div className="saep__card-heading">
          <h1>Interested Working With Me?</h1>
        </div>
        <div className="saep__card-button">
          <div className="saep__card-button_download">
            <p>
              <a href="#home" target="_blank" rel="noreferrer">
                <span className="wrap__download">
                  <span className="download-icon">
                    <HiDownload size={15} color="#fff" />
                  </span>
                  <span className="download-icon-text">Download CV</span>
                </span>
              </a>
            </p>
          </div>
          <div className="saep__card-button_email">
            <p>
              <a
                href="mailto:dsrisk911@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="wrap__email">
                  <span className="email-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="12"
                      viewBox="0 0 17 12"
                      fill="none"
                    >
                      <path
                        d="M16.1 10.05V1.94998C16.1 1.20298 15.497 0.599976 14.75 0.599976H2.14102C1.39402 0.599976 0.791016 1.20298 0.791016 1.94998V10.05C0.791016 10.797 1.39402 11.4 2.14102 11.4H14.75C15.497 11.4 16.1 10.797 16.1 10.05ZM14.921 1.85098C15.218 2.14798 15.056 2.45398 14.894 2.60698L11.24 5.95498L14.75 9.60898C14.858 9.73498 14.93 9.93298 14.804 10.068C14.687 10.212 14.417 10.203 14.3 10.113L10.367 6.75598L8.44101 8.51098L6.52401 6.75598L2.59102 10.113C2.47402 10.203 2.20402 10.212 2.08702 10.068C1.96102 9.93298 2.03302 9.73498 2.14102 9.60898L5.65101 5.95498L1.99702 2.60698C1.83502 2.45398 1.67302 2.14798 1.97002 1.85098C2.26702 1.55398 2.57302 1.69798 2.82502 1.91398L8.44101 6.44998L14.066 1.91398C14.318 1.69798 14.624 1.55398 14.921 1.85098Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <span className="email-icon-text">Email Me</span>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
