import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/container";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById("root")
);
