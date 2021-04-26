import React, { useEffect, useState, useRef } from "react";
import Button from "../Button";
import "./index.css";

export function ComoJogar() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="como-jogar" >
      <Button onBlur={() => setisOpen(false)} onClick={() => setisOpen(!isOpen)}>Como Jogar?</Button>
      {isOpen ? (
        <div className="modal">
          <p>
            Como jogar
          </p>
        </div>
      ) : null}
    </div>
  );
}
