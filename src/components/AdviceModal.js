import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase-config";
import { useNavigate } from "react-router";

function AdviceModal({ closeModal }) {
  const [newtitle, setnewtitle] = useState("");
  const [newbody, setnewbody] = useState("");
  const AdviceReference = collection(db, "advice");
  const navigate = useNavigate();
  const createAdvice = async () => {
    //C
    if (newtitle === "" && newbody === "") {
      alert("Please fill out at least one field before submit");
    } else {
      await addDoc(AdviceReference, {
        title: newtitle,
        body: newbody,
      });
      // navigate("/advice");
      window.location.reload();
    }
  };
  return (
    <div className="modalBackground">
      <div
        className="modalContainer"
        style={{ width: "100%", textAlign: "center" }}
      >
        <h5 style={{ marginTop: 10, marginBottom: 10 }}>Share an Advice</h5>
        <p style={{ marginTop: 10, marginBottom: 10, color: "gray" }}>
          You wish you heard before
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Form>
            <InputGroup>
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <input
                  onChange={(event) => {
                    setnewtitle(event.target.value);
                  }}
                  placeholder="Enter your title"
                  className="Signupinput"
                />
                <textarea
                  placeholder="Enter your body (expandalbe)"
                  className="Signupinput"
                  onChange={(event) => {
                    setnewbody(event.target.value);
                  }}
                />
              </div>
            </InputGroup>
          </Form>
        </div>

        <div>
          <button
            style={{
              margin: "5px",
              marginBottom: "10px",
              marginTop: "15px",
              marginLeft: "10px",
            }}
            className="googlebtn"
            onClick={() => {
              closeModal(false);
            }}
          >
            Cancel
          </button>
          <button
            style={{
              margin: "5px",
              marginBottom: "10px",
              marginTop: "15px",
              marginLeft: "10px",
            }}
            className="googlebtn"
            onClick={createAdvice}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdviceModal;
