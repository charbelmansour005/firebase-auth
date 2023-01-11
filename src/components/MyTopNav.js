import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { auth } from "../Firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";

function MyTopNav() {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  const navigate = useNavigate();
  //LOGOUT
  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Bluepost</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/encxloginencx-success");
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/subs");
              }}
            >
              Subs
            </Nav.Link>
            <NavDropdown title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Change Password
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  navigate("../");
                }}
              >
                Login-Screen
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Create new account
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <p>{user.email}</p>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {/* <Navbar.Text>
          Signed in as: <a> {user.email}</a>
        </Navbar.Text> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyTopNav;
