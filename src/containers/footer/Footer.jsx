import React from "react";
import { FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="saep__footer">
      <div className="saep__footer-container">
        <div className="saep__footer-heading">
          <h1>Get in Touch</h1>
        </div>
        <div className="saep__footer-sub_heading">
          <p>
            For business inquiry please send email to{" "}
            <a
              href="mailto:dsrisk911@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              dsrisk911@gmail.com
            </a>
          </p>
        </div>
        <div className="saep__footer-icon">
          <div className="saep__footer-icon_instagram">
            <a
              href="https://www.instagram.com/septianadhitya_"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram color="#a3b3bc" size={30} />
            </a>
          </div>
          <div className="saep__footer-icon_whatsapp">
            <a
              href="https://wa.me/6281223607505"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp color="#a3b3bc" size={30} />
            </a>
          </div>
          <div className="saep__footer-icon_github">
            <a
              href="https://www.github.com/saepp"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub color="#a3b3bc" size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
