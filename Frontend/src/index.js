import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // optional global styles (you can link tailwind.css here)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

