import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { ComoJogar } from "../../components/ComoJogar";
import { Modal } from "../../components/modal";
import { getAllCategories } from "../api/categories";
import { conquistasDisponíveis } from "../jogo/conquistas";
import "./index.css";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetchCategorias();
  }, []);

  async function fetchCategorias() {
    try {
      const res = await getAllCategories();
      setCategorias(res.data);
      setCategoriaSelecionada(res.data[0].id);
    } catch (error) {
      console.log(error);
    }
  }

  function EscolherCategoria() {
    return (
      <div className="game-mode">
        <select
          value={categoriaSelecionada}
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
        >
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.name}
            </option>
          ))}
        </select>
        <div>
          <Link to={`/jogo/${categoriaSelecionada}`}>
            <Button>Jogar com categoria</Button>
          </Link>
        </div>
        <Link to="/jogo/random">
          <Button>Jogar com categorias aleatórias</Button>
        </Link>
      </div>
    );
  }

  function Conquistas() {
    return (
      <div className="conquistas-home">
        {conquistasDisponíveis
          .filter((conquista) => [12, 25, 26].includes(conquista.id))
          .map(({ title, description }) => (
            <div>
              <div>{title}</div>
              <div>{description}</div>
            </div>
          ))}
      </div>
    );
  }

  function ModalComponent({ mode }) {
    switch (mode) {
      case "iniciar":
        return <EscolherCategoria />;
      case "conquistas":
        return <Conquistas />;
      default:
        return null;
    }
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalComponent mode={modalContent} />
      </Modal>
      <div className="container">
        <Link to="/admin">
          <p>Jogo da forca</p>
        </Link>
        <div className="buttons">
          <Button
            onClick={() => {
              setIsOpen(true);
              setModalContent("iniciar");
            }}
          >
            Iniciar Jogo
          </Button>
          <Button
            onClick={() => {
              setIsOpen(true);
              setModalContent("conquistas");
            }}
          >
            Conquistas
          </Button>
          <Link to="/ranking">
            <Button>Ranking</Button>
          </Link>
          <ComoJogar></ComoJogar>
        </div>
      </div>
    </>
  );
};
