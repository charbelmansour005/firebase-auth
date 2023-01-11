import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase-config";
import { useNavigate } from "react-router-dom";

// fetched the function by passing the word that holds it as props
function Modal({ closeModal }) {
  const [newtitle, setnewtitle] = useState("");
  const [newbody, setnewbody] = useState("");
  const SuggestionsRef = collection(db, "suggestions");
  const navigate = useNavigate();
  const createSuggestion = async () => {
    //C
    if (newtitle === "" && newbody === "") {
      alert("Please fill out at least one field before submit");
    } else {
      await addDoc(SuggestionsRef, {
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
        <h5 style={{ marginTop: 10, marginBottom: 10 }}>Share With Me</h5>
        <p style={{ marginTop: 10, marginBottom: 10, color: "gray" }}>
          A new feature to add on this website
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
                  placeholder="Enter your title"
                  className="Signupinput"
                  onChange={(event) => {
                    setnewtitle(event.target.value);
                  }}
                />
                <textarea
                  placeholder="Enter your body"
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
            onClick={createSuggestion}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
    // <div id="modal1" class="modal">
    //   <div class="modal-content">
    //     <h4>Modal Header</h4>
    //     <p>A bunch of text</p>
    //   </div>
    //   <div class="modal-footer">
    //     <a href="#!" class="modal-close waves-effect waves-green btn-flat">
    //       Agree
    //     </a>
    //   </div>
    // </div>
  );
}

export default Modal;
