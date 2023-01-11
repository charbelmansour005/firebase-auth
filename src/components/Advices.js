import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { db } from "../Firebase-config";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import {
  FacebookShareButton,
  FacebookIcon,
  RedditIcon,
  RedditShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

function Advices() {
  const AdviceReference = collection(db, "advice");
  const [advice, setadvice] = useState([]);
  // R;
  useEffect(() => {
    const getAdvice = async () => {
      const data = await getDocs(AdviceReference);
      setadvice(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAdvice();
  }, []);

  return (
    <div>
      {advice?.map((index) => {
        return (
          <div
            key={Math.random() * 935}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ margin: "10px" }}>
              <Card
                style={{
                  width: "90vw",
                }}
                className="Cards"
              >
                {/* <Card.Header>Featured</Card.Header> */}
                <Card.Body>
                  <Card.Title>{index.title}</Card.Title>
                  <Card.Text>{index.body}</Card.Text>
                  <FacebookShareButton
                    url={"https://company-17895.web.app/advice"}
                    quote={"Bluepost"}
                    style={{ margin: "1px" }}
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <RedditShareButton
                    url={
                      index.body +
                      " Shared from: https://company-17895.web.app/advice"
                    }
                    quote={"Bluepost"}
                    style={{ margin: "1px" }}
                  >
                    <RedditIcon size={32} round />
                  </RedditShareButton>
                  <WhatsappShareButton
                    url={"https://company-17895.web.app/advice"}
                    quote={"Bluepost"}
                    style={{ margin: "1px" }}
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                  <TelegramShareButton
                    url={"https://company-17895.web.app/advice"}
                    quote={"Bluepost"}
                    style={{ margin: "1px" }}
                  >
                    <TelegramIcon size={32} round />
                  </TelegramShareButton>
                  <TwitterShareButton
                    url={"https://company-17895.web.app/advice"}
                    quote={"Bluepost"}
                    style={{ margin: "1px" }}
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        index.title + " " + index.body
                      );
                    }}
                    className="copyToClipboardBTN"
                  >
                    Copy advice
                  </button>
                </Card.Body>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Advices;
