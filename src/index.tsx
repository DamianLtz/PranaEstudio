import React from "react";
import ReactDOM from "react-dom/client";
import "./style/bootstrap.min.css";
import "./sass/styles.scss";
import App from "./App";
import { LangProvider } from "./context/langContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>
);
