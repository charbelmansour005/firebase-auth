import "../App.css";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase-config";
import { useNavigate, Link } from "react-router-dom";

function LoginSignIn() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
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
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  //Login
  const login = async (e) => {
    {
      // user && -> user exists
      user && alert("Already signed in ");
      return;
    }
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      // console.log(loggedIN);
      console.log(user);
      navigate("/encxloginencx-success");
    } catch (error) {
      console.log(error.message);
      // alert(error.message + "\n" + "Please try again");
      alert("There was an error" + "\n" + "Please try again");
      setIsShown((current) => !current);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div className="vertical-center">
        <div className="card-panel ">
          <div style={{ textAlign: "center" }}>
            <div>
              <h6 className="googlefontTITLE">Bluepost</h6>
              <div>
                <input
                  placeholder="Email..."
                  className="Signupinput"
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  placeholder="Password..."
                  className="Signupinput"
                  type="password"
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "5px",
                }}
              >
                <button
                  onClick={() => {
                    login();
                    handleClick();
                  }}
                  className="googlebtn"
                  style={{ marginTop: "15px" }}
                >
                  Sign in
                </button>
              </div>
              {user && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <button
                    onClick={() => {
                      navigate("/encxloginencx-success");
                    }}
                    className="googlebtn"
                    style={{ marginTop: "5px" }}
                  >
                    Dashboard
                  </button>
                </div>
              )}
            </div>
            {user && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <p
                  className="googlefontStatus"
                  style={{ marginLeft: "5px", color: "gray" }}
                >
                  {user?.email}
                </p>
              </div>
            )}
            <div className="seperatordivParent">
              <div className="seperatordiv"></div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                onClick={() => {
                  navigate("/signup");
                }}
                className="googlebtn"
                style={{ marginTop: "5px" }}
              >
                Create New Account
              </button>
            </div>
            {/* {isShown && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  className="loading"
                >
                  Signing you in ...
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignIn;
