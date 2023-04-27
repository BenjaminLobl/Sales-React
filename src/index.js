import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { CartProvider } from './pages/ProductPage';
import App from "./App";
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
