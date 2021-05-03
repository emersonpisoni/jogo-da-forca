import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./index.css";

export default function Admin() {
  return (
    <div className="admin">
      <Link to="/jogo-da-forca">
        <Button>Voltar</Button>
      </Link>
      <Link to="/categorias">
        <Button>Gerenciar Categorias</Button>
      </Link>
      <Link to="/palavras">
        <Button>Gerenciar Palavras</Button>
      </Link>
    </div>
  );
}
