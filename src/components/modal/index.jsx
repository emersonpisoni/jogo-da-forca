import React from "react";
import "./style.css";

export function Modal({ children, isOpen, onClose, hiddenCloseButton }) {
  return (
    <div className="modal" style={{ display: isOpen ? "unset" : "none" }}>
      <div className="modal-content">
        {children}
        {!hiddenCloseButton && <button className='close' onClick={onClose}>X</button>}
      </div>
    </div>
  );
}
