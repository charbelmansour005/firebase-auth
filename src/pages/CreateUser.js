import "../App.css";
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../Firebase-config";
import { useNavigate } from "react-router-dom";
//design
//https://materializecss.com/
import "../App.css";
//design
import { M, options } from "materialize-css";
import axios from "axios";

function CreateUser() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".tooltipped");
      var instances = M.Tooltip.init(elems, options);
    });
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      alert("Please sign in again to start");
      navigate("/");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
      setIsShown((current) => !current);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      {/* <h6 className="googlefontcenter">Please Login In Order To Proceed</h6> */}
      <div className="vertical-center">
        <div className="card-panel">
          <div style={{ textAlign: "center" }}>
            <div>
              <h5 className="googlefontTITLE">Register </h5>
              <div>
                <input
                  className="Signupinput"
                  placeholder="Email..."
                  onChange={(event) => {
                    setRegisterEmail(event.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  className="Signupinput"
                  placeholder="Password..."
                  type="password"
                  onChange={(event) => {
                    setRegisterPassword(event.target.value);
                  }}
                />
              </div>

              <button
                style={{
                  marginTop: "5px",
                  display: "flex",
                  flexDirection: "row",
                }}
                onClick={() => {
                  register();
                  handleClick();
                }}
                className="googlebtn"
              >
                Sign up
              </button>
            </div>

            <div
              style={{
                marginTop: "5px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="googlebtn"
              >
                Back
              </button>
            </div>
          </div>
          {isShown && (
            <div className="progress black">
              <div className="indeterminate orange"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
