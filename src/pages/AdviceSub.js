import React, { useState } from "react";
import MyTopNav from "../components/MyTopNav";
import Background from "../Images/advice.png";
import AdviceModal from "../components/AdviceModal";
import Advices from "../components/Advices";
import { useNavigate } from "react-router-dom";

function AdviceSub() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <MyTopNav />
      {openModal && <AdviceModal closeModal={setOpenModal} />}
      {/* <img className="Advicebanner" src={Background}/>*/}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => {
            setOpenModal(true);
          }}
          className="googlebtn"
          style={{ marginTop: "15px", marginBottom: "15px" }}
        >
          Create Post
        </button>
        <button
          onClick={() => {
            navigate("/subs");
          }}
          className="googlebtn"
          style={{ marginTop: "15px", marginLeft: "5px", marginBottom: "15px" }}
        >
          Back
        </button>
      </div>
      <Advices />
    </div>
  );
}

export default AdviceSub;
