import React, { useEffect, useState, useRef } from "react";
import Button from "../Button";
import { Modal } from "../modal";
import "./index.css";

export function ComoJogar() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="como-jogar">
      <Button onClick={() => setisOpen(true)}>Como Jogar?</Button>
      <Modal isOpen={isOpen} onClose={() => setisOpen(false)}>Como Jogar?</Modal>
    </div>
  );
}
