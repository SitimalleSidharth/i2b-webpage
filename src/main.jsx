import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import './index.css';

// Reduce motion automatically on mobile for smoothness
if (window.innerWidth < 768) {
  document.documentElement.classList.add("reduce-motion");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div id="app-root" className="relative overflow-x-clip">
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>
);
