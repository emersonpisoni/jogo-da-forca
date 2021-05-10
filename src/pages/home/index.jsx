import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { ComoJogar } from "../../components/ComoJogar";
import { Modal } from "../../components/modal";
import { getAllCategories } from "../api/categories";
import "./index.css";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
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
      </Modal>
      <div className="container">
        <Link to="/admin">
          <p>Jogo da forca</p>
        </Link>
        <div className="buttons">
          <Button onClick={() => setIsOpen(true)}>Iniciar Jogo</Button>
          <Link to="/ranking">
            <Button>Ranking</Button>
          </Link>
          <ComoJogar></ComoJogar>
        </div>
      </div>
    </>
  );
};
