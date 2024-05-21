import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Counter, Todo } from "./components/useState/Imports.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Counter />
    <Todo />
  </React.StrictMode>
);
