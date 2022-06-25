import React from "react";
import Modal from "../../components/modal/Modal";
import modal1 from "../../assets/img1.svg";
import modal2 from "../../assets/img2.svg";
import "./modals.css";

const Modals = () => {
  return (
    <div className="saep__modals" id="whyHireMe">
      <div className="saep__modals-container">
        <div className="saep__modals-heading">
          <h1>Why Hire Me?</h1>
        </div>
        <div className="saep__modals-benefit">
          <Modal
            heading="Collaborative"
            text="I communicate what I struggle to make all crystal clear. I can communicate my ideas well."
            modal={modal1}
          />
          <Modal
            heading="Communicative"
            text="I can work within a team, collaborate well with designers, and I love feedbacks."
            modal={modal2}
          />
        </div>
      </div>
    </div>
  );
};

export default Modals;
