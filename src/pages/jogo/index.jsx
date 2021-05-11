import React, { useEffect, useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import Button from "../../components/Button";
import { Card } from "../../components/Card";
import { Modal } from "../../components/modal";
import { getGameModeByCategory, getGameModeByRandomWords } from "../api/game";
import { ToastContainer } from "react-toastify";
import { createPlayerInRanking } from "../api/ranking";
import { verificaConquistas } from "./conquistas";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

export function Jogo() {
  const [categoria, setCategoria] = useState([]);
  const [palavraEscondida, setPalavraEscondida] = useState([]);
  const [palavraCorreta, setPalavraCorreta] = useState([]);
  const [palavras, setPalavras] = useState([]);
  const [letrasDigitadas, setLetrasDigitadas] = useState([]);
  const [pontuação, setPontuação] = useState(0);
  const [letraAtual, setLetraAtual] = useState("");
  const [erros, setErros] = useState([]);
  const [rodada, setRodada] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [seuNome, setSeuNome] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [conquistas, setConquistas] = useState([]);

  const { mode } = useParams();

  useEffect(() => {
    fetchPalavrasByGameMode();
  }, []);

  useEffect(() => {
    mostraPalavraParaAcertar(palavraCorreta, letrasDigitadas);
  }, [letrasDigitadas]);

  useEffect(() => {
    if (rodada !== 0) {
      verificaConquistas(erros, conquistas, setConquistas, rodada);
      setPontuação(pontuação + 100);

      if (palavras.length <= rodada) {
        setIsModalOpen(true);
        return;
      }
      setCategoria(palavras[rodada].category.name);
      proximaRodada(palavras[rodada].name);
    }
  }, [rodada]);

  async function fetchPalavrasByGameMode() {
    const request =
      mode === "random"
        ? getGameModeByRandomWords
        : () => getGameModeByCategory(mode);
    try {
      const res = await request();
      setPalavras(res.data);
      setCategoria(res.data[rodada].category.name);
      proximaRodada(res.data[rodada].name);
    } catch (error) {}
  }

  async function mostraPalavraParaAcertar(palavra, letrasDigitadas) {
    const novaPalavraEscondida = [];
    const erros = [];

    for (let i = 0; i < palavra.length; i++) {
      letrasDigitadas.includes(palavra[i])
        ? novaPalavraEscondida.push(palavra[i])
        : novaPalavraEscondida.push(" ");
    }

    console.log("letras digitadas", letrasDigitadas);
    console.log("palavra escondida", novaPalavraEscondida);

    letrasDigitadas.forEach(
      (letra) => !novaPalavraEscondida.includes(letra) && erros.push(letra)
    );
    console.log(erros.length);
    setPalavraEscondida(novaPalavraEscondida);
    setErros(erros);

    if (erros.length === 6) {
      acabarJogo();
    }
  }

  function falarLetra() {
    if (letrasDigitadas.includes(letraAtual)) {
      return;
    }
    setLetrasDigitadas([...letrasDigitadas, letraAtual]);
    setLetraAtual("");
  }

  function verifyDisabledProximaPalavra() {
    return palavraCorreta.some(
      (letra, index) => palavraEscondida[index] !== letra
    );
  }

  function proximaRodada(palavra) {
    setLetrasDigitadas([]);
    const novaPalavraCorreta = [];

    for (let i = 0; i < palavra.length; i++) {
      novaPalavraCorreta.push(palavra[i]);
    }

    setPalavraCorreta(novaPalavraCorreta);
    mostraPalavraParaAcertar(palavra, []);
  }

  async function onFinalizarJogo() {
    try {
      await createPlayerInRanking({
        player: seuNome,
        score: pontuação,
        achievements: conquistas.map((conquista) => ({ id: conquista.id })),
      });

      setShouldRedirect(true);
    } catch (error) {
      console.error(error);
    }
  }

  function acabarJogo() {
    const pontosPorCadaLetra =
      palavraEscondida.filter((palavra) => palavra !== " ").length * 5;

    setPontuação(pontuação + pontosPorCadaLetra);
    setIsModalOpen(true);
  }

  return (
    <>
      <ToastContainer />
      {shouldRedirect && <Redirect to="/ranking" />}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        hiddenCloseButton
      >
        <div className="seu-nome">
          <div>
            Digite seu nome:
            <input
              value={seuNome}
              onChange={(e) => setSeuNome(e.target.value)}
            ></input>
          </div>
          <Button disabled={!seuNome} onClick={onFinalizarJogo}>
            GO
          </Button>
        </div>
      </Modal>
      <div className="jogo">
        Jogo
        <div>
          <div className="erros">
            <div>Qtd erros</div>
            <div>
              {erros.map((_, index) => (
                <div key={index} className="erro">
                  X
                </div>
              ))}
            </div>
          </div>
          <div className="palavra-escondida">
            <div>Categoria: {categoria}</div>
            <div>
              {palavraEscondida.map((word, index) => (
                <Card key={word + "palavra-escondida" + index}>{word}</Card>
              ))}
            </div>
          </div>
          <div className="botoes">
            <Button onClick={acabarJogo}>Desistir</Button>
            <Button
              onClick={() => setRodada(rodada + 1)}
              disabled={verifyDisabledProximaPalavra()}
            >
              Próxima palavra
            </Button>
          </div>
        </div>
        <div>
          <div className="letras-cantadas">
            <p>Letras já faladas</p>
            <div>
              {letrasDigitadas.map((word, index) => (
                <Card key={word + "letras-digitadas" + index}>{word}</Card>
              ))}
            </div>
          </div>
          <div className="digite-a-letra">
            Digite a letra
            <input
              value={letraAtual}
              onChange={(e) => setLetraAtual(e.target.value.toUpperCase())}
              maxLength={1}
            ></input>
            <Button disabled={!letraAtual} onClick={falarLetra}>
              Falar
            </Button>
          </div>
          <div className="pontuacao">
            Pontuação
            <Card>{pontuação} pts</Card>
          </div>
        </div>
        <Link to="/jogo-da-forca">
          <Button>Voltar</Button>
        </Link>
      </div>
    </>
  );
}
