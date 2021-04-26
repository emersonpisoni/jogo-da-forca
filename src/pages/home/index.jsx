import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { ComoJogar } from "../../components/ComoJogar";
import "./index.css";

export const Home = () => {
  return (
    <div className="container">
      <Link to="/admin">
        <p>Jogo da forca</p>
      </Link>
      <div className="buttons">
        <Link to="/jogo">
          <Button>Iniciar Jogo</Button>
        </Link>
        <Button>Ranking</Button>
        <ComoJogar></ComoJogar>
      </div>
    </div>
  );
};
