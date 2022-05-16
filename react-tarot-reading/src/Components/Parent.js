import React from "react";
import Child from "./Child";
import { Button } from "semantic-ui-react";
import { useEffect, useState, useRef } from "react";
import "./App.css";

export default function Parent() {
  const [data, setData] = useState("");

  const parentToChild = () => {
    setData("This is data from Parent Component to the Child Component.");
  };
  return (
    <div className="App">
      <Child parentToChild={data} />

      <div>
        <Button primary onClick={() => parentToChild()}>
          Click Parent
        </Button>
      </div>
    </div>
  );
}

function Tarot() {
  const [status, setStatus] = useState("");
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setStatus("Loading the Magic");
    fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/random")
      .then((response) => response.json())
      .then(setCards)
      .then(() => setStatus("Success"))
      .catch(() => setStatus("Error"));
  }, []);
}
