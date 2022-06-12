import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div style={{display:"flex"}}>
    <Sidebar />
    <Main />
    </div>
  </React.StrictMode>
);
