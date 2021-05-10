import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { getAllCategories } from "../api/categories";
import { deleteWord, getAllWord, newWord, updateWord } from "../api/word";
import "./index.css";

export function Palavras() {
  const [palavras, setPalavras] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);
  const [form, setForm] = useState({});

  useEffect(() => {
    fetchPalavras();
    fetchCategorias();
  }, []);

  async function fetchCategorias() {
    const newForm = {};
    try {
      const res = await getAllCategories();
      setCategorias(res.data);
      setCategoriaSelecionada(res.data[0].id);
      res.data.forEach((categoria) => {
        newForm[categoria.name] = categoria.name;
      });
      setForm(newForm);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchPalavras() {
    const newForm = {};
    try {
      const res = await getAllWord();
      setPalavras(res.data);
      res.data.forEach((word) => {
        newForm[word.name] = word.name;
      });
      setForm(newForm);
    } catch (error) {
      console.log(error);
    }
  }

  async function onExcluirPalavra(idPalavra) {
    try {
      await deleteWord(idPalavra);
      await fetchPalavras();
    } catch (error) {
      console.log(error);
    }
  }

  async function onEditarPalavra(palavra) {
    try {
      await updateWord(palavra.id, {
        name: form[palavra.name],
      });
      await fetchPalavras();
    } catch (error) {}
  }

  function onChangeInputEdit(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function onAddPalavra() {
    try {
      await newWord({
        name: form.add,
        category: {
          id: categoriaSelecionada,
        },
      });
      setForm({ add: "" });
      await fetchPalavras();
    } catch (error) {}
  }

  return (
    <div className="palavras">
      <Link to="/admin">
        <Button>Voltar</Button>
      </Link>
      <table>
        <tr>
          <th>Categoria</th>
          <th>Palavra</th>
          <th>Ações</th>
        </tr>
        {palavras.map((palavra) => {
          return (
            <tr>
              <td>
                <input disabled value={palavra.category.name} />
              </td>
              <td>
                <input
                  name={palavra.name}
                  value={form[palavra.name]}
                  onChange={onChangeInputEdit}
                />
              </td>
              <td>
                <button
                  disabled={palavra.name === form[palavra.name]}
                  onClick={() => onEditarPalavra(palavra)}
                >
                  Editar
                </button>
                <button onClick={() => onExcluirPalavra(palavra.id)}>
                  Excluir
                </button>
              </td>
            </tr>
          );
        })}
        <tr>
          <td>
            <select
              value={categoriaSelecionada}
              onChange={(e) => setCategoriaSelecionada(e.target.value)}
            >
              {categorias.map((categoria) => (
                <option value={categoria.id}>{categoria.name}</option>
              ))}
            </select>
          </td>
          <td>
            <input name="add" value={form.add} onChange={onChangeInputEdit} />
          </td>
          <td>
            <button
              disabled={palavras
                .map((palavra) => palavra.name)
                .includes(form.add)}
              onClick={onAddPalavra}
            >
              Adicionar
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
