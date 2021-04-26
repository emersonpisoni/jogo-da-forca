import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Jogo from "./pages/jogo";
import Admin from "./pages/admin";
import Categorias from "./pages/categorias";
import { Home } from "./pages/home";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/jogo" component={Jogo} />
        <Route path="/admin" component={Admin} />
        <Route path="/categorias" component={Categorias} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
