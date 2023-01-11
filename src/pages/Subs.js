import React from "react";
import MyTopNav from "../components/MyTopNav";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import SpookyCover from "../Images/spooky.jpeg";

function Subs() {
  const navigate = useNavigate();
  return (
    <div>
      <MyTopNav />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Row className="g-4" style={{ margin: "5px" }}>
            <Col>
              <Card
                style={{
                  height: "390px",
                  width: "282px",
                  border: "0.5px solid lightgray",
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://logos.flamingtext.com/Word-Logos/advice-design-stripes-name.gif"
                  style={{ height: "220px", width: "280px" }}
                />
                <Card.Body>
                  <Card.Title>Advice</Card.Title>
                  <Card.Text>
                    This sub is dedicated for advice that might help.
                  </Card.Text>
                  <button
                    onClick={() => {
                      navigate("/advice");
                    }}
                    className="googlebtn"
                  >
                    Enter
                  </button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="g-4" style={{ margin: "5px" }}>
            <Col>
              <Card
                style={{
                  height: "390px",
                  width: "282px",
                  border: "0.5px solid lightgray",
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/originals/4b/ae/42/4bae423970bf1f12fa419d7308841687.png"
                  style={{ height: "220px", width: "280px" }}
                />
                <Card.Body>
                  <Card.Title>Stories</Card.Title>
                  <Card.Text>
                    Share your stories experiences with people.
                  </Card.Text>
                  <button className="googlebtn">Enter</button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="g-4" style={{ margin: "5px" }}>
            <Col>
              <Card
                style={{
                  height: "390px",
                  width: "282px",
                  border: "0.5px solid lightgray",
                }}
              >
                <Card.Img
                  variant="top"
                  src={SpookyCover}
                  style={{ height: "220px", width: "280px" }}
                />
                <Card.Body>
                  <Card.Title>Creepy Pasta</Card.Title>
                  <Card.Text>
                    Share your REAL LIFE spooky experiences on our platform.
                  </Card.Text>
                  <button className="googlebtn">Enter</button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Subs;
