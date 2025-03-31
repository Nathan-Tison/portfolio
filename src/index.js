import React from "react";
import { createRoot } from "react-dom/client"; // Importez createRoot depuis react-dom/client
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Utilisez createRoot pour créer une racine et rendre votre application
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si vous souhaitez commencer à mesurer les performances dans votre application,
// passez une fonction pour enregistrer les résultats (par exemple : reportWebVitals(console.log))
// ou envoyez-les à un point de terminaison d'analyse. En savoir plus : https://bit.ly/CRA-vitals
reportWebVitals();
