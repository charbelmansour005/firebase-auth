import React, { useState, useEffect } from "react";
// import axios from "axios";
import Modal from "../components/Modal";
import "../App.css";
import Suggestions from "../components/Suggestions";
import MyTopNav from "../components/MyTopNav";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ position: "relative" }}>
        <MyTopNav />
        {openModal && <Modal closeModal={setOpenModal} />}
        {/* modal */}
        <div
          style={{
            margin: "5px",
            backgroundColor: "white",
          }}
          class="collection"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              color: "white",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => {
                setOpenModal(true); //modal
              }}
              className="googlebtn"
              style={{ marginTop: "15px" }}
            >
              Create New Suggestion
            </button>
            <button
              className="googlebtn"
              onClick={() => {
                navigate("/subs");
              }}
              style={{ marginTop: "15px", marginLeft: "5px" }}
            >
              View Subs
            </button>
          </div>

          <h3
            style={{
              marginLeft: "5px",
              marginTop: "35px",
              textAlign: "center",
            }}
          >
            Suggestions submitted to us
          </h3>
          <Suggestions />
        </div>
        {/* passed func setOpenModal through keyword closeModal */}
      </div>
      {/* {thoughts?.map((thought)=>{return (<div></div>);})} */}
    </div>
  );
}
