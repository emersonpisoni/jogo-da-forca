import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { getRanking } from "../api/ranking";
import trofeu from "../../assets/images/trofeu.svg";
import { Modal } from "../../components/modal";
import "./index.css";

export function Ranking() {
  const [ranking, setRanking] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [conquistasJogador, setConquistasJogador] = useState([]);

  useEffect(() => {
    fetchRanking();
  }, []);

  async function fetchRanking() {
    try {
      const res = await getRanking();
      const filteredPlayers = res.data
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
      setRanking(filteredPlayers);
    } catch (error) {
      console.error(error);
    }
  }

  function mostraConquistas(achievements) {
    setConquistasJogador(achievements);
    setIsOpenModal(true);
  }

  return (
    <>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <div className="conquistas">
          <div className="title">Conquistas</div>
          {conquistasJogador.map(({ title, description }) => {
            return (
              <div className="conquista">
                <div>{title}</div>
                <div>{description}</div>
              </div>
            );
          })}
        </div>
      </Modal>
      <div className="ranking">
        <div className="lista">
          <div className="posicao">
            <div>Nome</div>
            <div>Pontuação</div>
            <div className="conquistas">Conquistas</div>
          </div>
          <div
            style={{
              width: "80%",
              height: "2px",
              backgroundColor: "white",
              margin: 10,
            }}
          ></div>
          {ranking.map(({ player, score, achievements }, index) => {
            return (
              <div key={player + index} className="posicao">
                <div>{player}</div>
                <div>{score}</div>
                <div className="conquistas">
                  <Button
                    disabled={!achievements.length}
                    style={{ padding: 4 }}
                    onClick={() => mostraConquistas(achievements)}
                  >
                    <img
                      src={trofeu}
                      style={{
                        width: 30,
                        opacity: `${!achievements.length ? "0.3" : 1}`,
                      }}
                      alt="trofeu"
                    />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/jogo-da-forca">
          <Button>Voltar</Button>
        </Link>
      </div>
    </>
  );
}
