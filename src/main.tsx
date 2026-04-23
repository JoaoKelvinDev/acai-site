import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

// fallback GitHub Pages
const params = new URLSearchParams(window.location.search);
const redirect = params.get("redirect");

if (redirect) {
  window.history.replaceState(null, "", redirect);
}

// ✅ BASE CORRETA (automática do Vite)
const basename = import.meta.env.BASE_URL;

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);