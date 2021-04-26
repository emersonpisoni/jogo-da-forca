import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import './index.css'

export default function Admin() {
  return (
    <div className='admin'>
      <Link to='/categorias'>
        <Button>Gerenciar Categorias</Button>
      </Link>
      <Link>
        <Button>Gerenciar Palavras</Button>
      </Link>
    </div>
  );
}
