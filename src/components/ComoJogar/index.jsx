import React, { useEffect, useState, useRef } from "react";
import Button from "../Button";
import { Modal } from "../modal";
import "./index.css";

export function ComoJogar() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="como-jogar">
      <Button onClick={() => setisOpen(true)}>Como Jogar?</Button>
      <Modal isOpen={isOpen} onClose={() => setisOpen(false)}>
        <p>Para começar a jogar é muito simples:</p>
        <p>- Clique em “Iniciar Jogo”.</p>
        <p>
          - Depois selecione uma categoria, caso você tenha medo de perder, para
          jogar apenas com palavras de um tema específico. Mas se você quiser um
          desafio digno de um(a) sobrevivente do Apocalipse Zumbi, escolha
          “Categorias Aleatórias”.
        </p>
        <p>
          - Coloque a letra que você quiser no campo correspondente e teste sua
          sorte. Não esqueça de acentuar, caso seja necessário
        </p>
        <p>– não vamos facilitar pra você.</p>
        <p>
          - Para cada palavra correta, você ganhará 100 pontos. Caso você cometa
          6 erros antes de completar a palavra, ganhará 5 pontos para cada letra
          correta desta mesma rodada.
        </p>
        <p>
          - Ao final da partida, você poderá registrar seu nome no ranking com
          sua pontuação e conquistas.
        </p>
        <p>
          Ah, já estava esquecendo... durante a partida, você pode acumular
          conquistas com boas jogadas... ou não. Esforce-se para ficar entre os
          dez primeiros lugares e mostrar para todos que você é um Caçador de
          Zumbis.
        </p>
        <p></p>
      </Modal>
    </div>
  );
}
