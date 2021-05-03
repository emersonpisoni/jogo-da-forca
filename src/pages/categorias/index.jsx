import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./index.css";

export function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const [form, setForm] = useState({});

  useEffect(() => {
    fetchCategorias();
  }, []);

  async function fetchCategorias() {
    const newForm = {};
    try {
      const res = await axios.get("http://localhost:8080/api/categories");
      setCategorias(res.data);
      res.data.forEach((categoria) => {
        newForm[categoria.name] = categoria.name;
      });
      setForm(newForm);
    } catch (error) {
      console.log(error);
    }
  }

  async function onExcluirCategoria(idCategoria) {
    try {
      await axios.delete(`http://localhost:8080/api/categories/${idCategoria}`);
      await fetchCategorias();
    } catch (error) {
      console.log(error);
    }
  }

  async function onEditarCategoria(categoria) {
    try {
      await axios.put(`http://localhost:8080/api/categories/${categoria.id}`, {
        name: form[categoria.name],
      });
      await fetchCategorias();
    } catch (error) {}
  }

  function onChangeInputEdit(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function onAddCategoria() {
    try {
      await axios.post(`http://localhost:8080/api/categories`, {
        name: form.add,
      });
      setForm({ add: "" });
      await fetchCategorias();
    } catch (error) {}
  }

  return (
    <div className="categorias">
      <Link to="/admin">
        <Button>Voltar</Button>
      </Link>
      <table>
        <tr>
          <th>Categoria</th>
          <th>Ações</th>
        </tr>
        {categorias.map((categoria) => {
          return (
            <tr>
              <td>
                <input
                  name={categoria.name}
                  value={form[categoria.name]}
                  onChange={onChangeInputEdit}
                />
              </td>
              <td>
                <button
                  disabled={categoria.name === form[categoria.name]}
                  onClick={() => onEditarCategoria(categoria)}
                >
                  Editar
                </button>
                <button onClick={() => onExcluirCategoria(categoria.id)}>
                  Excluir
                </button>
              </td>
            </tr>
          );
        })}
        <tr>
          <td>
            <input name="add" value={form.add} onChange={onChangeInputEdit} />
          </td>
          <td>
            <button
              disabled={categorias
                .map((categoria) => categoria.name)
                .includes(form.add)}
              onClick={onAddCategoria}
            >
              Adicionar
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
