import React from "react";
import Modal from "../../components/modal/Modal";
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
          />
          <Modal
            heading="Communicative"
            text="I can work within a team, collaborate well with designers, and I love feedbacks."
          />
        </div>
      </div>
    </div>
  );
};

export default Modals;
