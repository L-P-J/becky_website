import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./becky.tsx";

const container =
  typeof document === "undefined" ? null : document.getElementById("root");

if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
