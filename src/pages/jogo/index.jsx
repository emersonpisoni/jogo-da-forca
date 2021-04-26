import React from "react";
import { Link } from "react-router-dom";

export default function Jogo() {
  return (
    <div>
      Jogo
      <Link to="/">
        <button>Voltar</button>
      </Link>
    </div>
  );
}
