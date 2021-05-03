import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Jogo } from "./pages/jogo";
import Admin from "./pages/admin";
import { Home } from "./pages/home";
import { Categorias } from "./pages/categorias";
import { Palavras } from "./pages/palavras";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/jogo-da-forca" exact component={Home} />
        <Route path="/jogo" component={Jogo} />
        <Route path="/admin" component={Admin} />
        <Route path="/categorias" component={Categorias} />
        <Route path="/palavras" component={Palavras} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
