import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { Card } from "../../components/Card";
import "./style.css";

export function Jogo() {
  const [palavra, setPalavra] = useState([]);

  useEffect(() => {
    fetchPalavra();
  }, []);

  async function fetchPalavra() {
    try {
      const word = "teste";
      const wordArray = [];

      for (let i = 0; i < word.length; i++) {
        wordArray.push(word[i]);
      }

      setPalavra(wordArray);
    } catch (error) {}
  }

  return (
    <div className="jogo">
      Jogo
      <div>
        <div className="forca">
          {palavra.map((word) => (
            <Card>{word}</Card>
          ))}
        </div>
        <div className="botoes">
          <Button>Desistir</Button>
          <Button>Próxima palavra</Button>
        </div>
      </div>
      <div>
        <div className="letras-cantadas">
          <p>Letras já faladas</p>
          <div>
            {["a", "b", "c"].map((word) => (
              <Card>{word}</Card>
            ))}
          </div>
        </div>
        <div className="digite-a-letra">
          Digite a letra
          <input></input>
        </div>
        <div className="pontuacao">
          Pontuação
          <Card>1000 pts</Card>
        </div>
      </div>
      <Link to="/jogo-da-forca">
        <Button>Voltar</Button>
      </Link>
    </div>
  );
}
