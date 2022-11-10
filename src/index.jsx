import React from "react";
import ReactDOM from "react-dom/client";
import Routers from "./Routers";
import "./styles/Global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>
);
