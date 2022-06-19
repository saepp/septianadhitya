import React from "react";
import { IoIosMail } from "react-icons/io";
import { HiDownload } from "react-icons/hi";
import personal from "../../assets/image.png";
import "./header.css";

const Header = () => {
  return (
    <div className="saep__header section__padding" id="home">
      <div className="saep__header-content">
        <p className="heading__text">Hi, I’m Septian Adhitya</p>
        <h1 className="gradient__text">React Developer</h1>
        <p className="description__text">
          I’m from Indonesia and I have been working as a ReactJS <br />
          Developer Specialist for more than 2 years and still love to <br /> do
          it everyday. I’ve been freelancing the last 1 years , and <br /> right
          now I am looking forward to working with you!
        </p>
        <div className="saep__header-content__button">
          <button type="button">
            <span className="mail-icon">
              <IoIosMail color="#fff" size={23} />
            </span>
            Email
          </button>
          <p>
            <a href="#home">
              <span className="download-icon">
                <HiDownload color="#fff" size={15} />
              </span>
              Download
            </a>
          </p>
        </div>
      </div>
      <div className="saep__header-content__image">
        <img src={personal} alt="personal" />
      </div>
    </div>
  );
};

export default Header;
