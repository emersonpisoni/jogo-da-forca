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
        Para começar a jogar é muito simples: - Clique em “Iniciar Jogo”. -
        Depois selecione uma categoria, caso você tenha medo de perder, para
        jogar apenas com palavras de um tema específico. Mas se você quiser um
        desafio digno de um(a) sobrevivente do Apocalipse Zumbi, escolha
        “Categorias Aleatórias”. - Coloque a letra que você quiser no campo
        correspondente e teste sua sorte. Não esqueça de acentuar, caso seja
        necessário – não vamos facilitar pra você. - Para cada palavra correta,
        você ganhará 100 pontos. Caso você cometa 6 erros antes de completar a
        palavra, ganhará 5 pontos para cada letra correta desta mesma rodada. -
        Ao final da partida, você poderá registrar seu nome no ranking com sua
        pontuação e conquistas. Ah, já estava esquecendo... durante a partida,
        você pode acumular conquistas com boas jogadas... ou não. Esforce-se
        para ficar entre os dez primeiros lugares e mostrar para todos que você
        é um Caçador de Zumbis.
      </Modal>
    </div>
  );
}
