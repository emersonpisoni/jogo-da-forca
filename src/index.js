import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Jogo from "./pages/jogo";
import Admin from "./pages/admin";
import Categorias from "./pages/categorias";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/jogo" component={Jogo} />
        <Route path="/admin" component={Admin} />
        <Route path="/categorias" component={Categorias} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
