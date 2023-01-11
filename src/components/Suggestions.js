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
import "../App.css";

function Suggestions() {
  const SuggestionRef = collection(db, "suggestions");
  const [suggestions, setsuggestions] = useState([]);

  // R;
  useEffect(() => {
    const getSuggestions = async () => {
      const data = await getDocs(SuggestionRef);
      setsuggestions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getSuggestions();
  }, []);
  return (
    <>
      {suggestions?.map((index) => {
        return (
          <div style={{ margin: "5px" }} key={Math.random() * 935}>
            <Card className="Cards">
              <Card.Body>
                <Card.Title>{index.title}</Card.Title>
                <Card.Text>{index.body}</Card.Text>
                <Button variant="primary">Commend</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </>
  );
}

export default Suggestions;
